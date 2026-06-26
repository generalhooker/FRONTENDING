import { AppLayout } from "@/components/dashboard/app-layout";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Mail, MapPin, Link as LinkIcon, Calendar, Settings } from "lucide-react";
import { Link } from "wouter";
import { useProfile } from "@/lib/profile";

export default function ProfilePage() {
  const { name, bio, bannerImage, bannerColor, avatarImage } = useProfile();

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto pb-16">
        {/* Banner */}
        <div
          className="h-48 w-full"
          style={
            bannerImage
              ? { backgroundImage: `url(${bannerImage})`, backgroundSize: "cover", backgroundPosition: "center" }
              : { backgroundColor: bannerColor }
          }
        />

        {/* Avatar + actions row */}
        <div className="px-6 pb-4 border-b">
          <div className="flex items-end justify-between -mt-12 mb-4">
            <Avatar className="h-24 w-24 ring-4 ring-background rounded-full">
              {avatarImage ? <AvatarImage src={avatarImage} /> : null}
              <AvatarFallback className="rounded-full bg-white">
                <User className="h-12 w-12 text-black" />
              </AvatarFallback>
              <AvatarBadge className="bg-green-500 dark:bg-green-400 size-5 ring-background" />
            </Avatar>
            <div className="flex gap-2 mb-1">
              <Button variant="outline" size="sm" asChild>
                <Link to="/settings">
                  <Settings className="h-3.5 w-3.5 mr-1.5" />
                  Editar perfil
                </Link>
              </Button>
            </div>
          </div>

          {/* Name & meta */}
          <div className="space-y-1">
            <h1 className="text-xl font-bold leading-none">{name || "Admin"}</h1>
            <p className="text-sm text-muted-foreground">@{(name || "admin").toLowerCase().replace(/\s+/g, "")}</p>
          </div>

          {/* Status badges */}
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant="secondary" className="gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 inline-block" />
              Online
            </Badge>
            <Badge variant="outline">Enterprise</Badge>
            <Badge variant="outline">Admin</Badge>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 pt-6 grid gap-6 sm:grid-cols-3">
          {/* Left col — info */}
          <div className="sm:col-span-1 space-y-4">
            <div>
              <h2 className="text-sm font-semibold mb-2">Sobre</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {bio || "Administrador da plataforma. Gerencia configurações, equipe e relatórios."}
              </p>
            </div>

            <Separator />

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0" />
                admin@acme.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                São Paulo, BR
              </li>
              <li className="flex items-center gap-2">
                <LinkIcon className="h-3.5 w-3.5 shrink-0" />
                <a href="https://acme.com" className="text-primary hover:underline">acme.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5 shrink-0" />
                Membro desde Jan 2024
              </li>
            </ul>
          </div>

          {/* Right col — activity */}
          <div className="sm:col-span-2 space-y-4">
            <h2 className="text-sm font-semibold">Atividade recente</h2>
            {[
              { action: "Atualizou configurações de conta", time: "há 2 horas" },
              { action: "Adicionou novo membro à equipe", time: "há 5 horas" },
              { action: "Gerou relatório mensal", time: "ontem" },
              { action: "Alterou permissões de acesso", time: "há 3 dias" },
              { action: "Criou novo projeto", time: "há 1 semana" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-0.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <div className="flex-1 flex items-center justify-between gap-4">
                  <p className="text-sm">{item.action}</p>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
