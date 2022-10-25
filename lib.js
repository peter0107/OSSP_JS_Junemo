function sum(numbers){
    let s=0;
    numbers.forEach((n)=>(s+=n));
    return s;
}

function avg(numbers){
    return sum(numbers)/numbers.length;
}

function max(numbers){
    let max=numbers[0];
    for(let i=0;i<numbers.length;i++)if(max<numbers[i])max=numbers[i];

    return max;
}

module.exports={
    sum,
    avg,
    max
};