import { mergeMap, switchMap } from 'rxjs/operators';
import { fromEvent, interval } from 'rxjs';

/*
 *
 * El proceso de unir valores emitidos por varios observables se le conoce como flattering operatios u operadores de aplanamiento
 */

const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

click$.pipe(
  //switchMap(() => interval$) // solo mantiene el último observable emitiendo, los demás los cancela
  mergeMap(() => interval$) // Mantiene todos los observables que están emitiendo valores
).subscribe(console.log);