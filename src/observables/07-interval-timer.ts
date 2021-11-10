import { interval, timer } from "rxjs";

/*
 * Un interval es un observable que se ejecuta cada determinado tiempo, es asíncrono.
* El time despues de un tiempo determinado va a emitir el valor y se va a completar el observable.
 */

const observer  = {
  next: val => console.log("next:", val),
  complete: () => console.log("completado")
}

const hoyEn5 = new Date(); // Fecha de hoy
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 );

const interval$ = interval(1000);
//const timer$ = timer(2000);
const timer$ = timer(hoyEn5); // Sirve para programar un ejecución en un tiempo determinado.

//interval$.subscribe(observer);
timer$.subscribe(observer);