import React from "react"
import { MdOutlineMessage } from "react-icons/md"
import { useTranslation } from "react-i18next"
import RecentBlogCards from "./RecentBlogCards"
import RecentBlogTitle from "./RecentBlogTitle"

function RecentBlogSection({
  recentItems,
  Pagination,
  totalPages,
  currentPage,
  handleChangePage,
  handlePrevPage,
  handleNextPage,
}) {
  const { t } = useTranslation("common")
  return (
    <section className="recent-blog">
      <div className="mainContainer">
        <div className="row">
          <RecentBlogTitle t={t} />
        </div>
        <div className="row row-gap-5">
          {recentItems.map((item) => (
            <RecentBlogCards
              key={item.id}
              {...item}
              t={t}
              MdOutlineMessage={MdOutlineMessage}
            />
          ))}
        </div>
        {Pagination && (
          <Pagination
            handleChangePage={handleChangePage}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        )}
      </div>
    </section>
  )
}

export default RecentBlogSection
