import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import Specializations from '@/components/specials/specializations/Specializations';
import StatsList from '@/components/stats/stats-list/StatsList';
import { Fragment } from 'react';
import { NextPageWithLayout } from './page';
import { stats } from '@/dummy-data/stats';
import { specializations } from '@/dummy-data/specializations';

const Home: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Specializations specializations={specializations} />
      <StatsList stats={stats} />
    </Fragment>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
