import React, { useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const SearchForm = ({ setCards }) => {
  useEffect(() => {
    const getInitialCards = async () => {
      try {
        const { data } = await axios.get(
          "https://api.pokemontcg.io/v1/cards?pageSize=50"
        );
        setCards(data.cards);
      } catch (err) {
        console.error(err);
      }
    };
    getInitialCards();
  }, []);
  return (
    <div>
      <h1>Search Form</h1>
    </div>
  );
};
SearchForm.propTypes = {
  setCards: PropTypes.func,
};
export default SearchForm;
