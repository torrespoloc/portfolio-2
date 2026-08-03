"use client"

import { Children, useCallback, useRef, useLayoutEffect, useState, type ReactNode } from "react"

export function HowIWorkCards({
 children,
 currentIdx,
 onIdxChange,
}: {
 children: ReactNode
 currentIdx: number
 onIdxChange: (idx: number) => void
}) {
 const childrenArray = Children.toArray(children)
 const total = childrenArray.length
 const containerRef = useRef<HTMLDivElement>(null)
 const [cardW, setCardW] = useState(0)
 const gap = 2
 const dragOffRef = useRef(0)
 const touchStartRef = useRef(0)
 const [isDragging, setIsDragging] = useState(false)
 const [dragOff, setDragOff] = useState(0)

 // Measure card width on mount and resize
 useLayoutEffect(() => {
 const measure = () => {
 const containerWidth = containerRef.current?.clientWidth ?? window.innerWidth
 setCardW(Math.min(containerWidth - 40, 340))
 }
 measure()
 window.addEventListener("resize", measure)
 return () => window.removeEventListener("resize", measure)
 }, [])

 // Start with "My Jam" card (index 1) once measured
 useLayoutEffect(() => {
 if (cardW > 0) onIdxChange(1)
 }, [cardW, onIdxChange])

 const goNext = useCallback(() => {
 onIdxChange((currentIdx + 1) % total)
 }, [currentIdx, total, onIdxChange])

 const goPrev = useCallback(() => {
 onIdxChange((currentIdx - 1 + total) % total)
 }, [currentIdx, total, onIdxChange])

 // Touch/swipe
 const onTouchStart = (e: React.TouchEvent) => {
 touchStartRef.current = e.touches[0].clientX
 setIsDragging(true)
 setDragOff(0)
 dragOffRef.current = 0
 }
 const onTouchMove = (e: React.TouchEvent) => {
 dragOffRef.current = e.touches[0].clientX - touchStartRef.current
 setDragOff(dragOffRef.current)
 }
 const onTouchEnd = (e: React.TouchEvent) => {
 setIsDragging(false)
 setDragOff(0)
 if (dragOffRef.current < -50) {
 goNext()
 e.preventDefault()
 }
 else if (dragOffRef.current > 50) {
 goPrev()
 e.preventDefault()
 }
 }

 // Calculate translateX to center current card
 const baseTranslate =
 cardW > 0 && containerRef.current
 ? containerRef.current.clientWidth / 2 - currentIdx * (cardW + gap) - cardW / 2
 : 0

 const translateX = baseTranslate + (isDragging ? dragOff : 0)

 return (
 <>
 {/* Mobile: horizontal carousel with peek */}
 <div className="md:hidden mt-0 relative left-1/2 -translate-x-1/2 w-screen select-none overflow-x-clip" ref={containerRef}>
 <div
 onTouchStart={onTouchStart}
 onTouchMove={onTouchMove}
 onTouchEnd={onTouchEnd}
 className="flex items-stretch"
 >
 <div
 className="flex gap-0 items-stretch"
 style={{
 transform: `translateX(${translateX}px)`,
 transition: isDragging
 ? "none"
 : "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
 }}
 >
 {childrenArray.map((child, i) => (
 <div key={i} className="shrink-0 flex flex-col" style={{ width: `${cardW}px` }}>
 <div
 className={`h-full transition-all duration-500 ease-out ${
 i === currentIdx
 ? "scale-100 opacity-100"
 : "scale-[0.92] opacity-50"
 }`}
 >
 {child}
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>

 {/* Desktop/Tablet: centerpiece grid: center column wider, zero gap with border dividers */}
 <div className="hidden md:grid grid-cols-[1fr_1.14fr_1fr] gap-0 mt-0 items-stretch w-full">
 {children}
 </div>
 </>
 )
}
