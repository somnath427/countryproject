import React from 'react'

function SelectMenu() {
  return (
    <>
  
 <select className="filter-by-region">
    <option hidden="">Select a Region</option>
    <option value="Africa">Africa</option>
    <option value="India">India</option>
    <option value="Antarctica">Antarctica</option>
    <option value="Australia">Australia</option>
    <option value="Denmark">Denmark</option>
    <option value="Germany">Germany</option>
    </select>
    </>
  )
}

export default SelectMenu