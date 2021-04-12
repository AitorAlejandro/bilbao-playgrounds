import { getContentfulClient } from "./getContentfulClient";

class ContentfulRepository {
  constructor(client) {
    this.client = client;
    this.contentType = "playground";
  }

  async fetchPlaygrounds() {
    const playgrounds = await this.client.getEntries({
      content_type: this.contentType,
    });
    return playgrounds;
  }

  async fetchPlaygroundBySlug(slug) {
    const playground = await this.client.getEntries({
      content_type: this.contentType,
      "fields.slug": slug,
    });
    return playground;
  }
}

const contentfulClient = getContentfulClient();
const singleton = Object.freeze(new ContentfulRepository(contentfulClient));

export { singleton as contentfulRepository };
