import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {Link} from "react-router-dom";

export default function (){
  const [data, setData] = useState();

  const {slug} = useParams();

  useEffect(() => {
    axios.get(`/api/app/categories/${slug}`, {}).then(res => {
      if (res.data.status === 'success') {
        setData(res.data.data);
      }
    });
  }, [slug]);

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
                    <h2>{data?.category.name}</h2>
                    <div className="breadcrumb-wrap">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><Link to={`/`}>მთავარი</Link></li>
                          <li className="breadcrumb-item active" aria-current="page">{data?.category.name}</li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container pt-5 pb-5">
          <div className="row">
            {
              data?.category?.posts?.map((item, key) => {
                return (
                  <div className="col-lg-4 col-md-12" key={key}>

                    <div className="tps-box wow fadeInUp animated hover-zoomin mb-30" data-delay=".4s">
                      <div className="img ">
                        <div className="cat">{data.category.name}</div>
                        <Link to={`/posts/${item.id}`}>
                          <img className="categorized-posts-img" src={item.photo} alt="icon01"/>
                        </Link>
                      </div>
                      <div className="text">
                        <h6><Link to={`/posts/${item.id}`}>{item.title}</Link></h6>
                        <div className="post-tags mt-20">
                          <ul>
                            <li>
                            <span className="icon"><i className="fal fa-clock"/></span>
                                {item.created_at}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </main>
    </div>
  )
}