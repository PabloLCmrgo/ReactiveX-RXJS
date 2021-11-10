import { asyncScheduler, of, range } from "rxjs";

/*
 * Crea un observable en base a un rango
 */

//const src$ = of(1,2,3,4,5);
//const src$ = range(1,5);
//const src$ = range(1,100);
//const src$ = range(-5,10);
const src$ = range(-5,10, asyncScheduler); /*  Para transformarlo de manera asincrona con el asyncScheduler, cualquier función que reciba este método se transforma 
 de ser sincrona por naturaleza a ser asíncrona, es decir quedaría descenlazado del hilo principal de la app, ejecutandose al final */



console.log('Inicio');
src$.subscribe(console.log);
console.log('Fin');
