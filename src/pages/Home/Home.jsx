import HomeCard from "../../components/Card/HomeCard";

const Home = () => {
    return (
        <div className="grid grid-cols-3 gap-10 px-10 py-10">
           <HomeCard></HomeCard>
           <HomeCard></HomeCard>
           <HomeCard></HomeCard>
           <HomeCard></HomeCard>
           <HomeCard></HomeCard>
           <HomeCard></HomeCard>
        </div>
    );
};

export default Home;