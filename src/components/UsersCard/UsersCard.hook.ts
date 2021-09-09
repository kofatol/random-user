import { User } from "../../interfaces";
import { useState, useEffect, useCallback } from "react";
import { getUsersRequest, cancelSource } from "../../api";

const useUsersData = () => {
  const [usersData, setUsersData] = useState<User[]>([]);
  const [visibleUsers, setVisibleUsers] = useState<User[]>([]);

  const onUsersSearch = (e: React.ChangeEvent<HTMLInputElement>) => filterData(e.target.value);

  const filterData = (searchTerm: string) => {
    if (!searchTerm) {
      return setVisibleUsers(usersData);
    }

    const matchedUsers: User[] = usersData.filter((user) =>
      user.name.first.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setVisibleUsers(matchedUsers);
  };

  const getUsersData = useCallback(async () => {
    const res = await getUsersRequest();
    const { results } = await res.data;

    setUsersData(results);
    setVisibleUsers(results);
  }, []);

  useEffect(() => {
    getUsersData();
    return cancelSource?.cancel("Operation canceled by user.");
  }, [getUsersData]);

  return { visibleUsers, onUsersSearch };
};

export default useUsersData;
