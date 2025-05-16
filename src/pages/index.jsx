import Upcoming from "@/components/Upcoming";
import Navigation from "@/components/Navigation";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
// import data from "@/data/data";

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const index = () => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

  const {
    data: upcoming,
    error: erupcoming,
    isLoading: loaupcoming,
  } = useSWR(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    (url) => fetcher(url, { headers: { Authorization: `Bearer ${token}` } })
  );

  // if (erupcoming) return <div>failed to load</div>;
  // if (loaupcoming) return <div>loading...</div>;

  const {
    data: popular,
    error: erpopular,
    isLoading: loapopular,
  } = useSWR(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    (url) => fetcher(url, { headers: { Authorization: `Bearer ${token}` } })
  );

  // if (erpopular) return <div>failed to load</div>;
  // if (loapopular) return <div>loading...</div>;

  const {
    data: rated,
    error: errated,
    isLoading: loarated,
  } = useSWR(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    (url) => fetcher(url, { headers: { Authorization: `Bearer ${token}` } })
  );

  // if (errated) return <div>failed to load</div>;
  // if (loarated) return <div>loading...</div>;

  return (
    <div className=" flex justify-center items-center flex-col gap-[48px] ">
      <Navigation />
      <Upcoming />
      <div className="h-fit w-[1536px]">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold">Upcoming</p>
          <div className="flex justify-center items-center gap-2">
            <p className="text-[14px] ">See more</p>
            <img className="h-4 w-4" src="./images/arrow-right.png" alt="" />
          </div>
        </div>
      </div>
      <section className="container grid grid-cols-5 auto-rows-auto gap-8">
        {upcoming?.results?.slice(0, 10).map((movie) => {
          return (
            <Card
              vote_average={movie.vote_average}
              title={movie.title}
              poster_path={movie.poster_path}
            />
          );
        })}
      </section>

      <section>
        <div className="h-fit w-[1536px]">
          <div className="flex justify-between items-center">
            <p className="text-2xl font-semibold">Popular</p>
            <div className="flex justify-center items-center gap-2">
              <p className="text-[14px] ">See more</p>
              <img className="h-4 w-4" src="./images/arrow-right.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="container grid grid-cols-5 auto-rows-auto gap-8">
        {popular?.results?.slice(0, 10).map((movie) => {
          return (
            <Card
              vote_average={movie.vote_average}
              title={movie.title}
              poster_path={movie.poster_path}
            />
          );
        })}
      </section>

      <section>
        <div className="h-fit w-[1536px]">
          <div className="flex justify-between items-center">
            <p className="text-2xl font-semibold">Top Rated</p>
            <div className="flex justify-center items-center gap-2">
              <p className="text-[14px] ">See more</p>
              <img className="h-4 w-4" src="./images/arrow-right.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="container grid grid-cols-5 auto-rows-auto gap-8">
        {rated?.results?.slice(0, 10).map((movie) => {
          return (
            <Card
              vote_average={movie.vote_average}
              title={movie.title}
              poster_path={movie.poster_path}
            />
          );
        })}
      </section>
      <Footer />
    </div>
  );
};

export default index;
