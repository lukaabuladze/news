import React from "react";
import {Link} from "react-router-dom";

export default function ({posts, title}) {

  return (
    <>
      {
        posts?.length > 0 && (
          <section className="top-store-post-area pt-50 pb-60 fix" style={{background: '#f3f8fb'}}>
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="section-title mb-50">
                        <h4>
                          {title}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {
                      posts?.map((item, key) => {
                        return (
                          <div className="col-lg-6 col-md-12" key={key}>
                            <div className="tps-box wow fadeInUp  hover-zoomin mb-30 animated" data-delay=".4s" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                              <div className="img ">
                                <div className="cat">{item.category.name}</div>
                                <Link to={`/posts/${item.id}`} >
                                  <img className="featured-posts-img" src={item.photo} alt="icon01" />
                                </Link>
                              </div>
                              <div className="text">
                                <h5><Link to={`/posts/${item.id}`}>{item.title}</Link></h5>
                                <div className="post-tags mt-20">
                                  <ul>
                                    <li><a href="#"><span className="icon"><i className="fal fa-clock" /></span> {item.created_at}</a></li>
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
              </div>
            </div>
          </section>
        )
      }
    </>
  )
}