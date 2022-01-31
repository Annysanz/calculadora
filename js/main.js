const historical = [];

function myFunction(id) {
    document.calc.result.value+=id;
  }
  function clearScreen() {
    document.calc.result.value="";
    document.calc.historical.value=historical;
  }
  function calculate() {
    try {
      let input = eval(document.calc.result.value);
      historical.push(input)

      document.calc.result.value=input;
      document.calc.historical.value=historical;
      console.log(historical)
    } catch(err){
        document.calc.result.value="Error 😆";
      }
  }

  
