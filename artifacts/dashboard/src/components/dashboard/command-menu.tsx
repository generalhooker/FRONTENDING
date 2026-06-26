import { useEffect, useState } from "react";
import {
  BarChart3,
  BookOpen,
  Database,
  FileText,
  LayoutDashboard,
  RefreshCcw,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const tabs = [
  { icon: LayoutDashboard, label: "Dashboard", shortcut: "D" },
  { icon: RefreshCcw, label: "Lifecycle", shortcut: "L" },
  { icon: BarChart3, label: "Analytics", shortcut: "A" },
  { icon: FileText, label: "Projects", shortcut: "P" },
  { icon: Users, label: "Team", shortcut: "T" },
  { icon: Database, label: "Data Library" },
  { icon: BookOpen, label: "Reports" },
  { icon: Sparkles, label: "Word Assistant" },
];

export function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="gap-2 text-muted-foreground w-48 justify-between"
        onClick={() => setOpen(true)}
      >
        <span className="flex items-center gap-2">
          <Search className="h-3.5 w-3.5" />
          <span className="text-sm">Search...</span>
        </span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Pesquisar tabs e comandos..." />
        <CommandList>
          <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>

          <CommandGroup heading="Navegação">
            {tabs.map((tab) => (
              <CommandItem
                key={tab.label}
                onSelect={() => setOpen(false)}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
                {tab.shortcut && (
                  <CommandShortcut>⌘{tab.shortcut}</CommandShortcut>
                )}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Comandos">
            <CommandItem disabled>
              <Sparkles className="h-4 w-4" />
              <span className="text-muted-foreground">Em breve...</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
