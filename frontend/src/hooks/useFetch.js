import { useState, useEffect } from "react";

function useFetch(url, options = null) {

   const [datas, setDatas] = useState({
      data: null,
      error: null,
      response: null
   });

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(url, options);

            if (!response.ok) {
               // Обробка помилок зі статусом відповіді
               setDatas((prevData) => ({ ...prevData, error: `HTTP error! Status: ${response.status}` }))
               return;
            }

            setDatas((prevData) => ({ ...prevData, response: response }))
            const result = await response.json();
            setDatas((prevData) => ({ ...prevData, data: result }))
         } catch (err) {
            setDatas((prevData) => ({ ...prevData, error: err.message || "Fetch error" }))
         }
      };

      fetchData();
   }, [url]);

   return datas;
}

export default useFetch;