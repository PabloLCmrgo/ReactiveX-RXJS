import { ajax } from "rxjs/ajax";
/*
 *
 * <> =>
 */

const url = "https://httpbin.org/delay/1";

ajax.post( //Es el mismo para métodos put
  url,
  {
    id: 1,
    nombre: "Pablo",
  },
  {
    "mi-token": "ABC123",
  }
)
//.subscribe(console.log);

ajax({
  url: url,
  method: "POST", //Es el mismo para métodos PUT
  headers: {
    "mi-token": "ABC123",
  },
  body: {
    id: 1,
    nombre: "Pablo",
  },
}).subscribe(console.log);
