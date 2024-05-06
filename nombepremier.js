
let contentOne = ` <div class="bg-success-subtle p-3" >
                             <span class='bg-success-subtle text-success'>
                                    Le nombre est premier
                                  </span>`;
      
let contentTwo = ` <div class="bg-warning-subtle p-3" >
                      <span class='bg-warning-subtle text-warning'>
                           Le nombre n\'est pas premier

                       </span>`
                       
                       function nbPremier(nombre) {
                        if (nombre < 2) {
                            return false; // Les nombres négatifs et 1 ne sont pas premiers
                        }
                        if (nombre === 2) {
                            return true; // 2 est un nombre premier
                        }
                        if (nombre % 2 === 0) {
                            return false; // Les nombres pairs (autres que 2) ne sont pas premiers
                        }
                        for (let i = 3; i <= Math.sqrt(nombre); i += 2) {
                            if (nombre % i === 0) {
                                return false; // Le nombre est divisible par i, donc il n'est pas premier
                            }
                        }
                        return true; // Si aucune condition n'est vérifiée, le nombre est premier
                    }
                    //ajoute un evenment 
                    document.querySelector('#button').addEventListener('click', function (event) {
                        const nombre = parseInt(document.getElementById('nombreChamp').value);
                        const resultElement = document.getElementById('result');
                        if (nbPremier(nombre)) {
                            resultElement.innerHTML = contentOne;
                        } else {
                            resultElement.innerHTML = contentTwo;
                        }
                        
                    });
             
let Date = new Date()                    
                    