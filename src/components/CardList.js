import React from "react";
import PropTypes from "prop-types";
import CardListItem from "./CardListItem";
const CardList = ({ cards }) => {
  return cards.length > 0 ? (
    <ul>{cards && cards.map((card) => <CardListItem card={card} />)}</ul>
  ) : (
    <div>
      <h1>No Results</h1>
    </div>
  );
};
CardList.propTypes = {
  cards: PropTypes.array,
};
export default CardList;
