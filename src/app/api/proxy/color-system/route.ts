import { NextResponse } from "next/server"

const TARGET = "https://app.xy.ai/color/system"

export async function GET() {
 try {
 const res = await fetch(TARGET, { next: { revalidate: 3600 } })
 if (!res.ok) return new NextResponse("Proxy error", { status: res.status })

 let html = await res.text()

 // Inject <base> so relative asset paths resolve to app.xy.ai
 html = html.replace(
 "<head>",
 '<head><base href="https://app.xy.ai/">',
 )

 return new NextResponse(html, {
 headers: {
 "Content-Type": "text/html; charset=utf-8",
 // Remove X-Frame-Options so it can render in our iframe
 "X-Frame-Options": "",
 },
 })
 } catch {
 return new NextResponse("Proxy unavailable", { status: 502 })
 }
}
