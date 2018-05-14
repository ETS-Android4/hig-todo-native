import React from "react";
import { Text } from "react-native";

import FilterLink from "../containers/FilterLink";

import { VisibilityFilters } from "../actions";

const Footer = () => (
  <Text>
    Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    {", "}
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    {", "}
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </Text>
);

export default Footer;
