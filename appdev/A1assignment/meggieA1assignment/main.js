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


//showPatients function
function showPatients (hospital) {

    let hospitalName = hospital[0].name;
    let formattedH1 = `<h1>${hospitalName}</h1>\n`;
      
      
    let patientEntry = ""
    for (let i=0; i<hospital[0].patients.length; i++){
      let patientInfo = hospital[0].patients[i].fullName + ", " + hospital[0].patients[i].dateOfBirth;
      let formattedH2 = `<h2>${patientInfo}</h2>\n`;
      patientEntry+=formattedH2
    
      let symptomEntry = ""
      for (let j=0; j<hospital[0].patients[i].symptoms.length; j++) {
        let symptom = hospital[0].patients[i].symptoms[j];
        let formattedLi = `  <li>${symptom}</li>\n`;
        symptomEntry += formattedLi
      }

    let formattedSymptom = `<ul>\n${symptomEntry}</ul>\n`;
    patientEntry+=formattedSymptom
    }

  hospitalEntry = formattedH1 + patientEntry
  return hospitalEntry
  }
    
//execute showPatients function
  console.log(showPatients(hospital))
    
      

  

//getPatient function
  function getPatient (patients) {
    patients = hospital[0].patients
    function getRandom (max) {
      return Math.floor(Math.random()*max)
    }
    let random = getRandom(hospital[0].patients.length)
    return hospital[0].patients[random].id;
  }

//execute getPatient function
  console.log(getPatient(hospital[0].patients))
      