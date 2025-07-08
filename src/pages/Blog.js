import BlogHeroSection from "../components/Main/BlogHeroSection/BlogHeroSection"
import RecentBlogSection from "../components/Main/RecentBlogSection/RecentBlogSection"
import usePagination from "../hooks/usePagination"
import Pagination from "../components/Pagination/Pagination"

function Blog() {
  const {
    currentSlicedBlogItems,
    totalPages,
    currentPage,
    handleChangePage,
    handlePrevPage,
    handleNextPage,
  } = usePagination()
  return (
    <main className="main blog-main">
      <BlogHeroSection />
      <RecentBlogSection
        recentItems={currentSlicedBlogItems}
        totalPages={totalPages}
        currentPage={currentPage}
        handleChangePage={handleChangePage}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        Pagination={Pagination}
      />
    </main>
  )
}

export default Blog
