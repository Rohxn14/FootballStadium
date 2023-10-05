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
        image: "Images/Camp nou.jpeg",
        description: "The Camp Nou is another iconic football (soccer) stadium, located in Barcelona, Spain. It is the home stadium of FC Barcelona, one of the most successful and popular football clubs in the world.",
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
        image: "Images/allianz-arena.webp",
        description: "The Allianz Arena, located in Munich, Germany, is a world-renowned football stadium. Home to FC Bayern Munich and TSV 1860 Munich, its distinctive illuminated façade changes colors to match the home team's kit.",
        link: "https://www.google.com/search?q=Bayern+munich"
    },
    {
        name: "Old Trafford",
        image: "Images/old trafford.jpg",
        description: "The Santiago Bernabéu Stadium is a famous football (soccer) stadium located in Madrid, Spain. It is the home stadium of Real Madrid Club de Fútbol.",
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
    
    // Add data for other stadiums similarly
];

// Function to generate stadium cards and append them to the stadium container
function generateStadiumCards() {
    const stadiumContainer = document.querySelector(".stadium-container");

    stadiums.forEach((stadium, index) => {
        const stadiumCard = document.createElement("div");
        stadiumCard.classList.add("stadium");

        const stadiumImageLink = document.createElement("a"); // Create a link for the image
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

        stadiumImageLink.appendChild(stadiumImage); // Wrap the image in the link

        stadiumCard.appendChild(stadiumImageLink); // Append the link to the card
        stadiumCard.appendChild(stadiumTitle);
        stadiumCard.appendChild(stadiumDescription);
        stadiumCard.appendChild(stadiumTeam);

        stadiumContainer.appendChild(stadiumCard);
    });
}

// Call the function to generate stadium cards
generateStadiumCards();