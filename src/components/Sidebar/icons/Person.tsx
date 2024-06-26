import { cn } from "@/utils/cn";

interface Props {
  isActive?: boolean;
  isOpened?: boolean;
}

const Person = ({ isActive, isOpened }: Props) => {
  const isOpenAndActive: boolean | undefined = isActive && isOpened;

  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      className={cn(
        `duration-150 text-[#C4C4C4] group-hover:text-white`,
        isActive ? "text-brandblue" : "",
        isOpenAndActive ? "text-white" : "hover:text-brandblue"
      )}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 8C9.20937 8 11 6.20937 11 4C11 1.79063 9.20937 0 7 0C4.79063 0 3 1.79063 3 4C3 6.20937 4.79063 8 7 8ZM9.8 9H9.27812C8.58437 9.31875 7.8125 9.5 7 9.5C6.1875 9.5 5.41875 9.31875 4.72188 9H4.2C1.88125 9 0 10.8812 0 13.2V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V13.2C14 10.8812 12.1188 9 9.8 9Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Person;
