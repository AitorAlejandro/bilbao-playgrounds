import { contentfulRepository } from "../core/infrastructure";
import { constants, fetchPlaygrounds } from "../core/application";

import { Playground } from "../components";

export async function getStaticProps() {
  const response = await fetchPlaygrounds(contentfulRepository);

  return {
    props: {
      playgrounds: response.items,
      revalidate: constants.REVALIDATE_TIME,
    },
  };
}

export default function Playgrounds({ playgrounds }) {
  return (
    <div className="container mx-auto my-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {playgrounds.map(({ fields, sys }) => (
          <Playground key={sys.id} title={fields.title} slug={fields.slug} />
        ))}
      </div>
    </div>
  );
}
