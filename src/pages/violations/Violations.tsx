import { ArticleType, Product, VisibleColumns, Worker } from "@/types";
import { Fragment, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { cn } from "@/utils/cn";
import Modal from "@/components/Modal";
import WorkerCard from "@/components/WorkerCard";
import arrows from "@/assets/icons/arrows.svg";
import setting from "@/assets/icons/seetingsIcon.svg";
import search from "@/assets/icons/search.svg";
import arrow from "@/assets/icons/arrow_down.svg";
import Article from "@/components/Article";
import DatePick from "@/components/DatePick";

export const Violations = () => {
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [showViolations, setShowViolations] = useState<boolean>(false);
  const [visibleColumns, setVisibleColumns] = useState<VisibleColumns>([]);
  const [violations, setViolations] = useState([]);

  // Fetch Workers
  const getWorkers = async () => {
    const res = await fetch(import.meta.env.VITE_WORKERS_API);
    return res.json();
  };
  const {
    data: workers,
    error: workersError,
    isLoading: workersIsLoading,
  } = useQuery("workers", getWorkers);

  // Fetch Products
  const getProducts = async () => {
    const res = await fetch(import.meta.env.VITE_PRODUCTS_API);
    return res.json();
  };
  const {
    data: products,
    error: productsError,
    isLoading: productsIsLoading,
  } = useQuery("products", getProducts);

  useEffect(() => {
    if (products && products.length > 0) {
      const initialColumns = products.reduce(
        (acc: VisibleColumns, product: Product) => {
          acc[product.id] = true;
          return acc;
        },
        {}
      );
      setVisibleColumns(initialColumns);
    }
  }, [products]);

  const toggleColumn = (id: number) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (workersIsLoading || productsIsLoading) {
    return <p>isLoading</p>;
  }

  if (workersError) {
    throw new Error(`workersError -> ${workersError}`);
  }

  if (productsError) {
    throw new Error(`productsError -> ${workersError}`);
  }

  return (
    <div className="flex w-full">
      <div className="w-full py-[30px] px-[37px]">
        <div className="flex flex-row justify-between items-center">
          <h1>P.P.E Violations Table</h1>
          <div className="flex items-center gap-[11px]">
            <div className="w-[356px] px-[9px] text-[12px] py-[1px] border-[#D8D8D8] border-[1px] rounded-[2px] flex items-center gap-[11px] bg-white">
              <span>
                <img src={search} alt="search" />
              </span>
              <input
                className="w-full focus:outline-none"
                type="text"
                placeholder="Search workers..."
              />
            </div>
            <div
              onClick={() => setShowCalendar(true)}
              className="relative cursor-pointer flex items-center justify-between w-[192px] px-[9px] py-[1px] text-[12px] border-[#D8D8D8] border-[1px] rounded-[2px] bg-white"
            >
              <span>29/10/2022 - 29/11/2022</span>
              <img src={arrow} alt="arrow" />
              {showCalendar && (
                <div
                  onMouseLeave={() => setShowCalendar(false)}
                  className="absolute border-[#D8D8D8] rounded-[2px] border-[1px] px-[15px] py-[12px] left-[-0.8px] top-[33px] w-[275px] bg-white"
                >
                  <div className="mb-[11px]">
                    <p className="text-[11px] text-[#989797]">Date range</p>
                    <select className="w-[129px] py-1 border bodrer-[#989797] rounded-sm">
                      <option value="custom">Custom</option>
                    </select>
                  </div>
                  <DatePick />
                  <div className="flex justify-end gap-[12px]">
                    <button className="text-gray-400">Cancel</button>
                    <button className="bg-green-500 text-white border border-green-600 px-4 rounded-sm">
                      Apply
                    </button>
                  </div>
                </div>
              )}
            </div>
            <select className="w-[183px] px-[9px] text-[12px] py-[8px] border-[#D8D8D8] border-[1px] rounded-[2px]">
              <option value="All Contractors">All Contractors</option>
            </select>
            <div className="bg-white p-[7px] border-[#D8D8D8] border-[1px] rounded-[2px] w-fit inline-block">
              <img src={arrows} alt="arrows" />
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#D8D8D8] mt-[12px] rounded-md">
          <table className="w-full">
            <thead>
              <tr>
                <th className="border-r-[1px] px-[14px] border-[#D8D8D8] w-[17px]">
                  <div
                    className="cursor-pointer"
                    onClick={() => setShowSettings(true)}
                  >
                    <img src={setting} alt="setting" />
                  </div>
                  {showSettings && (
                    <Modal onClose={() => setShowSettings(false)}>
                      <div className="bg-white py-[10px] px-[17px] shadow-custom rounded-sm border border-[#D8D8D8]">
                        <h1 className="text-[11px] font-medium text-[#989797]">
                          Select columns to display
                        </h1>
                        <div>
                          {products?.map((product: Product) => (
                            <label
                              key={product.id + product.name}
                              className=" select-none flex text-[11px] font-normal items-center gap-[10px] cursor-pointer"
                            >
                              <input
                                checked={!!visibleColumns[product.id]}
                                onChange={() => toggleColumn(product.id)}
                                className="cursor-pointer"
                                type="checkbox"
                              />
                              {product.name}
                            </label>
                          ))}
                        </div>
                      </div>
                    </Modal>
                  )}
                </th>
                <th className="text-[12px] text-[#737373] border-r-[1px] border-[#D8D8D8] font-semibold font-lato">
                  Workers
                </th>
                {products?.map((product: Product) =>
                  visibleColumns[product.id] ? (
                    <th key={product.id}>
                      <div className="text-[11px] flex flex-col items-center leading-normal text-[#737373] font-semibold font-lato">
                        <img src={product.image} alt="tool" />
                        <p className="w-[78%]">{product.name}</p>
                      </div>
                    </th>
                  ) : null
                )}
              </tr>
            </thead>
            <tbody>
              {workers?.map((worker: Worker) => (
                <tr key={worker.id}>
                  <td className="text-[#909090] px-[14px] text-center border-t-[1px] border-r-[1px] border-[#D8D8D8] font-medium text-[12px]">
                    {worker.id}
                  </td>
                  <td className="w-[20%] border-t-[1px] border-r-[1px] px-[10px] border-[#D8D8D8]">
                    <WorkerCard
                      name={worker.name}
                      image={worker.image}
                      logo={worker.logo}
                      role={worker.role}
                    />
                  </td>
                  {worker?.products.map((product, index) =>
                    visibleColumns[product.id] ? (
                      <td
                        key={product.id + index}
                        className="text-center border-t-[1px] border-[#D8D8D8] align-middle"
                      >
                        {product.count === 0 ? (
                          <span className="w-full h-full flex items-center justify-center text-[#C4C4C4]">
                            -
                          </span>
                        ) : (
                          <div
                            onClick={() => {
                              setViolations(
                                products.filter(
                                  (el: Product) => product.id === el.id
                                )[0].articles
                              );
                              setShowViolations(!showViolations);
                            }}
                            className={cn(
                              "cursor-pointer h-[35px] leading-none text-[14px] grid items-center w-[35px] rounded-full mx-auto",
                              product.count >= 10
                                ? "bg-[#EF3C3C] text-white"
                                : product.count === 0
                                ? ""
                                : "bg-[#F8CC23]"
                            )}
                          >
                            {product.count}
                          </div>
                        )}
                      </td>
                    ) : null
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          {showViolations && (
            <Modal onClose={() => setShowViolations(false)}>
              <div className="relative">
                <div className="bg-white h-[575px] overflow-y-auto rounded-lg py-[10px] px-[12px] space-y-4">
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
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-3 w-0 h-0 border-solid border-[6px] border-transparent border-b-white"></div>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};
