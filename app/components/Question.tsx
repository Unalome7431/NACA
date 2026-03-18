'use client'

import { ReactNode, useState, createContext, useContext } from "react"
import { ChevronRight } from "lucide-react"

interface GroupContextProps {
  openId: string | null,
  toggleId: (id: string) => void
}

const GroupContext = createContext<GroupContextProps | undefined>(undefined)

interface QuestionContextProps {
  isOpen: boolean,
  toggle: () => void
}

interface QuestionProps {
  children: ReactNode
  id: string
  defaultOpen?: boolean
}

const QuestionContext = createContext<QuestionContextProps | undefined>(undefined)

function useQuestion() {
  const context = useContext(QuestionContext)
  if (!context) {
    throw new Error('Question sub-components must be wrapped in <Question />')
  }
  return context
}

export const QuestionTitle = ({children}: {children: ReactNode}) => {
  const { toggle, isOpen } = useQuestion()
  return (
    <div className={`flex justify-between items-center gap-10 my-5`} onClick={toggle}>
      <p className="font-lato font-semibold text-2xl text-lime-900">{children}</p>
      <ChevronRight className={`${isOpen && 'rotate-90'} transition-all duration-500 shrink-0 size-7 mr-3`} />
    </div>
  )
}

export const QuestionAnswer = ({children}: {children: ReactNode}) => {
  const { toggle, isOpen } = useQuestion()
  return (
    <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`} onClick={toggle}>
      <div className="overflow-hidden">
        <p className={`font-lato text-lg pb-5 ${isOpen ? 'opacity-100 delay-200' : 'opacity-0 delay-0'} transition-opacity duration-500`}>
          {children}
        </p>
      </div>
    </div>
  )
}

export const QuestionGroup = ({ children }: { children: ReactNode }) => {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggleId = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <GroupContext.Provider value={{ openId, toggleId }}>
      <div className="max-w-5xl flex flex-col">
        {children}
      </div>
    </GroupContext.Provider> 
  )
}

export const Question = ({ children, id, defaultOpen = false }: QuestionProps) => {
  const group = useContext(GroupContext)
  const [internalOpen, setInternalOpen] = useState(defaultOpen)

  const isOpen = group ? group.openId === id : internalOpen

  const toggle = () => {
    if (group) {
      group.toggleId(id)
    } else {
      setInternalOpen(!internalOpen)
    }
  }

  return (
    <QuestionContext.Provider value={{ isOpen, toggle }}>
      <div className={`flex flex-col transition-all duration-500 hover:bg-[#768a20]/20 cursor-pointer ${isOpen && 'bg-[#768a20]/30'}`}>
        <div className="w-full h-[3px] rounded bg-lime-900"></div>
        <div className={``}>
          {children}
        </div>
      </div>
    </QuestionContext.Provider>
  )
}