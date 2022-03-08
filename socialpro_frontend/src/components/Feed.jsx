import React, {useState, useEffect} from 'react'
// we use this to find the current path. And the category what the user is currently looking at
import { useParams } from 'react-router-dom'
import {searchQuery, feedQuery} from '../utils/data';


import { client } from '../client';
import MasonryLayout from './MasonryLayout'
// for loading
import Spinner from './Spinner';

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const {categoryId} = useParams();

  useEffect(() =>{
    setLoading(true);
    if(categoryId) {
        const query = searchQuery(categoryId);

        client.fetch(query)
          .then((data) =>{
            setPins(data);
            setLoading(false);
          })
    } else {
      client.fetch(feedQuery)
        .then((data) => {
          setPins(data);
          setLoading(false);
        })
    }
  }, [categoryId]);

  if(loading) return <Spinner message="We are adding something to your pin" />
  return (
    <div>
      {pins && <MasonryLayout pins={pins} />}
    </div>
  )
}

export default Feed