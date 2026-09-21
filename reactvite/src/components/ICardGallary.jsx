import React from 'react'
import ICard from './ICard'

import carImage from '../images/Screenshot 2026-02-06 213331.png'

function ICardGallary() {
    const student = {
        pic: carImage,
        roll:"87833",
        name:"rahul",
        branch:"cse",
        college:"abes ec"
      }


  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px'
      }}
    >

      {/* <ICard
        college="ABES Engineering College"
        pic={carImage}
        roll="3455"
        name="Khushi"
        branch="CSE"
        
      />

      <ICard
        pic={carImage}
        roll="3235"
        name="Khushi"
        branch="CSE"
        college="ABES Engineering College"
      />

      <ICard
        pic={carImage}
        roll="3405"
        name="Khushi"
        branch="CSE"
        college="ABES Engineering College"
      /> */}

      <ICard data={student} />

    </div>
  )
}

export default ICardGallary