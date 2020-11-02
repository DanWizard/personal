import React from "react";

const RowsContext = React.createContext({});

export const RowsProvider = RowsContext.Provider;
export const RowsConsumer = RowsContext.Consumer;
export default RowsContext;
