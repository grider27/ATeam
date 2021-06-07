/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Party from '../../../img/Party.png';
import QRcode from '../../../img/qr-code.png';
import ButtonMailto from '../../MailTo/MailTo';

const Certificate = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="row mb-5">
          <div className="col-sm-6 col-lg-6 d-flex justify-content-center">
            <button class="btn btn-primary" onClick={() => window.print()}>Print</button>
          </div>
          <div className="col-sm-6 col-lg-6 d-flex justify-content-center">
            <button class="btn btn-primary"> 
              <ButtonMailto
                label="Email"
                mailto="mailto:no-reply@example.com"
              />
            </button>
          </div>
        </div>
        <div className="container ">
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>

          <div className="row">
            <div className="col-sm-12 col-lg-12 d-flex justify-content-center">
              <h1 className="font-weight-bold">
                CONGRATULATIONS STUDENT NAME!
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-12 d-flex justify-content-center">
              <h3 className="font-weight-bold">
                You have met your reading goal!
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-12 d-flex justify-content-center">
              <img src={Party} alt="People Dancing" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-12 d-flex justify-content-center">
              <h3 className="font-weight-bold">
                Please enjoy this reward to celebrate your achievement...
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-12 d-flex justify-content-center">
              <img className="qrcode" src={QRcode} alt="QR Code" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-12 d-flex justify-content-center">
              <h5 className="font-weight-bold">
                Redeemable at the any of our corporate sponsors.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
