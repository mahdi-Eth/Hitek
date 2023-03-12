import { useState, React, useEffect } from "react";
import { Checkbox } from "@/components";
import { AiOutlineSearch } from "react-icons/ai";
import { getFiltersService } from "@/api";

export const FilterButton = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [brands, setBrands] = useState([]);
  const [CPUs, setCPUs] = useState([]);

  const renderCheckbox = (items) => {
    return items.map((item, index) => (
      <Checkbox key={index} id={index} value={item} />
    ));
  };

  useEffect(() => {
    getFiltersService().then((res) => {
      setBrands(res.brands);
      setCPUs(res.CPUs);
    });
  }, []);

  return (
    <>
      <button
        className="bg-primary sm:hidden text-white px-4 py-2 rounded"
        onClick={() => setIsFilterOpen(!isFilterOpen)}>
        Filters
      </button>

      {isFilterOpen && (
        <div className="w-full h-full bg-blue-50 flex items-center justify-center z-50 overflow-scroll">
          <div className="p-4 text-center my-8 overflow-scroll">
            <div className="flex flex-col gap-5 w-full">
              <div className="brand border bg-gray-50 border-gray-300 rounded-lg p-3 flex flex-col justify-center items-start">
                <p className="text-lg font-medium text-ـDarkblue_hover">
                  Brand
                </p>
                <hr className="border-gray-300 w-full my-4" />
                <div className="relative flex items-center w-full">
                  <AiOutlineSearch
                    size={24}
                    className="absolute left-3 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Search brand name..."
                    className="w-full bg-gray-100 px-2 pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <hr className="border-gray-300 w-full my-4" />
                <div className="flex flex-col flex-wrap h-64">
                  {renderCheckbox(brands)}
                </div>
              </div>
              <div className="CPU border bg-gray-50 border-gray-300 rounded-lg p-3 flex flex-col justify-center items-start">
                <p className="text-lg font-medium text-ـDarkblue_hover">CPU</p>
                <hr className="border-gray-300 w-full my-4" />
                <div className="flex flex-col flex-wrap h-64">
                  {renderCheckbox(CPUs)}
                </div>
              </div>
              <div className="check flex items-center bg-gray-50 px-5 py-4 border border-gray-300 rounded-lg gap-12">
                <span className="text-_Gray font-semibold">
                  Available products
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
            <button
              className="bg-primary text-white w-full py-2 rounded mt-4"
              onClick={() => setIsFilterOpen(false)}>
              Apply filters
            </button>
          </div>
        </div>
      )}
    </>
  );
};
