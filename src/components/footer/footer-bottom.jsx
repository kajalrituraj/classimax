import React from "react";

const FooterBottom = () => {
  return (
    <footer className="footer-bottom">
      {/* <!-- Container Start --> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-center text-lg-left mb-3 mb-lg-0">
            {/* <!-- Copyright --> */}
            <div className="copyright">
              <p>
                Copyright &copy;{" "}
                <script>
                  var CurrentYear = new Date().getFullYear()
                  document.write(CurrentYear)
                </script>
                . Designed & Developed by{" "}
                <a className="text-white" href="https://themefisher.com">
                  Themefisher
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            {/* <!-- Social Icons --> */}
            <ul className="social-media-icons text-center text-lg-right">
              <li>
                <a
                  className="fa fa-facebook"
                  href="https://www.facebook.com/themefisher"
                ></a>
              </li>
              <li>
                <a
                  className="fa fa-twitter"
                  href="https://www.twitter.com/themefisher"
                ></a>
              </li>
              <li>
                <a
                  className="fa fa-pinterest-p"
                  href="https://www.pinterest.com/themefisher"
                ></a>
              </li>
              <li>
                <a
                  className="fa fa-github-alt"
                  href="https://www.github.com/themefisher"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- Container End -->
  <!-- To Top --> */}
      <div className="scroll-top-to">
        <i className="fa fa-angle-up"></i>
      </div>
    </footer>
  );
};

export default FooterBottom;
