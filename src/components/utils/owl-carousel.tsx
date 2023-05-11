import $ from 'jquery';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import ReactDOMServer from 'react-dom/server';

const OwlCarousel = dynamic(
  () => import('react-owl-carousel'),
  { ssr: false }
);

import { LeftArrow, RightArrow } from './icons';

const options = {
  items: 1,
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true
};

type CarouselOptions = {
  children: React.ReactNode;
  userOpts?: Object;
};

export default function Carousel(
  { children, userOpts = {} }: CarouselOptions
) {
  const finalOpts = { ...options, ...userOpts };

  return (
    <OwlCarousel
      className="owl-theme"
      navText={[
        ReactDOMServer.renderToString(<LeftArrow />),
        ReactDOMServer.renderToString(<RightArrow />)
      ]}
      { ...finalOpts }>
      {children}
    </OwlCarousel>
  );
};