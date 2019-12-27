import React, { useCallback, useState } from "react";
import { postBeerAsync } from "../state/actions/post-beer";
import { connect } from "react-redux";

export const BeerAdd = ({ dispatchPostBeer }) => {
  const [formState, setFormState] = useState({});

  const onChange = useCallback(
    e => {
      const el = e.target;
      const changeState = {
        ...formState,
        [el.id]: el.type === "number" ? el.valueAsNumber : el.value
      };
      setFormState(changeState);
    },
    [formState, setFormState]
  );

  const onSubmit = useCallback(
    e => {
      console.log(formState);
      console.log(dispatchPostBeer);

      e.preventDefault();
      dispatchPostBeer(formState);
    },

    [formState, dispatchPostBeer]
  );

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Brewery</label>
        <input
          type="text"
          className="form-control"
          id="brewery"
          placeholder="Little Creatures"
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Pale ale"
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Rating</label>
        <input
          type="number"
          className="form-control"
          id="rating"
          onChange={onChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  dispatchPostBeer: postBeerAsync
};

export default connect(undefined, mapDispatchToProps)(BeerAdd);
