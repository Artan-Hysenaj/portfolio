import SecondaryLayout from '@/components/layouts/secondary/SecondaryLayout';
import { NextPageWithLayout } from '../page';

const Contact: NextPageWithLayout = () => {
  return <>Contact</>;
};

export default Contact;

Contact.getLayout = (page) => {
  return <SecondaryLayout>{page}</SecondaryLayout>;
};
