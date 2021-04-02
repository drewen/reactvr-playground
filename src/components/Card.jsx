import 'aframe';
import { Entity } from 'aframe-react';
import React from 'react';

const Card = (props) => {
  const { text, image, position, material, handleSelect } = props;
  const imageEntity = image ? <Entity primitive="a-image" src={image} width="0.60" height="0.25" position={{x: 0, y: 0.28, z: 0.001}} /> : <Entity primitive="a-plane" opacity="0" width="2" height="1" />

  return (
    <Entity
      geometry={{primitive: 'plane', width: 0.66, height: 1}}
      material={material}
      position={position}
      className="interactable"
      events={{
        'click': handleSelect,
      }}
    >
      {imageEntity}
      <Entity text={{ xOffset: 0.02, baseline: 'top', height: 0.55, width: 0.60, color: 'black', value: text, wrapCount: 22 }}/>
    </Entity>
  );
};

export default Card;
