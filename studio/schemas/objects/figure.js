export default {
  name: "figure",
  title: "Bilde",
  type: "image",
  options: {
    hotspot: true
  },
  fields: [
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      validation: Rule => Rule.error("You have to fill out the alternative text.").required(),
      description: "Tekst som forklarer bilde (viktig for SEO)",
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "caption"
    }
  }
};
