import React from 'react';

import Link from 'next/link';
import { Arrowleft } from '@/app/components/Icons';

const Agreement = () => {
  return (
    <>
      <Link
        href="/connect"
        className="inline-flex items-center text-brand-primary space-x-1.5 mb-5"
      >
        <Arrowleft />
        <span className="text-[17px] leading-5">Back</span>
      </Link>
      <h2 className="font-sf-pro-display font-bold text-brand-primary text-3xl leading-8 tracking-wide mt-4 lg:mt-0">
        Service Agreement
      </h2>
      <div className="space-y-4 text-body mt-5">
        <p>
          <b>Services: </b>Services: Service Provider agrees to provide the
          following services to the Client: [Specify the services in detail]
        </p>
        <p>
          <b>Term: </b> The term of this Agreement shall commence on [Start
          Date] and shall continue until [End Date] unless terminated earlier in
          accordance with the provisions of this Agreement.
        </p>
        <p>
          <b>Payment: </b>Client agrees to pay Service Provider the agreed-upon
          fee as follows: [Specify payment terms, including the amount, due
          date, and acceptable payment methods]
        </p>
        <p>
          <b>Confidentiality: </b> Both Parties agree to treat any confidential
          information shared during the course of this Agreement with the utmost
          confidentiality and not to disclose it to any third parties without
          prior written consent, except as required by law.
        </p>
        <p>
          <b>Intellectual Property: </b> Any intellectual property rights
          associated with the services provided by Service Provider shall remain
          the property of Service Provider unless otherwise specified in a
          separate agreement.
        </p>
        <p>
          <b>Termination: </b> Either Party may terminate this Agreement by
          providing written notice to the other Party at least [number of
          days/weeks/months] in advance. In case of early termination, the
          Client shall be responsible for paying any outstanding fees for the
          services provided up to the termination date.
        </p>
      </div>
    </>
  );
};

export default Agreement;
