import { Home, Users, Factory, List, BookOpen, Code } from 'lucide-react'

export const navItems = [
  { id: "overview", name: "Overview", icon: Home },
  { id: "recruits", name: "Recruits", icon: Users },
  { id: "factory", name: "Meme Factory", icon: Factory, disabled: true },
  { id: "logs", name: "Swarm Logs", icon: List },
  { id: "docs", name: "Docs", icon: BookOpen },
  { id: "code", name: "Code", icon: Code },
]

