import { fromEvent, interval } from "rxjs";
import { sample } from "rxjs/operators";

/*
 * sample registra el último valor emitido antes de que el segundo observable emita el primer valor
 * <> =>
 */

const interval$ = interval(500);
const click$ = fromEvent<PointerEvent>(document, "click");

interval$.pipe(sample(click$)).subscribe(console.log);
