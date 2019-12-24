function tamgiac(sodong){
    for(let i=1;i<=sodong;i++)
    {
        let s = ''
        for(let j = 1;j<=sodong;j++)
        {
            if(i+j<sodong+1) s+=' '
            else s+='*'
        }
        console.log(s)
    }
}
tamgiac(5)