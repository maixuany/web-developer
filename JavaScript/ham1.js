function inso(Check_Number){
    for(let i=1;i<=100;i++){
        dieukien = Check_Number(i)
        if(dieukien) console.log(i)
    }
}

function check_chia_het_cho_2(i){
    return i%2===0
}

//inso(check_chia_het_cho_2)

//cai truyen ham truc tiep thuong hay su dung 
inso(function(i){
    return i%2===0
})
//arrow 
inso(i=> Math.sqrt(i)%1===0) // viet tren 1 hang thuong it dung 
inso(i=> i%10==0)