import * as React from 'react';
import PhotoGrid from './PhotoGrid';
import imageMeta from './data/imageMeta';
import Navigation from './Navigation';

const App = () => [
  <Navigation />,
  <div className="container container-fluid">
    <PhotoGrid photos={imageMeta} />
  </div>
];

export default App;
