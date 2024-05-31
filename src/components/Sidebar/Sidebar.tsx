import logo from "@/assets/logos/logo.png";
import toggle from "@/assets/icons/toggle.svg";
import smalllogo from "@/assets/logos/icon_logo.png";
import { Link, NavLink } from "react-router-dom";
import { cn } from "@/utils/cn";
import { Tooltip } from "react-tooltip";
import { getNavigationLinks } from "@/utils/Links";

const navLink = getNavigationLinks();

const Sidebar = ({
  isOpened,
  setIsOpened,
}: {
  isOpened: boolean;
  setIsOpened: (value: boolean) => void;
}) => {
  return !isOpened ? (
    <div className="sticky h-[100vh] top-0 z-50 w-[63px] bg-white flex flex-col items-center py-[10.5px] border border-[#D7D7D7] transition-all duration-300 ease-out">
      <Link to="/">
        <img src={smalllogo} className="w-[40px]" alt="logo" />
      </Link>
      <ul className="space-y-[22px] mt-[34px] pb-[31px]">
        {navLink.slice(0, 2).map(({ label, icon, href }, index: number) => (
          <li key={index}>
            <NavLink
              data-tooltip-id={label as string}
              data-tooltip-content={label as string}
              data-tooltip-place="left"
              to={href}
            >
              {({ isActive }) => icon(isActive)}
            </NavLink>
            <Tooltip id={label as string} />
          </li>
        ))}
      </ul>
      <hr className="w-full" />
      <ul className="space-y-[22px] mt-[34px] pb-[31px]">
        {navLink.slice(2).map(({ label, icon, href }, index: number) => (
          <li key={index}>
            <NavLink
              data-tooltip-id={label as string}
              data-tooltip-content={label as string}
              data-tooltip-place="left"
              to={href}
            >
              {({ isActive }) => icon(isActive)}
            </NavLink>
            <Tooltip id={label as string} />
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div className="sticky top-0 z-50 w-[320px] pl-[10px] pr-[19px] py-[10.5px] flex flex-col justify-between h-[100vh] border-r-[1px] border-[#D7D7D7] bg-white transition-transform duration-100 ease-in">
      <div>
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <img
            src={toggle}
            onClick={() => setIsOpened(!isOpened)}
            alt="toggle"
            className=" cursor-pointer"
          />
        </div>
        <ul className="px-[24px] space-y-1 mt-[30px]">
          {navLink.slice(0, 2).map(({ label, icon, href }, index: number) => (
            <li key={index}>
              <NavLink
                to={href}
                className={({ isActive }) =>
                  cn(
                    `flex group items-center gap-[13px] px-[6px] py-[3.5px] cursor-pointer text-[#626262] hover:text-white hover:bg-brandblue rounded-[5px]`,
                    isActive ? "bg-brandblue text-white" : ""
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {icon(isActive, isOpened)}
                    <p>{label}</p>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
        <h1 className="px-[15px] mt-[20px]">Manage</h1>
        <ul className="px-[24px] space-y-1 mt-[5px]">
          {navLink.slice(2).map(({ label, icon, href }, index: number) => (
            <li key={index}>
              <NavLink
                to={href}
                className={({ isActive }) =>
                  cn(
                    `flex group items-center gap-[13px] px-[6px] py-[3.5px] cursor-pointer text-[#626262] hover:text-white hover:bg-brandblue rounded-[5px]`,
                    isActive ? "bg-brandblue text-white" : ""
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {icon(isActive, isOpened)}
                    <p>{label}</p>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="text-[#939393]">@ App name 2021</h1>
        <p className="text-[11px] text-[#8A8A8A] leading-[17.5px] pr-[17px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
