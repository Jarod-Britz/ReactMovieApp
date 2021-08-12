import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";

import ContentModal from '../ContentModal/ContentModal';


const SingleContent = ({
  id,
  poster,
  title,
}) => {
  return (
    <ContentModal id={id}>
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <div className="movie-info">
        <h1 className="title">{title}</h1>
      </div>
    </ContentModal>
  );
};

export default SingleContent;
