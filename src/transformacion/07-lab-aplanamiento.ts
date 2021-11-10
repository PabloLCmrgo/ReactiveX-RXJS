import { map, pluck, tap, mergeMap, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { fromEvent, of } from "rxjs";
import { ajax } from 'rxjs/ajax';

//Helper

const peticionHttpLogin = (userPass) => ajax.post('https://reqres.in/api/login?delay=1', userPass)
  .pipe(pluck('response', 'token'), catchError(err => of('Token inválido')));


// creando un formulario

const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// Configuraciones

inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail, inputPass, submitBtn);
document.querySelector('body').append(form);

//Streams

const submitForm$ = fromEvent<SubmitEvent>(form, 'submit').pipe(
  tap<SubmitEvent>(ev => ev.preventDefault()), //preventDefault() es para prevenir comportamientos por defecto.
  map(ev => ({
    email: ev.target[0].value,
    password: ev.target[1].value
  })), /* mergeMap(peticionHttpLogin) */ /* switchMap(peticionHttpLogin) */ exhaustMap(peticionHttpLogin)
);

submitForm$.subscribe(token => console.log(token));