import { fromEvent, Observable } from "rxjs";
import { debounceTime, map, mergeMap, pluck, switchMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { GitHubUser } from '../interfaces/gitHubUser';
import { GitHubUsersResp } from '../interfaces/gitHubUsers';
/*
 * El switchMap cancela una petición a un observable cuando se emite otra
 * El proceso de unir valores emitidos por varios observables se le conoce como flattering operatios u operadores de aplanamiento
 * <> =>
 */

//Helpers

const mostrarUsuarios = (usuarios: GitHubUser[]) => {
  console.log(usuarios);
  orderList.innerHTML = '';

  for (const usuario of usuarios) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = usuario.avatar_url;

    const anchor = document.createElement('a');
    anchor.href = usuario.html_url;
    anchor.text = 'ver página';
    anchor.target = '_blank';

    li.append(img);
    li.append(usuario.login + ' ');
    li.append(anchor);

    orderList.append(li);
  }
}

//Referencias
const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");
body.append(textInput, orderList);

//Streams

const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");


input$
  .pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>(ev => ev.target['value']),
    mergeMap<string, Observable<GitHubUsersResp>>((texto) =>
      ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
    ),
    pluck('items')
  )
//.subscribe(mostrarUsuarios);

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
  pluck('target', 'value'),
  switchMap(texto => ajax.getJSON(url + texto)) //Acá usamos el switchmap 
).subscribe(console.log);
