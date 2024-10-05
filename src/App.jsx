import Main from "./components/Main"
import SideBar from "./components/SideBar"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
const App = () => {
  const API_KEY = import.meta.env.VITE_NASA_API_KEY;
  const [showModel, setModel] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  function toggleModel() {
    setModel(!showModel);
  }
  useEffect(() => {
    async function fetchAPIData() {
      console.log(API_KEY);
      const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
      const today = (new Date).toDateString();
      const localKey = `NASA_+${today}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log("Fetched from localstorage today");
        return;
      }
      localStorage.clear();
      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log("Fetched from API today");
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchAPIData();
  }, []);
  return (
    <>
      {data ? (<Main data={data} />) :
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      }
      {showModel && (<SideBar data={data} toggleModel={toggleModel} />)}
      {data && (<Footer data={data} toggleModel={toggleModel} />)}
    </>
  )
}

export default App