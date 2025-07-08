import React from "react"
import { Link } from "react-router-dom"
function RecentBlogCards({
  img,
  date,
  comments,
  title,
  desc,
  t,
  MdOutlineMessage,
}) {
  return (
    <div className="col-md-4 col-12" data-aos="fade-up">
      <div className="card recent-card">
        <Link to={"/blog-details"}>
          <img
            src={`/images/${img}`}
            className="card-img-top object-fit-cover"
            alt=""
          />
        </Link>
        <div className="card-body px-0 py-4">
          <p className="date-text">
            {t(date)}
            <MdOutlineMessage className="comment-icon mx-2" />
            {comments}
          </p>
          <h5 className="card-title mt-2 mb-3">{t(title)}</h5>
          <p className="card-text">{t(desc)}</p>
        </div>
      </div>
    </div>
  )
}

export default RecentBlogCards
