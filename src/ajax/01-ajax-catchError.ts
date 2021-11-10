import { catchError, of, pluck } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
/*
 *
 * <> =>
 */

const url = "https://api.github.com/users?per_page=5";

const manejaErrores = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const atrapaError = (err: AjaxError) => {
  console.warn("error en:", err);
  return of([]); // Para no romper el cargado web retorna un observable tipo objeto o array
};

const fetchPromesa = fetch(url);

/* fetchPromesa
  .then((resp) => resp.json())
  .then((data) => console.log("data:", data))
  .catch((err) => console.warn("error en usuarios", err));
 */

/* fetchPromesa
  .then(manejaErrores)
  .then((resp) => resp.json())
  .then((data) => console.log("data:", data))
  .catch((err) => console.warn("error en usuarios", err));
 */

/* ajax(url)
  .pipe(
    pluck("response"),
    catchError((err) => {
      console.warn("error en:", err);
      return of([]); // Para no romper el cargado web retorna un observable tipo objeto o array
    })
  )
  .subscribe((users) => console.log("usuarios", users));
 */

ajax(url)
  .pipe(pluck("response"), catchError(atrapaError))
  .subscribe((users) => console.log("usuarios", users));
