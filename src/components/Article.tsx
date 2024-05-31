import { ArticleType } from "@/types";
import timeIcon from "@/assets/icons/time.svg";

const Article = ({ id, image, description, time }: ArticleType) => {
  return (
    <div>
      <div>
        <img className="rounded-md" src={image} alt="article" />
      </div>
      <div className="flex justify-between mt-[4px]">
        <span className="text-[12px] text-[#929292]">Comment</span>
        <div className="flex gap-[4px]">
          <div className="flex gap-[4px]">
            <img src={timeIcon} alt="time" />
            <span className="text-[10px] text-[#727272]">{time}</span>
          </div>
          <span className="text-[12px] text-[#313131]">#{id}</span>
        </div>
      </div>
      <div className="bg-[#F8F8F8] border border-[#E1E1E1] rounded-md py-[6px] px-[11px]">
        <p className="text-[11px] text-[#313131] leading-normal w-[230px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Article;
