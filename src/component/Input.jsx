import React, { forwardRef } from "react";
const Input = forwardRef(({ label, textarea, ...props },ref) => {
  const classes ="w-full border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focud:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gp-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea
          className={classes}
          {...props}
          ref={ref}
        />
      ) : (
        <input {...props}  className={classes} ref={ref}/>
      )}
    </p>
  );
})
export default Input;
