const weight = document.getElementById('weight');
       
        const height = document.getElementById('feet');
     
        const height1 = document.getElementById('inche');
       

        const result = document.getElementById('calculate');
       
        const para = document.getElementById('showText');
        

        function calBMI() {
            const weightInKg = parseInt(weight.value);
            const hif = parseInt(height.value);
            const hif1 = parseInt((height1.value)) / 12;
            const combinehinm = (hif + hif1) / 3.281;
            const BMI = weightInKg / (combinehinm * combinehinm);
            result.value = BMI.toFixed(2);

            if (result.value <= 18) {
                para.innerText = 'You are underweight!';
            }
            else if (result.value > 18.5 && result.value < 24.9) {
                para.innerText = ' You are normal!';
            }
            else if (result.value > 24.9 && result.value < 39.9) {
                para.innerText = ' You are overweight!';
            }
            else if (result.value >=40.0) {
                para.innerText = ' You are Obese!';
            }
            else{
                result.value = '';
                para.innerText = 'Please fill the required fields!';
            }
        }

        function resetValue()
        {
            weight.value = '';
            height.value = '';
            height1.value = '';
            result.value = '';
        }