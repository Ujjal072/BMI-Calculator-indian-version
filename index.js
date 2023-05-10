function calculateBMI(){
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let showOutput = document.getElementById('output');
    let classification;

    //BMI Calculator

    let bmiRange = weight/ (height/100)** 2;
    bmiRange  = bmiRange.toFixed(2);

    if(bmiRange < 16){
        classification = 'Severe THickness (hilaya kam kro )';
    }else if(bmiRange >16 && bmiRange<17){
        classification='Mild Thickness (Raat meh jaldi so jao)';
    }else if(bmiRange >17 && bmiRange<18.5){
        classification='Thin Thickness (thoda khaya kro)';
    }else if(bmiRange >18.5 && bmiRange<25){
        classification='Normal(aise hi maintain rakh na)';
    }else if(bmiRange >25 && bmiRange<30){
        classification='Overweight (hilaya start krdo)';
    }else if(bmiRange >30 && bmiRange<34){
        classification='Obese Class 1 (mini hippo)';
    }else if(bmiRange >35 && bmiRange<40){
        classification='Obese Class 2 (Hippo ki aulaad)';
    }else if(bmiRange >40){
        classification='Obese Class 3 (Raat meh apne hath ka sahi upyog kare)';
    } 
    showOutput.innerHTML = `BMI Range : ${bmiRange} | ${classification}`;


}