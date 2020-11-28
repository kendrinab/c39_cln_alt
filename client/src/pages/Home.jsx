import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const Home = () => {
  const [verified, setVerified] = useState([]);
  const { categories } = useContext(AppContext);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  useEffect(() => {
    axios
      .get('/api/products/?verified=true&limit=10')
      .then((response) => {
        setVerified(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <section id="intro">
        <div className="top-container">
          <img
            src={require('../images/homebackground.png')}
            alt="lotion-image"
            className="lotion"
          />
          <img
            src={require('../images/think.svg')}
            alt="think-title"
            className="think"
          />
          <img
            src={require('../images/clean.svg')}
            alt="clean!-title"
            className="clean"
          />
          <p className="p1">
            Scan a personal care product and get its ingredients, and let us
            direct you to cleaner alternatives!
          </p>
          <button type="submit" className="discover" to="/categories">
            Discover
          </button>
        </div>
      </section>

      <div>
        <img src={require('../images/wave.png')} className="photo-curve" />
      </div>

      <section id="insturctions" className="inner">
        <div className="second-container">
          <div className="inner-container">
            <img
              src={require('../images/clnaltver.svg')}
              alt="cln-alt title"
              className="clnalt-ver"
            />
            <p className="p2">
              Our mission is to inform the way people think about ingredients
              and products they put on their bodies. We want to create a safer,
              more sustainable, more ethical personal care industry.
              <Link to="/userGuide" className="read-more">
                Read more
              </Link>
            </p>
          </div>
          <img
            src={require('../images/verified.svg')}
            alt="verified-icon"
            className="green-verified"
          />
        </div>

        <div className="second-container">
          <div className="how-title">
            <img src={require('../images/howclnalt.svg')} alt="how-title" />
          </div>
          <div className="phone-columns">
            <div className="phone-1">
              <img src={require('../images/phone.svg')} alt="phone-icon" />
              <div className="phone-text">
                <p>SEARCH</p>
                <p>Search a product</p>
              </div>
            </div>
            <div className="phone-2">
              <img src={require('../images/phone.svg')} alt="phone-icon" />
              <div className="phone-text">
                <p>LEARN</p>
                <p>about the ingredients</p>
              </div>
            </div>
            <div className="phone-3">
              <img src={require('../images/phone.svg')} alt="phone-icon" />
              <div className="phone-text">
                <p>FIND</p>
                <p>cleaner alternatives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="inner">
        <div className="third-container">
          <h5 className="home-title1">Browse by Category</h5>
          <ul>
            {categories?.map((category) => (
              <li key={category._id}>
                <img src={category.image} alt={category.title} />
                <p>{category.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="justVerified">
        <div className="fourth-container">
          <h5 className="home-title2">Just Verified</h5>
          <div className="cards-background">
            <img
              src={require('../images/verone.png')}
              className="verifiedphoto-1"
            />
            <img
              src={require('../images/vertwo.png')}
              className="verifiedphoto-2"
            />
            <img
              src={require('../images/verthree.png')}
              className="verifiedphoto-3"
            />
          </div>

          {/* <ul>
          {verified?.map((product) => (
            <li key={product._id}>
              <img src={product.image} alt="product-image" />
              <p>{product.title}</p>
            </li>
          ))}
        </ul> */}
        </div>
      </section>

      <section id="doctors">
        <div className="doc-container">
          <h5 className="home-title3">Wellness Review Board</h5>
          <p className="wellness-text">
            CLN+ALT’s Wellness Board is a team of renowned experts—like
            dermatologists, nutritionists, gynecologists and psychologists—who
            ensure our content is accurate, comprehensive, true and reflective
            of the latest industry research. We strive to be the most trusted
            source in your wellness journey and our Board serves an important
            purpose along the way.
          </p>

          <div className="doc-photos">
            <div>
              <img
                src={require('../images/doctortanner.svg')}
                alt="doctor-photo"
              />
              <p className="doc-name">Dr. Mia Chenna</p>
              <p className="doc-title">Dermatologist</p>
            </div>
            <div>
              <img
                src={require('../images/doctorlee.svg')}
                alt="doctor-photo"
              />
              <p className="doc-name">Dr. Wendy Lee</p>
              <p className="doc-title">Doctor</p>
            </div>
            <div>
              <img
                src={require('../images/doctorchenna.svg')}
                alt="doctor-photo"
              />
              <p className="doc-name">Dr. Dara Chenna</p>
              <p className="doc-title">Cosmetologist</p>
            </div>
          </div>
        </div>
      </section>

      <section id="social">
        <div className="social-container">
          <img
            src={require('../images/follow.svg')}
            alt="follow-us"
            className="follow"
          />
          <div className="insta-photo">
            <img src={require('../images/instaone.jpg')} />
            <img src={require('../images/instatwo.jpg')} />
            <img src={require('../images/insta-three.jpg')} />
          </div>

          <p>We're toxic-free but our emails are intoxicating.</p>
          <p>Sign up for updates and all things natural.</p>
          <form className="email-subscription">
            <input type="email" className="email-subscription" />
            <button type="submit" className="emailbutton-subscription">
              SUBMIT
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
