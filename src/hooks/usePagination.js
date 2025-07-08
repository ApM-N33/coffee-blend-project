import { useState } from "react"
import blogRecentItems from "../data/recent-blog-items.json"

function usePagination() {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 3
  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const totalPages = Math.ceil(blogRecentItems.length / itemsPerPage)

  const currentSlicedBlogItems = blogRecentItems
    .map((item, i) => ({
      ...item,
      title: `recent-blog.blogItem${i + 1}.blog_title`,
      date: `recent-blog.blogItem${i + 1}.blog_date`,
    }))
    .slice(startIndex, endIndex)

  const handleChangePage = (btnIndex) => {
    setCurrentPage(btnIndex)
  }

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev !== 0 ? prev - 1 : prev))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) =>
      endIndex >= blogRecentItems.length ? prev : prev + 1
    )
  }

  return {
    currentSlicedBlogItems,
    totalPages,
    currentPage,
    handleChangePage,
    handlePrevPage,
    handleNextPage,
  }
}

export default usePagination
