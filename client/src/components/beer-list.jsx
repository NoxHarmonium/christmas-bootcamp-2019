import React from "react";
import { connect } from "react-redux";
import { fetchBeersAsync } from "../state/actions/fetch-beers";
import Loader from "react-loader-spinner";
import { BeerItem } from "./beer-item";
import { useEffect } from "react";


//my routing will go here 

export const BeerList = ({ beers, error, loading, dispatchFetchBeers }) => {
  useEffect(() => {
    dispatchFetchBeers();
  }, [dispatchFetchBeers]);

  if (loading) {
    return <Loader type="ThreeDots" color="#FFFFFF" />;
  }

  if (error !== undefined) {
    return <div>Error: {error.message}</div>;
  }
  if (beers === undefined) {
    return <div></div>;
  }

  return (
    <ul>
      {beers.map((beer, index) => (
        <BeerItem key={index} beer={beer} />
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  const { beers, error, loading } = state;
  return { beers, error, loading };
};

const mapDispatchToProps = {
  dispatchFetchBeers: fetchBeersAsync
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerList);
