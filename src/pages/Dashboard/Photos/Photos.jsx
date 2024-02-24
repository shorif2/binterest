import React from "react";
import HomeCard from "../../../components/Card/HomeCard";

const Photos = () => {
  return (
    <div>
      <h2>Hazrat photos will be here</h2>
      <div className="grid grid-cols-3 gap-6">
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
      </div>
    </div>
  );
};

export default Photos;
