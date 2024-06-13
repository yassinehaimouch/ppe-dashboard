import arrow from "@/assets/icons/arrow_down.svg";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  Button,
  CalendarCell,
  CalendarGrid,
  Heading,
  RangeCalendar,
} from "react-aria-components";

const CalendarDropDown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <div className="z-2 cursor-pointer flex items-center justify-between w-[192px] px-[9px] py-[1px] text-[12px] border-[#D8D8D8] border-[1px] rounded-[2px] bg-white">
          <span>29/10/2022 - 29/11/2022</span>
          <img src={arrow} alt="arrow" />
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="z-[30] order-[#D8D8D8] text-[12px] rounded-[2px] border-[1px] px-[15px] py-[12px] left-[-0.8px] top-[33px] w-[218px] bg-white">
          <div className="mb-[11px]">
            <p className="text-[11px] text-[#989797]">Date range</p>
            <select className="w-[129px] py-1 border bodrer-[#989797] rounded-sm">
              <option value="custom">Custom</option>
            </select>
          </div>
          <RangeCalendar aria-label="Trip dates">
            <header>
              <Button slot="previous">◀</Button>
              <Heading />
              <Button slot="next">▶</Button>
            </header>
            <CalendarGrid>
              {(date) => <CalendarCell date={date} />}
            </CalendarGrid>
          </RangeCalendar>
          <div className="flex mt-[6px] justify-end gap-[12px]">
            <button className="text-gray-400">Cancel</button>
            <button className="bg-green-500 text-white border border-green-600 px-4 rounded-sm">
              Apply
            </button>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default CalendarDropDown;
