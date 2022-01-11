/* eslint-disable quotes */
import { format } from "date-fns";

export default {
  name: "sampleProject",
  title: "Malerier",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Dette er urlen til maleriet",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "publishedAt",
      title: "Produksjonsdato",
      type: "datetime"
    },
    {
      name: "price",
      title: "Pris",
      type: "string"
    },
    {
      name: "format",
      title: "Format",
      type: "string"
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "figure"
    },
    {
      name: "imagesGallery",
      title: "Bildekarusell",
      type: "array",
      of: [{ type: "image" }]
    },
    {
      name: "body",
      title: "Beskrivelse",
      type: "projectPortableText"
    },
    {
      name: "isSold",
      title: "Solgt",
      type: "boolean"
    },
    {
      name: "relatedProjects",
      title: "Related malerier",
      type: "array",
      of: [{ type: "reference", to: { type: "sampleProject" } }]
    }
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      slug: "slug",
      media: "mainImage"
    },
    prepare({ title = "No title", publishedAt, slug = {}, media }) {
      const dateSegment = format(publishedAt, "YYYY/MM");
      const path = `/${dateSegment}/${slug.current}/`;
      return {
        title,
        media,
        subtitle: publishedAt ? path : "Missing publishing date"
      };
    }
  }
};
