// import React, { useEffect } from 'react'

// const FlightApi = () => {
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '1aabe4c8abmsh895375e168d44b4p10bdc7jsn2ead16d422a2',
//             'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
//         }
//     };
    
//     useEffect(()=>{
//      fetchData()
//     },[])
//     const fetchData = async()=>{
//         try{
//             const data = await fetch('https://skyscanner50.p.rapidapi.com/api/v1/searchFlightEverywhereDetails?origin=LOND&CountryId=US&anytime=true&oneWay=false&currency=USD&countryCode=US&market=en-US', options)
//             const json = await data.json()
//             console.log(json)
//         }
//         catch(e){
//             console.log(e)
//         }
     
//     }
//   return (
//     <div>
        
//     </div>
//   )
// }

// export default FlightApi