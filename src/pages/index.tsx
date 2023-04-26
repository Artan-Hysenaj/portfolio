import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import ProcessesList from '@/components/processes/processes-list/ProcessesList';
import Specializations from '@/components/specials/specializations/Specializations';
import StatsList from '@/components/stats/stats-list/StatsList';
import { processes } from '@/dummy-data/processes';
import { specializations } from '@/dummy-data/specializations';
import { stats } from '@/dummy-data/stats';
import { Fragment } from 'react';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Specializations specializations={specializations} />
      <StatsList stats={stats} />
      <ProcessesList processes={processes} />
    </Fragment>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
