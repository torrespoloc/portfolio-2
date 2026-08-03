import fs from "fs"
import path from "path"

const CONTENT_DIR = path.join(process.cwd(), "src/content/playground")

export interface PlaygroundDetail {
 description: string
 highlights: string[]
}

export interface PlaygroundItem {
 tag: string
 title: string
 tags: string[]
 videoSrc?: string
 posterSrc?: string
 href?: string
 order: number
 detail: PlaygroundDetail
}

function parseFrontmatter(raw: string): Record<string, unknown> {
 const result: Record<string, unknown> = {}

 for (const line of raw.split("\n")) {
 const t = line.trim()
 if (!t) continue

 const ci = t.indexOf(":")
 if (ci === -1) continue

 const key = t.slice(0, ci).trim()
 let value: unknown = t.slice(ci + 1).trim()

 if (typeof value === "string" && value.startsWith("[") && value.endsWith("]")) {
 value = value
 .slice(1, -1)
 .split(",")
 .map((s) => s.trim())
 .filter(Boolean)
 }

 result[key] = value
 }

 return result
}

export function getPlaygroundItems(): PlaygroundItem[] {
 const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"))
 const items: PlaygroundItem[] = []

 for (const file of files) {
 const content = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8")
 const parts = content.split("---")
 if (parts.length < 3) continue

 const meta = parseFrontmatter(parts[1])
 const body = parts.slice(2).join("---").trim()
 const descSection = body.split("## Highlights")[0]?.trim() ?? ""
 const hlMatch = body.match(/## Highlights\n([\s\S]*)/)

 items.push({
 tag: (meta.tag as string) || "",
 title: (meta.title as string) || file.replace(".md", ""),
 tags: (meta.tags as string[]) || [],
 videoSrc: meta.videoSrc as string | undefined,
 posterSrc: meta.posterSrc as string | undefined,
 href: meta.href as string | undefined,
 order: (meta.order as number) ?? 99,
 detail: {
 description: descSection,
 highlights: hlMatch
 ? hlMatch[1]
 .split("\n")
 .map((l) => l.trim())
 .filter((l) => l.startsWith("- "))
 .map((l) => l.slice(2))
 : [],
 },
 })
 }

 items.sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
 return items
}
