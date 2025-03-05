function filterArray(numbers, value) {
    const sayi = [];              //sonuçları depolayacağın yeni dizi
    for (let sayi1 of numbers) {  //dizinin her bir elemanı üzerinde döngü
        if (sayi1 > value) {     // eğer eleman value den büyükse direkt numbers yazamıyosun o bi dizi çünkü elemanları için say1 i tanımladın
           sayi.push(sayi1);        //yeni oluşturduğun diziye elemanı push la eklersin
        }
    }
    return sayi;      //yeni diziyi döndürcek direkt
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
