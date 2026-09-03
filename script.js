function showClub(clubId){

            
            let clubs = document.querySelectorAll(".club-info");

            clubs.forEach(function(club){
                club.style.display = "none";
            });

            document.getElementById(clubId).style.display = "block";

        }

        showClub("robotics");



function showTechClub(id){

    const clubs = document.querySelectorAll(".tech-club");

    clubs.forEach(club=>{
        club.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}
showTechClub("CCA");