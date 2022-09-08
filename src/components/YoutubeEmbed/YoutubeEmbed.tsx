import React from "react";
import PropTypes from "prop-types";
import "./YoutubeEmbed.css";

interface props {
  embedId: string;
}

const YoutubeEmbed: React.FC<props> = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="800"
      height="440"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
