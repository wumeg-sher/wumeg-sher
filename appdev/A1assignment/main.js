let hospital = `{
    "hospitals": [
      {
        "name": "Sheridan General Hospital",
        "patients": [
          {
            "id": "001",
            "fullName": "Alan Davisville",
            "dateOfBirth": "2007-04-22",
            "symptoms": ["headache","chills","hives"]
          },
          {
            "id": "002",
            "fullName": "Beth Eglington",
            "dateOfBirth": "1990-11-08",
            "symptoms": ["fever","vomiting","seizures"]
          },
          {  
          "id": "003",
          "fullName": "Carl Finch",
          "dateOfBirth": "2000-08-17",
          "symptoms": ["headache","vomiting","skin rashes"]
        }
        ]
      }
    ]
  }

`

let jsobj=JSON.parse(hospital);

console.log(jsobj.hospitals[0].name);


// for (let i=0;i<jsobj.hospital.length;i++) {
//     console.log(jsobj.hospital[i])
//     for(let j=0; j< jsobj.hospital[i].patients.length;j++) {
//         console.log(jsobj.hospital[i].patients[j]);
//     }
// }

