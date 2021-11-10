import { fromEvent } from "rxjs";
import { auditTime, map, tap } from "rxjs/operators";

/*
 * auditTime emite el último valor generado por el observable antes de que se cumpla un periodo determinado de tiempo
 * <> =>
 */

const click$ = fromEvent<PointerEvent>(document, "click");

click$
  .pipe(
    map(({ x }) => x),
    tap((val) => console.log("tap", val)),
    auditTime(5000)
  )
  .subscribe(console.log);
