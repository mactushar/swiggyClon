import { useEffect, useRef, forwardRef } from "react";

const Field = forwardRef(({ label, error, ...props }, ref) => {
  return (
    <label className="relative block p-4 cursor-text">
      <input
        ref={ref}
        {...props}
        
        className={`
            peer w-full bg-transparent outline-0 px-4 py-2 font-semibold text-slate-600
            
            
          `}
      />

      <span
        className={`
            absolute left-4 top-6
            transition-all duration-200
            peer-focus:top-0 peer-focus:text-sm
            peer-not-placeholder-shown:top-0
            peer-not-placeholder-shown:text-sm
            font-medium
            
          `}
      >{label}</span>
    </label>
  );
});

export default Field;

// const Field = forwardRef(({ type, label, id ,placeholder}, ref) => {
//   return (
//     <>
//       <div
//         className="p-4 relative cursor-text"
//         onClick={() => ref.current?.focus()}
//       >
//         <input
//           className="peer w-full bg-transparent p-2 px-4 outline-0"
//           type={type}
//           id={id}
//           ref={ref}
//           placeholder={placeholder}
//         />
//         <label
//           htmlFor={id}
//           className="z-20 transition-all duration-200
//     ease-out peer-focus:top-0 peer-focus:text-sm py-1 absolute left-8 cursor-text peer-not-placeholder-shown:top-0
//           peer-not-placeholder-shown:text-sm"
//         >
//           {label}
//         </label>
//       </div>
//     </>
//   );
// });
