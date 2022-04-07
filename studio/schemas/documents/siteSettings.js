export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  __experimental_actions: [
    // 'create',
    "update",
    // 'delete',
    "publish"
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Tittel på forside"
    },
    {
      name: "description",
      type: "text",
      title: "Tekst til forside",
      description: "Describe your portfolio for search engines and social media."
    },
    {
      name: "image",
      title: "Coverbilde til forsiden",
      type: "figure"
    },
    {
      name: "keywords",
      type: "array",
      title: "Nøkkelord",
      description: "Add keywords that describes your portfolio.",
      of: [{ type: "string" }],
      options: {
        layout: "tags"
      }
    },
    {
      name: "portraitImage",
      description: "Portrettbilde til siden om Mari",
      title: "Portrettbilde",
      type: "figure"
    },
    {
      name: "bio",
      description: "Biografi til siden om Mari",
      title: "Biografi",
      type: "projectPortableText"
    }
  ]
};
