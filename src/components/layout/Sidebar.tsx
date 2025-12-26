import { SunIcon } from "lucide-react";
import clsx from "clsx";

import { useTheme } from "@/provider/theme/useTheme";
import { Logo } from "@/components/ui/icons";
import { MoonIcon } from "@/components/ui/icons";

import avatarImg from "@/assets/images/image-avatar.jpg";

const Sidebar = () => {
  const { theme, themeToggle } = useTheme();

  return (
    <aside className="relative z-40 flex h-[72px] w-full items-center justify-between bg-draft p-6 transition-colors duration-300 sm:h-20 lg:h-full lg:w-[103px] lg:flex-col lg:rounded-r-3xl lg:p-8">
      <Logo />
      <div className="flex items-center gap-12 lg:flex-col">
        <button
          aria-label="Toggle dark mode"
          aria-pressed={theme === "dark"}
          className="relative inset-0 flex items-center justify-center p-2"
          onClick={themeToggle}
        >
          <MoonIcon
            className={clsx(
              "h-6 w-6 fill-current text-[var(--color-gray-500)] transition-opacity duration-300",
              theme === "light" ? "opacity-100" : "opacity-0",
            )}
          />
          <SunIcon
            className={clsx(
              "absolute h-6 w-6 fill-current text-yellow-400 transition-opacity duration-300",
              theme === "dark" ? "opacity-100" : "opacity-0",
            )}
          />
        </button>
        <div className="absolute right-20 h-full w-[2px] bg-[var(--color-border-sidebar)] lg:bottom-24 lg:right-0 lg:h-[1px] lg:w-full" />
        <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-400 lg:h-10 lg:w-10">
          <img src={avatarImg} alt="User avatar" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
