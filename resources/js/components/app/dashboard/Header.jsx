import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import moment from 'moment';

export default function () {
  const [data, setData] = useState();

  const today = moment().lang('ka').format('dddd, D MMMM, YYYY');

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
        <header className="header-area header-area2">
          <div className="header-top second-header d-none d-lg-block">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 d-none  d-md-block">
                  <div className="header-cta">
                    <div className="row">
                      <div className="col-lg-3"><div className="h-btn"><span className="icon"><img src="/assets/img/icon/top-trending-icon.png" alt="courses-img1" /></span> </div></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 d-none d-lg-block text-right">
                </div>
                <div className="col-lg-3 col-md-3 d-none d-lg-block">
                  <div className="top-btn" ><i className="fal fa-calendar-alt" /> {today}</div>
                </div>
              </div>
            </div>
          </div>
          <div id="header-sticky" className="menu-area">
            <div className="container">
              <div className="second-menu">
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-2">
                    <div className="logo">
                      <Link to="/"><img src="/assets/img/logo/presa3.png" alt="logo" /></Link>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-7">
                    <div className="main-menu text-right text-xl-right">
                      <nav id="mobile-menu">
                        <ul>
                          <li className="sub">
                            <Link to={"/"}>მთავარი</Link>
                          </li>
                          <li className="sub"><Link to="">კატეგორიები</Link>
                            <ul>
                              {
                                data?.categories?.map((item, key) =>{
                                  return (
                                    <li className="sub" key={key}>
                                      <Link to={`/category/${item.slug}`}>{item.name}</Link>
                                    </li>
                                  )
                                })
                              }
                            </ul>
                          </li>
                          <li><Link to="/about-us">ჩვენ შესახებ</Link></li>

                          <li><Link to="/contact">კონტაქტი</Link></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 d-none d-lg-block mt-20 mb-20">
                    <div className="header-social text-right">
                      <span>
                        <a href={data?.contactUs?.facebook} title="Facebook" target="_blank"><i className="fab fa-facebook-f" /></a>
                        <a href={data?.contactUs?.twitter}  title="Twitter" target="_blank"><i className="fab fa-twitter" /></a>
                      </span>
                      {/*  /social media icon redux */}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mobile-menu" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}