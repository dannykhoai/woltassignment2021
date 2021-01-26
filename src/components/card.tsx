import React from 'react';
import { BlurhashCanvas } from "react-blurhash";

interface Props {
  link: string, 
  name?: string;
  online?: boolean;

}

const Card: React.FC<Props> = ({link}, {name}) => {
  return (
    <div>
      <BlurhashCanvas hash={link} width={100} height={50} punch={1} />
      
    </div>
  )
  
  
  
}
  


export default Card
