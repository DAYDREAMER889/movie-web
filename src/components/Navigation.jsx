const Navigation = () => {
  return (
    <div className="flex justify-between items-center container h-[60px]">
      <div className="gap-2 flex items-center">
        <img src="./images/film.png" alt="first" className="h-5 w-5" />
        <p className="text-[#4338CA] italic font-bold ">Movie Z</p>
      </div>

      <div className=" flex   items-center  gap-3 h-[36px] py-[8px] px-[16px]  ">
        <div className="flex  items-center gap-2 border  shadow-sm rounded-md  border-[#E4E4E7]">
          <img src="./images/down.png" alt="" className="h-4 w-4" />
          <p>Genre</p>
        </div>
        <div className="flex items-center  border border-[#E4E4E7] px-[12px] shadow-sm rounded-md  w-[379px]">
          <img className="w-[16px] h-[16px]" src="./images/search.png" alt="" />
          <input
            className="color-[#71717A)]"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>

      <div>
        <div className="w-[36] h-[36]">
          <img src="./images/moon.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
