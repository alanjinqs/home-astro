"use client"
import { useState } from "react"
import { Sidebar, SidebarBody, SidebarLink, useSidebar } from "./ui/sidebar"
import {
  IconBrandTabler,
  IconCamera,
  IconFileCode,
  IconHome,
} from "@tabler/icons-react"
import { motion } from "framer-motion"

export function SiteSidebar() {
  const links = [
    {
      label: "Home",
      href: "/",
      icon: (
        <IconHome className="flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Dev Blog",
      href: "/blog",
      icon: (
        <IconFileCode className="flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Photography",
      href: "/photo",
      icon: (
        <IconCamera className="flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Code Projects",
      href: "/code",
      icon: (
        <IconBrandTabler className="flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ]
  const [open, setOpen] = useState(false)

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <div className="flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>
        <SidebarBottom />
      </SidebarBody>
    </Sidebar>
  )
}

export const SidebarBottom = () => {
  const { open, animate } = useSidebar()

  return (
    <div>
      <motion.span className="flex w-full flex-col items-center justify-center whitespace-pre text-center text-neutral-700 transition duration-150 group-hover/sidebar:translate-x-1 dark:text-neutral-200">
        <motion.span
          animate={{
            opacity: animate ? (open ? 1 : 0) : 1,
            rotateZ: animate ? (open ? 0 : 90) : 0,
            y: animate ? (open ? 0 : `-3.5rem`) : 0,
          }}
        >
          <a
            className="font-mono text-sm opacity-70"
            href="https://instagram.com/qsalanjin?igshid=YmMyMTA2M2Y="
          >
            IG: qsalanjin
          </a>
        </motion.span>

        <motion.span
          animate={{
            opacity: animate ? (open ? 1 : 0) : 1,
            rotateZ: animate ? (open ? 0 : 90) : 0,
            y: animate ? (open ? 0 : `-3.5rem`) : 0,
          }}
        >
          <a
            className="pt-2 font-mono text-sm opacity-70"
            href="mailto:iam@alanj.in"
          >
            Email: iam@alanj.in
          </a>
        </motion.span>

        <motion.span
          className="mt-2 font-medium"
          animate={{
            rotateZ: animate ? (open ? 0 : 90) : 0,
            y: animate ? (open ? 0 : `-3.5rem`) : 0,
          }}
          style={{ rotate: 0 }}
        >
          Qiushi <span className="opacity-80">Alan</span> Jin
        </motion.span>
      </motion.span>
    </div>
  )
}
