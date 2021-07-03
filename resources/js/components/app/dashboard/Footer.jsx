import React, {useEffect, useState} from 'react';

export default function () {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`/api/app/home`, {}).then(res => {
      if (res.data.status === 'success') {
        setData(res.data.data);
      }
    });
  }, []);

  return (
    <>
      <div>
        {/* footer */}
        <footer className="footer-bg footer-p fix">
          <div className="copyright-wrap">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  Copyright © 2021 ლუკა აბულაძე
                </div>
                <div className="col-lg-6 text-right text-xl-right">
                  <div className="footer-widget footer-social text-right text-xl-right">
                    <a href={data?.contactUs?.facebook} target="_blank"><i className="fab fa-facebook-f" /></a>
                    <a href={data?.contactUs?.instagram} target="_blank"><i className="fab fa-instagram" /></a>
                    <a href={data?.contactUs?.twitter} target="_blank"><i className="fab fa-twitter" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}