import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

// function ncard(val){         //mapping
//       console.log(val);
//       return(
//             <Card
//             imgsrc={val.imgsrc}
//             title ={val.title}
//             sname={val.sname}
//             link={val.link}
//             />  
//       );

// }


const App=() =>(
  <>
  <h1 className="heading_style"> List of Top 5 Netflix series </h1> 

        
  {Sdata.map((val, index) => {       //arrow function
      console.log(index);               //{Sdata.map(ncard)}   //Mapping
       return(
             <Card
             key={val.id}
             imgsrc={val.imgsrc}
             title ={val.title}
             sname={val.sname}
             link={val.link}
    />
   );
   })}


</>
);
export default App;

