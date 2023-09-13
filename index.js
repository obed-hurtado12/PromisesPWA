//OBED ARIEL HURTADO HERNÁNDEZ

// EJERCICIO 1
// function esperar(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
//   }

//   async function promesasEncadenadas() {
//     await esperar(2000);
//     const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

//     await esperar(3000);
//     const resultado = numeroAleatorio ** 2;

//     await esperar(1000);
//     const raizCuadrada = Math.sqrt(resultado);

//     return raizCuadrada;
//   }

//   async function ejecutar() {
//     try {
//       const resultado = await promesasEncadenadas();
//       console.log("resultado final:", resultado);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }

//   ejecutar();

// EJERCICIO 2
// function realizarSolicitudes(urls) {
//   const promesas = urls.map((url) => {
//     return fetch(url).then((response) => response.json());
//   });

//   return Promise.all(promesas);
// }

// const urls = [
//   "https://jsonplaceholder.typicode.com/posts/1",
//   "https://jsonplaceholder.typicode.com/posts/2",
// ];
// realizarSolicitudes(urls)
//   .then((resultados) => {
//     console.log("resultados de las solicitudes:", resultados);
//   })
//   .catch((error) => {
//     console.error("rrror:", error);
//   });


//EJERCICIO 3
// async function ejecutarPromesasParalelas(funcionesPromesa) {
//     const promesas = funcionesPromesa.map((func) => func());
//     const resultados = await Promise.all(promesas);
//     return resultados;
//   }
  
//   const promesa1 = () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Promesa 1 resuelta");
//       }, 2000);
//     });
//   };
  
//   const promesa2 = () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Promesa 2 resuelta");
//       }, 3000);
//     });
//   };
  
//   (async () => {
//     try {
//       const resultados = await ejecutarPromesasParalelas([promesa1, promesa2]);
//       console.log("Resultados de las promesas:", resultados);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   })();
  

//EJERCICIO 4
// function promesasConRetraso(n) {
//     const promesas = [];
  
//     for (let i = 1; i <= n; i++) {
//       const promesa = new Promise((resolve) => {
//         setTimeout(() => {
//           console.log("Número en la promesa:", i);
//           resolve(i);
//         }, i * 1000);
//       });
  
//       promesas.push(promesa);
//     }
  
//     return Promise.all(promesas).then(() => {
//       return "Todas las promesas se resolvieron";
//     });
//   }
  
//   async function ejecutarPromesasConRetraso() {
//     try {
//       const resultado = await promesasConRetraso(5);
//       console.log(resultado);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
  
//   ejecutarPromesasConRetraso();
  
//EJERCICIO 5
function promesaCancelable() {
    let promesaCancelada = false;
  
    const promesa = new Promise((resolve, reject) => {
      const timerId = setTimeout(() => {
        if (!promesaCancelada) {
          resolve("PROMESA RESUELTA...!!!");
        } else {
          reject("PROMESA CANCELADA...!!! - pipipi");
        }
      }, 5000);
  
      const cancelarPromesa = () => {
        clearTimeout(timerId);
        promesaCancelada = true;
      };
  
      promesa.cancelar = cancelarPromesa;
    });
  
    return promesa;
  }
  
  const miPromesa = promesaCancelable();
  
  miPromesa
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((error) => {
      console.error(error);
    });
  
  miPromesa.cancelar();
  