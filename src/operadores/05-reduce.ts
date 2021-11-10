import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

/*
 * El clientHeight es el ancho de lo que se puede proyectar en la pantalla sin hacer scroll
 * el scrollHeight es todo el contenido y se puede hacer scroll en él
 * scrollTop es la parte que se puede recorrer con el scroll, si se suma este con el clientHeight debe ser igual al scrollHeight
 */

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number) => {
  return acumulador + valorActual;
};

const total = numbers.reduce(totalReducer, 0); // función y estado inicial
console.log("total arr", total);

interval(1000) // el interval el primer valor que emite es 0
  .pipe(take(5), tap(console.log), reduce(totalReducer))
  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("complete"),
  });
