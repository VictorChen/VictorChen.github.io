import React from 'react';
import ProfileCard from '../components/ProfileCard';
import GroupBlock from '../components/GroupBlock';
import Tag from '../components/Tag';
import VictorImg from "../assets/victor-head.jpg";
import SnowboarderImg from "../assets/snowboarder.png";
import IncreaseImg from "../assets/increase.png";
import GlobeImg from "../assets/globe.png";
import DogImg from "../assets/dog.png";
import CodeImg from "../assets/code.png";
import TvImg from "../assets/tv.png";
import CardsImg from "../assets/cards.png";
import './index.css';

const Index = () => (
  <div className="Index">
    <div className="Index__main">
      <ProfileCard
        fullName="Victor Chen"
        title="Software Engineer"
        image={VictorImg}
        imageAlt="Victor Chen"
        linkedinUrl="https://www.linkedin.com/in/vichen"
        email="chen_victor@ymail.com"
        githubUrl="https://github.com/VictorChen"
        twitterUrl="https://twitter.com/itxVic"
        renderContent={
          <GroupBlock title="Interests">
            <Tag icon={SnowboarderImg} text="Snowboarding" />
            <Tag icon={IncreaseImg} text="Stocks" />
            <Tag icon={GlobeImg} text="Frontend Development" />
            <Tag icon={DogImg} text="Animals" />
            <Tag icon={CodeImg} text="Javascript" />
            <Tag icon={TvImg} text="Westworld" />
            <Tag icon={CardsImg} text="Card Magic" />
          </GroupBlock>
        }
      />
    </div>
  </div>
);

export default Index;
