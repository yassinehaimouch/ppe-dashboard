import toggle from "@/assets/icons/toggle.svg";
import english from "@/assets/icons/english.svg";
import arrow from "@/assets/icons/arrow_down.svg";
import notification from "@/assets/icons/notification.svg";
import fontSize from "@/assets/icons/fontSize.svg";
import moon from "@/assets/icons/moon.svg";
import logo from "@/assets/logos/setting_logo.png";
import setting from "@/assets/icons/seetingsIcon.svg";
import logOut from "@/assets/icons/logoutIcon.svg";
import polices from "@/assets/icons/policies.svg";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { getNavigationLanguages } from "@/utils/Links";

const Header = ({
  isOpened,
  setIsOpened,
}: {
  isOpened: boolean;
  setIsOpened: (value: boolean) => void;
}) => {
  const [openSettings, setOpenSettings] = useState<boolean>(false);
  const [openLang, setOpenLang] = useState<boolean>(false);
  const languages = getNavigationLanguages();

  return (
    <div className="bg-white sticky top-0 z-10 w-full">
      <header className="flex justify-between px-[18px] py-[15px] shadow-custom">
        <div className="flex items-center gap-[20px]">
          <button
            className={`${isOpened ? "hidden" : "block"}`}
            onClick={() => setIsOpened(!isOpened)}
          >
            <img src={toggle} alt="toggle" />
          </button>
          <p className="text-[18px]">Overview</p>
        </div>
        <div className="flex gap-[48px]">
          <div className="flex items-center gap-[27px]">
            <img src={fontSize} width={22} />
            <img src={moon} width={20} />
            <img src={notification} width={20} />
            <div>
              <div
                className=" relative z-50 cursor-pointer"
                onClick={() => {
                  setOpenLang(!openLang);
                  setOpenSettings(false);
                }}
              >
                <img
                  src={english}
                  width={22}
                  className="hover:border-[1.5px] hover:border-blue-600 rounded-full transition duration-300"
                />
              </div>
              {openLang && (
                <div
                  onMouseLeave={() => setOpenLang(false)}
                  className="absolute bg-white border border-[#EBEBEB] right-[150px] mt-[17px] py-[16px] rounded-md shadow-2xl transition duration-300"
                >
                  <ul className="space-y-4">
                    {languages.map(({ label, icon }, index: number) => (
                      <li
                        key={index * 5}
                        className="cursor-pointer leading-normal px-[14px] text-[12px] flex items-center gap-[12px]"
                      >
                        {icon()}
                        <span className="text-[#313131]">{label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div>
            <div
              className="flex items-center gap-[18px] transition duration-300 p-1 rounded-md cursor-pointer hover:bg-gray-100 select-none"
              onClick={() => {
                setOpenSettings(!openSettings);
                setOpenLang(false);
              }}
            >
              <div className="flex items-center gap-[8px]">
                <img src={logo} />
                <p className="text-brandgray text-[13px]">BESIX Group</p>
              </div>
              <img
                className={cn(
                  "rotate-180 transition duration-300",
                  openSettings ? "rotate-0" : ""
                )}
                src={arrow}
                alt="arrow"
              />
            </div>
            {openSettings && (
              <div
                onMouseLeave={() => setOpenSettings(false)}
                className="absolute z-50 bg-white border border-[#EBEBEB] right-4 mt-2 py-[16px] rounded-md shadow-2xl transition duration-300"
              >
                <ul>
                  <li className="cursor-pointer leading-normal px-[14px] text-[12px] mb-[14px]">
                    <h1 className="font-semibold text-[#313131]">
                      BESIX Group
                    </h1>
                    <span className="text-[#797979]">besix.group@besix.be</span>
                  </li>
                  <hr className="text-[#EBEBEB]" />
                  <li className="cursor-pointer leading-normal px-[14px] text-[12px] flex items-center gap-[12px] mt-[15px]">
                    <img src={setting} alt="settingIcon" />
                    <span className="text-[#313131]">Profile settings</span>
                  </li>
                  <li className="cursor-pointer leading-normal px-[14px] text-[12px] flex items-center gap-[12px] mt-[12px] mb-[15px]">
                    <img src={polices} alt="policesIcon" />
                    <span className="text-[#313131]">Our policies</span>
                  </li>
                  <hr className="text-[#EBEBEB]" />
                  <li className="cursor-pointer leading-normal px-[14px] text-[12px] flex items-center gap-[12px] mt-[12px]">
                    <img src={logOut} alt="logoutIcon" />
                    <span className="text-[#313131]">Log out</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
      <nav className="flex shadow-custom">
        <p className="text-[12px] text-[#ADADAD] border-r-[1px] px-[28px] py-[3px]">
          SITES
        </p>
        <ul className="flex text-[#ADADAD] gap-[23px] text-[12px] px-[24px] py-[3px]">
          <li>All</li>
          <li>Site 1</li>
          <li>Site 2</li>
          <li>Site 3</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
