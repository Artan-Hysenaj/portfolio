import SecondaryLayout from '@/components/layouts/secondary/SecondaryLayout';
import { works } from '@/dummy-data/works';
import Image from 'next/image';
import { NextPageWithLayout } from '../page';

const Work: NextPageWithLayout = () => {
  return (
    <section className="text-center py-3">
      <div className="container">
        <h2 className="section-title">My Work</h2>
        <div className="bottom-line"></div>
        <p className="lead">Check out some of my projects</p>
        <div className="items">
          {works.map((item) => (
            <div key={item.id} className="item">
              <div className="item-image">
                <Image
                  src={item.src}
                  alt={item.altText}
                  width={500}
                  height={500}
                />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">Design</p>
                  <h2 className="item-text-title">Great Gradients</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

Work.getLayout = (page) => {
  return <SecondaryLayout title="Artan Hysenaj | Work">{page}</SecondaryLayout>;
};
