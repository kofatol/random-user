import { User } from "../../interfaces";
import { useState, useEffect, useCallback } from "react";
import { getUsersRequest, cancelSource } from "../../api";

const useUsersData = () => {
  const [usersData, setUsersData] = useState<User[]>([]);
  const [visibleUsers, setVisibleUsers] = useState<User[]>([]);
  const [isLoading, setIsLoadingTo] = useState(false);

  const onUsersSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    filterData(e.target.value.trim());

  const filterData = (searchTerm: string) => {
    if (!searchTerm) {
      return setVisibleUsers(usersData);
    }

    const matchedUsers: User[] = usersData.filter((user) => {
      const fullName = `${user.name.first.toLowerCase()} ${user.name.last.toLowerCase()}`;
      return fullName.includes(searchTerm.toLowerCase());
    });

    setVisibleUsers(matchedUsers);
  };

  const getUsersData = useCallback(async () => {
    setIsLoadingTo(true);
    const res = await getUsersRequest();
    const { results } = await res.data;

    setUsersData(results);
    setVisibleUsers(results);
    setIsLoadingTo(false);
  }, []);

  useEffect(() => {
    getUsersData();
    return cancelSource?.cancel("Operation canceled by user.");
  }, [getUsersData]);

  return { visibleUsers, onUsersSearch, isLoading };
};

export default useUsersData;
