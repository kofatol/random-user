import { User } from "../../interfaces";
import { useState, useEffect, useCallback } from "react";
import { getUsersRequest, cancelSource } from "../../api";

const useUsersData = () => {
  const [usersData, setUsersData] = useState<User[]>([]);

  const getUsersData = useCallback(async () => {
    try {
      const res = await getUsersRequest();
      const { results } = await res.data;

      setUsersData(results);
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  }, []);

  useEffect(() => {
    getUsersData();
    return cancelSource?.cancel("Operation canceled by the user.");
  }, [getUsersData]);

  return usersData;
};

export default useUsersData;
