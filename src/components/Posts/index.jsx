import React from "react";

const Posts = ({ data, removePost }) => {
  return (
    <section className="container wrapper grid grid-cols-3 gap-4">
      {data.map((post, index) => (
        <div className="box flex-col-reverse pb-5" key={index}>
          <div className="image fit">
            <img src={post.img_url} alt="" />
          </div>
          <div className="content">
            <h3>{post.title}</h3>
            <p>{post.desc}</p>
          </div>
          <div className="align-center">
            <button onClick={() => removePost(post.id)}>Delete</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Posts;
