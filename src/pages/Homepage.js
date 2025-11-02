// ...existing code...
import React from 'react';
import Interface from '../Interface';
import Slider from '../Components/Slider';
import Mixed from '../Mixed';
import EditionSlider from '../Components/EditionSlider';

export default function Homepage() {
  return (
    <>
      <Interface />
      <Slider />   {/* slider shows hero + READ buttons */}
      <Mixed />    {/* mixed shows cards */}
      <EditionSlider /> {/* edition slider shows cards with links */}
    </>
  );
}
// ...existing code...