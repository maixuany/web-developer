//in tam giac vuong n dong 
function tamgiac(dong){
    for(let i=1;i<=dong;i++)
    {
        let s = ''
        for(let j = 1;j<=i;j++){
            s=s+'*'
        }
        console.log(s)
    }
}
function vehinh(soDong){
    let s= ''
    for(let i=1;i<=soDong;i++) console.log(s+='*')
}
tamgiac(10)
vehinh(6)