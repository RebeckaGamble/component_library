import PropTypes from 'prop-types';

const Button = ({ variant, size, color, disabled, onClick, label }) => {
  const buttonVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "rounded-[16px]";
      case "secondary":
        return "uppercase rounded-[8px]";
      default:
        return "border font-semibold rounded-[8px] tracking-wide";
    }
  };

  const buttonSizeClasses = () => {
    switch (size) {
      case "small":
        return "py-1 px-3 text-sm";
      case "large":
        return "py-1 px-6 text-lg font-bold tracking-wide";
      default:
        return "px-4";
    }
  };

  const buttonColorClasses = () => {
    switch (color) {
      case "green":
        return "bg-[#2AC125] text-white";
      case "danger":
        return "bg-[#F31F1F] text-white";
      default:
        return "bg-[#DFDFF2] border border-[#C5C5F6] text-slate-600";
    }
  };

  return (
    <div className='flex-col sm:flex-row '>

    <button
      type='button'
      className={`${buttonVariantClasses()} ${buttonSizeClasses()} ${buttonColorClasses()} ${
        disabled ? "opacity-50 cursor-not-allowed text-slate-900" : ""
      }`}
      onClick={onClick}
    >
      {label}
    </button>
    </div>
  );
};

export default Button;
