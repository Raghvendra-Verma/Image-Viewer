import React, { useState } from "react";
import "./App.css";

function App() {
  const images = [
    {
      id: 0,
      value:
        "https://media.istockphoto.com/id/1094629964/photo/lake-in%C2%A0zelenci-springs-upper%C2%A0carniola-slovenia.webp?s=1024x1024&w=is&k=20&c=GfAYxZ8g1Ml15BLXhuvDtLh41ifnrMY4WE0T4d2_tb8=",
    },
    {
      id: 1,
      value:
        "https://media.istockphoto.com/id/1080676040/photo/beautiful-landscape-at-mystical-day-with-mountains-and-lake-travel-background-periyar.jpg?s=1024x1024&w=is&k=20&c=FKjy1xaz3QP2vY3tPNNZ4rUnpqfRenBsGSNkrc6ibSI=",
    },
    {
      id: 2,
      value:
        "https://media.istockphoto.com/id/537389352/photo/tropical-rainforest.webp?b=1&s=170667a&w=0&k=20&c=rPxzpapBr16QF47PWJ474qVXE1SjaRImJvt6pClavew=",
    },
    {
      id: 3,
      value:
        "https://media.istockphoto.com/id/1157205177/photo/sunset-with-pebbles-on-beach-in-nice-france.webp?b=1&s=170667a&w=0&k=20&c=pLTGyH6-8c1eLNJwILztQoUzhN2d6likZRKJr9aak5k=",
    },
    {
      id: 4,
      value:
        "https://media.istockphoto.com/id/1195458582/photo/aerial-view-of-misty-mountains-at-sunrise.webp?b=1&s=170667a&w=0&k=20&c=lpAmjnJf-B8JVOwC1bsANg8V-TFxgonnMo4034s0B7U=",
    },
    {
      id: 5,
      value:
        "https://media.istockphoto.com/id/1201252148/photo/butterflies.jpg?s=612x612&w=0&k=20&c=p8gc2ZTDkJCRsI9r2yHGD2Py4LSv7vznpJs0N-H3qRI=",
    },
    {
      id: 6,
      value:
        "https://media.istockphoto.com/id/1126841725/photo/spring-meadow.jpg?s=612x612&w=0&k=20&c=Ss48gYPEBpZfzacJVUk_8aq9ClV9Xg0EO8Rib_JksVc=",
    },
  ];

  const [sliderData, setSliderData] = useState(images[0]);
  const [val, setVal] = useState(0);

  const handleClick = (index) => {
    setVal(index);
    const slider = images[index];
    setSliderData(slider);
  };

  const handleNext = () => {
    let index = val < images.length - 1 ? val + 1 : val;
    setVal(index);
    const slider = images[index];
    setSliderData(slider);
  };
  const handlePrevious = () => {
    let index = val <= images.length - 1 && val > 0 ? val - 1 : val;
    setVal(index);
    const slider = images[index];
    setSliderData(slider);
  };

  return (
    <div className="App">
      <div>
        <h1>Image Viewer</h1>
      </div>
      <button className="btns" onClick={handlePrevious}>
        &lt;
      </button>

      <img src={sliderData.value} height="300" width="500" />
      <button className="btns" onClick={handleNext}>
        &gt;
      </button>
      <div className="flex_row">
        {images.map((data, i) => (
          <div className="thumbnail">
            <img
              className={sliderData.id == i ? "clicked" : ""}
              key={data.id}
              src={data.value}
              onClick={() => handleClick(i)}
              height="80"
              width="100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
