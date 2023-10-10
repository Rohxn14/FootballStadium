
// Define an array of stadium data
const stadiums = [
    {
        name: "Santiago Bernabeu",
        image: "Images/Bernabeu.webp",
        description: "The Santiago Bernabéu Stadium is a famous football (soccer) stadium located in Madrid, Spain. It is the home stadium of one of the most successful and well-known football clubs in the world, Real Madrid Club de Fútbol.",
        team: "Real Madrid C F",
        link: "https://www.google.com/search?q=Real+madrid"
    },
    {
        name: "Camp Nou",
        image: "Images/camp.jpg" ,
        description: "Camp Nou, situated in Barcelona, Spain, is one of the world's most iconic football stadiums and the home ground of FC Barcelona. With a seating capacity of over 99,000 fans, it's Europe's largest stadium. Camp Nou has witnessed countless historic matches and unforgettable moments, hosting both domestic and international competitions. Its stunning architecture and the passionate 'Culés' fanbase create an electrifying atmosphere.",
        team: "FC Barcelona",
        link: "https://www.google.com/search?q=FC+Barcelona"
    },
    {
        name: "Wembley Stadium",
        image: "Images/Wembley.jfif",
        description: "Wembley Stadium is a renowned sports and entertainment venue in London, UK, with a seating capacity of around 90,000. It is famous for hosting historic football matches, including the 1966 FIFA World Cup Final.",
        team: "Tottenham Hotspur",
        link: "https://www.google.com/search?q=Tottenham+hotspur"
    },
    {
        name: "Sri Kanteerava Stadium",
        image: "Images/Kanteerava.jpg",
        description: "The Kanteerava Stadium is a multi-purpose sports facility in Bangalore, India, named after Sri Kanteerava Narasimharaja Wadiyar. Inaugurated in 1997, it hosts various sports events including athletics, football, and hockey, with a seating capacity of around 26,000. Additionally, the stadium is utilized for cultural and entertainment events in the city.",
        team: "Bengaluru FC",
        link: "https://www.google.com/search?q=Bengaluru+fc"
    },
    {
        name: "Allianz Arena",
        image: "Images/allianz-arena.webp" ,
        description: "The Allianz Arena, located in Munich, Germany, is a world-renowned football stadium. Home to FC Bayern Munich and TSV 1860 Munich, its distinctive illuminated façade changes colors to match the home team's kit.",
        team:"Bayern Munich",
        link: "https://www.google.com/search?q=Bayern+munich"
    },
    {
        name: "Old Trafford",
        image: "Images/old trafford.jpg",
        description: "Old Trafford, situated in Greater Manchester, England, is the legendary home stadium of Manchester United Football Club. With a seating capacity of approximately 74,140 spectators, it ranks among the largest football venues in the United Kingdom. Opened in 1910, Old Trafford has witnessed countless historic football matches and is celebrated as one of the sport's most iconic arenas. Its rich history and the fervent support of the 'Red Devils' fan base make it a symbol of football tradition",
        team: "Manchester United",
        link: "https://www.google.com/search?q=Manchester+united"
    },
    {
        name: "Maracana",
        image: "Images/maracana.jpg",
        description: "Maracanã Stadium, located in Rio de Janeiro, Brazil, is one of the most iconic football stadiums globally, known for its rich history and passionate fans. With a seating capacity of over 78,000, it has hosted numerous historic matches, including two FIFA World Cup finals. The stadium's distinctive circular shape and the imposing Maracanãzinho arena nearby make it a symbol of Brazilian football culture.",
        team: "Flamengo",
        link: "https://www.google.com/search?q=flamengo"
    },
    {
        name: "Westfalenstadion",
        image: "Images/westfalenstadion.jpg",
        description: "Westfalenstadion, located in Dortmund, Germany, is a renowned football stadium and the home ground of Borussia Dortmund. With a seating capacity of over 81,000 passionate fans, it's one of Europe's largest stadiums. Known for its famous 'Yellow Wall', a massive standing terrace, it creates an electric atmosphere during matches.",
        team: "Borrusia Dortmund",
        link: "https://www.google.com/search?q=borussia+dortmund"
    },
    {
        name: "Stadio Olimpico",
        image: "Images/roma.jpg",
        description: "Stadio Olimpico, located in Rome, Italy, is a historic multi-purpose stadium renowned for its significant role in Italian sports and culture. With a seating capacity exceeding 70,000 spectators, it has hosted numerous memorable events, including the 1960 Summer Olympics and the 1990 FIFA World Cup. Home to both A.S. Roma and S.S. Lazio football clubs, the stadium is at the heart of the city's passionate football rivalry.",
        team: "A.S Roma",
        link: "https://www.google.com/search?q=as+roma"
    },
    
    // Add data for other stadiums similarly
];

function generateStadiumCard(stadium) {
    const stadiumCard = document.createElement("div");
    stadiumCard.classList.add("stadium");
  
    const stadiumImageLink = document.createElement("a");
    stadiumImageLink.href = stadium.link;
    stadiumImageLink.target = "_blank";
  
    const stadiumImage = document.createElement("img");
    stadiumImage.src = stadium.image;
    stadiumImage.alt = stadium.name;
  
    const stadiumTitle = document.createElement("h2");
    stadiumTitle.textContent = stadium.name;
  
    const stadiumDescription = document.createElement("p");
    stadiumDescription.textContent = stadium.description;
  
    const stadiumTeam = document.createElement("p");
    stadiumTeam.textContent = "Home Team: " + stadium.team;
  
    stadiumImageLink.appendChild(stadiumImage);
    stadiumCard.appendChild(stadiumImageLink);
    stadiumCard.appendChild(stadiumTitle);
    stadiumCard.appendChild(stadiumDescription);
    stadiumCard.appendChild(stadiumTeam);
  
    return stadiumCard;
  }
  
  // Function to generate stadium cards and append them to the stadium container
  function generateStadiumCards() {
    const stadiumContainer = document.querySelector(".stadium-container");
  
    stadiums.forEach((stadium, index) => {
      const stadiumCard = generateStadiumCard(stadium);
      stadiumContainer.appendChild(stadiumCard);
    });
  }
  
  // Function to handle the image slider
  function handleImageSlider() {
    let slideIndex = 0;
    showSlide();
  
    function showSlide() {
      const slides = document.querySelectorAll(".myslides");
      const dots = document.querySelectorAll(".dot");
  
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      slideIndex++;
  
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
  
      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
      }
  
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].classList.add("active");
  
      setTimeout(showSlide, 2000); // Change image every 4 seconds
    }
  }
  
  // Call the functions to generate stadium cards and start the image slider
  generateStadiumCards();
  handleImageSlider();

  const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
let slideIndex = 0;

leftArrow.addEventListener("click", () => {
    showSlide(slideIndex - 1);
});

rightArrow.addEventListener("click", () => {
    showSlide(slideIndex + 1);
});

function showSlide(index) {
    const slides = document.querySelectorAll(".myslides");

    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    } else {
        slideIndex = index;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

// Call showSlide to display the initial slide
showSlide(slideIndex);


