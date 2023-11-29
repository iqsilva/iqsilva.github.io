import React from "react";
import { Chrono } from "react-chrono";
import { experiences } from "../../data";

const Timeline = () => {
  return (
    <div className="timeline">
        <div className="timeline_texts">
        <h1 className="timeline_title">Experiences</h1>
        <p className="timeline_desc">
          Go to my Linkedin to see the details of each experience. Click on the
          job you want to know about.
        </p>
      </div>
        <Chrono
            items={experiences}
            theme={{
                primary: '#fff',
                secondary: '#14151d',
                cardBgColor: '#fff',
                titleColor: '#fff',
                titleColorActive: '#fff',
            }}
            mode="VERTICAL_ALTERNATING"
            scrollable={{ scrollbar: false }}
            useReadMore={false}
            hideControls={true}
            disableClickOnCircle={true}
        />
    </div>
  );
};

export default Timeline;
