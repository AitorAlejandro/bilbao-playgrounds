export async function fetchPlaygroundBySlug(repository, slug) {
  const response = await repository.fetchPlaygroundBySlug(slug);
  return response;
}
