import { getContentfulClient } from "../core/infrastructure";
import { fetchPlaygrounds } from "../core/application";

import { Playground } from "../components";

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
  return (
    <div className="container mx-auto">
      {playgrounds.map(({ fields, sys }) => (
        <Playground key={sys.id} title={fields.title} slug={fields.slug} />
      ))}
    </div>
  );
}
