export function getQueryParams({
  searchText,
  selectedIdsSet,
}: {
  searchText: string;
  selectedIdsSet: Set<number>;
}) {
  const genres = [...selectedIdsSet].join('|');
  return `with_keywords=${searchText}&with_genres=${genres}&sort_by=popularity.desc&page=1&vote_count.gte=100`;
}
