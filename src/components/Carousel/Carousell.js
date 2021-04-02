import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import { dataBase } from '../../data';

export default function Carousell() {
  const { gallery } = dataBase[0];

  return <UncontrolledCarousel items={gallery} />;
}
