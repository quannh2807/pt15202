import "./assets/css/main.css";

const App = () => (
  <div className="app">
    {/* Header */}
    <header id="header" className="alt">
      <div className="logo">
        <a href="index.html">
          Hielo <span>by TEMPLATED</span>
        </a>
      </div>
      <a href="#menu">Menu</a>
    </header>

    {/* Nav */}
    <nav id="menu">
      <ul className="links">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="generic.html">Generic</a>
        </li>
        <li>
          <a href="elements.html">Elements</a>
        </li>
      </ul>
    </nav>

    {/* Banner */}
    <section className="banner full">
      <article>
        <img src="./images/slide01.jpg" alt="" />
        <div className="inner">
          <header>
            <p>
              A free responsive web site template by{" "}
              <a href="https://templated.co">TEMPLATED</a>
            </p>
            <h2>Hielo</h2>
          </header>
        </div>
      </article>
      <article>
        <img src="./images/slide02.jpg" alt="" />
        <div className="inner">
          <header>
            <p>Lorem ipsum dolor sit amet nullam feugiat</p>
            <h2>Magna etiam</h2>
          </header>
        </div>
      </article>
      <article>
        <img src="./images/slide03.jpg" alt="" />
        <div className="inner">
          <header>
            <p>Sed cursus aliuam veroeros lorem ipsum nullam</p>
            <h2>Tempus dolor</h2>
          </header>
        </div>
      </article>
      <article>
        <img src="./images/slide04.jpg" alt="" />
        <div className="inner">
          <header>
            <p>Adipiscing lorem ipsum feugiat sed phasellus consequat</p>
            <h2>Etiam feugiat</h2>
          </header>
        </div>
      </article>
      <article>
        <img src="./images/slide05.jpg" alt="" />
        <div className="inner">
          <header>
            <p>Ipsum dolor sed magna veroeros lorem ipsum</p>
            <h2>Lorem adipiscing</h2>
          </header>
        </div>
      </article>
    </section>

    {/* One */}
    <section id="one" className="wrapper style2">
      <div className="inner">
        <div className="grid-style">
          <div>
            <div className="box">
              <div className="image fit">
                <img src="./images/pic02.jpg" alt="" />
              </div>
              <div className="content">
                <header className="align-center">
                  <p>maecenas sapien feugiat ex purus</p>
                  <h2>Lorem ipsum dolor</h2>
                </header>
                <p>
                  Cras aliquet urna ut sapien tincidunt, quis malesuada elit
                  facilisis. Vestibulum sit amet tortor velit. Nam elementum
                  nibh a libero pharetra elementum. Maecenas feugiat ex purus,
                  quis volutpat lacus placerat malesuada.
                </p>
                <footer className="align-center">
                  <a href="/#" className="button alt">
                    Learn More
                  </a>
                </footer>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* Footer */}
    <footer id="footer">
      <div className="container">
        <ul className="icons">
          <li>
            <a href="/#" className="icon fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="/#" className="icon fa-facebook">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="/#" className="icon fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="/#" className="icon fa-envelope-o">
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright">&copy; Untitled. All rights reserved.</div>
    </footer>
  </div>
);

export default App;
