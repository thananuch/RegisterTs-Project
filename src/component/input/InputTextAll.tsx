import React from "react";

const defaultStyle = {
  NOMAL:
    "border border-[#D9D9D9] outline-none bg-[#FFF] block w-full rounded-lg py-2 px-2",
  ERROR:
    "[border:none] outline-none block w-full rounded-lg py-2 px-2 bg-red-500 bg-opacity-10 placeholder-[#D25656]",
  DISABLED:
    "[border:none] outline-none bg-[#D9D9D9]  block w-full rounded-lg py-2 px-2",
};

type textType = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  errorDesc?: string;
  showErrorMessage?: boolean;
  disabled?: boolean;
  maxLength?: number;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function InputTextAll({ value, onChange, onKeyDown, placeholder, errorDesc, showErrorMessage, disabled, maxLength, onKeyPress, }:
  textType
) {
  return (
    <>
      <input
        placeholder={placeholder}
        value={value || ""}
        onKeyDown={onKeyDown}
        onChange={onChange}
        disabled={disabled}
        onKeyPress={onKeyPress}
        className={
          disabled
            ? defaultStyle.DISABLED
            : errorDesc
              ? defaultStyle.ERROR
              : defaultStyle.NOMAL
        }
        maxLength={maxLength}
        type="text"
      />
      {errorDesc && (
        <p className="text-red-500">{errorDesc}</p>
      )}
    </>
  );
}

export default InputTextAll;

