import React from 'react'
import styled from 'styled-components'


const Review = () => {
  return (
      <div className='main' style={{ width: '85%',display:'flex',gap:"20px",margin:'auto',justifyContent:'space-between' }}>
          <div style={{ width: '365px', textAlign: 'left' }}>
              <img width="100%" src={require('./images/upper.png')} alt="" />
              <Title>Review of: Mangeshi Temple</Title>
              <img width="100%" src={require('./images/dots.png')} alt="" />
              <Title>Beautiful temple in Goa.</Title>
              <p>I am always fascinated when visiting religious places around the world. So it is no wonder that I found visiting this site very special. While we were allowed in to see some of the temple grounds it was also very fortuitous that we were able to enter an actual festival. Take time to go visit this temple while you are in Goa. You won’t be disappointed.</p>
          </div>

          <div style={{width:'365px',textAlign:'left'}}>
              <img width="100%" src={require('./images/u2.png')} alt="" />
              <Title>Review of: Fontainhas</Title>
              <img width="100%" src={require('./images/dots.png')} alt="" />
              <Title>Fontainhas, Goa -- Worth a Visit</Title>
              <p>We found it very interesting, the place is colorful and unique but the number of houses and streets are very few so you may end up feeling like this isn't enough ... Overall a good one time visit</p>
          </div>

          <div style={{ width: '365px', textAlign: 'left' }}>
              <img width="100%" src={require('./images/u3.png')} alt="" />
              <Title>Review of: Reis Magos Fort</Title>
              <img width="100%" src={require('./images/dots.png')} alt="" />
              <Title>Well restored fort</Title>
              <p>This fort is located very near Panjim. Burn like all places in Goa you will need your own vehicle to reach this renovated fort located next to a church and the sea . The ticket office closes at 5 PM and the entry fees is Rs50. There are free parking inside the ticket office compound. As it is a fort you have climb a bit.</p>
          </div>
    </div>
  )
}

export default Review

const Title = styled.h4`
font-size:16px;
font-weight:700`

const minPara = styled.p`
font-size:12px;
font-weight:400`