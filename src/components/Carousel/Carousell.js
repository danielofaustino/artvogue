import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import gallery1 from '../../assets/gallery/gallery1.jpeg';
import gallery2 from '../../assets/gallery/gallery2.png';
import gallery3 from '../../assets/gallery/gallery3.jpg';

const items = [
  {
    src: gallery1,
    altText: 'Slide 1',
    caption: '',
    header: '',
    key: '1',
  },
  {
    src: gallery2,
    altText: 'Slide 2',
    caption: '',
    header: '',
    key: '2',
  },
  {
    src: gallery3,
    altText: 'Slide 3',
    caption: '',
    header: '',
    key: '3',
  },
];

const Carousell = () => <UncontrolledCarousel items={items} />;

export default Carousell;
