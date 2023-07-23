import './App.scss'
import { useState } from 'react'
import { useEffect } from 'react';
import { callAPI } from "@/services";
import { checkIfArray } from "@/helpers";
import Cards from "@/components/Cards/Cards";
import TopCards from "@/components/TopCards/TopCards";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    getUsersTopArtists();
  }, []);

  function getUsersTopArtists(){
    callAPI({
        url: `sample.json`, 
        params: {
            method: "get",
        }
    })
    .then((res) => {
        if(res.status === 200){
          checkIfArray(res.data.data);
          setData(res.data.data);
        }else{
            console.log(res);
            if(res.status === 401){
                console.error(res);
            }
        }
    });
  }

  return (
    <>
    <div className="container">
      {
        data.length ?
          <div className="innerWrap flex">
            <TopCards items={data} />
            <Cards items={data} />
          </div>
        : null
      }
        
    </div>
    </>
  )
}

export default App
