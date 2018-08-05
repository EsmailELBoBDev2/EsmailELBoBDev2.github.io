 let myArray = [
          "I'm professional programmer",
          "Noobest programmer you will ever see xD",
          "So Dont Call Me Baby <br> -Ed Sheeran",
          "Kiki Do You Love Me ? <br> -Drake"
        ];

        let randomItem = myArray[Math.floor(Math.random() * myArray.length)];

        document.getElementById('noob').innerHTML = randomItem;
