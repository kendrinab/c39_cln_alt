import React from 'react';
import Meter from '../components/Meter';

const UserGuide = () => {
  return (

    <div className="inner">
      <h6 className="userguide-title">User's Guide</h6>

      <section>
        <img src={require('../images/verified.svg')} alt="verified" />
        <p className="what-does">
          What does the CLN+ALT&#8482; verfied mark mean?
        </p>
        <p className="userguide-paragraph">
          When you see the CLN+ALT&#8482; mark on personal care products, you
          will know that the product meets CLN+ALT's strictest criteria for
          transparency and health. When you see the mark, you can be confident
          that the product:
        </p>
        <ul className="userguide-paragraph user">
          <img
            src={require('../images/okcircle.svg')}
            className="userguide-check"
          />
          <li>Avoids CLN+ALT's ingredients of concern</li>
          <img
            src={require('../images/okcircle.svg')}
            className="userguide-check"
          />
          <li>Full transparency</li>
          <img
            src={require('../images/okcircle.svg')}
            className="userguide-check"
          />
          <li>Good manufacturing practices</li>
        </ul>
      </section>
      <section>
        <img src={require('../images/banned.svg')} alt="banned" />
        <p className="what-does">
          What does the CLN+ALT&#8482; Banned mark mean?
        </p>
        <p className="userguide-paragraph">
          When you see the CLN+ALT&#8482; banned mark on personal care products,
          you will know that the product does not meet CLN+ALT's strictect
          criteria for transparency and health.
        </p>
      </section>
      <section>
        <Meter />
        <p className="what-does">CLN+ALT's Rating Score</p>
        <p className="userguide-paragraph">
          The ingredient hazard score, from 1-10, reflects known and suspected
          hazards linked to the ingredients.
        </p>
      </section>
    </div>
  );
};

export default UserGuide;
