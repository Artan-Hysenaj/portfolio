import Bio from '@/components/bio/Bio';
import SecondaryLayout from '@/components/layouts/secondary/SecondaryLayout';
import Logos from '@/components/logos/Logos';
import ProgressBars from '@/components/progress/ProgressBars';
import Testimonials from '@/components/testimonials/Testimonials';
import { awards } from '@/dummy-data/awards';
import { logos } from '@/dummy-data/logos';
import { progresses } from '@/dummy-data/progresses';
import { testimonials } from '@/dummy-data/testimonials';
import { NextPageWithLayout } from '@/pages/page';
import { Fragment } from 'react';

const About: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Bio awards={awards} />
      <ProgressBars data={progresses} />
      <Logos data={logos} />
      <Testimonials data={testimonials} />
    </Fragment>
  );
};

export default About;

About.getLayout = (page) => {
  return <SecondaryLayout>{page}</SecondaryLayout>;
};
