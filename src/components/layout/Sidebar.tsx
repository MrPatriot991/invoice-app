import avatarImg from "../../assets/images/image-avatar.jpg";

const Sidebar = () => {
  return (
    <aside className="relative flex h-[72px] w-full items-center justify-between bg-draft p-6 sm:h-20 lg:h-full lg:w-[103px] lg:flex-col lg:rounded-r-3xl lg:p-8">
      <h3>Logo</h3>
      <div className="flex items-center gap-14 lg:flex-col">
        <div>
          <h3>Theme</h3>
        </div>
        <div className="absolute right-20 h-full w-[2px] bg-[var(--color-border-sidebar)] lg:bottom-24 lg:right-0 lg:h-[1px] lg:w-full" />
        <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-400 lg:h-10 lg:w-10">
          <img src={avatarImg} alt="avatar" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
