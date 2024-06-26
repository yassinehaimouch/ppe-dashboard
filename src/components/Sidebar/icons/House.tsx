import { cn } from "@/utils/cn";
interface Props {
  isActive?: boolean;
  isOpened?: boolean;
}

const House = ({ isActive, isOpened }: Props): React.JSX.Element => {
  const isOpenAndActive: boolean | undefined = isActive && isOpened;

  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="currentColor"
      className={cn(
        `duration-150 text-[#C4C4C4] ${
          isOpened ? "group-hover:text-white" : ""
        }`,
        isActive ? "text-brandblue" : "",
        isOpenAndActive ? "text-white" : "hover:text-brandblue"
      )}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6267 9.14261L9.95503 1.02398L9.4408 0.479512C9.32364 0.356275 9.16519 0.287109 9.00004 0.287109C8.83488 0.287109 8.67644 0.356275 8.55927 0.479512L0.373343 9.14261C0.253286 9.26923 0.158403 9.42004 0.0942952 9.58612C0.0301869 9.75221 -0.0018477 9.93021 8.22954e-05 10.1096C0.00802401 10.8496 0.589755 11.4403 1.28863 11.4403H2.13243V18.2871H15.8676V11.4403H16.7293C17.0688 11.4403 17.3885 11.2994 17.6287 11.0451C17.747 10.9202 17.8407 10.7718 17.9045 10.6083C17.9682 10.4449 18.0007 10.2696 18 10.0928C18 9.73543 17.867 9.39697 17.6267 9.14261ZM10.1119 16.7735H7.88819V12.4851H10.1119V16.7735ZM14.4381 9.92672V16.7735H11.3826V11.9806C11.3826 11.516 11.0272 11.1397 10.5884 11.1397H7.41169C6.97291 11.1397 6.61752 11.516 6.61752 11.9806V16.7735H3.56194V9.92672H1.65593L9.00202 2.15495L9.46066 2.64056L16.3461 9.92672H14.4381Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default House;
