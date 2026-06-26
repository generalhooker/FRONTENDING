import { useRef, useState } from "react";
import { AppLayout } from "@/components/dashboard/app-layout";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ImagePlus, Pencil, X } from "lucide-react";
import { cn } from "@/lib/utils";

const BANNER_COLORS = [
  "#5865F2", "#57F287", "#FEE75C", "#EB459E",
  "#ED4245", "#1ABC9C", "#E67E22", "#9B59B6",
];

export default function SettingsPage() {
  const [name, setName] = useState("Admin");
  const [bio, setBio] = useState("");
  const [bannerImage, setBannerImage] = useState<string | null>(null);
  const [bannerColor, setBannerColor] = useState(BANNER_COLORS[0]);
  const [avatarImage, setAvatarImage] = useState<string | null>(null);

  const bannerInputRef = useRef<HTMLInputElement>(null);
  const avatarInputRef = useRef<HTMLInputElement>(null);

  function handleBannerUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setBannerImage(URL.createObjectURL(file));
    e.target.value = "";
  }

  function handleAvatarUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatarImage(URL.createObjectURL(file));
    e.target.value = "";
  }

  return (
    <AppLayout>
      <div className="space-y-6 p-6 pb-16 max-w-5xl mx-auto">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator />
        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="display">Display</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Profile</h3>
              <p className="text-sm text-muted-foreground">
                This is how others will see you on the site.
              </p>
            </div>
            <Separator />

            <div className="flex flex-col lg:flex-row gap-6 items-start">

              {/* ── Left: read-only profile card ── */}
              <div className="shrink-0 space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Preview</p>
                <div className="rounded-xl overflow-visible border bg-card shadow-md w-64">
                  {/* Banner */}
                  <div
                    className="h-24 rounded-t-xl"
                    style={
                      bannerImage
                        ? { backgroundImage: `url(${bannerImage})`, backgroundSize: "cover", backgroundPosition: "center" }
                        : { backgroundColor: bannerColor }
                    }
                  />
                  {/* Avatar overlapping banner */}
                  <div className="relative px-4 pb-4">
                    <div className="absolute -top-10">
                      <Avatar className="h-20 w-20 ring-4 ring-card rounded-full">
                        {avatarImage ? <AvatarImage src={avatarImage} /> : null}
                        <AvatarFallback className="text-xl rounded-full">
                          {name ? name.slice(0, 2).toUpperCase() : "AD"}
                        </AvatarFallback>
                        <AvatarBadge className="bg-green-500 dark:bg-green-400 size-4 ring-card" />
                      </Avatar>
                    </div>
                    <div className="pt-12 space-y-1">
                      <p className="font-bold text-base leading-none">{name || "Admin"}</p>
                      <p className="text-xs text-muted-foreground">admin@acme.com</p>
                      {bio && (
                        <>
                          <Separator className="my-3" />
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">About me</p>
                            <p className="text-xs text-foreground leading-relaxed line-clamp-4">{bio}</p>
                          </div>
                        </>
                      )}
                      <Separator className="my-3" />
                      <div className="flex items-center gap-2">
                        <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
                        <span className="text-xs text-muted-foreground">Online</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Right: edit card ── */}
              <div className="flex-1 rounded-xl border bg-card shadow-md p-5 space-y-5">
                <p className="text-sm font-semibold">Edit Profile</p>
                <Separator />

                {/* Banner */}
                <div className="space-y-2">
                  <Label>Banner</Label>
                  <div
                    className="relative h-28 rounded-lg overflow-hidden border-2 border-dashed border-muted-foreground/30 cursor-pointer group"
                    style={
                      bannerImage
                        ? { backgroundImage: `url(${bannerImage})`, backgroundSize: "cover", backgroundPosition: "center", border: "none" }
                        : { backgroundColor: bannerColor }
                    }
                    onClick={() => bannerInputRef.current?.click()}
                  >
                    <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/0 group-hover:bg-black/30 transition-colors opacity-0 group-hover:opacity-100">
                      <span className="bg-black/60 text-white text-xs rounded-md px-2 py-1 flex items-center gap-1">
                        <ImagePlus className="h-3 w-3" /> Upload image
                      </span>
                      {bannerImage && (
                        <button
                          type="button"
                          className="bg-black/60 text-white rounded-full p-1 hover:bg-destructive transition"
                          onClick={(e) => { e.stopPropagation(); setBannerImage(null); }}
                        >
                          <X className="h-3 w-3" />
                        </button>
                      )}
                    </div>
                    <input ref={bannerInputRef} type="file" accept="image/*" className="hidden" onChange={handleBannerUpload} />
                  </div>

                  {/* Color swatches */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-xs text-muted-foreground mr-1">Color:</span>
                    {BANNER_COLORS.map((color) => (
                      <button
                        key={color}
                        type="button"
                        className={cn(
                          "h-6 w-6 rounded-full border-2 transition-transform hover:scale-110",
                          bannerColor === color && !bannerImage ? "border-foreground scale-110" : "border-transparent"
                        )}
                        style={{ backgroundColor: color }}
                        onClick={() => { setBannerColor(color); setBannerImage(null); }}
                      />
                    ))}
                    <label className="h-6 w-6 rounded-full border-2 border-dashed border-muted-foreground/50 flex items-center justify-center cursor-pointer hover:border-foreground transition-colors" title="Custom color">
                      <Pencil className="h-2.5 w-2.5 text-muted-foreground" />
                      <input
                        type="color"
                        className="sr-only"
                        value={bannerColor}
                        onChange={(e) => { setBannerColor(e.target.value); setBannerImage(null); }}
                      />
                    </label>
                  </div>
                </div>

                {/* Avatar */}
                <div className="space-y-2">
                  <Label>Profile picture</Label>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-14 w-14">
                      {avatarImage ? <AvatarImage src={avatarImage} /> : null}
                      <AvatarFallback>{name ? name.slice(0, 2).toUpperCase() : "AD"}</AvatarFallback>
                      <AvatarBadge className="bg-green-500 dark:bg-green-400 size-3" />
                    </Avatar>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" type="button" onClick={() => avatarInputRef.current?.click()}>
                        Change photo
                      </Button>
                      {avatarImage && (
                        <Button variant="ghost" size="sm" type="button" onClick={() => setAvatarImage(null)}>
                          Remove
                        </Button>
                      )}
                    </div>
                    <input ref={avatarInputRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarUpload} />
                  </div>
                </div>

                <Separator />

                {/* Fields */}
                <div className="grid gap-4">
                  <div className="grid gap-1.5">
                    <Label htmlFor="name">Display name</Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="admin@acme.com" />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      placeholder="Tell us a little bit about yourself"
                      className="resize-none"
                      rows={3}
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label>Links</Label>
                    <Input placeholder="https://example.com" />
                    <Input placeholder="https://twitter.com/username" />
                  </div>
                </div>

                <Button className="w-full">Save profile</Button>
              </div>
            </div>
          </TabsContent>

          {/* Account Tab */}
          <TabsContent value="account" className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Account</h3>
              <p className="text-sm text-muted-foreground">Update your account settings.</p>
            </div>
            <Separator />
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="admin" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="pt">Portuguese</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-destructive">Danger Zone</h4>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Delete account</p>
                  <p className="text-xs text-muted-foreground">Permanently delete your account.</p>
                </div>
                <Button variant="destructive" size="sm">Delete account</Button>
              </div>
            </div>
            <Button>Update account</Button>
          </TabsContent>

          {/* Appearance Tab */}
          <TabsContent value="appearance" className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Appearance</h3>
              <p className="text-sm text-muted-foreground">Customize the appearance of the app.</p>
            </div>
            <Separator />
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="font">Font</Label>
                <Select defaultValue="inter">
                  <SelectTrigger id="font"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inter">Inter</SelectItem>
                    <SelectItem value="manrope">Manrope</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Theme</Label>
                <div className="grid grid-cols-3 gap-4">
                  {["Light", "Dark", "System"].map((theme) => (
                    <div key={theme} className="space-y-2">
                      <div className={`rounded-md border-2 p-2 cursor-pointer hover:border-primary transition-colors ${theme === "Light" ? "border-primary" : "border-muted"}`}>
                        <div className={`rounded h-16 ${theme === "Dark" ? "bg-zinc-900" : theme === "System" ? "bg-gradient-to-r from-white to-zinc-900" : "bg-white border"}`} />
                      </div>
                      <p className="text-xs text-center font-medium">{theme}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Button>Update preferences</Button>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Notifications</h3>
              <p className="text-sm text-muted-foreground">Configure how you receive notifications.</p>
            </div>
            <Separator />
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Email Notifications</h4>
              {[
                { label: "Marketing emails", description: "Receive emails about new products, features, and more.", defaultOn: true },
                { label: "Security emails", description: "Receive emails about your account activity and security.", defaultOn: true },
                { label: "Social notifications", description: "Receive emails for friend requests, follows, and more.", defaultOn: true },
                { label: "Newsletter", description: "Receive our weekly newsletter.", defaultOn: false },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm font-medium">{item.label}</Label>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                  <Switch defaultChecked={item.defaultOn} />
                </div>
              ))}
            </div>
            <Separator />
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Push Notifications</h4>
              {[
                { label: "Everything", description: "Get notified for all activity." },
                { label: "Mentions only", description: "Only get notified when mentioned." },
                { label: "Nothing", description: "Don't receive any push notifications." },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-3">
                  <input type="radio" name="push" id={`push-${i}`} defaultChecked={i === 1} className="h-4 w-4 accent-primary" />
                  <Label htmlFor={`push-${i}`} className="cursor-pointer">
                    <span className="text-sm font-medium block">{item.label}</span>
                    <span className="text-xs text-muted-foreground">{item.description}</span>
                  </Label>
                </div>
              ))}
            </div>
            <Button>Update notifications</Button>
          </TabsContent>

          {/* Display Tab */}
          <TabsContent value="display" className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Display</h3>
              <p className="text-sm text-muted-foreground">Control what's displayed in the app.</p>
            </div>
            <Separator />
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Sidebar</h4>
              {[
                { label: "Always show sidebar", description: "Keep the sidebar visible at all times." },
                { label: "Show sidebar icons", description: "Display icons next to sidebar items." },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm font-medium">{item.label}</Label>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              ))}
            </div>
            <Separator />
            <div className="grid gap-2">
              <Label htmlFor="density">Interface density</Label>
              <Select defaultValue="comfortable">
                <SelectTrigger id="density"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="comfortable">Comfortable</SelectItem>
                  <SelectItem value="compact">Compact</SelectItem>
                  <SelectItem value="spacious">Spacious</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button>Update display</Button>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
