function filtrarPares (arr){
    const novoArr = []
    for( let i = 0; i<arr.length; i++){
        if(arr[i] % 2 == 0){
            novoArr.push(arr[i])
        }
    }
    return novoArr
}
arr = [1,2,3,4,5]
let resultado = filtrarPares(arr)
console.log(resultado)