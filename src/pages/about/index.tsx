import Bio from '@/components/bio/Bio';
import SecondaryLayout from '@/components/layouts/secondary/SecondaryLayout';
import Logos from '@/components/logos/Logos';
import ProgressBars from '@/components/progress/ProgressBars';
import { awards } from '@/dummy-data/awards';
import { logos } from '@/dummy-data/logos';
import { progresses } from '@/dummy-data/progresses';
import { NextPageWithLayout } from '@/pages/page';
import { Fragment } from 'react';

const About: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Bio awards={awards} />
      <ProgressBars data={progresses} />
      <Logos data={logos} />
      {/* <Testimonials data={testimonials} /> */}
    </Fragment>
  );
};

export default About;

About.getLayout = (page) => {
  return <SecondaryLayout>{page}</SecondaryLayout>;
};
