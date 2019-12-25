function vehinh(soDong, CheckPoint,getsoCot){
    for(let i=1;i<=soDong;i++)
    {
        let s = '';
        const soCot = !getsoCot?soDong: getsoCot(soDong)
        for(let j = 1;j<=soCot;j++)
        {
            const dieukien = CheckPoint(i,j,soDong)
            s+=dieukien?'*':' '
        }
        console.log(s)
    }
}

vehinh(5,function(i,j,soDong){
    return i>=j
})

vehinh(5,function(i,j,soDong){
    return i+j>=soDong+1
})

vehinh(5,function(i,j,soDong){
    return Math.abs(j-soDong)<=i-1
},function(soDong){
    return soDong*2-1
})