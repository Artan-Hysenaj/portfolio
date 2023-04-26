import { Process } from '@/types';
import ProcessesItem from '../processes-item/ProcessesItem';

export type ProcessesListProps = {
  processes: Process[];
};

const ProcessesList: React.FC<ProcessesListProps> = ({ processes }) => {
  return (
    <section className="processes text-center py-2">
      <div className="container">
        <h2 className="section-title">My Creative Process</h2>
        <div className="bottom-line"></div>
        <p className="lead">
          All of my UI/UX and design projects are based off of a practiced
          formula to get the result that I am looking for
        </p>
        <div className="process">
          {processes.map((process, index) => (
            <ProcessesItem
              key={process.title + index}
              icon={process.icon}
              title={process.title}
              content={process.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessesList;
