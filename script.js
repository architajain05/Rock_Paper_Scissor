const gameContainer = document.querySelector(".container"),
      userResult = document.querySelector(".user_result img"),
      cpuResult = document.querySelector(".cpu_result img"),
      result = document.querySelector(".result"),
      optionImages = document.querySelectorAll(".option_image");

// Loop through each option image element
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "images/rock.png";
        result.textContent = "Wait...";

        // Remove active class from other images
        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active");
        });
        
        gameContainer.classList.add("start");

        let time = setTimeout(() => {
            gameContainer.classList.remove("start");
            
            // Handle click on img or its parent
            let imageSrc = e.target.tagName === 'IMG' ? e.target.src : e.target.querySelector("img").src;
            
            // Set the user image to the clicked option image
            userResult.src = imageSrc;

            let randomNumber = Math.floor(Math.random() * 3);

            let cpuImage = ["images/rock.png", "images/paper.png", "images/scissors.png"];
            cpuResult.src = cpuImage[randomNumber];

            // Assign a letter value to the CPU and user options
            let cpuValue = ['R', 'P', 'S'][randomNumber];
            let userValue = ['R', 'P', 'S'][index];

            // Possible outcomes
            let outcomes = {
                RR: "Draw",
                RP: "Cpu",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "Cpu",
                SS: "Draw",
                SR: "Cpu",
                SP: "User",
            };

            let outcomeValue = outcomes[userValue + cpuValue]; 
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outcomeValue} Won!!`;
            console.log(cpuValue, userValue);
        }, 1500);  // Close the setTimeout properly and give delay
    });
});
