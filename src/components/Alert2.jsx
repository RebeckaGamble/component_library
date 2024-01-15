
const Alert2 = ({ variant, open, onClose }) => {

    return (
      <div
        className={`my-4 p-2 flex max-w-[600px] mx-auto ${open ? 'visible' : 'hidden'}`}
        style={{ backgroundColor: variant.mainColor, border: "1px solid " + variant.secondaryColor}}
      >
        <div className="w-[5%] flex justify-center items-center">
          <span className="material-symbols-outlined text-[24px]">{variant.symbol}</span>
        </div>
        <div className="w-[90%] flex items-center">
          <span className="px-2 text-sm sm:text-[16px] font-semibold">{variant.title}</span>
          <span className="text-sm sm:text-[16px]">{variant.text}</span>
        </div>
        <button onClick={onClose} className="w-[5%] flex justify-center items-center ">
          <span className="material-symbols-outlined text-[20px] font-semibold">close</span>
        </button>
      </div>
    );
  
};

export default Alert2;
