import { take } from 'rxjs/operators';
import { forkJoin, interval, of } from "rxjs";

/**
 * Combina una serie de observables, pero estos deben ser finitos porque solamente emitirá la combinación de todos cuando estos se hayan completado.
 */


const numeros$ = of(1,2,3);
const intervalo$ = interval(1000).pipe(take(3)); //0..1..2
const letras$ = of('a','b','c');

forkJoin(
  {numeros$,intervalo$,letras$}
).subscribe(console.log);

forkJoin(
  {num:numeros$,int:intervalo$,let:letras$} //Para poner nombres personalizados a las propiedades
).subscribe(console.log);