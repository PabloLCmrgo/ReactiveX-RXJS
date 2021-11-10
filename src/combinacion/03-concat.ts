import { take } from 'rxjs/operators';
import { concat, interval, of } from "rxjs";

/**
 *La función concat encadena el retorno de emisiones de observables, no es el operador contact porque ese ya está deprecado.
 */

const interval$ = interval(1000);

concat(
  interval$.pipe(take(3)),
  interval$.pipe(take(2)),
  of(1)
).subscribe(console.log)