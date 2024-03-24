const getCrafts = async() => {
    const url = "http://localhost:3000/api/crafts";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showCrafts = async() => {
    console.log("i am in here");
    const crafts = await getCrafts();
    crafts.forEach((craft) => {
        const section = getCraftSection(craft);
        //section.append("hello");
        document.getElementById("json-info").append(section);
    });
};

const getCraftSection = (craft) => {
    const mainPageSection = document.createElement("section");
    const mainSection = document.createElement("section");
    mainSection.id = "mainSection";
    const img = document.createElement("img");
    img.src="http://localhost:3000/images/" + craft.image;
    mainSection.append(img);
    return mainSection;
}

showCrafts();
console.log("in the script");