import { Product, VisibleColumns, Worker } from "@/types";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import WorkerCard from "@/components/WorkerCard";
import arrows from "@/assets/icons/arrows.svg";
import setting from "@/assets/icons/seetingsIcon.svg";
import search from "@/assets/icons/search.svg";
import CalendarDropDown from "@/components/CalendarDropDown";
import ProductDetailsPopOver from "@/components/ProductDetailsPopOver";

export const Violations = () => {
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [visibleColumns, setVisibleColumns] = useState<VisibleColumns>([]);

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
            <CalendarDropDown />
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
                <th className="relative border-r-[1px] px-[14px] border-[#D8D8D8] w-[17px]">
                  <div
                    className="cursor-pointer"
                    onClick={() => setShowSettings(!showSettings)}
                  >
                    <img src={setting} alt="setting" />
                  </div>
                  {showSettings && (
                    <div
                      onMouseLeave={() => setShowSettings(false)}
                      className="absolute left-[42px] top-16 w-[162px] bg-white py-[10px] px-[17px] shadow-xl rounded-sm border border-[#D8D8D8]"
                    >
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
                              className="cursor-pointer accent-[#3490c9]"
                              type="checkbox"
                            />
                            {product.name}
                          </label>
                        ))}
                      </div>
                    </div>
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
                  <th className="text-[#909090] px-[14px] text-center border-t-[1px] border-r-[1px] border-[#D8D8D8] font-medium text-[12px]">
                    {worker.id}
                  </th>
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
                          <ProductDetailsPopOver
                            product={product}
                            products={products}
                            worker={worker}
                          />
                        )}
                      </td>
                    ) : null
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
