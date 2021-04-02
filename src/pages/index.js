import React from 'react';
import Layout from '../components/Layout';
import ProfileCard from '../components/ProfileCard';
import GroupBlock from '../components/GroupBlock';
import Tag from '../components/Tag';
import VictorImg from '../assets/victor-head.jpg';
import SnowboarderImg from '../assets/snowboarder.png';
import IncreaseImg from '../assets/increase.png';
import GlobeImg from '../assets/globe.png';
import DogImg from '../assets/dog.png';
import CodeImg from '../assets/code.png';
import TrollImg from '../assets/troll.png';
import CardsImg from '../assets/cards.png';
import AnimeImg from '../assets/anime.png';
import AndroidImg from '../assets/android.png';
import './index.css';

const Index = () => (
  <Layout>
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
              <Tag icon={IncreaseImg} text="Stonks" />
              <Tag icon={GlobeImg} text="Frontend Development" />
              <Tag icon={DogImg} text="Animals" />
              <Tag icon={CodeImg} text="Javascript" />
              <Tag icon={TrollImg} text="Memes" />
              <Tag icon={CardsImg} text="Magic" />
              <Tag icon={AnimeImg} text="Anime" />
              <Tag icon={AndroidImg} text="Android" />
            </GroupBlock>
          }
        />
      </div>
    </div>
  </Layout>
);

export default Index;
