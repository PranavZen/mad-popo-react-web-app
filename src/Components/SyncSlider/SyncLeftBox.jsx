import React from "react";

function SyncLeftBox(props) {
  return (
    <div
      className="col-md-6 col-lg-12 aos-init
                aos-animate"
      data-aos="fade-left"
      data-aos-duration="900"
      data-aos-once="true"
    >
      <div className="main-features-box media">
        <span className="main-features-box-number">{props.buttonNumber}</span>
        <div
          className="media-icon circle-sm
                        bg-blue mr-8"
        >
          <span
            className="text-white
                            the-icon"
          >
            {props.buttonIcon}
          </span>
        </div>
        <div className="media-body">
          <h3 className="title mb-2">{props.buttonTitle}</h3>
          <p className="coodiv-text-9 mb-0">{props.buttonData1}</p>
        </div>
      </div>
    </div>
  );
}

export default SyncLeftBox;
