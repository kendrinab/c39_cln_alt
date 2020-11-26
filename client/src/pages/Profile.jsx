import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useHistory } from 'react-router-dom';
import ReviewsProfilePage from '../components/ReviewsProfilePage';
import Favorites from '../components/Favorites';
import axios from 'axios';

const Profile = () => {
  const { id } = useParams();
  const { setPopSignUp, currentUser } = useContext(AppContext);
  const history = useHistory();
  const [tab2, setTab2] = useState(true);
  const [profile, setProfile] = useState(null);
  const handleRedirectAdmin = () => {
    setPopSignUp(false);
    history.push(`/admin/${currentUser._id}`);
  };

  useEffect(() => {
    axios
      .get(`/api/users/profile/${id}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setProfile]);

  const reviews = profile?.reviews && profile.reviews;
  const favorites = profile?.favorites && profile.favorites;

  return (
    <div id="profile" className="inner">
      <div className="userContainer columns2">
        <img
          src={profile?.avatar || require(`../images/placeholderUser.png`)}
          alt="profile"
        />
        <div>
          <p>{profile?.name}</p>
          <p>{profile?.email}</p>
          <a className="block" onClick={(e) => setPopSignUp('resetPassword')}>
            Change Password
          </a>
          {currentUser?.admin && (
            <button className="button" onClick={handleRedirectAdmin}>
              MANAGE PRODUCTS
            </button>
          )}
        </div>
      </div>
      <div className="tabs">
        <button
          className={tab2 && 'active'}
          onClick={(e) => {
            setTab2(true);
          }}
        >
          Bookmarks
        </button>
        <button
          className={!tab2 && 'active'}
          onClick={(e) => {
            setTab2(false);
          }}
        >
          Reviews
        </button>
      </div>
      <div className="favorites" style={{ display: !tab2 && 'none' }}>
        <Favorites favorites={favorites} />
      </div>
      <div className="reviews" style={{ display: tab2 && 'none' }}>
        <ReviewsProfilePage reviews={reviews} />
      </div>
    </div>
  );
};

export default Profile;
