function BMI(weight: number, height: number){
    let score: number = (weight / (height*height))
    
    if(score < 18.5){
        return 'ผอม'
    } else if (score >= 18.50 && score <= 22.90 ){
        return 'สมส่วน '
    } else if (score >= 23 && score <= 24.90){
        return 'เริ่มอ้วน '
    } else if(score >= 25 && score <= 29.90){
        return 'อ้วน'
    }else if (score > 30){
        return 'อ้วนมากไปแล้ว'
    }return
}
console.log(BMI(70,1.65))