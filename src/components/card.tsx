import React from 'react';
import { BlurhashCanvas } from "react-blurhash";

interface Props {
  link: string, 
  name: string,
  online?: boolean

}

const Card: React.FC<Props> = ({link,name,online}) => {
  return (
    <div className='card'>
      <div className='wrapper'><BlurhashCanvas hash={link} width={250} height={200} punch={1} /></div>
      <h3 className='name'> {name} </h3>
      {online && <p className='online'>Online</p>}
    </div>
  )
  
  
  
}
  


export default Card
