import React from 'react'
import styles from './Things.module.css';
import { ChevronRightIcon } from '@chakra-ui/icons'
import Slides from './Slides';
import { Heading, Text } from '@chakra-ui/react';


const Things = () => {
  return (
    <div style={{margin:"50px"}}>
       
        <div className={styles.nav}>
        <p>Asia<ChevronRightIcon />India<ChevronRightIcon />Maharashtra<ChevronRightIcon />Pune District<ChevronRightIcon />Pune<ChevronRightIcon />Places to visit in Pune</p>
        <p>Top Things To Do in Pune, Maharastra</p>
        </div>
        
        <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{fontSize: "42px",fontWeight: "700",lineHeight: "50px",marginTop: "50px",color: "black",
					}}>
					Places to Visit in Pune
				</p>
        <button style={{width:"80px",marginTop:'50px',color:"white",padding:"10px",borderRadius:"10px",background:"black"}}>Map</button>

              </div>   
              <br />
              <br />
              <div>
                  <p style={{ fontSize: '24px', textAlign: 'left', fontWeight: '700' }}>Popuar Things to do</p>
                  <br />
                  </div>
                  <Slides />
                 <div>
                  <Heading>Ways to tour Pune</Heading>
                  <Text> Book these experiences for a close-up look at Pune.</Text>
                 </div>
    </div>
  )
}

export default Things