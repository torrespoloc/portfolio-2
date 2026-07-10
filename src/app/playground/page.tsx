import { getPlaygroundItems } from "@/lib/playground-data"
import { PlaygroundClient } from "./playground-client"

export default function PlaygroundPage() {
  const items = getPlaygroundItems()

  return <PlaygroundClient items={items} />
}
