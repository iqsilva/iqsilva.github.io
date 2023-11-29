import React from "react";
import { Chrono } from "react-chrono";
import { useTranslation } from "react-i18next";
import { experiences } from "../../data";

const Timeline = () => {
  const {t} = useTranslation();

  return (
    <div id="timeline" className="timeline">
        <div className="timeline_texts">
        <h1 className="timeline_title">{t("timeline_title")}</h1>
        <p className="timeline_desc">
          {t("timeline_description")}
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
