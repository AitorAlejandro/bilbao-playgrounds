import { createClient } from "contentful";

export function getContentfulClient() {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
  });
}
