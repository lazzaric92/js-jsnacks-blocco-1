//todo: In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.

const partyGuests = ['Marco Maria', 'Vito', 'Martina', 'Raghveer', 'Riccardo', 'Lorenzo', 'Mattia','Daniele', 'Federico'];
const userFirstName = prompt('Type your first name');

if (partyGuests.includes(userFirstName)){
    console.log(`Welcome ${userFirstName}!`)
} else {
    console.log('We are sorry, you are not on the list');
}