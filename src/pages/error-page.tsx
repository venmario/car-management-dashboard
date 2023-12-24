import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage(): React.JSX.Element {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page">
        <h1>Oops! {error.status}</h1>
        <p>{error.statusText}</p>
        <p>
          <i>{error.data.message}</i>
        </p>
      </div>
    );
  } else {
    return (
      <div id="error-page">
        <h1>Oops! Unexpected Error</h1>
        <p>Something went wrong.</p>
        <p>
          <i>{(error as Error).message}</i>
        </p>
      </div>
    );
  }
}
