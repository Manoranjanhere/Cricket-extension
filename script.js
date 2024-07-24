async function getMatchData() {
    try {
        const response = await fetch("https://api.cricapi.com/v1/matches?apikey=239dc18b-bc3e-4388-80b4-260242136654&offset=0");
        const data = await response.json();

        if (data.status !== "success") return [];

        const matchesList = data.data;

        if (!matchesList) return [];

        const relevantData = matchesList.filter(match => match.status).map(match => `${match.name}, ${match.status}`);

        console.log({ relevantData });

        document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match}</li>`).join('');

        return relevantData;
    } catch (e) {
        console.log(e);
        return [];
    }
}

getMatchData();