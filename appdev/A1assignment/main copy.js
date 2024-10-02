let hospital = [
      {
        name: "Sheridan General Hospital",
        patients: [
          {
            id: "001",
            fullName: "Alan Davisville",
            dateOfBirth: "2007-04-22",
            symptoms: ["headache","chills","hives"]
          },
          {
            id: "002",
            fullName: "Beth Eglington",
            dateOfBirth: "1990-11-08",
            symptoms: ["fever","vomiting","seizures"]
          },
          {  
            id: "003",
            fullName: "Carl Finch",
            dateOfBirth: "2000-08-17",
            symptoms: ["headache","vomiting","skin rashes"]
        }
        ]
      }
    ]


function showPatients (hospital) {

let hospitalName = hospital[0].name;
let formattedH1 = `<h1>${hospitalName}</h1>\n`;
console.log(formattedH1);

for (let i=0; i<hospital[0].patients.length; i++){
  let patientInfo = hospital[0].patients[i].fullName + ", " + hospital[0].patients[i].dateOfBirth;
  let formattedH2 = `<h2>${patientInfo}</h2>\n`;
  console.log(formattedH2);

  

  for (let j=0; j<hospital[0].patients[i].symptoms.length; j++) {
    let symptom = hospital[0].patients[i].symptoms[j];
    let formattedLi = `<li>${symptom}</li>\n`;
    console.log("  "+ formattedLi);
    }
  }
}

showPatients(hospital);


console.log(hospital[0].patients)
