import { IconCalendar, IconLocation } from "@tabler/icons-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function PhotoOnHover({
  time,
  location,
  description,
}: {
  time: string
  location: string
  description?: string
}) {
  const [onHover, setOnHover] = useState(false)
  return (
    <motion.div
      onHoverStart={() => setOnHover(true)}
      onHoverEnd={() => setOnHover(false)}
      onTouchStart={() => setOnHover(!onHover)}
      className="absolute left-0 top-0 z-10 h-full w-full bg-black/50"
      animate={{
        opacity: onHover ? 1 : 0,
      }}
      style={{
        opacity: 0,
      }}
    >
      <div className="flex h-full w-full flex-col text-sm text-white">
        <div className="flex-1">{description}</div>
        <div className="flex flex-row justify-between p-4">
          <span className="flex items-center gap-2">
            <IconCalendar size={13} />
            {time}
          </span>
          <span className="flex items-center gap-2">
            <IconLocation size={13} />
            {location}
          </span>
        </div>
      </div>
    </motion.div>
  )
}
