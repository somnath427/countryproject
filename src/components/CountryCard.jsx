import React from 'react'
import Countries from '../Countries'

function CountryCard() {
    console.log(Countries)

  return (
<>
    <div class>CountryCard</div>
    <div className="country-card">
  <img src={Countries[0].flags.png} alt={Countries[0].name.common} /> 
  <h3>{Countries[0].name.comon}</h3>
  <p>{Countries[0].capital}</p>
    <div className="country-card-content">
        <p>{Countries[0].population}</p>
        <p>{Countries[0].area}Sq. Km.</p>
        
            </div>

    </div>
    </>
  
    

  )
}

export default CountryCard