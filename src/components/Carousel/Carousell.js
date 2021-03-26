import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import gallery1 from '../../assets/gallery/gallery1.png';

const items = [
  {
    src: gallery1,
    altText: 'Slide 1',
    caption: '',
    header: '',
    key: '1',
  },
  {
    src: gallery1,
    altText: 'Slide 2',
    caption: '',
    header: '',
    key: '2',
  },
  {
    src: gallery1,
    altText: 'Slide 3',
    caption: '',
    header: '',
    key: '3',
  },
];

const Carousell = () => <UncontrolledCarousel items={items} />;

export default Carousell;
