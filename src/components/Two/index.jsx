import React, { useState } from "react";

const Two = ({ addPost }) => {
  const [post, setPost] = useState({});
  const onHandleChange = (e) => {
    const { name, value } = e.target;

    setPost({
      ...post,
      [name]: value,
    });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    addPost(post);
    e.target.reset();
  };

  return (
    <section id="two" className="wrapper style1 special">
      <div className="inner">
        <h3>Thêm Bài Viết</h3>

        <div className="mt-10 w-1/2 mx-auto">
          <form action="" onSubmit={onHandleSubmit}>
            <input
              type="text"
              placeholder="Title"
              onChange={onHandleChange}
              name="title"
            />
            <br />
            <input
              type="text"
              placeholder="Image url"
              onChange={onHandleChange}
              name="img_url"
            />
            <br />
            <textarea
              onChange={onHandleChange}
              name="desc"
              placeholder="Description"
            ></textarea>
            <button className="mt-4">Add</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Two;
