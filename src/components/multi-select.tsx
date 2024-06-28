import { useState } from "react";
import { cn } from "../utils/cn";

export interface OptionType {
  label: string;
  value: string;
}

export default function MultiSelect({
  options,
  onChange,
  isDark,
  selectClassName,
  optionClassName,
}: {
  options?: OptionType[];
  onChange: (selected: OptionType[]) => void;
  isDark?: boolean;
  selectClassName?: string;
  optionClassName?: string;
}) {
  const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const option = options?.find((item) => item.value === value);
    if (!option) return;
    const isChecked = selectedOptions.some((o) => o.value === value);

    const updatedOptions = isChecked
      ? selectedOptions.filter((item) => item.value !== value)
      : [...selectedOptions, option];
    setSelectedOptions(updatedOptions);
    onChange(updatedOptions);
  };

  return (
    <div className="flex flex-col relative w-full">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex flex-row justify-between items-center w-full px-4 py-2 rounded-md border border-gray-300",
          selectClassName,
          isDark ? "bg-slate-900 text-white" : "bg-white text-black"
        )}
      >
        <span className="max-w-full">
          {selectedOptions.length === 0 ? (
            "Select an option"
          ) : (
            <div className="flex flex-row overflow-x-scroll  gap-1 items-center">
              {selectedOptions.map((option, i) => (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedOptions((prev) =>
                      prev.filter((o) => o.value !== option.value)
                    );
                    onChange(
                      selectedOptions.filter((o) => o.value !== option.value)
                    );
                  }}
                  key={i}
                  className="bg-gray-200 flex flex-row items-center
                   gap-2 text-black px-2 py-1 rounded-lg
                    hover:bg-gray-300 transition-all duration-300"
                >
                  <span className="line-clamp-1">{option.label}</span>
                  <span className="text-sm">x</span>
                </button>
              ))}
            </div>
          )}
        </span>
      </button>
      {open && (
        <div
          className={cn(
            `flex flex-col transition-all duration-1000
             absolute overflow-scroll shadow-lg bg-clip-border
              max-h-32 w-full px-3 py-2 top-14 gap-2 bg-white rounded-lg`,
            isDark ? "bg-slate-900" : "bg-white"
          )}
        >
          {options?.map((option, i) => (
            <label
              htmlFor={`option-${i}`}
              key={i}
              className={cn(
                `flex group flex-row cursor-pointer 
               py-2 rounded-md
            text-black items-center gap-4
            bg-gray-100
             hover:bg-gray-200 
             bg-opacity-80
             duration-300  transition-all px-4`,
                isDark ? "bg-slate-700 text-white hover:bg-slate-600" : "",
                optionClassName
              )}
            >
              <input
                value={option.value}
                onChange={handleChange}
                id={`option-${i}`}
                className=" 
                   relative appearance-none h-4 w-4 cursor-pointer rounded-md border border-blue-gray-200 transition-all  
                    checked:border-gray-900 checked:bg-gray-900"
                type="checkbox"
                checked={selectedOptions.some((o) => o.value === option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
