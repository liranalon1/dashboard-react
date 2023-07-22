import './App.scss'
import { useState } from 'react'
import { useEffect } from 'react';
import { callAPI } from "@/services";
import Cards from "@/components/Cards/Cards";
import Total from "@/components/Total/Total";

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
          setData(res.data);
          // setLoading(false);
        }else{
            console.log(res);
            if(res.status === 401){
                //
            }
        }
    });
  }

  return (
    <>
    <div className="container">
      <h2 className="list-title">{data.title}</h2>
      {
        Object.keys(data).length ?
          <div className="innerWrap flex">
            <Total items={data.data} />
            <Cards items={data.data} />
          </div>
        : null
      }
        
    </div>
    </>
  )
}

export default App
