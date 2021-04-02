//https://www.codewars.com/kata/557b5e0bddf29d861400005d/train/javascript

    //code to convert miles per imperial gallon to kilometers per liter

    function converter (mpg) {

      let kilometersPerLiter = mpg * (1.609344) * (1 / 4.54609188);

      return Number(kilometersPerLiter.toFixed(2));

    }

    // (miles / gallon) * (kilometer / miles) * (1 gallon / 1 liter)
