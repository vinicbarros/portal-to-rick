import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { ContextDataType } from "../types/ContextDataType";

const InfosContext = createContext({} as ContextDataType);

export function InfosContextProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const value = useMemo(
    () => ({
      page,
      setPage,
      name,
      setName,
      status,
      setStatus,
    }),
    [page, name, status]
  );

  return <InfosContext.Provider value={value}>{children}</InfosContext.Provider>;
}

export const InfosData = () => {
  return useContext(InfosContext);
};
