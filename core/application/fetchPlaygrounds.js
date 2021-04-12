export async function fetchPlaygrounds(repository) {
  const response = await repository.fetchPlaygrounds();
  return response;
}
