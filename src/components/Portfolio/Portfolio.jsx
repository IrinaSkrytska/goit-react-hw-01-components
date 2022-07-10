import propTypes from 'prop-types';
import css from './Portfolio.module.css';


export const Portfolio = ({ username, tag, location, avatar, stats }) => {
    return (
    <div className={css.portfolio}>
    <div className={css.portfolio__thumb}>
    <div className={css.user__info}>
            <img className={css.user__img} key={username} src={avatar} alt="user avatar" width='200'></img>
            <p className={css.username}>{username}</p>
            <p className={css.user__tag}>@{tag}</p>
            <p className={css.user__location}> {location}</p>
     </div>
        
    <ul className={css.stats__thumb}>
     <li className={css.stat}>
      <span className={css.stats__description}>Followers</span>
        <span className={css.stats__amount}>{stats.followers}</span>
    </li>
    <li className={css.stat} >
      <span className={css.stats__description}>Views</span>
     <span className={css.stats__amount}>{stats.views}</span>
    </li>
    <li className={css.stat}> 
      <span className={css.stats__description}>Likes</span>
      <span className={css.stats__amount}>{ stats.likes}</span>
    </li>
    </ul>
    </div></div>);
}

Portfolio.propTypes = {
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
  
    stats: propTypes.exact({
        followers: propTypes.number.isRequired,
        views: propTypes.number.isRequired,
        likes: propTypes.number.isRequired,
    })
}
