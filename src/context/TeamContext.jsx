import { createContext, useContext, useState } from "react";

const TeamContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useTeam = () => useContext(TeamContext);

export const TeamProvider = ({ children }) => {
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  const [stats1, setStats1] = useState([]);
  const [stats2, setStats2] = useState([]);

  return (
    <TeamContext.Provider
      value={{
        team1,
        setTeam1,
        team2,
        setTeam2,
        stats1,
        setStats1,
        stats2,
        setStats2,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};
