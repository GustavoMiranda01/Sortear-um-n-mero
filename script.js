/* 

Math -> Matemática
- pow(2,2) / potência / 2² = 4
- sqrt(25,2) /raiz / √25
- PI -> 3.141592653589793
- ceil / teto -> arredondar para cima
- floor / chão -> arredondar para baixo


- random() / número aleatório entre 0 e 1 
*/


function generateNumber(){
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;
  
    alert(result)
}
