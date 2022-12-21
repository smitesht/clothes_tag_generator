import React from "react";
import { TagWrapper } from "./Tag.style";

const Tag = ({ tagvalue }) => {
  return (
    <div>
      <TagWrapper>{tagvalue}</TagWrapper>
    </div>
  );
};

export default Tag;
