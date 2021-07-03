import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import {useForm} from 'react-hook-form';

export default function (){
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`/api/app/about-us`, {}).then(res => {
      if (res.data.status === 'success') {
        setData(res.data.data);
      }
    });
  }, []);

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
                    <h2>ჩვენ შესახებ</h2>
                    <div className="breadcrumb-wrap">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><Link to={`/`}>მთავარი</Link></li>
                          <li className="breadcrumb-item active" aria-current="page">ჩვენ შესახებ</li>
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
        <section className="inner-blog b-details-p pt-80 pb-80">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="blog-detailss-wrap">
                  <div className="details__content pb-30">
                  <div dangerouslySetInnerHTML={{__html: data?.aboutUs?.text}}>

                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* inner-blog-end */}
      </main>
    </div>
  )

}