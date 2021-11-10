import { asyncScheduler } from "rxjs";

/*
 * un subscribe genera un subcripción
 */

const saludar = () => console.log('hola mundo');
const saludar2 = nombre => console.log(`Hola ${nombre}`);

// Para que el asyncScheduler funcione como timer
//asyncScheduler.schedule(saludar, 2000);
//asyncScheduler.schedule(saludar2, 2000, 'Pablo'); // function, timeToExecute, state


// Para que el asyncScheduler funcione como setInterval
const subs = asyncScheduler.schedule( function(state){
  console.log('state', state);
  this.schedule(state + 1, 1000) // Para que funcione como un set interval se vuevle a llamar dentro de la función el schedule
}, 3000, 0)  // Se configura el timer cuando se va a ejecutar por primera vez y el segundo es el state


/* setTimeout(() => {
  subs.unsubscribe()
}, 6000); */

asyncScheduler.schedule( ()=> subs.unsubscribe(), 6000);