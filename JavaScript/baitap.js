// //cho khoang tu 1-100
// //in cac so chia het cho 2 trong khoang do 
// //in ra cac so chi het cho 3
// //in cac so chia 5 du 1 
// //in cac so chinh phuong <=> Math.sqrt(x)%1<0
// function inSoChiaHetCho2(){
//     for(let i=1;i<=100;i++){
//         if(i%2==0)
//         console.log(i);
//     }
// }
// console.log('Cac So Chia Het Cho 2: ')
// inSoChiaHetCho2()

// function inSoChiaHetCho3(){
//     for(let i=1;i<=100;i++)
//     {
//         if(i%3==0)
//             console.log(i);
//     }
// }
// console.log('Cac So Chia Het Cho 3: ')
// inSoChiaHetCho3();

// function inSoChia5Du1(){
//     for(let i=1;i<=100;i++)
//     {
//         const dieukien=(i%5==1)
//         if(dieukien) console.log(i);
//     }
// }
// console.log('Cac So Chia 5 Du 1: ')
// inSoChia5Du1();

// function sochinhphuong(){
//     for(let i=1;i<=100;i++){
//         if(Math.sqrt(i)%1===0)
//             console.log(i);
//     }
// }
// console.log('Cac So Chinh Phuong: ')
// sochinhphuong()

// //gop function
// function inSoChiaHetChoXDuY(X,Y)
// {
//     for(let i=1;i<=100;i++)
//     {
//         if(i%X===Y)
//         {
//             console.log(i);
//         }
//     }
// }
// console.log(inSoChia5Du1)

function kiemtrachiahetcho2(i)
{
    if(i%2)
        return true;
    else
        return false;
}

function inso(check_number)
{
    for(let i=1;i<=100;i++){
        if(check_number)
            console.log(i);
    }
}
inso(kiemtrachiahetcho2)
