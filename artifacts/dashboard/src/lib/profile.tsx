import { createContext, useContext, useState, type ReactNode } from "react";

export const DEFAULT_BANNER = "/banner.png";
export const BANNER_COLORS = [
  "#5865F2", "#57F287", "#FEE75C", "#EB459E",
  "#ED4245", "#1ABC9C", "#E67E22", "#9B59B6",
];

interface ProfileData {
  name: string;
  bio: string;
  bannerImage: string | null;
  bannerColor: string;
  avatarImage: string | null;
}

interface ProfileContextValue extends ProfileData {
  setName: (v: string) => void;
  setBio: (v: string) => void;
  setBannerImage: (v: string | null) => void;
  setBannerColor: (v: string) => void;
  setAvatarImage: (v: string | null) => void;
}

const ProfileContext = createContext<ProfileContextValue | null>(null);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [name, setName] = useState("Admin");
  const [bio, setBio] = useState("");
  const [bannerImage, setBannerImage] = useState<string | null>(DEFAULT_BANNER);
  const [bannerColor, setBannerColor] = useState(BANNER_COLORS[0]);
  const [avatarImage, setAvatarImage] = useState<string | null>(null);

  return (
    <ProfileContext.Provider value={{
      name, setName,
      bio, setBio,
      bannerImage, setBannerImage,
      bannerColor, setBannerColor,
      avatarImage, setAvatarImage,
    }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error("useProfile must be used inside ProfileProvider");
  return ctx;
}
