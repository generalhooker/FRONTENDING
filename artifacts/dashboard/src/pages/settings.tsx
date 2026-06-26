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
import { Avatar, AvatarBadge, AvatarFallback } from "@/components/ui/avatar";

export default function SettingsPage() {
  return (
    <AppLayout>
      <div className="space-y-6 p-6 pb-16 max-w-3xl mx-auto">
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
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="text-lg">AD</AvatarFallback>
                <AvatarBadge className="bg-green-500 dark:bg-green-400 size-3" />
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-medium">Profile picture</p>
                <p className="text-xs text-muted-foreground">JPG, GIF or PNG. Max size 1MB.</p>
                <Button variant="outline" size="sm">Change picture</Button>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Admin" placeholder="Your name" />
                <p className="text-xs text-muted-foreground">
                  This is your public display name. It can be your real name or a pseudonym.
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="admin@acme.com" />
                <p className="text-xs text-muted-foreground">
                  You can manage verified email addresses in your email settings.
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  rows={4}
                />
                <p className="text-xs text-muted-foreground">
                  You can <span className="font-medium">@mention</span> other users and organizations.
                </p>
              </div>
              <div className="grid gap-2">
                <Label>URLs</Label>
                <p className="text-xs text-muted-foreground">
                  Add links to your website, blog, or social media profiles.
                </p>
                <Input placeholder="https://example.com" />
                <Input placeholder="https://twitter.com/username" />
              </div>
            </div>
            <Button>Update profile</Button>
          </TabsContent>

          {/* Account Tab */}
          <TabsContent value="account" className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Account</h3>
              <p className="text-sm text-muted-foreground">
                Update your account settings. Set your preferred language and timezone.
              </p>
            </div>
            <Separator />
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="admin" placeholder="Username" />
                <p className="text-xs text-muted-foreground">
                  This is your public display name.
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="pt">Portuguese</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  This is the language that will be used in the dashboard.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-destructive">Danger Zone</h4>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Delete account</p>
                  <p className="text-xs text-muted-foreground">
                    Permanently delete your account and all of its contents.
                  </p>
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
              <p className="text-sm text-muted-foreground">
                Customize the appearance of the app. Automatically switch between day and night themes.
              </p>
            </div>
            <Separator />
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="font">Font</Label>
                <Select defaultValue="inter">
                  <SelectTrigger id="font">
                    <SelectValue placeholder="Select font" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inter">Inter</SelectItem>
                    <SelectItem value="manrope">Manrope</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  Set the font you want to use in the dashboard.
                </p>
              </div>
              <div className="grid gap-2">
                <Label>Theme</Label>
                <p className="text-xs text-muted-foreground">
                  Select the theme for the dashboard.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {["Light", "Dark", "System"].map((theme) => (
                    <div key={theme} className="space-y-2">
                      <div
                        className={`rounded-md border-2 p-2 cursor-pointer hover:border-primary transition-colors ${
                          theme === "Light" ? "border-primary" : "border-muted"
                        }`}
                      >
                        <div
                          className={`rounded h-16 ${
                            theme === "Dark"
                              ? "bg-zinc-900"
                              : theme === "System"
                              ? "bg-gradient-to-r from-white to-zinc-900"
                              : "bg-white border"
                          }`}
                        />
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
              <p className="text-sm text-muted-foreground">
                Configure how you receive notifications.
              </p>
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
                  <input
                    type="radio"
                    name="push"
                    id={`push-${i}`}
                    defaultChecked={i === 1}
                    className="h-4 w-4 accent-primary"
                  />
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
              <p className="text-sm text-muted-foreground">
                Turn items on or off to control what's displayed in the app.
              </p>
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
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Density</h4>
              <div className="grid gap-2">
                <Label htmlFor="density">Interface density</Label>
                <Select defaultValue="comfortable">
                  <SelectTrigger id="density">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="comfortable">Comfortable</SelectItem>
                    <SelectItem value="compact">Compact</SelectItem>
                    <SelectItem value="spacious">Spacious</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button>Update display</Button>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
