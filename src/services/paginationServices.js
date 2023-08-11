const handleNextPage = (currentPage, totalPages) => {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1
  }
}

const handlePrevPage = (currentPage) => {
  if (currentPage.value > 1) {
    currentPage.value -= 1
  }
}

const handlePaginatedPeople = (
  filteredPeople,
  currentPage,
  itemsPerPage
) => {
  // start index based on items per page
  const startIndex = (currentPage.value - 1) * itemsPerPage
  // end index based on the start index + total allowed items
  const endIndex = startIndex + itemsPerPage
  // return sliced object array using
  return filteredPeople.value.slice(startIndex, endIndex)
}

export {
  handleNextPage,
  handlePrevPage,
  handlePaginatedPeople
}
