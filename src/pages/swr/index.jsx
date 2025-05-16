import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SWR = () => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";
  const { data, error, isLoading } = useSWR(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    (url) => fetcher(url, { headers: { Authorization: `Bearer ${token}` } })
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);

  return (
    <div>
      {data.results.map((post) => {
        return (
          <div>
            <img src={post.poster_path} alt="" />
            <h1>{post.title}</h1>
            <p>{post.vote_average}</p>
            <img
              src={`https://image.tmdb.org/t/p/w300${post.poster_path}`}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default SWR;
