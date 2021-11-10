import { fromEvent, interval } from "rxjs";
import { concatMap, take } from 'rxjs/operators';

/*
* Concatena las llamadas a los observables subscritos
 */


const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(
  concatMap(() => interval$)
).subscribe(console.log)