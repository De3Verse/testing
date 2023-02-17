import "../css/dashboard.css";
import "../css/mDashboard.css";
import Sidebar from "../components/Sidebar";
import Header from "./Header";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import theme from "../utils/muiTheme";
import { navigate } from "@reach/router";
import galleryUp from "../../src/assets/images/galleryUp.svg";
import galleryDown from "../../src/assets/images/galleryDown.svg";
import useSWR from "swr";
import prismicFetcher from "../utils/prismicFetcher";
import { RichText } from "prismic-reactjs";
import { useContext } from "react";
import { NearContext } from "../providers/NearProvider";
import { FETCH_OWNED_NFTS } from "../utils/constants";
import avatar from "../assets/images/avatarsec.png";
import part1 from "../assets/images/part1.svg";
import part2 from "../assets/images/part2.svg";
import part3 from "../assets/images/part3.svg";
import part4 from "../assets/images/part4.svg";
import part5 from "../assets/images/part5.svg";
import part6 from "../assets/images/part6.svg";
import toroid from "../assets/images/toroid.svg";
import footfb from "../assets/images/footerfb.svg";
import footinsta from "../assets/images/footerinsta.svg";
import footln from "../assets/images/footerldn.svg";
import footyt from "../assets/images/footeryt.svg";
import gal1 from "../assets/images/gal1.png";
import gal2 from "../assets/images/gal2.png";
import gal3 from "../assets/images/gal3.png";
import gal4 from "../assets/images/gal4.png";
import gal5 from "../assets/images/gal5.png";
import exp from "../assets/images/Explore.svg";


export default function Dashboard() {
  const { data: games } = useSWR("game", prismicFetcher);
  const { isConnecting, getNftsForAccount } = useContext(NearContext);
  const isGamesLoading = games == null;
  const { data: ownedNfts } = useSWR(
    !isConnecting && !isGamesLoading ? FETCH_OWNED_NFTS : null,
    getNftsForAccount
  );

  const isNftsLoading = ownedNfts == null;

  return (
    <>
      {/* Hero section */}
      <div className="hero">
        <Header />
        <Container>
          <div className="herotext akira">
            <h2>A NEW WORLD</h2>
            <h1>D3Verse</h1>
            <div className="explore">
              <a href="/maps" style={{ color: "white", textDecoration: 'none' }}>
              <img className="eimg" src={exp}></img>
              </a>
              </div>
          </div>
        </Container>

        <div className="heroFooter akira">
          <a href="/maps" style={{ color: "white", textDecoration: 'none' }}>Nature city</a>
          <a href="/maps" style={{ color: "white", textDecoration: 'none' }}>Map</a>
          <a href="/maps" style={{ color: "white", textDecoration: 'none' }}>Sci-fi city</a>
        </div>
      </div>

      {/* Gallery section */}
      <div className="gallery">
        <br />
        <br />
        <div className="gallery-text poppin-text">
          <h1>Header text here</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
        <div className="gallery-box">
          <div className="up">
            <img src={galleryUp} />
          </div>
          <div className="gallery-images">
            <div className="gallery-image">
              <div class="container">
                <div class="pink">
                  <img class="pink" src={gal1}></img>
                </div>
                <div >
                <img class="pink" src={gal2}></img>
                </div>
                <div >
                <img class="pink" src={gal3}></img>
                </div>
                <div >
                <img class="pink" src={gal4}></img>
                </div>
                <div >
                <img class="pink" src={gal5}></img>
                </div>
                
              </div>
            </div>
          </div>
          <div className="down">
            <img src={galleryDown} />
          </div>
        </div>

        <div className="gallery-text2 poppin-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>

          <br />

          <a >CTA</a>
        </div>
      </div>

      {/* Avatar Section */}
      <div className="avatar">
        <div className="avatar-text ">
          <h3 className="">Build your own avatar</h3>
          <p className="poppin-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <br />
          <br />
          <a href="/maps" style={{ color: "white", textDecoration: 'none' }}>Start Building</a>
        </div>

        <div className="avatarImgBox">
          <div>
            <img className="avatar-img" src={avatar}></img>
          </div>
          <a href="/maps" style={{ color: "white", textDecoration: 'none' }}>Start Building</a>
        </div>
      </div>
      {/* Video Section */}
      <div className="video">
        <div className="vheader">
          <h2>Header</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>

        <div className="video-section">
          <div className="vid">
            <iframe
              width="720"
              height="412"
              src="https://www.youtube.com/embed/5WfTEZJnv_8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="vidm">
            <iframe
              width="360"
              height="412"
              src="https://www.youtube.com/embed/5WfTEZJnv_8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="video-text poppin-text">
            <h3>Header</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>

            <a href="/lands" style={{ color: "white", textDecoration: 'none' }}>Start Mining</a>
          </div>
        </div>
      </div>
      {/* Map Section */}
      <div className="map"></div>
      {/* News Section */}
      <div className="news"></div>
      {/* Partner Section */}
      <div className="partner">
        <div className="phead">Our Partners</div>
        <div className="partner-list">
          <img src={part1}></img>
          <img src={part2}></img>
          <img src={part3}></img>
          <img src={part4}></img>
          <img src={part5}></img>
          <img src={part6}></img>
        </div>
      </div>
      {/* Sign-up Section */}
      <div className="sign-up">
        <div className="shead">SIGN UP TODAY</div>
        <div className="points">
          <div className="point">
            <img className="tor" src={toroid}></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
          <div className="point">
            <img className="tor" src={toroid}></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
          <div className="point">
            <img className="tor" src={toroid}></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
        </div>
        <div className="sign-up-btn">
          <a>Sign Up</a>
        </div>
        <br/>
        <br/>
        <div></div>
      </div>
      {/* Footer Section */}
      <div className="ft">
        <div className="footer">
          <div className="fhead akira">DE3VERSE</div>
          <div className="socials">
            <div className="links">
              <h3>Quick Links</h3>
              <div className="qlinks">
                <a>Links</a>
                <a>Links</a>
                <a>Links</a>
                <a>Links</a>
              </div>
            </div>
            <div className="medias">
              <h3 >FOLLOW US ON</h3>
              <div className="qlinks2">
                <a href="#">
                  <img src={footfb}></img>
                </a>
                <a href="https://instagram.com/de3verse">
                  <img src={footinsta}></img>
                </a>
                <a href="#">
                  <img src={footln}></img>
                </a>
                <a href="https://twitter.com/de3verse">
                  <img src={footyt}></img>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">Copyright @De3Verse2022</div>
      </div>
    </>
  );
}
