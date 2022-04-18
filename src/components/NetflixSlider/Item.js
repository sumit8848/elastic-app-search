import React from "react";
import cx from "classnames";
import SliderContext from "./context";
import ShowDetailsButton from "./ShowDetailsButton";
import Mark from "./Mark";
import "./Item.scss";
import { Col } from "react-bootstrap";

const Item = ({ result }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === result.id.raw;
      const url = result.issue_url.raw;
      return (
        <div
          ref={elementRef}
          className={cx("item", {
            "item--open": isActive,
          })}
          onClick={() => {
            const newWindow = window.open(url, "_blank", "noopener,noreferrer");
            if (newWindow) newWindow.opener = null;
          }}
        >
          {/* <img src={"./images/fallback.jpg"} alt="" /> */}

          <div className="content">
            <div className="content__background">
              <div className="content__background__shadow" />
              <div
                className="content__background__image"
                style={{ backgroundImage: `url(./images/fallback.jpg)` }}
              />
            </div>
            <div className="content__area">
              <div className="content__area__container">
                <div className="content__title">
                  {result.title?.raw.join(", ")}
                </div>
                <div className="content__description">
                  {JSON.parse(result.body.raw)
                    .p[0].split(" ")
                    .slice(0, 20)
                    .join(" ") + "..."}
                </div>
                <div className="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px content__subject">
                  {result.subject?.raw.join(", ")}
                </div>
                <div style={{ borderTop: "1px solid white" }}>
                  <span
                    className="styled-link"
                    style={{ backgroundColor: "black" }}
                  >
                    {result.creator?.raw.join(", ")}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <ShowDetailsButton onClick={() => onSelectSlide(result)} /> */}
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
