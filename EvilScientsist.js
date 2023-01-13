'use strict';
var _a;
//{Name: string, Age: number, Henchmen: number} = 
const EvilScientsitData = {
    Scinetsts: [
        {
            Name: 'Namn',
            Age: 24,
            Henchmen: 10,
        },
        {
            Name: 'Namn',
            Age: 24,
            Henchmen: 11,
        },
        {
            Name: 'Namn',
            Age: 24,
            Henchmen: 12,
        },
        {
            Name: 'Namn',
            Age: 24,
            Henchmen: 13,
        },
        {
            Name: 'Namn',
            Age: 24,
            Henchmen: 14,
        },
    ],
    displayCurrentScinetists: function (each) {
        each.forEach(Scientstinfo => {
            const Scientsitcard = document.querySelector('.Evil-scientist-database');
            const CardForScinetist = document.createElement('section');
            CardForScinetist.className = 'Scientist';
            Scientsitcard.append(CardForScinetist);
            const h3name = document.createElement('h3');
            h3name.textContent = Scientstinfo.Name;
            CardForScinetist.append(h3name);
            const ScientistAge = document.createElement('h3');
            ScientistAge.textContent = Scientstinfo.Age;
            CardForScinetist.append(ScientistAge);
            const HenchmenNumber = document.createElement('h3');
            HenchmenNumber.textContent = Scientstinfo.Henchmen;
            CardForScinetist.append(HenchmenNumber);
        });
    },
    clearScientist: function () {
        document.querySelectorAll('.Scientist').forEach(section => section.remove());
    },
    addScientist: function () {
        const NameScientist = document.querySelector('#NamnEvilScientist');
        const AgeScientist = document.querySelector('#NamnEvilScientist');
        const ScientistsHenchmen = document.querySelector('#NamnEvilScientist');
        const newSCientist = {
            Name: NameScientist.value,
            Age: AgeScientist.value,
            Henchmen: ScientistsHenchmen.value,
        };
        EvilScientsitData.Scinetsts.push(newSCientist);
        NameScientist.value = "";
        AgeScientist.value = "";
        ScientistsHenchmen.value = "";
        EvilScientsitData.displayCurrentScinetists(EvilScientsitData.Scinetsts);
    },
};
//document.querySelector('.resetFilter-btn').addEventListener('click', function () {
//    monsterDatabase.clearMonsters();
//    monsterDatabase.loadMonsters(monsterDatabase.monsters);
//});
(_a = document.querySelector('.Add-sientics')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    EvilScientsitData.displayCurrentScinetists(EvilScientsitData.Scinetsts);
});
EvilScientsitData.displayCurrentScinetists(EvilScientsitData.Scinetsts);
