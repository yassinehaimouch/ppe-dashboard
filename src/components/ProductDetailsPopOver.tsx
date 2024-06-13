import { useState } from "react";
import { cn } from "@/utils/cn";
import Article from "@/components/Article";
import * as Popover from "@radix-ui/react-popover";
import { ArticleType, UserProduct,Worker} from "@/types";
import { Fragment} from "react";

interface Props { 
  product: UserProduct;
  products: UserProduct[];
  worker: Worker;
}

const ProductDetailsPopOver = ({product, products, worker}: Props) => {
  const [showViolations, setShowViolations] = useState<{
    workerId: string | null;
    productId: number | null;
  }>({ workerId: null, productId: null });
  const [violations, setViolations] = useState<ArticleType[]>([]);

  return (
    <Popover.Root>
      <Popover.Trigger className="z-[1]" asChild>
        <div
          onClick={() => {
            setShowViolations({
              workerId: worker.id,
              productId: product.id,
            });
            const foundProduct = products.find(
              (el: UserProduct) => product.id === el.id
            );
            setViolations(foundProduct ? foundProduct.articles || [] : []);
          }}
          className={cn(
            "cursor-pointer relative h-[35px] leading-none text-[14px] grid items-center w-[35px] rounded-full mx-auto",
            product.count >= 10
              ? "bg-[#EF3C3C] text-white"
              : product.count === 0
              ? ""
              : "bg-[#F8CC23]"
          )}
        >
          {product.count}
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="PopoverContent z-50 focus:outline-none"
          sideOffset={-5}
        >
          {showViolations.workerId === worker.id &&
            showViolations.productId === product.id && (
              <div className="bg-white h-[450px]  border border-[#D8D8D8] overflow-y-auto rounded-lg py-[10px] px-[12px] space-y-4">
                {violations.map((violation: ArticleType, index: number) => (
                  <Fragment key={violation.id}>
                    <Article
                      id={violation.id}
                      image={violation.image}
                      description={violation.description}
                      time={violation.time}
                      key={violation.id}
                    />
                    {index !== violations.length - 1 && <hr />}
                  </Fragment>
                ))}
              </div>
            )}
          <Popover.Arrow className="PopoverArrow fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default ProductDetailsPopOver;
