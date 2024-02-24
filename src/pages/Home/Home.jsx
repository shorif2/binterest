import HomeCard from "../../components/Card/HomeCard";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 gap-10 px-10 py-10">
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
      </div>
    </>
  );
};

export default Home;
