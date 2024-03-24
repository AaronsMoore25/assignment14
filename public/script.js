const getCrafts = async() => {
    //const url = "http://localhost:3000/api/crafts";
    const url = "https://assignment14-2-75ar.onrender.com/api/crafts";
    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showCrafts = async() => {
    const crafts = await getCrafts();
    crafts.forEach((craft) => {
        const section = getCraftSection(craft);
        //section.append("hello");
        document.getElementById("json-info").append(section);
    });
};

const getCraftSection = (craft) => {
    const mainSection = document.createElement("section");
    mainSection.id = "mainSection";
    const img = document.createElement("img");
    //img.src="http://localhost:3000/images/" + craft.image;
    img.src = "https://assignment14-2-75ar.onrender.com/images/" + craft.image;
    mainSection.append(img);

    mainSection.onclick = (e) => {
        //console.log("the onclick is working");
        document.getElementById("dialog").style.display = "block";

        const details = document.getElementById("dialog-details");
        details.innerHTML = "";
        const imageDetails = document.getElementById("dialog-image");
        imageDetails.innerHTML = "";

        const myImage = document.createElement("img");
        myImage.src = "";
        myImage.src = "https://assignment14-2-75ar.onrender.com/images/" + craft.image;
        myImage.id = "myImage";
        imageDetails.append(myImage);
        //console.log(myImage);

        const myName = document.createElement("h1");
        myName.innerHTML = craft.name;
        details.append(myName);
        //console.log(myName);

        const myDescription = document.createElement("p");
        myDescription.innerHTML = craft.description;
        details.append(myDescription);
        //console.log(myDescription);

        const mySupplies = document.createElement("p");
        mySupplies.innerHTML = "Supplies: " + craft.supplies;
        details.append(mySupplies);
        //console.log(mySupplies);
        
    };

    document.getElementById("dialog-close").onclick = () => {
        document.getElementById("dialog").style.display = "none";
    };

    return mainSection;
}

showCrafts();
console.log("in the script");