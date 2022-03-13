import React, {useState, useEffect} from 'react';
import {MdDownloadForOffline} from 'react-icons/md';
import { Link, useParams } from 'react-router-dom'; 

// most popular library to create unique id's
import { v4 as uuidv4 } from 'uuid';

import { client, urlFor } from '../client';
import MasonryLayout from './MasonryLayout';
// fetch connection and querys
import { pinDetailMorePinQuery, pinDetailQuery } from '../utils/data.js';
import Spinner from './Spinner';


const PinDetail = ({ user }) => {
  const [pins, setPins] = useState(null);
  const [pinDetail, setPinDetail] = useState(null);
  const [comment, setComment] = useState('');
  const [addingComment, setAddingComment] = useState(false);
  // ID..... put the current ID. use 
  // from pins in the dynamic path like :pinId. Use useParams to get the user data from there
  const { pinId } = useParams();

  // add the loading indicator

  if(!pinDetail) return <Spinner message="Loading pin...." />

  const fetchPinDetails = () => {
    const query = pinDetailQuery(pinId);

    // this will return an array of the pins
    if(query){
      client.fetch(query)
      .then((data) => {
         setPinDetail(data[0])
      })
    }
  }

  return (
    <div>PinDetail</div>
  )
}

export default PinDetail