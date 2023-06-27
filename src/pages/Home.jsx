import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbar from "../layout/Navbar";
import AddTocard from "../components/cards/addTocard";

export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8000/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8000/user/${id}`);
    loadUsers();
  };

  return (
    <>
    <Navbar/>
    <div className="flex py-4 container">
        <AddTocard/>
        <AddTocard/>
        <AddTocard/>
        <AddTocard/>
      </div>
    </>
  );
}
