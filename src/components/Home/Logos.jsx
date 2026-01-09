import React from 'react'

export default function Logos() {
    return (
      <>
        <section>
          <div className="logoSection__partners-strip">
            <div className="logoSection__partners-strip__inner">
              <div className="logoSection__partners-strip__text-container">
                <p className="logoSection__partners-strip__text">
                  We have partnered with leading financial institutions.
                </p>
              </div>

              <div className="logoSection__partners-strip__logos-container">
                <div className="logoSection__partners-strip__logo-item">
                  <div className="logoSection__partners-strip__logo-joined">
                    <img
                      src="/hero/partners/vfd-alone.png"
                      alt="VFD Group"
                      className="logoSection__partners-strip__logo-item__img "
                    />
                    <img
                      src="/hero/partners/naija-Flag.png"
                      alt="nigeria"
                      className="logoSection__partners-strip__logo-item__country-img"
                    />
                  </div>
                </div>

                <div className="logoSection__partners-strip__logo-item">
                  <div className="logoSection__partners-strip__logo-joined">
                    <img
                      src="/hero/partners/rexalogo.png"
                      alt="Rexa"
                      className="logoSection__partners-strip__logo-item__img"
                    />
                    <img
                      src="/hero/partners/naija-Flag.png"
                      alt="nigeria"
                      className="logoSection__partners-strip__logo-item__country-img"
                    />
                  </div>
                </div>

                <div className="logoSection__partners-strip__logo-item">
                  <div className="logoSection__partners-strip__logo-joined">
                    <img
                      src="/hero/partners/vfd-alone.png"
                      alt="VFD Ghana"
                      className="logoSection__partners-strip__logo-item__img"
                    />
                    <img
                      src="/hero/partners/ghana-flag.png"
                      alt="ghana"
                      className="logoSection__partners-strip__logo-item__country-img"
                    />
                  </div>
                </div>

                <div className="logoSection__partners-strip__logo-item">
                  <div className="logoSection__partners-strip__logo-joined">
                    <img
                      src="/hero/partners/kijana-flag.png"
                      alt="Kijana"
                      className="logoSection__partners-strip__logo-item__img"
                    />
                    <img
                      src="/hero/partners/Rwanda-Flag.png"
                      alt="Rwanda"
                      className="logoSection__partners-strip__logo-item__country-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
