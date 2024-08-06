import {
  IconBrandGithub,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandVue,
  IconBriefcase,
  IconBuildingEstate,
  IconMoneybag,
  IconUser,
} from "@tabler/icons-react"

const tagToIcon = (tag: string) => {
  switch (tag) {
    case "React Native":
      return <IconBrandReactNative size={16} />
    case "React":
      return <IconBrandReact size={16} />
    case "Vue":
      return <IconBrandVue size={16} />
    case "Next.js":
      return <IconBrandNextjs size={16} />
    case "Personal Side Project":
      return <IconUser size={16} />
    case "Cofunded":
      return <IconBuildingEstate size={16} />
    case "Employment":
      return <IconBriefcase size={16} />
    case "Open Source":
      return <IconBrandGithub size={16} />
    default:
      return null
  }
}

const tagToColor = (tag: string) => {
  switch (tag) {
    case "React Native":
      return { background: "#387CA0", text: "#fff" }
    case "Next.js":
      return { background: "#000000", text: "#fff" }
    case "React":
      return { background: "#387CA0", text: "#fff" }
    case "Vue":
      return { background: "#41B883", text: "#fff" }
    case "Cofunded":
      return { background: "#10B981", text: "#fff" }
    case "Personal Side Project":
      return { background: "#F59E0B", text: "#fff" }
    case "Employment":
      return { background: "#2563EB", text: "#fff" }
    default:
      return {
        background: "rgb(229,231,235)",
        text: "#333",
      }
  }
}

export default function CodeTag({ tag }: { tag: string }) {
  return (
    <span
      style={{
        backgroundColor: tagToColor(tag).background,
        color: tagToColor(tag).text,
      }}
      className="bg flex items-center gap-0.5 rounded-full px-2 py-1 text-xs text-gray-800"
    >
      {tagToIcon(tag)}
      {tag}
    </span>
  )
}
