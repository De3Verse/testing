import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import * as React from "react";
import "../../src/css/header.css";
import { NearContext } from "../providers/NearProvider";
import logo from "../assets/images/logo.svg";
import menuIcon from "../assets/images/menuIcon.png";
import logod3 from "../assets/images/logod3.png";
import discordIcon from "../assets/images/discordIcon.png";
import twitterIcon from "../assets/images/twitterIcon.png";
import theme from "../utils/muiTheme";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";

const pages = [
  "Dashboard",
  "Map",
  "Purchase Land",
  "Collectibles",
  "Discord",
  "Twitter",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const useStyles = makeStyles({
  justify: {
    justifyContent: "space-between",
    "&.MuiToolbar-gutters": {
      padding: 0,
    },
  },
  bg: {
    background: theme.Colors.darkBlue900,
    // borderBottom: "1px solid rgb(175 80 242 / 75%)",
    boxShadow: "0px 8px 13px -7px rgb(175 80 242 / 75%)",
  },
  textLight: {
    color: theme.Colors.lightBlue100,
  },
  textWhite: {
    color: theme.Colors.lightBlue100,
  },
  connectBtn: {
    padding: "6px 13px 6px 13px",
    border: "1px solid #AF50F2",
    borderRadius: "12px",
    background: "transparent",
    color: "#AF50F2",
    "&:hover": {
      padding: "6px 13px 6px 13px",
      border: "1px solid #AF50F2",
      borderRadius: "12px",
      background: "transparent",
      color: "white",
      transition: "color 0.3s ease-in-out",
    },
  },
  list: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    margin: "0px",
    "& li": {
      marginRight: "16px",
      fontFamily: "Poppins, sans-serif",
    },
    "& a": {
      textDecoration: "none",
      color: "white",
      "&:hover": {
        color: "#AF50F2",
        transition: "color 0.3s ease-in-out",
      },
    },
  },
  icon: {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFlter: "blur(10px)",
    borderRadius: "25px",
    padding: "8px 15px",
    color: "white",
    height: "max-content",
    marginRight: "5px",
    transition: "0.5s",
  },
});

function Header2() {
  const classes = useStyles();
  const {
    accountId,
    accountNearBalance,
    isConnecting,
    isSignedIn,
    login,
    userNfts,
  } = useContext(NearContext);
  const [nearToUsd, setNearToUsd] = useState();

  useEffect(() => {
    axios
      .get("https://helper.testnet.near.org/fiat", { withCredentials: true })
      .then((nearPrice) => {
        if (nearPrice) {
          setNearToUsd(nearPrice.data.near.usd);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // adiing data into global states
  window.setStates({
    login: isSignedIn,
    userAddress: accountId,
    balance: {
      near: accountNearBalance,
      usd: accountNearBalance * nearToUsd,
    },
    nfts: userNfts,
  });

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Container>
        <div className="header">
          <div className="nav-wrapper">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="menu urbanist">
              <ul>
                

                <li>
                <MenuItem onClick={handleCloseNavMenu}>
                <a href="/lands" style={{ color: "white", textDecoration: 'none' }}>Purchase Land</a>
              </MenuItem>
                </li>
                
                <li>
                <MenuItem onClick={handleCloseNavMenu}>
                <a href="/maps" style={{ color: "white", textDecoration: 'none' }}>Map</a>
              </MenuItem>
                </li>

                <li>
                <MenuItem onClick={handleCloseNavMenu}>
                <a href="/collectibles" style={{ color: "white", textDecoration: 'none' }}>My Collectibles</a>
              </MenuItem>
                </li>

                <li>
                <MenuItem onClick={handleCloseNavMenu}>
                <a href="/city" style={{ color: "white", textDecoration: 'none' }}>City</a>
              </MenuItem>
                </li>

              </ul>
            </div>
            <div className="btn">
              {/* <a href="" className="akira-text">
                Connect Wallet
              </a> */}
              {accountId === null && accountNearBalance === null ? (
                <a className="akira-text akira" onClick={login}>
                  Connect Wallet
                </a>
              ) : (
                <div>
                  <a>{accountId}</a>
                  <a>{accountNearBalance}</a>
                </div>
              )}
            </div>
            <nav role="navigation">
              <div className="Hamburger" id="menuToggle">
                <input type="checkbox" />

                <span></span>
                <span></span>
                <span></span>

                <ul id="menu">
                  <a to="#" style={{ textDecoration: "none" }}>
                    <p>Home</p>
                  </a>
                  <a to="/about" style={{ textDecoration: "none" }}>
                    <p>About </p>
                  </a>
                  <a to="/contact" style={{ textDecoration: "none" }}>
                    <p>Map</p>
                  </a>
                  <a
                    to="#"
                    style={{ textDecoration: "none" }}
                  >
                    <p>Explore</p>
                  </a>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </Container>
    </>
  );
}
export default Header2;
