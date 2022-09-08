/*First level: Сделать возможным выбирать различные опорные элементы для быстрой сортировки. Исправить для этого код урока.*/

let numbers = [2, 127, 4, 52, 21, 86, 73, 45, 20, 6];

function Quick_Sort(array) {
   if (array.length <= 1) {
       return array;
   }

   let pivot = array[array.length - 1];
   let left = [];
   let right = [];

   for (let i = 0; i < array.length - 1; i++) {
       if (array[i] < pivot) {
           left.push(array[i]);
       }
       else {
           right.push(array[i])
       }
   }

   return [...Quick_Sort(left), pivot, ...Quick_Sort(right)];
}

console.log(Quick_Sort(numbers));

/*Second level: Привести пример худшего случая , в каком виде должны быть входные данные.*/

/* Ответ Когда опорным елементом выбирается первый элемент, а быстрая сортировка применяется к уже отсортированному массиву (Быстрая 
сортировка не проверяет, отсортирован входной массив или нет, и все равно пытается его отсортировать).*/