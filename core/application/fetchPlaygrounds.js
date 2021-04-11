export async function fetchPlaygrounds(client) {
  const response = await client.getEntries({ content_type: "playground" });
  return response;
}
