import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";
import Img from "././../Images/header.jpg";

const useStyles = makeStyles({
  container: {
    height: "80vh",
    padding: "0 20px",
    background: `url(${Img})`,
    border: "1px solid black",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  title: {
    textShadow: "-2px 1px 3px #333",
    color: "white",
    fontFamily: "Fira Sans",
  },
  subTitle: {
    textShadow: "-2px 1px 3px #333",
    color: "white",
  },
});

export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <div id="home">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" className={classes.container}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h2" noWrap className={classes.title}>
            Hammad Khan
          </Typography>
          <Typography variant="h5" noWrap className={classes.subTitle}>
            Professional Photographer
          </Typography>
          <Typography
            component={Link}
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button vocab color="primary" variant="contained">
              See My Portfolio
            </Button>
          </Typography>
        </Container>
      </React.Fragment>
    </div>
  );
}
