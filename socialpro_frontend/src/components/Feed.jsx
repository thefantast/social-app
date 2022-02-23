import React, {useState, useEffect} from 'react'
// we use this to find the current path. And the category what the user is currently looking at
import { useParams } from 'react-router-dom'

import { client } from '../client';
import MasonryLayout from './MasonryLayout'
// for loading
import Spinner from './Spinner';

const Feed = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>Feed</div>
  )
}

export default Feed