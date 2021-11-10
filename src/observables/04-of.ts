import { of } from "rxjs";

/*
 * Permite crear observable en base a un listado de elementos.
 * Va a emitir los valores de manera sincrona y cuando emite el último valor se completa el observable
 */

//const obs$ = of(1,2,3,4,5,6);
//const obs$ = of(...[1,2,3,4,5,6]);
const obs$ = of(
  [1, 2],
  { a: 1, b: 2 },
  function () {},
  true,
  Promise.resolve(true)
);

obs$.subscribe(
  (next) => console.log("next", next),
  null, //Es el error, pero por el ejemplo va en null
  () => console.log("terminamos la secuencia")
);
