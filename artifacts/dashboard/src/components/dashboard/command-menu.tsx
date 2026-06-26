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
  SearchIcon,
  GitBranchIcon,
  GitCommitHorizontalIcon,
  GitPullRequestIcon,
  PlayIcon,
  SquareTerminalIcon,
  BugIcon,
  RocketIcon,
  CloudUploadIcon,
  EyeIcon,
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
        size="icon"
        onClick={() => setOpen(true)}
        aria-label="Open search"
      >
        <SearchIcon className="h-4 w-4" />
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Code">
            <CommandItem>
              <GitBranchIcon />
              <span>New Branch</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <GitCommitHorizontalIcon />
              <span>Commit Changes</span>
              <CommandShortcut>⌘⇧C</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <GitPullRequestIcon />
              <span>Open Pull Request</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Run">
            <CommandItem>
              <PlayIcon />
              <span>Run Project</span>
              <CommandShortcut>⌘R</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <SquareTerminalIcon />
              <span>Open Terminal</span>
              <CommandShortcut>⌘`</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <BugIcon />
              <span>Start Debugger</span>
              <CommandShortcut>⌘⇧D</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Deploy">
            <CommandItem>
              <RocketIcon />
              <span>Deploy to Production</span>
              <CommandShortcut>⌘⇧P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CloudUploadIcon />
              <span>Push to Staging</span>
              <CommandShortcut>⌘⇧S</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <EyeIcon />
              <span>Preview Build</span>
              <CommandShortcut>⌘⇧V</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

export { CommandMenu }
