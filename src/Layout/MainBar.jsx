import React from "react";

const MainBar = ({ showSong, newData, audioRef, onClick }) => {
  return (
    <>
      <div className="main-child-bar">
        {(showSong && (
          <div className="container new-flex">
            {newData?.map((newItem, index) => {
              return (
                <div className="card new-image" key={index}>
                  <img
                    src={newItem.artwork}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body" key={newItem.id}>
                    <audio ref={audioRef} src={newItem.url} />
                    <p
                      className="card-text"
                      style={{ cursor: "pointer" }}
                      onClick={() => onClick(newItem.url)}
                    >
                      {newItem?.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )) ||
          (!showSong && (
            <div className="container new-flex">
              {newData?.map((newItem, index) => {
                return (
                  <div className="card new-image" key={index}>
                    <img
                      src={newItem.artwork}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <audio ref={audioRef} src={newItem.url} />
                      <p
                        className="card-text"
                        style={{ cursor: "pointer" }}
                        onClick={() => onClick(newItem.url)}
                      >
                        {newItem?.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}

        <div className="container footer-div">
          <div className=" d-flex justify-content-between">
            <div className="footer-grid">
              <div>
                <ul>
                  <li>
                    <h5 className="new-head"> Company</h5>
                  </li>
                  <li>About</li>
                  <li>Jobs</li>
                  <li>For the Record</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <h5 className="new-head"> Communities</h5>
                  </li>
                  <li>For Artists</li>
                  <li>Developers</li>
                  <li>Advertising</li>
                  <li>Investors</li>
                  <li>Vendors</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <h5 className="new-head">Useful inks</h5>
                  </li>
                  <li>Support</li>
                  <li>Free Mobile App</li>
                </ul>
              </div>
            </div>
            <div className="new-icons">
              <div className="d-flex gap-4 new-social">
                <a href="https://www.instagram.com/spotify/">
                  <i
                    className="bi bi-instagram"
                    style={{ fontSize: "40px" }}
                  ></i>
                </a>
                <a href="https://twitter.com/spotify">
                  <i
                    className="bi bi-twitter-x"
                    style={{ fontSize: "40px" }}
                  ></i>
                </a>
                <a href="https://www.facebook.com/Spotify">
                  <i
                    className="bi bi-facebook"
                    style={{ fontSize: "40px" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <div className="container pt-3 w-100" style={{ color: "white" }}>
            <hr />
          </div>
          <div className="container last-footer d-flex gap-3 pt-4 ">
            <p>Legal</p>
            <p>Privacy Center</p>
            <p>Privacy Policy</p>
            <p>Cookies</p>
            <p>About Ads</p>
            <p>Accessibility</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBar;
