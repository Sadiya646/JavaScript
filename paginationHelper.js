function getPageMetadata(totalItems, pageSize, currentPage) {
  let totalPages = Math.ceil(totalItems / pageSize);

  let startItem = totalItems === 0
    ? 0
    : (currentPage - 1) * pageSize + 1;

  let endItem = Math.min(currentPage * pageSize, totalItems);

  let hasPrev = currentPage > 1;
  let hasNext = currentPage < totalPages;

  return {
    totalPages,
    startItem,
    endItem,
    hasPrev,
    hasNext
  }
}