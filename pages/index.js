import { getContentfulClient } from "../core/infrastructure";
import { fetchPlaygrounds } from "../core/application";

export async function getStaticProps() {
  const response = await fetchPlaygrounds(getContentfulClient());

  return {
    props: {
      playgrounds: response.items,
    },
  };
}

export default function Playgrounds({ playgrounds }) {
  console.log(playgrounds);
  return <div>Playgrounds List</div>;
}
