import { contentfulRepository } from "../../core/infrastructure";
import {
  constants,
  fetchPlaygrounds,
  fetchPlaygroundBySlug,
} from "../../core/application";

export async function getStaticPaths() {
  const response = await fetchPlaygrounds(contentfulRepository);

  const paths = response.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await fetchPlaygroundBySlug(
    contentfulRepository,
    params.slug
  );

  return {
    props: {
      playground: response.items[0],
      revalidate: constants.REVALIDATE_TIME,
    },
  };
}

export default function PlaygroundDetails({ playground }) {
  return <div>Playground Details {JSON.stringify(playground)}</div>;
}
