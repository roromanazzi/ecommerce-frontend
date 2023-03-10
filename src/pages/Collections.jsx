import React from "react";
import { CollectionsList } from "../components/Collections/CollectionsList";
import { TitleLayout } from "./Root";

const CollectionsPage = () => {
  return (
    <div>
      <TitleLayout title={"Collections"}>
        <CollectionsList />
      </TitleLayout>
    </div>
  );
};

export default CollectionsPage;
