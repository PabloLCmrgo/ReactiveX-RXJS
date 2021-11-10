import { fromEvent, interval } from "rxjs";
import { exhaustMap, take } from 'rxjs/operators';

/*
* Si hay un observable emitiendo valores y otro observable emite otros valores el exhaustMap cancela este segundo, solamente cuando el primero se completa el exhaustMap va a permitir la emisión de otro observable.
 */


const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(
  exhaustMap(() => interval$)
).subscribe(console.log)