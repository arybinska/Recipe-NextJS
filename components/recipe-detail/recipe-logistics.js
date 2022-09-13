import PeopleIcon from '../icons/people-icon';
import DateIcon from '../icons/date-icon';
import LogisticsItem from './logistics-item';
import classes from './recipe-logistics.module.css';

function RecipeLogistics(props) {
  const { date, people, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={PeopleIcon}>
          <span>Danie dla : {people} osób</span>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default RecipeLogistics;
