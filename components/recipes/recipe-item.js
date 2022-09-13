import Link from "next/link";

import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import PeopleIcon from "../icons/people-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

import classes from "./recipe-item.module.css";

function RecipeItem(props) {
  const { title, image, date, people, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const exploreLink = `/recipes/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.people}>
            <PeopleIcon />
            <span>{people}</span>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}><span>Show Recipe</span><span className={classes.icon}><ArrowRightIcon /></span></Button>
        </div>
      </div>
    </li>
  );
}

export default RecipeItem;
