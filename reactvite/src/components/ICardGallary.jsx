import React from 'react'
import ICard from './ICard'

import carImage from '../images/Screenshot 2026-02-06 213331.png'

function ICardGallary() {
    const student = [{
        pic: carImage,
        roll:"87833",
        name:"raman",
        branch:"cse 11",
        college:"abes ec"
      },
      {
        pic: carImage,
        roll:"44533",
        name:"sanah",
        branch:"cse 27",
        college:"abes ec"
      },
      {
        pic: carImage,
        roll:"256433",
        name:"rakul",
        branch:"cse 15",
        college:"abes ec"
      },
      {
        pic: carImage,
        roll:"98765",
        name:"rahul",
        branch:"cse 15",
        college:"abes ec"
      },
      {
        pic: carImage,
        roll:"102223",
        name:"khushi",
        branch:"cse 28",
        college:"abes ec"
      }
    
    
    ]


  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        // gap: '20px'
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

      {/* <ICard data={student[1]} /> */}

      {
        student.map((element)=>(
          <ICard data={element} />
        ))
      }


    </div>
  )
}

export default ICardGallary