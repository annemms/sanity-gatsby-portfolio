import S from "@sanity/desk-tool/structure-builder";
import { MdSettings } from "react-icons/md";

const hiddenDocTypes = listItem =>
  !["person", "sampleProject", "siteSettings"].includes(listItem.getId());

export default () =>
  S.list()
    .title("Innhold")
    .items([
      S.listItem()
        .title("Innstillinger")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Innstillinger")
        )
        .icon(MdSettings),
      S.listItem()
        .title("Malerier")
        .schemaType("sampleProject")
        .child(S.documentTypeList("sampleProject").title("Mine malerier")),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
