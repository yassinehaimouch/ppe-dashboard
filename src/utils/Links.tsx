import Hand from "@/components/Sidebar/icons/Hand";
import Hands from "@/components/Sidebar/icons/Hands";
import House from "@/components/Sidebar/icons/House";
import Job from "@/components/Sidebar/icons/Job";
import Person from "@/components/Sidebar/icons/Person";
import english from "@/assets/icons/english.svg";
import spanish from "@/assets/icons/spain.svg";
import french from "@/assets/icons/french1.svg";
import nederlands from "@/assets/icons/nederlands.svg";
import germany from "@/assets/icons/germany.svg";

export const getNavigationLinks = (): {
  label: string | React.JSX.Element;
  href: string;
  icon: (isActive: boolean, isOpened?: boolean) => React.JSX.Element;
}[] => {
  return [
    {
      label: "Dashboard",
      icon: (isActive, isOpened) => (
        <House isOpened={isOpened} isActive={isActive} />
      ),
      href: "/dashboard",
    },
    {
      label: "P.P.E Violations",
      icon: (isActive, isOpened) => (
        <Hand isOpened={isOpened} isActive={isActive} />
      ),
      href: "/violations",
    },
    {
      label: "P.P.Es",
      icon: (isActive, isOpened) => (
        <Hands isOpened={isOpened} isActive={isActive} />
      ),
      href: "/ppes",
    },
    {
      label: "Contractors",
      icon: (isActive, isOpened) => (
        <Job isOpened={isOpened} isActive={isActive} />
      ),
      href: "/contractors",
    },
    {
      label: "Workers",
      icon: (isActive, isOpened) => (
        <Person isOpened={isOpened} isActive={isActive} />
      ),
      href: "/Workers",
    },
  ];
};

export const getNavigationLanguages = (): {
  label: string | React.JSX.Element;
  icon: () => React.JSX.Element;
}[] => {
  return [
    {
      label: "English (EN)",
      icon: () => <img src={english} alt="english" />,
    },
    {
      label: "Français (FR)",
      icon: () => <img src={french} alt="french" />,
    },
    {
      label: "Nederlands (NL)",
      icon: () => <img src={nederlands} alt="nederlands" />,
    },
    {
      label: "Español (ES)",
      icon: () => <img src={spanish} alt="spanish" />,
    },
    {
      label: "Deutsch (DE)",
      icon: () => <img src={germany} alt="germany" />,
    },
  ];
};
