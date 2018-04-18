import React from 'react';
import ProfileCard from '../components/ProfileCard';
import VictorImg from "../assets/victor-head.jpg";
import './index.css';

const Index = () => (
  <div className="Index">
    <div className="Index__main">
      <ProfileCard
        fullName="Victor Chen"
        title="Full Stack Software Engineer"
        description="Interests in developing and optimizing web applications."
        image={VictorImg}
        imageAlt="Victor Chen"
        linkedinUrl="https://www.linkedin.com/in/vichen"
        email="chen_victor@ymail.com"
        githubUrl="https://github.com/VictorChen"
        twitterUrl="https://twitter.com/itxVic"
      />
    </div>
  </div>
);

export default Index;
