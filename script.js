/*
  Viene fornito un layout di base in cui è presente **una card di esempio** 
  inserita staticamente nell’html. Questa card serve solo come timbro del 
  markup necessario per ottenere il risultato finale e **dovrà quindi essere 
  rimossa dall’html**.

  Aggiungere un file js in cui definire **un array di oggetti** che 
  rappresentano i membri del team. Ogni membro ha le informazioni 
  necessarie per stampare la relativa card: **Nome, Ruolo e Foto**.

  Una volta definita la struttura dati, prendendo come riferimento la 
  card di esempio presente nell’html, stampare dinamicamente una card 
  per ogni membro del team.

  BONUS:
  Utilizzare gli input presenti nella pagina per permettere all’utente 
  di aggiungere nuovi membri del team: cliccando sul pulsante “add” 
  viene creato un **nuovo oggetto**, il quale viene **inserito nell’array 
  iniziale** e viene stampata una nuova card con tutte le informazioni 
  inserite dall’utente.
*/


document.getElementById('addMemberButton').addEventListener('click', btnAdd);



const teamMembers =[

  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: 'img/wayne-barnett-founder-ceo.jpg'
  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'img/walter-gordon-office-manager.jpg'
  },
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'img/scott-estrada-developer.jpg'
  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'img/barbara-ramos-graphic-designer.jpg'
  },
  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: 'img/angela-lopez-social-media-manager.jpg'
  },
  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    foto: 'img/angela-caroll-chief-editor.jpg'
  }
];



stampaMembri();

function stampaMembri() {
  
  document.querySelector('.team-container').innerHTML = '';

  for(let i in teamMembers){

    const member = teamMembers[i];
    console.log(member);
  
    const output = 
    `
    <div class="team-card">
      <div class="card-image">
        <img
          src="${member.foto}"
          alt="${member.nome}"
        />
      </div>
      <div class="card-text">
        <h3>${member.nome}</h3>
        <p>${member.ruolo}</p>
      </div>
    </div>
    `;
  
    document.querySelector('.team-container').innerHTML += output;
  }

}


// BONUS 
function btnAdd() {
  
  const newMember = {
    nome: document.getElementById('name').value,
    ruolo: document.getElementById('role').value,
    foto: document.getElementById('image').value
  };

  teamMembers.push(newMember);

  stampaMembri(newMember);

  resetForm();
  
}

function resetForm(){
  document.getElementById('name').value = '';
  document.getElementById('role').value = '';
  document.getElementById('image').value = '';
}


// Foto new members
/*
  img/new-team-member-01.jpg
  img/new-team-member-02.jpg
  img/new-team-member-03.jpg
*/