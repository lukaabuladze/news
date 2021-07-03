import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import {useForm} from 'react-hook-form';

export default function (){
  const {register, reset, handleSubmit} = useForm();
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`/api/app/contact-us`, {}).then(res => {
      if (res.data.status === 'success') {
        setData(res.data.data);
      }
    });
  }, []);

  const sendEmail = data => {
    axios.post(`/api/app/contact-us/send-email`, data).then(res => {
      if (res.data.status === 'success') {
        setData(res.data.data);
      }
    });
  }

  return (
    <div>
      <main>
        {/* breadcrumb-area */}
        <section className="breadcrumb-area d-flex align-items-center" style={{backgroundImage: 'url(/assets/img/testimonial/test-bg.png)'}}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12">
                <div className="breadcrumb-wrap text-left">
                  <div className="breadcrumb-title">
                    <h2>კონტაქტი</h2>
                    <div className="breadcrumb-wrap">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><Link to={`/`}>მთავარი</Link></li>
                          <li className="breadcrumb-item active" aria-current="page">კონტაქტი</li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* inner-blog */}
        <section id="services" className="services-area pt-90 pb-60 fix">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div className="services-box mt-0 mb-30 text-center">
                  <div className="services-icon">
                    <img src="/assets/img/icon/cn-icon1.png" alt="icon01" />
                  </div>
                  <div className="services-content2">
                    <h5>ელფოსტა</h5>
                    <p>{data?.contactUs.email}</p>
                  </div>
                </div>
                <div className="services-box mt-0 mb-30 text-center">
                  <div className="services-icon">
                    <img src="/assets/img/icon/cn-icon2.png" alt="icon01" />
                  </div>
                  <div className="services-content2">
                    <h5>ტელეფონი</h5>
                    <p>{data?.contactUs.phone}</p>
                  </div>
                </div>
                <div className="services-box mt-0 mb-30 text-center">
                  <div className="services-icon">
                    <img src="/assets/img/icon/cn-icon3.png" alt="icon01" />
                  </div>
                  <div className="services-content2">
                    <h5>მისამართი</h5>
                    <p>{data?.contactUs.address}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <form className="contact-form " onSubmit={handleSubmit(sendEmail)}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-name mb-20">
                        <input ref={register} type="text" name="name" placeholder="სახელი" required />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-email mb-20">
                        <input ref={register} type="text" name="surname" placeholder="გვარი" required />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-subject mb-20">
                        <input ref={register} type="text" name="email" placeholder="ელფოსტა" required />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-message mb-45">
                        <textarea ref={register} name="message" cols={30} rows={10} placeholder="შეტყობინება" defaultValue={""} />
                      </div>
                      <div className="slider-btn">
                        <button className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">გაგზავნა</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* inner-blog-end */}
      </main>
    </div>
  )

}