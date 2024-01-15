const Alert = (props) => {
  return props.trigger ? (
    <div className={`${props.color} fixed z-[99] min-w-[300px] top-0 left-1/2 transform -translate-x-1/2 flex border shadow-md items-center justify-center`}>
      <div className="relative p-2 text-center">
        <button
          className="absolute top-2 right-2 font-semibold text-sm hover:scale-105 hover:font-bold"
          onClick={() => props.setTrigger(false)}
        >
          X
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Alert;
