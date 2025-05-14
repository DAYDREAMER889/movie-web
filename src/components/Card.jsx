const Card = (el) => {
  return (
    <div>
      <img src={el.image} alt="" className="w-[239px] h-[340px] rounded-md" />
      <div className="flex flex-col rounded-lg bg-[#F4F4F5]">
        <div className="flex items-center gap-1 px-3 py-2">
          <img src="./images/star.png" alt="" className="w-4 h-4" />
          <p className="text-[14px]">{el.vote}</p>
          <p className=" flex items-center text-[12px] text-[#71717A]">/10</p>
        </div>
        <div>
          <p className="text-[18px] flex items-center">{el.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
