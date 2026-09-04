import React from 'react';
import Button from '@/components/ui/Button/Button';
import { COMPANY_DETAILS_DATA } from '@/utils/constants';
import './ContactSection.css';

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="head">
          <h2>Contact</h2>
          <div>
            <p className="lede">
              A short email gets a real reply. If you would rather start with a thirty-minute call, say so and we will send some times.
            </p>
          </div>
        </div>

        <div className="contact">
          <div className="cc">
            <span className="lbl">Small businesses</span>
            <h3>Book an assessment</h3>
            <p>Tell us roughly what you do, how many people, and what eats your week.</p>
            <a className="em" href="mailto:hello@progro.uk?subject=Progro%20assessment">
              hello@progro.uk
            </a>
          </div>
          <div className="cc">
            <span className="lbl">Banks, platforms, practices and public programmes</span>
            <h3>Partnerships</h3>
            <p>Distribution, referral, white label or funded delivery.</p>
            <a className="em" href="mailto:partnerships@progro.uk?subject=Partnership%20enquiry">
              partnerships@progro.uk
            </a>
          </div>
        </div>

        <div className="reg">
          <span className="lbl">Company details</span>
          <dl>
            {COMPANY_DETAILS_DATA.map((item, idx) => (
              <React.Fragment key={idx}>
                <dt>{item.term}</dt>
                <dd className={item.isMono ? 'mono' : ''}>{item.details}</dd>
              </React.Fragment>
            ))}
          </dl>
        </div>

        <div className="acts">
          <Button variant="acc" href="programme.html#start">
            See how the programme works
          </Button>
          <Button variant="line" href="e-invoicing-2029.html#check">
            Take the readiness check
          </Button>
        </div>
      </div>
    </section>
  );
}
