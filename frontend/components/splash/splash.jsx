import React from 'react';
import { Link } from 'react-router-dom';


export default () => (
  <div className="welcome">

    <div className = "slogan">Discover.  Listen.  Discuss.  A space to engage with the musical community around you.</div>
    <img className='splash-image' src= "https://s3-us-west-1.amazonaws.com/fullstackfiles/Splash3.png"/>
    <Link className = 'splash-login' to='/guest'><i className="fas fa-music"></i> &nbsp; Try Bandwhich</Link>

  </div>
);


    // <img  src="https://i.imgur.com/i6SLQK4.jpg"/>
