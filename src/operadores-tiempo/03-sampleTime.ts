import { fromEvent } from "rxjs";
import { map, sampleTime } from "rxjs/operators";

/*
 * sampleTime retorna en el último valor emitido antes de que se cumpla el tiempo estimado.
 * <> =>
 */

const click$ = fromEvent<PointerEvent>(document, "click");

click$
  .pipe(
    sampleTime(3000),
    map(({ x, y }) => ({ x, y }))
  )
  .subscribe(console.log);
