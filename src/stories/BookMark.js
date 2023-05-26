import { useState } from "react";
import classes from "./BookMark.module.css";

function BookMark() {
  const [isBookmarked, setBookmarked] = useState(false);
  const handleClick = () => {
    setBookmarked(!isBookmarked);
  };
  return (
    <>
      <img
        className={isBookmarked ? classes.on : classes.off}
        src={isBookmarked ? "bookmark_on.png" : "bookmark_off.png"}
        onClick={handleClick}
        alt="Bookmark"
      />
    </>
  );
}
export default BookMark;
