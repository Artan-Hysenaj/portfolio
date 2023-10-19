import SecondaryLayout from '@/components/layouts/secondary/SecondaryLayout';
import { NextPageWithLayout } from '../page';

const Work: NextPageWithLayout = () => {
  return <>work page</>;
};

export default Work;

Work.getLayout = (page) => {
  return <SecondaryLayout>{page}</SecondaryLayout>;
};
