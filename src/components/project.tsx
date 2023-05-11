import Image from 'next/image';
import { useEffect, useState } from 'react';
import Carousel from './utils/owl-carousel';

const projectPics = ['portal-login', 'portal-signup', 'portal-dashboard', 'new-ticket'];

export default function Project() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return (
    <section className="py-5" id="project">
      <div className="container">
        <div className="row">
          <div className="col-lg-11 text-center mx-auto col-12">
            <div className="col-lg-8 mx-auto">
              <h2>Projects - A Sneak Peak</h2>
            </div>

            {isMounted && (
              <Carousel>
                {
                  projectPics.map((pic, index) => (
                    <div className="item" key={index}>
                      <Image src={`/images/project/${pic}.png`} alt="project image" width={700} height={700} />
                    </div>
                  ))
                }
              </Carousel>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}