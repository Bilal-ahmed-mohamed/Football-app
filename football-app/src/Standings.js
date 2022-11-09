
import React, { useState , useEffect } from 'react';
import axios from 'axios'


function Standings() {
  
    const [standings , setStandings] = useState([]);
    useEffect(() => {
       axios('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2022&sort=asc')
       .then(res => {
       // console.log(res.data);
        // console.log(res.data.data);
        // console.log(res.data.data.standings);
         console.log(res.data.data.standings); 
        // console.log(res.data.data.standings[0].team.name);
        setStandings(res.data.data.standings)
       })
        
    }, [])

  return (
    <div className='table'>

      <div className='table-info'>
         
         <div className='table-header'>
            <div className='club-info'>
                <div className='club-info-pstn'> position  </div>
                <div className='club-info-logo' >Logo</div>
                <div className='club-info-name'> name </div>
                
            </div>
            <div className='club-stats'>
                <div>MP</div>
                <div>W</div>
                <div>D</div>
                <div>L</div>
                <div>GF</div>
                <div>GA</div>
                <div>GD</div>
                <div>Pts</div>
             </div>
         </div>
           
           {
            standings.map((standing,index) => (
                
                
                <div className='club-details' key={standing.team.id} > 
                <div className='club-info'>
                        <h2 className='club-info-pstn' > {`${index+1}.`}  </h2>
                      <div className='club-info-logo'>  <img className='club-logo'  src={standing.team.logos[0].href} alt="#" /> </div>  
                        <div  className='club-info-name' > {standing.team.shortDisplayName}  </div>
                 </div>
                 <div className='club-stats' >
                        <div className='club-details-mp' > {standing.stats[3].value} </div>
                        <div className='club-details-wins' > {standing.stats[0].value} </div>
                        <div className='club-details-draws' > {standing.stats[2].value} </div>
                        <div className='club-details-loss' > {standing.stats[1].value} </div>
                        <div className='club-details-GF' > {standing.stats[4].value} </div>
                        <div className='club-details-GA'> {standing.stats[5].value} </div>
                        <div className='club-details-GD'> {standing.stats[9].value} </div>
                        <div className='club-details-Pts'> {standing.stats[6].value} </div>
                 </div>
                </div>
            ))
           }

      </div>
     
    </div>
  )
}

export default Standings
