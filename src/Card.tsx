import * as React from 'react';
const images = require('../res/*.jpg');

const Card = ({ alt, desc, src }: ImageMeta) => (
  <div className="card">
    <img src={images[src]} className="card-img-top" alt={alt} />
    <div className="card-body">
      <p className="card-text">{desc}</p>
    </div>
  </div>
);
export default Card;
