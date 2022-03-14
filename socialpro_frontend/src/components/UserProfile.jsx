import React, {useState, useEffect} from 'react';
import {AiOutlineLogout} from 'react-icons/ai';
import {useParams, useNavigate} from 'react-router-dom';
import {GoogleLogout} from 'react-google-login';

import {userCreatedPinsQuery, userQuery, userSavedPinsQuery} from '../utils/data';
import { client } from '../client';
import MasonryLayout from './MasonryLayout';

import Spinner from './Spinner';

const randomImage = 'https://source.unsplash.com/1600x900/?nature,photography,technelogoy'

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [pins, setPins] = useState(null);
  const [text, setText] = useState('Created'); //Created/ Saved
  // for the active Button
  const [activeButton, setActiveButton] = useState('created');
  const navigate = useNavigate();
  const {userId} = useParams();


  // fetch our Data for this part:
  useEffect(() => {
    const query = userQuery(userId);
    // with the setUser(data[0]) we get an Array and we want just the first one 
    client.fetch(query)
    .then((data) => {
      setUser(data[0]);
    })
  }, [userId])

  if(!user) {
    return <Spinner message="Loading profile" />
  }




  return (
    <div className="relative pb-2 h-full justify-center items-center">
      <div className="flex flex-col pb-5">
        <div className="relative flex flex-col mb-7">
          <div className="flex flex-col justify-center items-center">
            <img
              src={randomImage}
              className="w-full h-370 2xl:h-510 shadow-lg object-cover"
              alt="banner-picture"
            />
            <img
              className="rounded-full w-20 h-20 -mt-10 shadow-xl object-cover "
              src={user.Image}
              alt="user-pic"
            />
            <h1 className="font-bold text-3xl text-center mt-3">
              {user.userName}
            </h1>
              <div className="absolute top-0 z-1 right-0 p-2">
                {userId === user._id && (
                  <GoogleLogout />
                ) }
              </div>
              
              

          </div>
        </div>
      
      </div>
    </div>
  )
}

export default UserProfile