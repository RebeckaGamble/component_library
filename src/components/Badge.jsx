const Badge = ({ color, size, icon, content }) => {
  const badgeSize = `w-${size} h-${size}`;
  const badgeIconColor = `text-${color}`;
  const badgeContentColor = {
    backgroundColor: color,
    color: '#fff'
  };

  return (
    <div className={`${badgeSize} flex relative mx-auto`}>
      <span className={`mb-2 ${badgeIconColor}`}>{icon}</span>
      <span
        className={
          " items-center rounded-full px-2 justify-center mx-auto py-0.5 absolute -top-3 left-6 "
        }
        style={badgeContentColor}
      >
        {content}
      </span>
    </div>
  );
};

export default Badge;
