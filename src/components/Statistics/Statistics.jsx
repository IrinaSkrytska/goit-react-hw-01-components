import propTypes from 'prop-types';
import css from './Statistics.module.css';


function setBg() {
  return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}


export const Statistics = ({title, stats}) => {
  return (<section>
  <h2> </h2>
        {title ? <h2 className={css.title}>{title}</h2> : ''}
        
      <ul className={css.statistics__thumb}>
            {stats.map(el => (<li className={css.statistics__number} key={el.id} style={{backgroundColor: setBg()}} >
        <span>{ el.label}</span>
        <span>{ el.percentage}%</span>
   </li>) )}
      </ul>
</section>)
}

Statistics.propTypes = {
    stats: propTypes.arrayOf(propTypes.exact({
        id: propTypes.string.isRequired,
        label: propTypes.string.isRequired,
        percentage: propTypes.number.isRequired,
    })
    ), 
}