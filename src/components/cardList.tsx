import React from 'react'
import Card from './card'
import { data } from '../data'


interface Props {
  
}

const CardList: React.FC<Props> = () => {
  return(
    <div>
      {data.sections.map(({title, restaurants}, i) => {
        return (
          <div key={i}>
            {title}
            {restaurants.map((item, j) => {
              return (
                <div key={j}>
                  <Card link={item.blurhash} />
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default CardList
