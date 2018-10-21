import React, { Component } from "react";

class Survey extends Component {
  render() {
    const url = 'https://www.surveymonkey.com/survey-taken/?sm=8nkMhykIiYqryenN_2FZygtcl0ri0mj05MCTJTbwUg0aw2revuzA0WGa_2B_2BUI9UHB6u1M8HjrU7vCBZuXOWNXZ511e9bVoPr5QlsBa2U2TmT6Q_3D'
    return (
      <a className="button is-link is-large" href={url}>
        Take a survey
      </a>
    );
  }
}

export default Survey;
