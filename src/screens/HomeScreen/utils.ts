export function getQueryParams({
  searchText,
  selectedIdsSet,
}: {
  searchText: string;
  selectedIdsSet: Set<number>;
}) {
  return `sort_by=popularity.desc&page=1&vote_count.gte=100`;
}
