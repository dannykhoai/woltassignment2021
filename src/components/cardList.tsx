import React from 'react'
import Card from './card'
import { data } from '../data'


interface Props {
  
}

const CardList: React.FC<Props> = () => {
  return(
    <div>

      {data.sections.map(({ title, restaurants }, i) =>{
        return (
          
          <div className="title" key={i}>
            <h1>{title}</h1>

            <div className='card-list' >{restaurants.map((item, j) => {
              return (
                <div key={j}>
                  <Card link={item.blurhash} name={item.name} online={item.online}  />
                </div>
              )
            })}</div>
          </div>
        )
      })}
    </div>
  )
}

export default CardList
