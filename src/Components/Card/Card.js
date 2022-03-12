import React from 'react';
import './Card.css';
import CardItem from './CardItem';
import falls from './nat15.jpg';
import mountain from './nat11.jpg';
import boat from './nat12.jpg';
import bigtemple from './nat14.jpg';
import tajmahal from './nat10.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='card-container'>
        <div className='card-wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={falls}
              text='Explore the hidden waterfall deep inside the Kodai Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={mountain}
              text='Theres no wi-fi in the mountains, but i promise youll find a better connections '
              label='Luxury'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={boat}
              text='we TRAVEL not to escape life, but for LIFE not to escape us'
              label='Mystery'
              path='/services'
            />
            <CardItem
               src={bigtemple}
              text='Temple going is for the Purification of the soul'
              label='Spiritual'
              path='/products'
            />
            <CardItem
               src={tajmahal}
              text='Wherever You go, go with all your hearts'
              label='Romantic'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;