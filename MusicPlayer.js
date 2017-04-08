

let musicPlayer={
    play: function(song, artist) {
        this.text = "\"<em>" + song.name + "</em>\"" + " by " + artist + ". Album <em>" + song.album + "</em>, " + song.year;
    },

    pause: function(){
        if (this.playing){
            this.playing = false;
            document.write("Pausing player. Thanks for listening.");}
    }
};

let model = {
    Flume : {
        tracks : [
            {
                name : "Never be like you",
                year : 2016,
                album : "Skin",
                songlink : "https://www.youtube.com/embed/Ly7uj0JwgKg"
            },
            {
                name : "Insane",
                year : 2012,
                album : "Flume",
                songlink : "https://www.youtube.com/embed/peRS3KGNxoY"
            },
            {
                name: "Numb & Getting Colder feat. Kučka - Baauer Remix",
                year : 2017,
                album: "SkinRemixes",
                songlink : "https://www.youtube.com/embed/rs5Lrzr7KRc"
            },

            {
                name: "Ta-ku - Higher (Flume Remix)",
                year : 2012,
                album: "Flume",
                songlink : "https://www.youtube.com/embed/4l15evegaKo"

            },
            {
                name: "Sleepless feat. Jezzabell Doran",
                year : 2012,
                album: "Flume",
                songlink : "https://www.youtube.com/embed/V7-yAX9ijuM"

            },
            {
                name: "Take a Chance feat. Little Dragon",
                year : 2016,
                album: "Skin",
                songlink : "https://www.youtube.com/embed/5IqDR2WjVl8"

            }
        ]
    },
    Kendrick  : {
        tracks : [
            {
                name : "M.A.A.D City",
                year : 2012,
                album : "Good Kid, M.A.A.D City",
                songlink : "https://www.youtube.com/embed/10yrPDf92hY"
            },
            {
                name : "Money Trees",
                year : 2012,
                album : "Good Kid, M.A.A.D City",
                songlink : "https://www.youtube.com/embed/NtxmnBQmfZs"
            },
            {
                name: "HUMBLE",
                year: 2017,
                album: "Album",
                songlink : "https://www.youtube.com/embed/tvTRZJ-4EyI"

            },
            {
                name: "Real feat. Anna Wise",
                year: 2012,
                album: "Good Kid, M.A.A.D City",
                songlink : "https://www.youtube.com/embed/ns1ykzcCJlM"

            },

            {
                name: "The Recipe ft. Dr. Dre",
                year: 2012,
                album: "Good Kid, M.A.A.D City",
                songlink : "https://www.youtube.com/embed/YpugK0RpEaU"

            },

            {
                name: "i",
                year: 2015,
                album: "To Pimp a Butterfly",
                songlink : "https://www.youtube.com/embed/jltN3fLFmTQ"

            }


        ]
    }
}

function myFunction() {
    let artistInput = document.getElementById("artist").value;
    let trackInput = document.getElementById("track").value;
    trackInput = parseInt(trackInput);

    if (!model.hasOwnProperty(artistInput)) {
        // warning shit goes here
        return window.alert("Incorrect artist input");
    }

    let song = model[artistInput].tracks[trackInput - 1];
    let link = song.songlink;

    musicPlayer.play(song, artistInput, model[artistInput].name);
    let myText = musicPlayer.text;
    console.log(myText);
    document.getElementById("demo").innerHTML = myText;
    document.getElementById("ytplayer").src = link + '?rel=0&autoplay=1';


}
