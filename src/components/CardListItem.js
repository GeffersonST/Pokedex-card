import React from "react";

const CardListItem = ({ card }) => {
  console.log("card", card);
  return (
    <li>
      <a href="/">
        <img
          className="w-full h-auto"
          src={card.imageUrl}
          alt={`${card.name} Pokemon Card`}
        />
      </a>
    </li>
  );
};

export default CardListItem;
