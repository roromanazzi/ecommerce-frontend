import React from "react";
import { CollectionsList } from "../components/Products/CollectionsList";
import { TitleLayout } from "./Root";

const CollectionsPage = () => {
  return (
    <div>
      <TitleLayout title={"Collections"} />
      <CollectionsList />
    </div>
  );
};

export default CollectionsPage;
