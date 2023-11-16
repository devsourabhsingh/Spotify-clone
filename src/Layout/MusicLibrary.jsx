import React from "react";

const MusicLibrary = ({
  newWidth,
  onClick1,
  onClick2,
  onChange,
  newSearch,
  newDisplay,
}) => {
  return (
    <>
      <div className={`new-library ${newWidth ? "width-5 height-Music" : ""}`}>
        <div className=" container  new-aline-shadow  top-head pt-4">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-basel">
              <button
                className="new-collection mx-2"
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  color: "grey",
                }}
                onClick={onClick1}
              >
                <i class="bi bi-collection" style={{ fontSize: "30px" }}></i>
                {newWidth ? (
                  ""
                ) : (
                  <span className="new-music-library">Your Library</span>
                )}
              </button>
            </div>
            {newWidth ? (
              ""
            ) : (
              <div>
                <button title="Create Playlist or Folder" className="new-btn">
                  <i class="bi bi-plus" style={{ fontSize: "40px" }}></i>
                </button>
                <button className="new-btn">
                  <i
                    class="bi bi-arrow-right-short"
                    style={{ fontSize: "40px" }}
                  ></i>
                </button>
              </div>
            )}
          </div>
          {newWidth ? (
            ""
          ) : (
            <div className=" container selection-folder  pb-2">
              <button>Playlists</button>
              <button>Artists</button>
              <button>Albums</button>
              <button>Podcasts & Shows</button>
            </div>
          )}
        </div>
        <div
          className={`down-scroll container pt-3 ${
            newWidth ? " down-scroll-none" : ""
          }`}
        >
          {newWidth ? (
            ""
          ) : (
            <div
              className=" container arrange-search-library d-flex justify-content-between mb-4
                   "
            >
              <span
                className="search-box"
                style={{
                  color: "white",
                  padding: "0.5rem",
                }}
              >
                <i
                  className="bi bi-search"
                  style={{
                    fontSize: "1.5rem",
                    paddingLeft: "0.5rem",
                    color: "white",
                  }}
                ></i>
                <input
                  className="search"
                  type="search"
                  placeholder="&nbsp;&nbsp;&nbsp;&nbsp;search"
                  value={newSearch}
                  onChange={onChange}
                />
              </span>
              <button>
                <i className="bi bi-list-ul" style={{ fontSize: "1.8rem" }}></i>
              </button>
            </div>
          )}
          {newDisplay.map((item, index) => {
            return (
              <div key={index}>
                <figure
                  className="d-flex align-items-center gap-4"
                  onClick={onClick2}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={item.artwork}
                    class="new-image-library img-thumbnail rounded-circle"
                    alt="..."
                  />
                  <figcaption className="artist-name ">
                    <span className="">
                      <h5 className="mb-0">{item.artist}</h5>
                      <p className="mb-0">Artist</p>
                    </span>
                  </figcaption>
                </figure>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MusicLibrary;
