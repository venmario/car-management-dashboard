import { ReactNode } from "react";

interface MenuHeadingProps {
  children: ReactNode;
}
const MenuHeading = ({ children }: MenuHeadingProps) => {
  return (
    <div className="menu-heading body-14-bold pt-4 pb-3 ps-3 text-secondary">
      {children}
    </div>
  );
};
MenuHeading.SubMenu = ({ children }: MenuHeadingProps) => {
  return (
    <div className="sub-menu-heading body-14-bold py-2 ps-3">{children}</div>
  );
};

export default MenuHeading;
