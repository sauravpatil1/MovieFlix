export function getQueryParams({
  selectedIdsSet,
}: {
  selectedIdsSet: Set<number>;
}) {
  const genres = [...selectedIdsSet].join('|');
  return `with_genres=${genres}&sort_by=popularity.desc&page=1&vote_count.gte=100`;
}
