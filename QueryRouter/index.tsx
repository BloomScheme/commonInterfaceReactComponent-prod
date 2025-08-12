import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { css } from "styled-components";

type Props = {
  root: React.FC;
  routes: { [route: string]: React.FC };
};

export const useQuery = () => {
  const params = location.href.split("?")[1];
  return new URLSearchParams(params);
};

const QueryRouter: React.FC<Props> = (props) => {
  const query = useQuery();
  const route = query.get("route");

  const { root, routes } = props;

  const RouteComponent = route ? routes[route] || root : root;

  return <RouteComponent />;
};

export default QueryRouter;
