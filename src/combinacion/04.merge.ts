import { fromEvent, merge } from "rxjs";
import { pluck } from "rxjs/operators";


/**
 * La función merge va agregando las emisiones a un nuevo observable conforme vayan emitiendo valores los observables subscritos, no es el operador merge porque está deprecado.
 */


const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

merge(
  keyup$.pipe(pluck('type')), click$.pipe(pluck('type'))).subscribe(console.log);