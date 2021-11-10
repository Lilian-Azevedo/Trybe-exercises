let quantidadeDivisivel=0;


for (let i=2; i<=150; i+=1){
    if (i%3===0){
        quantidadeDivisivel +=1;
    }
}
if (quantidadeDivisivel>=50){
    console.log ("Que a força esteja com você!");
} else {
    console.log ("Menos de 50 divisíveis");
}