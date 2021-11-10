import { fromEvent } from "rxjs";

/*
 * fromEvent permite crear observables de cierto tipo
 * Eventos del DOM
 */

const src1$ = fromEvent<PointerEvent>(document, "click"); //Cuando no se sabe que evento es se deja sin tipar para que en la consola aparezca el evento que dispara
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
  next: (val) => console.log("next", val),
};

/* src1$.subscribe(observer);
src2$.subscribe(observer); */

/* src1$.subscribe(ev => {
  console.log(ev.x);
  console.log(ev.y);
} ); */
src1$.subscribe(({ x, y }) => {0
  console.log(x, y);
});
src2$.subscribe((evento) => {
  console.log(evento.key); //cuando se tipa el evento puede acceder a sus propiedades
});
