import { fromEvent, interval, of } from "rxjs";
import {  map,  mergeMap, take, takeUntil } from "rxjs/operators";
/*
 * Concatena en un nuevo observable la emisión de otros observables.
 * El proceso de unir valores emitidos por varios observables se le conoce como flattering operatios u operadores de aplanamiento
 * <> =>
 */


const letras$ = of('a', 'b', 'c');

letras$.pipe(
  mergeMap(letra => interval(1000).pipe(
    map(i => letra + i),
    take(3)
  ))
)
/*  .subscribe({
   next: val => console.log('next:', val),
   complete: () => console.log('Complete')
 }) */

const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mousedown$.pipe(
  mergeMap(() => interval$.pipe(
    takeUntil(mouseup$)
  ))
)
  .subscribe(console.log);