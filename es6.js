// Esercizio 6
const devTeam = {
  lead: {
    name: "Alice",
    skills: ["JavaScript", "React", "Node.js"],
  },
  testers: [
    { name: "Bob", skills: ["HTML", "CSS", "JavaScript"] },
    { name: "Charlie", skills: ["Python", "Django", "PostgreSQL"] },
  ],
  projectName: "WebApp",
};

// La funzione dovrebbe aver inserito in memoria 4 oggetti:
// devTeam
// lead
// poi abbiamo i:  testers [0] e testers [1]

//Nella riga sottostante sto aggiungendo una variabile teamlead che fa riferimento alla proprieta lead dell'oggetto devTeam
const teamLead = devTeam.lead;
// Uso il push trattandosi essendo skills un array
teamLead.skills.push("GraphQL");

const devTeamCopy = JSON.parse(JSON.stringify(devTeam));
devTeamCopy.projectName = "MobileApp";

/*Ho provato a fare i passaggi successivi e non sono riuscito, piuttosto che fare il fenomeno e farlo
con chat gpt o copiare quello che abbiamo fatto a lezione (senza capire i concetti) ho preferito 
lasciarlo cosi e aspettare di guardare te quando lo correggerai in classe <3.*/
