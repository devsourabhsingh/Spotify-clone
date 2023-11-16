import React, { useRef, useState, useEffect } from "react";
import songdb from "../Songdb";
import Sidebar from "../Layout/Sidebar";
import MusicLibrary from "../Layout/MusicLibrary";
import MainBar from "../Layout/MainBar";
import FooterAudio from "../Layout/FooterAudio";

const NewMusic = () => {
  const audioRef = useRef(null);
  let rangeRef = useRef(null);
  const [newWidth, setWidth] = useState(false);
  const [newData, setNewData] = useState(songdb);
  const [newDisplay, setNewDisplay] = useState(songdb);
  const [newSetAudio, setNewAudio] = useState(false);
  const [newSearch, setNewSearch] = useState();
  const [showSong, setShowSong] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentFormattedTime, setCurrentFormattedTime] = useState("0:00");
  const [durationFormatted, setDurationFormatted] = useState("0:00");

  // input range change handler
  const handleChangeSlider = (event) => {
    const value = event.target.value;
    setCurrentTime(value);
    audioRef.current.currentTime = value;
    // audioRef.current.play();
  };
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  //set current Time and duration time
  useEffect(() => {
    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
      setCurrentFormattedTime(formatTime(audioRef.current.currentTime));
      if (audioRef.current.currentTime === audioRef.current.duration) {
        setNewAudio(false);
      }
    };
    const handleLoadedMetadata = () => {
      setDuration(audioRef.current.duration);
      setDurationFormatted(formatTime(audioRef.current.duration));
    };

    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );
    };
  }, [newData]);
  // set input range move according to music
  useEffect(() => {
    if (newSetAudio) {
      const intervalId = setInterval(() => {
        setCurrentTime(audioRef.current.currentTime);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, []);
  // when click on prev button
  const handlePrevClick = () => {
    const newCurrent = newData?.findIndex(
      (newSong) => newSong?.url === currentSong?.url
    );
    const prevSongIndex =
      newCurrent === 1
        ? 0
        : (newCurrent - 1 + newData.length) % newData?.length;
    const prevSong = newData[prevSongIndex];
    setCurrentSong(newData[prevSong]);
    if (prevSong) {
      audioRef.current.src = prevSong.url;
      audioRef.current.play();
    }
  };
  // when click on next button
  const handleNextClick = () => {
    const newCurrent = newData?.findIndex(
      (newSong) => newSong?.url === currentSong?.url
    );

    const nextSongIndex =
      newCurrent === 0 ? 1 : (newCurrent + 1) % newData?.length;
    const nextSong = newData[nextSongIndex];
    setCurrentSong(nextSong);
    if (nextSong) {
      audioRef.current.src = nextSong.url;
      audioRef.current.play();
    }
  };

  const handleClick = () => {
    setWidth(!newWidth);
  };

  // when click on card image title song play
  const handleAudioClick = (url) => {
    if (audioRef.current) {
      audioRef.current.src = url;
      audioRef.current.load();
      audioRef.current.play();
      const clickedSong = songdb.find((song) => song.url === url);
      setCurrentSong(clickedSong);
      // setCurrentTime(0);
    }
    setNewAudio((prev) => !prev);
  };
  //play and pause button song
  const handlePlayClick = (action) => {
    if (action === "pause") {
      setNewAudio(false);
      audioRef.current.pause();
    }
    if (action === "play") {
      setNewAudio(true);
      audioRef.current.play();
    }
  };
  //side bar search
  const handleNewSearch = (event) => {
    const value = event.target.value;
    setNewSearch(value);
    const filterResults = songdb.filter((song) => song.title.includes(value));
    setNewDisplay(filterResults);
  };
  //when click on side bar image give image in main bar
  const handleShowSong = () => {
    setShowSong(true);
    const newFilterItems = newData.filter((target) =>
      newDisplay.includes(target)
    );
    setNewData(newFilterItems);
  };
  const handleSideBar = () => {
    setNewData(songdb);
    setNewDisplay(songdb);
  };
  return (
    <>
      <div className="new-music-bac">
        <div className="new-wrapper">
          {/* first and second row bar */}
          <div
            className={`side-second-bar ${newWidth ? "width-5 axis-hide" : ""}`}
          >
            <Sidebar newWidth={newWidth} onClick={handleSideBar} />
            <MusicLibrary
              newWidth={newWidth}
              onClick1={handleClick}
              onClick2={handleShowSong}
              onChange={handleNewSearch}
              newSearch={newSearch}
              newDisplay={newDisplay}
            />
          </div>

          {/* main barr */}

          <div className={`main-bar ${newWidth ? "width-main" : ""}`}>
            <div className="new-main-shadow"></div>
            <MainBar
              showSong={showSong}
              newData={newData}
              audioRef={audioRef}
              onClick={handleAudioClick}
            />
          </div>
        </div>
        {/* footer audio */}
        <FooterAudio
          onClick1={handlePrevClick}
          onClick2={handleNextClick}
          onClick3={handlePlayClick}
          newSetAudio={newSetAudio}
          currentFormattedTime={currentFormattedTime}
          durationFormatted={durationFormatted}
          audioRef={audioRef}
          rangeRef={rangeRef}
          onChange={handleChangeSlider}
          currentTime={currentTime}
        />
      </div>
    </>
  );
};

export default NewMusic;
