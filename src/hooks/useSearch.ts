import React, { useRef } from "react";
import { useAppDispatch } from "./redux";
import { searchProjects } from "../store/slices/projectSlice";

export default function useSearch() {
  const dispatch = useAppDispatch();
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);
  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const searchValue = event.target.value.toLowerCase();
    dispatch(searchProjects(searchValue));
  }
  return function (args: React.ChangeEvent<HTMLInputElement>) {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = setTimeout(() => {
      handleSearch(args);
    }, 300);
  };
}
