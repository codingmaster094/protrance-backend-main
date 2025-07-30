import type { User , Media , Post } from "@/payload-types";

export const Schema = (props:Post) => {
    const image =  props.seo?.meta?.image
return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": props.seo?.meta?.title,
    "description": props.seo?.meta?.description,
    "image": [`${process.env.BASE_DOAMAIN}/${image}`],
    "author": {
      "@type": "Person",
      "name": "Author Name",
    },
    "datePublished": new Date(props.createdAt),
    "dateModified": new Date(props.updatedAt),
}
}
