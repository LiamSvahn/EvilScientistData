'use strict'
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
    displayCurrentScinetists: function(each: any){
        each.forEach((Scientstinfo: any) => {

            const Scientsitcard: any = document.querySelector('.Evil-scientist-database')

            const CardForScinetist = document.createElement('section')
            CardForScinetist.className = 'Scientist';

            Scientsitcard.append(CardForScinetist)
            
            const link = document.createElement('a')
            link.className = 'a-btn';
            CardForScinetist.append(link)

            const h3name = document.createElement('h3')
            h3name.textContent = Scientstinfo.Name;
            link.append(h3name)

            const ScientistAge = document.createElement('h3')
            ScientistAge.textContent = Scientstinfo.Age;
            link.append(ScientistAge)

            const HenchmenNumber = document.createElement('h3')
            HenchmenNumber.textContent = Scientstinfo.Henchmen;
            link.append(HenchmenNumber)

        });
    },
    clearScientist: function () {
        document.querySelectorAll('.Scientist').forEach(section => section.remove())
    },
    addScientist: function () {
        const NameScientist: any = document.querySelectorAll('#ScientistName')
        
        const AgeScientist: any = document.querySelectorAll('#ScientistAge')
        
        const ScientistsHenchmen: any = document.querySelectorAll('#ScientistHenchmen')
        
        const newSCientist = {
            Name: NameScientist.value,
            Age: AgeScientist.value,
            Henchmen: ScientistsHenchmen.value,
        }
        EvilScientsitData.Scinetsts.push(newSCientist)
        
        NameScientist.value = "";
        AgeScientist.value = "";
        ScientistsHenchmen.value = "";
        
        
        EvilScientsitData.displayCurrentScinetists(EvilScientsitData.Scinetsts)
    },
    showScientistInfo: function(){
        const allA = Array.from(document.getElementsByClassName('.a'))
        allA.forEach(a => {
            a.addEventListener('click', () =>{
                console.log("clicked")
            })
        })
    }

} 

//document.querySelector('.resetFilter-btn').addEventListener('click', function () {
//    monsterDatabase.clearMonsters();
//    monsterDatabase.loadMonsters(monsterDatabase.monsters);
//});

document.querySelector('.Add-sientics')?.addEventListener('click', function(){
    EvilScientsitData.clearScientist()
    EvilScientsitData.displayCurrentScinetists(EvilScientsitData.Scinetsts)
});

EvilScientsitData.showScientistInfo();
EvilScientsitData.displayCurrentScinetists(EvilScientsitData.Scinetsts)