import React from "react";

function Error({ error }) {
  return error ? <p>{error}</p> : null;
}

export default Error;
