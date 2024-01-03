let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 24.970340288657315, lng: 121.19574962361749 },
        zoom: 14,
    });

    var markers = [
        // {
        //     position: { lat: 24.962546792366922, lng: 121.22714965375683 },
        //     title: "Hub Hotel",
        //     content: '<div style="font-weight: bold; color: red;">Hub Hotel</div>',
        // },
        {
            position: { lat: 24.957121932497376, lng: 121.20436360019136 },
            title: "Hotel IN",
            content: '<div style="font-weight: bold; color: red;">Hotel IN</div>',
        },
        // {
        //     position: { lat: 24.957301075161634, lng: 121.20720460609108 },
        //     title: "Hotel-J-Taoyuan",
        //     content: '<div style="font-weight: bold; color: red;">Hotel-J-Taoyuan</div>',
        // },
        {
            position: { lat: 24.964896010833193, lng: 121.21715087359995 },
            title: "Hotel Kuva Chateau",
            content: '<div style="font-weight: bold; color: red;">Hotel Kuva Chateau</div>',
        },
        {
            position: { lat: 24.958962269842857, lng: 121.22177407897304 },
            title: "King's Paradise Hotel",
            content: '<div style="font-weight: bold; color: red;">King\'s Paradise Hotel</div>',
        },
        {
            position: { lat: 24.958480007114943, lng: 121.22033964905172 },
            title: "Le Midi Hotel",
            content: '<div style="font-weight: bold; color: red;">Le Midi Hotel</div>',
        },
        {
            position: { lat: 24.954425795587298, lng: 121.22349505428456 },
            title: "Fullon Hotel Jhongli",
            content: '<div style="font-weight: bold; color: red;">Fullon Hotel Jhongli</div>',
        },
        {
            position: { lat: 24.9545397661695, lng: 121.21900704717356 },
            title: "Hotel MU",
            content: '<div style="font-weight: bold; color: red;">Hotel MU</div>',
        },
        {
            position: { lat: 25.02117297444458, lng: 121.21887084784531 },
            title: "Alfar Hotel",
            content: '<div style="font-weight: bold; color: red;">Alfar Hotel</div>',
        },
        { 
            position: { lat: 25.018097488409236, lng: 121.21376408445516 },
            title: "HOTEL COZZI",
            content: '<div style="font-weight: bold; color: red;">HOTEL COZZI</div>',
        },
        {
            position: { lat: 24.970340288657315, lng: 121.19574962361749 },
            title: "National Central University",
            content: '<div style="font-weight: bold; color: red;">National Central Universit</div>',
        },
        
        // Add more markers as needed
    ];
    markers.forEach(function (markerInfo) {
        var marker = new google.maps.Marker({
            position: markerInfo.position,
            map: map,
            title: markerInfo.title,
        });

        var infowindow = new google.maps.InfoWindow({
            content: markerInfo.content,
        });
        
        infowindow.open(map, marker);

        marker.addListener("click", function () {
            infowindow.open(map, marker);
        });
    });
}


window.initMap = initMap;