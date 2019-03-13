import React from 'react';
import PropTypes from 'prop-types';
import './ProfileCard.css';

class ProfileCard extends React.Component {
  render() {
    const {
      fullName,
      title,
      image,
      imageAlt,
      linkedinUrl,
      email,
      githubUrl,
      twitterUrl,
      renderContent,
    } = this.props;

    return (
      <div className="ProfileCard">
        <div className="ProfileCard__header">
          <span className="ProfileCard__avatar">
            <img
              className="ProfileCard__avatar-img"
              src={image}
              alt={imageAlt}
            />
          </span>
          <div className="ProfileCard__fullName">{fullName}</div>
          {title && <div className="ProfileCard__title">{title}</div>}
          {renderContent}
        </div>
        <div className="ProfileCard__footer">
          <div className="ProfileCard__links">
            {linkedinUrl && (
              <div className="ProfileCard__link">
                <a
                  href={linkedinUrl}
                  rel="noopener noreferrer"
                  className="ProfileCard__link-icon fab fa-linkedin"
                  target="_blank"
                >
                  Linkedin
                </a>
              </div>
            )}
            {email && (
              <div className="ProfileCard__link">
                <a
                  href={`mailto: rel="noopener noreferrer"${email}`}
                  className="ProfileCard__link-icon fas fa-envelope"
                  target="_top"
                >
                  Email
                </a>
              </div>
            )}
            {githubUrl && (
              <div className="ProfileCard__link">
                <a
                  href={githubUrl}
                  rel="noopener noreferrer"
                  className="ProfileCard__link-icon fab fa-github"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            )}
            {twitterUrl && (
              <div className="ProfileCard__link">
                <a
                  href={twitterUrl}
                  rel="noopener noreferrer"
                  className="ProfileCard__link-icon fab fa-twitter"
                  target="_blank"
                >
                  Twitter
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

ProfileCard.propTypes = {
  renderContent: PropTypes.node,
  fullName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  linkedinUrl: PropTypes.string,
  email: PropTypes.string,
  githubUrl: PropTypes.string,
  twitterUrl: PropTypes.string,
};

export default ProfileCard;
