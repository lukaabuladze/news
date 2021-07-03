import React, {useState, useEffect} from 'react';
import Posts from "./sections/Posts";
import FeaturedPosts from './sections/FeaturedPosts';

export default function () {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`/api/app/posts`, {}).then(res => {
      if (res.data.status === 'success') {
        setData(res.data.data);
      }
    });
  }, []);

  return (
    <>
      <FeaturedPosts posts={data?.featured} title={"ჩვენ გირჩევთ"} />

      {
        data?.categories.map((item, key) => {
          return item?.posts?.length > 0 && <Posts posts={item.posts} title={item.name} key={key} />

        })
      }

    </>
  )
}
