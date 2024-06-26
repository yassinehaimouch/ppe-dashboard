import { cn } from "@/utils/cn";

interface Props {
  isActive?: boolean;
  isOpened?: boolean;
}

const Job = ({ isActive, isOpened }: Props) => {
  const isOpenAndActive: boolean | undefined = isActive && isOpened;

  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        `duration-150 text-[#C4C4C4] group-hover:text-white`,
        isActive ? "text-brandblue" : "",
        isOpenAndActive ? "text-white" : "hover:text-brandblue"
      )}
    >
      <path
        d="M13.5 3H10.5V1.5C10.5 0.6675 9.8325 0 9 0H6C5.1675 0 4.5 0.6675 4.5 1.5V3H1.5C0.6675 3 0.00749999 3.6675 0.00749999 4.5L0 12.75C0 13.5825 0.6675 14.25 1.5 14.25H13.5C14.3325 14.25 15 13.5825 15 12.75V4.5C15 3.6675 14.3325 3 13.5 3ZM9 3H6V1.5H9V3Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Job;
