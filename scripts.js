function Sprawdz() {
    var Log = document.getElementById("mylog");
    var mHaslo = document.getElementById("mypass");
    Haslo = mHaslo.value;
    Login = Log.value;
    var jest = $.ajax({
        url: "PobierzDane.php",
        method: "Post",
        data: { Login: Login, Haslo: Haslo },
        dataType: "JSON",
        success: function (data) {
            if (data[2] == true) {
                location.href = "running_catalog.php"
            }
            else {
                alert("Niepoprawny login lub hasło")
            }
        },
    })
};

let runningArray =
    [
        {
            name: 'Cyborg - XV Śląski Maraton Noworoczny',
            distance: 42.2,
            province: 'Śląskie',
            city: 'Katowice',
            date: new Date("January 1, 2021"),
            id: 1,
        },
        {
            name: 'Szczeciński Bieg Noworoczny',
            distance: 5,
            province: 'Zachodniopomorskie',
            city: 'Szczecin',
            date: new Date("January 1, 2021"),
            id: 2,
        },
        {
            name: 'Świąteczno-Noworoczny Bieg Po Zdrowie',
            distance: 5.1,
            province: 'Śląskie',
            city: 'Krostoszowice',
            date: new Date("January 6, 2021"),
            id: 3,
        },
        {
            name: 'II Ultra Tatar',
            distance: 50,
            province: 'Lubelskie',
            city: 'Studzianka',
            date: new Date("January 9, 2021"),
            id: 4,
        },
        {
            name: 'VII Zimowy Maraton Bieszczadzki',
            distance: 43.0,
            province: 'Podkarpackie',
            city: 'Cisna',
            date: new Date("January 30, 2021"),
            id: 5,
        },
        {
            name: 'Zimowy Janosik',
            distance: 50.0,
            province: 'Małopolskie',
            city: 'Niedzica',
            date: new Date("January 29, 2021"),
            id: 6,
        },
        {
            name: '50 km Ultra Janosik Zimowe Roztocze',
            distance: 50.0,
            province: 'Lubelskie',
            city: 'Szczebrzeszyn',
            date: new Date("January 9, 2021"),
            id: 7,
        },
        {
            name: 'Grand Prix Krakowa w Biegach Górskich',
            distance: 3.7,
            province: 'Małopolskie',
            city: 'Kraków',
            date: new Date("January 10, 2021"),
            id: 8,
        },
        {
            name: '50 km Ultra Maraton Annogórski',
            distance: 50.0,
            province: 'Opolskie',
            city: 'Leśnica',
            date: new Date("January 17, 2021"),
            id: 9.
        },
        {
            name: 'Zimowy Półmaraton Gór Stołowych',
            distance: 21.1,
            province: 'Dolnośląskie',
            city: 'Radków',
            date: new Date("January 23, 2021"),
            id: 10
        },
        {
            name: 'XIX Zimowy Bieg Trzech Jezior',
            distance: 15.0,
            province: 'Wielkopolskie',
            city: 'Trzemeszno',
            date: new Date("February 6, 2021"),
            id: 11
        },
        {
            name: 'XIX Zimowy Bieg Trzech Jezior',
            distance: 5.0,
            province: 'Wielkopolskie',
            city: 'Trzemeszno',
            date: new Date("February 6, 2021"),
            id: 12
        },
        {
            name: 'VII Marceliński Bieg Zimowy',
            distance: 5.0,
            province: 'Wielkopolskie',
            city: 'Poznań',
            date: new Date("February 7, 2021"),
            id: 13
        },
        {
            name: 'VII Marceliński Bieg Zimowy',
            distance: 10,
            province: 'Wielkopolskie',
            city: 'Poznań',
            date: new Date("February 7, 2021"),
            id: 14
        },
        {
            name: 'VII Marceliński Bieg Zimowy',
            distance: 15,
            province: 'Wielkopolskie',
            city: 'Poznań',
            date: new Date("February 7, 2021"),
            id: 15
        },
        {
            name: 'TUT - Trójmiejski Ultra Track',
            distance: 21.0,
            province: 'Pomorskie',
            city: 'Gdańsk',
            date: new Date("February 20, 2021"),
            id: 16
        },
        {
            name: 'TUT - Trójmiejski Ultra Track',
            distance: 42.0,
            province: 'Pomorskie',
            city: 'Gdańsk',
            date: new Date("February 20, 2021"),
            id: 17
        },
        {
            name: 'TUT - Trójmiejski Ultra Track',
            distance: 68.0,
            province: 'Pomorskie',
            city: 'Gdańsk',
            date: new Date("February 20, 2021"),
            id: 18
        },
        {
            name: 'Aktywny Kedzierzyn-Koźle Leśna 5 z hakiem',
            distance: 5.0,
            province: 'Opolskie',
            city: 'Kędzierzyn-Koźle',
            date: new Date("February 28, 2021"),
            id: 19
        },
        {
            name: 'Dwumaraton Olęderski',
            distance: 42.2,
            province: 'Wielkopolskie',
            city: 'Boruja Kościelna',
            date: new Date("March 6, 2021"),
            id: 20
        },
        {
            name: 'Dwumaraton Olęderski',
            distance: 10.5,
            province: 'Wielkopolskie',
            city: 'Boruja Kościelna',
            date: new Date("March 6, 2021"),
            id: 21
        },
        {
            name: 'Dwumaraton Olęderski',
            distance: 21.0,
            province: 'Wielkopolskie',
            city: 'Boruja Kościelna',
            date: new Date("March 6, 2021"),
            id: 22
        },
        {
            name: 'Puchar DOZ Maratonu Łódź #5',
            distance: 25.0,
            province: 'Łódzkie',
            city: 'Łódź',
            date: new Date("March 14, 2021"),
            id: 23
        },
        {
            name: '14. Panas Półmaraton Slężański',
            distance: 21.1,
            province: 'Dolnośląskie',
            city: 'Sobótka',
            date: new Date("March 20, 2021"),
            id: 24
        },
        {
            name: 'Lament Świętokrzyski',
            distance: 37.2,
            province: 'Świętokrzyskie',
            city: 'Krajno-Zagórze',
            date: new Date("March 20, 2021"),
            id: 25
        },
        {
            name: 'Lament Świętokrzyski',
            distance: 84.2,
            province: 'Świętokrzyskie',
            city: 'Krajno-Zagórze',
            date: new Date("March 20, 2021"),
            id: 26
        },
        {
            name: '15 Półmaraton Warszawski',
            distance: 21.1,
            province: 'Mazowieckie',
            city: 'Warszawa',
            date: new Date("March 8, 2021"),
            id: 27
        },
        {
            name: 'X Pabianicki półmaraton',
            distance: 21.1,
            province: 'Łódzkie',
            city: 'Pabianice',
            date: new Date("March 28, 2021"),
            id: 28
        },
        {
            name: 'Kudowski Festiwal Biegowy O-Błędny Maraton 42 km',
            distance: 42.2,
            province: 'Dolnośląskie',
            city: 'Kudowa-Zdrój',
            date: new Date("April 9, 2021"),
            id: 29
        },
        {
            name: '21. PKO Półmaraton dookoła Jeziora Żywieckiego',
            distance: 21.1,
            province: 'Śląskie',
            city: 'Żywiec',
            date: new Date("April 11, 2021"),
            id: 30
        },
        {
            name: '6. Gdańsk Maraton',
            distance: 42.2,
            province: 'Pomorskie',
            city: 'Gdańsk',
            date: new Date("April 17, 2021"),
            id: 31
        },
        {
            name: '6. Gdańsk Maraton',
            distance: 5.0,
            province: 'Pomorskie',
            city: 'Gdańsk',
            date: new Date("April 17, 2021"),
            id: 32
        },
        {
            name: 'Biegi w Szczawnicy Niepokorny Mnich 96',
            distance: 96.0,
            province: 'Małopolskie',
            city: 'Szczawnica',
            date: new Date("April 24, 2021"),
            id: 33
        },
        {
            name: '19. Cracovia Maraton',
            distance: 42.2,
            province: 'Małopolskie',
            city: 'Kraków',
            date: new Date("April 25, 2021"),
            id: 34
        },
        {
            name: 'RUN2HEL',
            distance: 80.0,
            province: 'Pomorskie',
            city: 'Kosakowo',
            date: new Date("May 1, 2021"),
            id: 35
        },
        {
            name: 'IX Niepodległościowa Jedenastka',
            distance: 11.0,
            province: 'Dolnośląskie',
            city: 'Biały Kościół',
            date: new Date("May 2, 2021"),
            id: 36
        },
        {
            name: 'WARNELAND ULTRAMARATON WARMIŃSKI',
            distance: 103.0,
            province: 'Warmińsko-Mazurskie',
            city: 'Olsztyn',
            date: new Date("May 8, 2021"),
            id: 37
        },
        {
            name: 'WARNELAND ULTRAMARATON WARMIŃSKI',
            distance: 53.0,
            province: 'Warmińsko-Mazurskie',
            city: 'Olsztyn',
            date: new Date("May 8, 2021"),
            id: 38
        },
        {
            name: 'Ultraroztocze',
            distance: 90.0,
            province: 'Lubelskie',
            city: 'Zwierzyniec',
            date: new Date("May 14, 2021"),
            id: 39
        },
        {
            name: 'Formoza Challenge Kalisz',
            distance: 7.0,
            province: 'Wielkopolskie',
            city: 'Kalisz',
            date: new Date("May 16, 2021"),
            id: 40
        },
        {
            name: 'Ultramaraton Jaga-Kora',
            distance: 17,
            province: 'Podkarpackie',
            city: 'Rymanów',
            date: new Date("May 21, 2021"),
            id: 41
        },
        {
            name: 'Ultramaraton Jaga-Kora',
            distance: 40,
            province: 'Podkarpackie',
            city: 'Rymanów',
            date: new Date("May 21, 2021"),
            id: 42
        },
        {
            name: 'Ultramaraton Jaga-Kora',
            distance: 70,
            province: 'Podkarpackie',
            city: 'Rymanów',
            date: new Date("May 21, 2021"),
            id: 43
        },
        {
            name: 'Ultramaraton Jaga-Kora',
            distance: 100,
            province: 'Podkarpackie',
            city: 'Rymanów',
            date: new Date("May 21, 2021"),
            id: 44
        },
        {
            name: 'Piastowska Piętnastka',
            distance: 15.0,
            province: 'Dolnośląskie',
            city: 'Wrocław',
            date: new Date("May 29, 2021"),
            id: 45
        },
        {
            name: 'V Szczytniański Bieg Liczyrzepy',
            distance: 10.0,
            province: 'Dolnośląskie',
            city: 'Szczytna',
            date: new Date("June 6, 2021"),
            id: 46
        },
        {
            name: 'Nocny Maraton Kanału Bydgoskiego',
            distance: 42.2,
            province: 'Kujawsko-Pomorskie',
            city: 'Bydgoszcz',
            date: new Date("June 12, 2021"),
            id: 47
        },
        {
            name: '8. Ultramaraton Babia Góra',
            distance: 10.0,
            province: 'Małopolskie',
            city: 'Lipnica Wielka',
            date: new Date("June 12, 2021"),
            id: 48
        },
        {
            name: '8. Ultramaraton Babia Góra',
            distance: 20,
            province: 'Małopolskie',
            city: 'Lipnica Wielka',
            date: new Date("June 12, 2021"),
            id: 49
        },
        {
            name: '8. Ultramaraton Babia Góra',
            distance: 60,
            province: 'Małopolskie',
            city: 'Lipnica Wielka',
            date: new Date("June 12, 2021"),
            id: 50
        },
        // {
        //     name:'',
        //     distance:,
        //     province:'',
        //     city:'',
        //     date:new Date(),
        //     id:
        // },


    ];

function myFunction(item) {
    document.getElementById("running_container").innerHTML += `<div key=${item.id} class='running_container_items'>
    <button onclick='addRunToFavourites(value)' value=${item.id} 
    class='running_container_button'>Dodaj</button><div class='running_container_name'>${item.name}
    </div><div class='running_container_distance'>${item.distance}
    </div><div class='running_container_province'>${item.province}
    </div><div class='running_container_city'>${item.city}
    </div><div class='running_container_date'>${formatDate(item.date)}</div></div>`;
}
function deleteRunFromFavourites(value){
    document.cookie=`id=${value}`;
    console.log(`running_container_items ${value}`);
    $(`.${value}`).remove();
    $.ajax({
        url: "DeleteFromFavourites.php",
        type: "Post",
    })

}

function addRunToFavourites(id){
    for(i in runningArray){
        if(id==runningArray[i].id){
            console.log(runningArray[i]);
            let name=runningArray[i].name;
            let distance=runningArray[i].distance;
            let province=runningArray[i].province;
            let city=runningArray[i].city;
            let date=runningArray[i].date;
            let id=runningArray[i].id;
            date=formatDate(date);
            document.cookie=`name=${name}`;
            document.cookie=`distance=${distance}`;
            document.cookie=`province=${province}`;
            document.cookie=`city=${city}`;
            document.cookie=`date=${date}`;
            document.cookie=`id=${id}`;
            $.ajax({
                url: "AddToFavourite.php",
                type: "Post",
            })
        }
    }
}
function sortByCategory(category) {

    runningArray.sort(dynamicSort(category))
    document.getElementById("running_container").innerHTML = ""
    runningArray.forEach(myFunction);
}
function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;

        return result * sortOrder;
    }
}


function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}
function searchBoxFilter() {

    let x = document.getElementsByClassName("search_box_input")[0].value
    let newArray = [];
    let k = 0;
    for (i = 0; i < runningArray.length; i++) {
        item = runningArray[i].name;
        let correct = 0;
        for (j = 0; j < x.length; j++) {

            if (item[j] === x[j]) {
                correct++;
            }
        }
        if (correct == x.length) {
            newArray[k] = runningArray[i];
            k++;
        }
        correct = 0
    };
    document.getElementById("running_container").innerHTML = "";
    newArray.forEach(myFunction);
}
