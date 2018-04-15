import React from 'react';
import PropTypes from 'prop-types';
import './ProfileCard.css';

class ProfileCard extends React.Component {
  render() {
    const { fullName, title, image, imageAlt, linkedinUrl, email, githubUrl, twitterUrl, description } = this.props;

    return (
      <div className="ProfileCard">
        <div className="ProfileCard__header">
          <span className="ProfileCard__avatar">
            <img className="ProfileCard__avatar-img" src={image} alt={imageAlt} />
          </span>
          <div className="ProfileCard__fullName">{fullName}</div>
          {title &&
            <div className="ProfileCard__title">{title}</div>
          }
          {description &&
            <div className="ProfileCard__description">{description}</div>
          }
        </div>
        <div className="ProfileCard__footer">
          <div className="ProfileCard__links">
            {linkedinUrl &&
              <div className="ProfileCard__link">
                <a href={linkedinUrl} className="ProfileCard__link-icon fa fa-linkedin" target="_blank">Linkedin</a>
              </div>
            }
            {email &&
              <div className="ProfileCard__link">
                <a href={`mailto:${email}`} className="ProfileCard__link-icon fa fa-envelope" target="_top">
                  Email
                </a>
              </div>
            }
            {githubUrl &&
              <div className="ProfileCard__link">
                <a href={githubUrl} className="ProfileCard__link-icon fa fa-github" target="_blank">Github</a>
              </div>
            }
            {twitterUrl &&
              <div className="ProfileCard__link">
                <a href={twitterUrl} className="ProfileCard__link-icon fa fa-twitter" target="_blank">Twitter</a>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

ProfileCard.propTypes = {
  fullName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  linkedinUrl: PropTypes.string,
  email: PropTypes.string,
  githubUrl: PropTypes.string,
  twitterUrl: PropTypes.string
};

export default ProfileCard;
