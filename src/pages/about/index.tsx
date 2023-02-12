import SecondaryLayout from '@/components/layouts/secondary/SecondaryLayout';
import { NextPageWithLayout } from '../page';

const About: NextPageWithLayout = () => {
  return <>About</>;
};

export default About;

About.getLayout = (page) => {
  return <SecondaryLayout>{page}</SecondaryLayout>;
};
