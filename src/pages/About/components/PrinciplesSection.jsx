import { ABOUT_PRINCIPLES_DATA } from '@/utils/constants';
import './PrinciplesSection.css';

export default function PrinciplesSection() {
  return (
    <section id="principles">
      <div className="wrap">
        <div className="head">
          <h2>How we work</h2>
          <div>
            <p className="lede">Three commitments that decide what we will and will not do.</p>
          </div>
        </div>

        <div className="principles">
          {ABOUT_PRINCIPLES_DATA.map((item, idx) => (
            <div key={idx} className="pr">
              <span className="n">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
