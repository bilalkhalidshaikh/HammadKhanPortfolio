import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import { Facebook, WhatsApp, Share, FileCopy } from "@material-ui/icons";
import { Nav, Navbar } from "react-bootstrap";
import { message, Affix } from "antd";
import { FacebookShareCount, WhatsappShareButton } from "react-share";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    color: "#333",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontWeight: "bolder",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  appbar: {
    backgroundColor: "transparent",
  },
  links: {
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    color: "#333",
    textDecoration: "underline",
  },
}));

export default function TopBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const copySucces = () => {
    message.success("Copied to Clipboard");
  };
  const link = window.location.href;

  return (
    <>
      <Affix>
        <Navbar
          collapseOnSelect
          expand="lg"
          className={(classes.appbar)}
          bg="transparent"
          sticky
        >
          <Navbar.Brand>
            <Typography className={classes.title} variant="h5" noWrap>
              <b>Material-ui</b>
            </Typography>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link>
                <Typography
                  className={classes.links}
                  noWrap
                  component={Link}
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  HOME
                </Typography>
              </Nav.Link>
              <Nav.Link eventKey={2}>
                <Typography
                  className={classes.links}
                  noWrap
                  component={Link}
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  PORTFOLIO
                </Typography>
              </Nav.Link>
              <Nav.Link>
                <Typography
                  className={classes.links}
                  noWrap
                  component={Link}
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  ABOUT
                </Typography>
              </Nav.Link>
              <Nav.Link>
                <Typography
                  className={classes.links}
                  noWrap
                  component={Link}
                  activeClass="active"
                  to="get"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  GET IN TOUCH
                </Typography>
              </Nav.Link>
              <Nav.Link>
                <Button
                  ref={anchorRef}
                  aria-controls={open ? "menu-list-grow" : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                >
                  <Share />
                </Button>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom"
                            ? "center top"
                            : "center bottom",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id="menu-list-grow"
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem onClick={handleClose}>
                              <Facebook />
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                              <WhatsApp />
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                              Copy Link
                              <FileCopy />
                            </MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Affix>
    </>
  );
}
