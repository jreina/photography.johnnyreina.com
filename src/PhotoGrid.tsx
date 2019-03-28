import * as React from 'react';
import * as R from 'ramda';
import Card from './Card';

const PhotoGrid = ({ photos }: { photos: Array<ImageMeta> }) => (
  <div className="row">
    {R.splitEvery(Math.floor(photos.length / 3), photos).map(group => (
      <div className="col-md-4">
        <div className="row">
          <div className="col-12">{group.map(Card)}</div>
        </div>
      </div>
    ))}
  </div>
);

export default PhotoGrid;
