let myArray = [
          "انا مبرمج محترف",
          "أفشل مبرمج هتشوفة فى حياتك هههه",
          "علشان كدا متوقليش يا بيبى <br> إيد شيران-",
          "كىكى انت بتحبينى ؟ <br> دريك-"
        ];

        let randomItem = myArray[Math.floor(Math.random() * myArray.length)];

        document.getElementById('noob').innerHTML = randomItem;
