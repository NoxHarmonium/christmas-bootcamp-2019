import React from "react";

export const BeerItem = ({ beer: { brewery, name, rating } }) => (
  <div>
    <dl>
      <dt>Brewery</dt>
      <dd>{brewery}</dd>
      <dt>Name</dt>
      <dd>{name}</dd>
      <dt>Rating</dt>
      <dd>{rating}</dd>
    </dl>
  </div>
);
