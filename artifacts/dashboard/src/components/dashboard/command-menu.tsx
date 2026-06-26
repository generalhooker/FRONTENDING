'use client'

import * as React from 'react'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import { Button } from '@/components/ui/button'
import {
  Search,
  LayoutDashboard,
  BarChart3,
  Users,
  FileText,
  Settings,
  HelpCircle,
  Moon,
  Bell,
  LogOut,
} from 'lucide-react'

const CommandMenu = () => {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="gap-2 text-sm text-muted-foreground"
        onClick={() => setOpen(true)}
      >
        <Search className="h-3.5 w-3.5" />
        <span>Buscar...</span>
        <kbd className="pointer-events-none ml-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Digite um comando ou busque..." />
        <CommandList>
          <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>

          <CommandGroup heading="Navegação">
            <CommandItem onSelect={() => setOpen(false)}>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
              <CommandShortcut>⌘D</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <BarChart3 className="mr-2 h-4 w-4" />
              <span>Analytics</span>
              <CommandShortcut>⌘A</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <Users className="mr-2 h-4 w-4" />
              <span>Time</span>
              <CommandShortcut>⌘T</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <FileText className="mr-2 h-4 w-4" />
              <span>Projetos</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Configurações">
            <CommandItem onSelect={() => setOpen(false)}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Configurações</span>
              <CommandShortcut>⌘,</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <Bell className="mr-2 h-4 w-4" />
              <span>Notificações</span>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <Moon className="mr-2 h-4 w-4" />
              <span>Alternar tema</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Conta">
            <CommandItem onSelect={() => setOpen(false)}>
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Ajuda</span>
              <CommandShortcut>⌘?</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)} className="text-destructive data-[selected=true]:text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sair</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

export { CommandMenu }
