import "./Header.css";
import { SiThemoviedatabase } from "react-icons/si";
import { IoIosFlame } from "react-icons/io";
import { MdLocalMovies } from "react-icons/md";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#ffc100",
    color: "white"
  },
});

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const history = useHistory();

  useEffect(() => {
    if(value === 0) history.push("/");
    else if (value === 1) history.push("/trending");
    else if (value === 2) history.push("/search");
  }, [value, history]);

  return (
    <>
    <header className="desktop">
      <h1 onClick={() => window.scroll(0, 0)} className="heading">
        <SiThemoviedatabase style={{ margin: "5px 2px -5px 2px" }} />
        Movie Search
      </h1>

      <ul className="nav">
        <li><Link to='/'><MdLocalMovies  style={{ margin: "5px 2px -5px 2px" }} />Movies</Link></li>
        <li><Link to='/trending'><IoIosFlame  style={{ margin: "5px 2px -5px 2px" }} />Trending</Link></li>
        <li><Link to='/search'><AiOutlineSearch  style={{ margin: "5px 2px -5px 2px" }} />Search</Link></li>
      </ul>
    </header>

    <header className="mobile">
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Movies" icon={<MdLocalMovies />} />
      <BottomNavigationAction label="Trending" icon={<IoIosFlame />} />
      <BottomNavigationAction label="Search" icon={<AiOutlineSearch />} />
    </BottomNavigation>
    </header>
    </>
  );
};

export default Header;
