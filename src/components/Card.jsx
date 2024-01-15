
const Card = ({ imgSrc, imgAlt, title, text, linkTitle, link }) => {
  return (
    <div className="relative w-[220px] h-[360px] rounded-[1rem] m-0.5 bg-white-100 flex flex-col shadow-lg">
      {imgSrc && imgAlt && (
        <img className="w-full rounded-t-[1rem] h-[146px] " src={imgSrc} alt={imgAlt} />
      )}
      <h2 className="my-3 flex justify-center font-semibold">{title}</h2>
      <p className="mx-3 mb-2 text-base overflow-ellipsis overflow-hidden line-clamp-4 break-words hyphens-auto">{text}</p>
      <a
        className="absolute bottom-0 left-0 right-0 mb-4 mx-3  py-1 flex justify-center border bg-blue-700 text-white border-slate-500 rounded-md align-center"
        href={link}
      >
        {linkTitle}
      </a>
    </div>
  );
};

export default Card;
