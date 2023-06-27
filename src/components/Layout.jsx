import { useState, useEffect, Fragment, useMemo } from "react";
import { Transition } from "@headlessui/react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Table, { AvatarCell, SelectColumnFilter } from './Table'  // new
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Layout() {
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [data, setData] = useState([{"id":1,"firstname":"jonas","lastname":"blue","national_identity":120007,"telephone":"0788888888","email":"john@gmail.com","department":"Human Resource","position":"Manager","laptop_manufacturer":"HP","model":"envy","serial_number":3400}]);
  
  const token = localStorage.getItem('token');
  const navigate = useNavigate(); 

  useEffect(()=>{
    if(!token){
        navigate("/login");
    }
  },[token,navigate])
  useEffect(()=>{
    axios.get("http://localhost:5000/laptops",{ headers: {
      Authorization: `${token}`
    },})
    .then((response)=>{    
       setData(response.data.laptops);
    })
    .catch((error)=>{
      console.log(error);
    })
    // return data;

    // return [...data, ...data, ...data, ...data, ...data, ...data]
  },[])

  function handleResize() {
    if (innerWidth <= 640) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    if (typeof window != undefined) {
      addEventListener("resize", handleResize);
    }

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);
  
  //data with memo

  const columns = useMemo(() => [
    {
      Header: "firstname",
      accessor: 'firstname',      
      imgAccessor: "imgUrl",
      emailAccessor: "email",
    },
    {
      Header: "lastname",
      accessor: 'lastname',
    },
    {
      Header: "national_identity",
      accessor: 'national_identity',
    },
    {
      Header: "telephone",
      accessor: 'telephone',
    },
    {
      Header: "email",
      accessor: 'email',
    },
    {
      Header: "department",
      accessor: 'department',      
      Filter: SelectColumnFilter,  // new
      filter: 'includes',
    },
    {
      Header: "position",
      accessor: 'position',
    },
    {
      Header: "manufacturer",
      accessor: 'laptop_manufacturer',
    },
   
    {
      Header: "Model",
      Cell: AvatarCell,
      accessor: 'model',
    },
    {
      Header: "serial number",
      accessor: 'serial_number',
    },
  ],[])
  // const data = useMemo(() => getData(), [])

  return (
    <>
      <TopBar showNav={showNav} setShowNav={setShowNav} />
      <Transition
        as={Fragment}
        show={showNav}
        enter="transform transition duration-[400ms]"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform duration-[400ms] transition ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <SideBar showNav={showNav} />
      </Transition>
      <main
        className={`pt-16 transition-all duration-[400ms] ${
          showNav && !isMobile ? "pl-56" : ""
        }`}
      >
        <div className="px-4 md:px-16"><Table columns={columns} data={data}/></div>
      </main>
    </>
  );
}
