import React from "react";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
const FooterAudio = ({
  newSetAudio,
  onClick1,
  onClick2,
  onClick3,
  currentFormattedTime,
  durationFormatted,
  audioRef,
  rangeRef,
  onChange,
  currentTime,
}) => {
  return (
    <>
      <div className="new-player mx-auto ">
        <div className=" new-play-btn d-flex justify-content-center">
          <button>
            <SkipPreviousIcon
              className="play-btn"
              style={{ fontSize: "2.5rem" }}
              onClick={onClick1}
            />
          </button>
          <button>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "30px",
              }}
            >
              {newSetAudio ? (
                <PauseIcon
                  style={{ fontSize: "2.5rem" }}
                  onClick={() => onClick3("pause")}
                />
              ) : (
                <PlayArrowIcon
                  style={{ fontSize: "2.5rem" }}
                  onClick={() => onClick3("play")}
                />
              )}
            </div>
          </button>
          <button>
            <SkipNextIcon
              className="play-btn"
              style={{ fontSize: "2.5rem" }}
              onClick={onClick2}
            />
          </button>
        </div>
        <div className="time-format d-flex justify-content-center align-items-baseline">
          <p>{currentFormattedTime}</p>
          <input
            ref={rangeRef}
            className="input-range"
            type="range"
            min="0"
            max={audioRef.current ? audioRef.current.duration : 100}
            value={currentTime}
            onChange={onChange}
          />
          <p>{durationFormatted}</p>
        </div>
      </div>
    </>
  );
};

export default FooterAudio;
