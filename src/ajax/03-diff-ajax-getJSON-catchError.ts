import { catchError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
/*
 *
 * <> =>
 */

const atrapaError = (err: AjaxError) => {
  console.warn("error en:", err);
  return of({
    ok: false,
    usuarios: [],
  }); // Para no romper el cargado web retorna un observable tipo objeto o array
};

const url = "https://httpbin.org/delay/1";
//const url = "https://api.github.com/users?per_page=5";

const obs$ = ajax.getJSON(url);

obs$.pipe(catchError(atrapaError)).subscribe({
  // Al ponerlo así cae en el catch y retorna un nuevo observable, por lo que no rompe el código
  next: (val) => console.log("next:", val),
  error: (err) => console.warn("error en subs", err),
  complete: () => console.log("complete"),
});
