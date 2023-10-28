import { Progress } from '@/types';
import { Fragment } from 'react';

export type ProgressBarsProps = {
  data: Progress[];
};

const ProgressBars: React.FC<ProgressBarsProps> = ({ data }) => {
  return (
    <section className="about-b bg-dark py-3">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="bottom-line"></div>
        {data.map((progress) => (
          <Fragment key={progress.id}>
            <h4>{progress.title}:</h4>
            <div className="progress">
              <div
                style={{
                  width: `${progress.value}%`,
                }}
              ></div>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default ProgressBars;
