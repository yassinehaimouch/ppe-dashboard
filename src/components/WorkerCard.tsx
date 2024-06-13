import { ReactNode } from "react";

interface Props {
  name: string;
  role: string;
  logo: string;
  image: string;
}

const WorkerCard = ({ name, role, logo, image }: Props): ReactNode => {
  return (
    <div className="flex items-center justify-between py-[3px]">
      <div className="flex items-center gap-[8px]">
        <img
          className="w-[34px] h-[34px] border-[1px] border-[#D8D8D8] rounded-full"
          src={image}
          alt={name}
        />
        <div className=" leading-normal">
          <h1 className="text-[12px] w-full">{name}</h1>
          <p className="text-[11px] text-[#909090]">{role}</p>
        </div>
      </div>
      <img className="w-[40px] h-[40px]" src={logo} alt="logo" />
    </div>
  );
};

export default WorkerCard;