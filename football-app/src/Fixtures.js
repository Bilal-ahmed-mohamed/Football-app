import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'

function Fixtures() {

  const [fixtures , setFixtures] = useState([]);


  // const acessToken = "926a67d10933485c845697460cc34b4c";
  // const apiurl = "https://api.football-data.org/v4/competitions/PL/matches?matchday=2";


// let auth = `926a67d10933485c845697460cc34b4c`; //auth key
// let url = `https://api.football-data.org/v4/competitions/PL/matches?matchday=2`; //api url

// useEffect(() => {


// axios({
//     method: 'get',
//     url: url,
//     headers: {
//         "Authorization": auth
//     },
// }).then(function (res) {
//     console.log(res.data)
// });
// } , [])

const options = {
	method: 'GET',
	headers: {
    'mode': 'no-cors',
		'API-Key': '9c6c309d07mshad2e6f398cc6ab9p149ed5jsn98c2bcd73c98'
		
	}
};

fetch('https://api.football-data.org/v4/competitions/PL/matches?matchday=3', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
  
  return (
    <div className='fixtures'>
      <div className='fixtures-area'>
        <span className='fixtures-row'>
          <div className='home-team'>name</div>
          <div className='home-team-logo'>logo</div>
          <div className='fixture-time'>time</div>
          <div className='away-team-logo'>logo</div>
          <div className='away-team'>name</div>
        </span>
      </div>
    </div>
  )
}

export default Fixtures