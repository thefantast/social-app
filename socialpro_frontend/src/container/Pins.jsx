import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Navbar, Feed, PinDetail, CreatePin, Search } from '../components';

const Pins = ({user }) => {
  // we create the searchItem here because we have to share it to multiple components
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="px-2 md:px5">
      <div className="bg-gray-50">
      {/* Navbar with the state as props*/}
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
        <div className="h-full">
          <Routes>
             <Route path="/" element={<Feed />} />
             <Route path="/category/:categoryId" element={<Feed />} />
             {/*We provide in the element the user. The user comming through the props above */}
             <Route path="/pin-detail/:pinId" element={<PinDetail user={user} />} />
             {/*With the props user in create pin we know who created the pin*/}
             <Route path="/create-pin" element={<CreatePin user={user}/>} />
             {/*With that we sharing all the neccessary details, with the states through props */}
             <Route path="/search" element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
             
          </Routes>
        </div>
    </div>
  )
}

export default Pins