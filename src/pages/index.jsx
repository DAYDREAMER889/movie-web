import Upcoming from "@/components/Upcoming";
import Navigation from "@/components/Navigation";
import Card from "@/components/Card";
import data from "@/data/data";
const index = () => {
  return (
    <div className=" flex justify-center items-center flex-col gap-[48px] ">
      <Navigation />
      <Upcoming />
      <div className="h-fit w-[1277px]">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold">Upcoming</p>
          <div className="flex justify-center items-center gap-2">
            <p className="text-[14px] ">See more</p>
            <img className="h-4 w-4" src="./images/arrow-right.png" alt="" />
          </div>
        </div>
      </div>
      <section className="grid grid-cols-5 auto-rows-auto gap-8">
        {data.map((el) => {
          return <Card vote={el.vote} title={el.title} image={el.image} />;
        })}
      </section>
      <footer className="h-[280px] bg-[#4338CA] w-full flex justify-center  text-[#FAFAFA] ">
        <div className="container flex justify-between pt-[40px]">
          <div className="flex flex-col  gap-3 ">
            <div className="flex items-center gap-2 ">
              <img className="w-5 h-5" src="./images/filmWhite.png" alt="" />
              <p className="text-[16px] italic font-bold">Movie Z</p>
            </div>
            <div>
              <p>© 2024 Movie Z. All Rights Reserved.</p>
            </div>
          </div>
          <div className="flex  gap-24">
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col  ">
                <p>Contact Information</p>
              </div>
              <div className=" flex flex-col gap-6 items-center">
                <div className="flex gap-6 items-center">
                  <img className="w-4 h-4" src="./images/mail.png" alt="" />
                  <div>
                    <p>Email:</p>
                    <p>support@movieZ.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <img className="w-4 h-4" src="./images/call.png" alt="" />
                  <div>
                    <p>Phone:</p>
                    <p>+976 (11) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p>Follow us </p>
              <div className="flex gap-3">
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>Youtube</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default index;
