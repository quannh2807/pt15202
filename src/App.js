import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/tailwind.output.css";
import "./assets/css/main.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import One from "./components/One";
import Two from "./components/Two";
import Posts from "./components/Posts";
import Footer from "./components/Footer";

const App = () => {
  const [listPost, setListPost] = useState([]);
  const API_URL = "http://localhost:3004/posts";

  useEffect(() => {
    function fetchData() {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => setListPost(data))
        .catch((error) => console.log(error));
    }

    fetchData();
  }, []);

  const onHandleRemovePost = (id) => {
    console.log(id);
    const newListPost = listPost.filter((post) => post.id !== id);

    swal({
      title: "Are you sure?",
      text:
        "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setListPost(newListPost);

        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        }).then(() =>
          fetch(`${API_URL}/${id}`, {
            method: "DELETE",
          })
        );
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  const onHandleAddPost = (post) => {
    const newPost = {
      ...post,
    }; // Tao post moi co id

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then(() => {
        setListPost([...listPost, newPost]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Router>
      <div>
        {/* Header */}
        <Header />
        {/* Menu */}
        <Menu />
        {/* Banner */}
        <Banner />
        {/* One */}

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/posts">
            <Posts data={listPost} removePost={onHandleRemovePost} />
          </Route>
          <Route exact path="/create-post">
            <Two addPost={onHandleAddPost} />
          </Route>
        </Switch>

        {/* Two */}

        {/* Post */}

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

const Home = () => (
  <>
    <One />
  </>
);
