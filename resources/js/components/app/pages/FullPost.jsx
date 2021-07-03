import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import {useForm} from 'react-hook-form';

export default function (){
  const {register, reset, handleSubmit} = useForm();
  const [data, setData] = useState();

  const {id} = useParams();

  useEffect(() => {
    axios.get(`/api/app/posts/${id}`, {}).then(res => {
      if (res.data.status === 'success') {
        setData(res.data.data);
      }
    });
  }, []);

  const addComment = formData => {
    axios.post(`/api/app/posts/${id}/comment`, formData).then(res => {
      if (res.data.status === 'success') {
        setData(res.data.data);
        reset({})
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
                    <h2>{data?.post?.category.name}</h2>
                    <div className="breadcrumb-wrap">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><Link to={`/`}>მთავარი</Link></li>
                          <li className="breadcrumb-item active" aria-current="page">{data?.post?.category.name}</li>
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
        <section className="inner-blog b-details-p pt-120 pb-80">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="blog-detailss-wrap">
                  <div className="details__content pb-30">
                    <h2>{data?.post?.title}</h2>
                    <div className="meta-info">
                      <ul>
                        <li><i className="fal fa-comments" /> {data?.post?.comments.length} კომენტარი</li>
                        <li><i className="fal fa-calendar-alt" /> {data?.post?.created_at}</li>
                      </ul>
                    </div>
                  <div dangerouslySetInnerHTML={{__html: data?.post?.content}}>

                  </div>
                  </div>
                  <div className="border-top my-3"></div>

                  {
                    data?.post?.comments?.length > 0 && (
                      <div className="comment__wrap pb-45">
                        <div className="comment__wrap-title">
                          <h5>კომენტარები</h5>
                        </div>
                        {
                          data?.post?.comments?.map((item, key) => {
                            return (
                              <div className="single__comment mb-35" key={key}>
                                <div className="comment-text">
                                  <div className="avatar-name mb-15">
                                    <h6>{item.author}</h6>
                                    <span>{item.created_at}</span>
                                  </div>
                                  <p>{item.text}</p>
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    )
                  }
                  <div id="comments" className="comments-area  mt-45">
                    <div id="respond" className="comment-respond">
                      <h3 id="reply-title" className="comment-reply-title">კომენტარის დატოვება </h3>
                      <form className="comment-form" onSubmit={handleSubmit(addComment)}>
                        <p className="comment-field"><i className="fas fa-user" />
                          <input
                            ref={register}
                            placeholder="სახელი"
                            name="author"
                            type="text" />
                        </p>
                        <p className="comment-form-comment">
                          <label htmlFor="comment">კომენტარი</label>
                          <textarea
                            ref={register}
                            name="text"
                            cols={45}
                            rows={8}
                            required="required"
                            defaultValue={""}
                            placeholder="კომენტარი"
                          />
                        </p>
                        <p className="form-submit">
                          <button type="submit" className="submit">დამატება</button>
                        </p>
                      </form>
                    </div>
                    {/* #respond */}
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