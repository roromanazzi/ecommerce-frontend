import React from "react";
import { CollectionsList } from "../components/Collections/CollectionsList";
import { data } from "../products";
import { TitleLayout } from "./Root";

const CollectionsPage = () => {
  const collections = data;

  return (
    <div>
      <TitleLayout title={"Collections"}>
        <CollectionsList collections={collections} />
      </TitleLayout>
    </div>
  );
};

export default CollectionsPage;
