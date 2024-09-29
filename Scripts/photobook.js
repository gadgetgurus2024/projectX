
//alert("Hello World") 
//

    let scienceList=[
'Abdulraheem Allimot Oluwatosin',
'Adebanjo Oluwadara Angel',
'Adeyinka Taiwo Adunni',
'Ajagbemokeferi Islamiyat Enitan',
'Ajayi Amirah Adeola',
'Ajibola Aishat Omobolanle',
'Ajiboye Mistura Motunrayo',
'Ajiwokewu Maimunah Abike',
'Akeem Hassanat Omolabake',
'Akingbesote Motorola Zainab',
'Akolade Aishat Agbeke',
'Ameh Praise Ojor',
'Anaeme Chinenye Elizabeth',
'Anthony Happiness Joseph',
'Ayodele Aduragbemi Oluwatoyin',
'Azeez Eniola Zainab',
'Babalola Aishat Moyosoreoluwa',
'Balogun Rahmotu Aduni',
'Bankole Ayomide Oluwatoyin',
'Bello Aaisha Iteolaoluwakiishii',
'Chukwuemeka Mary Chinenye',
'Gbeminiyi Iseoluwa Abike',
'Idebi Omowonuola Victoria',
'Idowu Kafayat Ololade',
'Idris Ganiyat Olohuntoyin',
'Idris Haneefah Moyosoreoluwa',
'Ishola Mistura Oreoluwa',
'Jubril Amidat Oluwasemilore',
'Lawal Saidat Omoshalewa',
'Martins Juliana Ogechukwu',
'Momoh Abibat Favour',
'Mustapha Safurat Ololade',
'Nwaobodo Chiamaka Cecilia',
'Nwosu Blessing Chibugo',
'Ogbu Patience Ndidiamaka',
'Oguike Oluomachukwu Precious',
'Olaiya Morayo Joy',
'Olufemi Itunu Kehinde',
'Oluwanishola Mariam Abio',
'Oluwole Oluwabusayomi Boluwatife',
'Omokhodion Racheal Favour',
'Onifade Kehinde Ayoola',
'Onyema Emmanuella Chinenye',
'Opeloyeru Aishat Yoyinsola',
'Oseni Fathia Olaide',
'Oyebisi Ayomide Habibah',
'Oyetunde Adesewa Esther',
'Saliman Rukayat Abike',
'Tom Tarimoboere Sarah',
'Udeh Gloria Oluchi',
'Ugorji Treasure Chukwudimma',
'Ugwuanyija Amarachi Favour',
'Usman Haliyah Yetunde',
'Yusuf Toheebat Olayinka'
    ];

    let commercialList=[
'Martins Juliana Ogechukwu',
'Momoh Abibat Favour',
'Mustapha Safurat Ololade',
'Nwaobodo Chiamaka Cecilia',
'Nwosu Blessing Chibugo',
'Ogbu Patience Ndidiamaka',
'Oguike Oluomachukwu Precious',
'Olaiya Morayo Joy',
'Olufemi Itunu Kehinde',
'Oluwanishola Mariam Abio',
'Oluwole Oluwabusayomi Boluwatife',
'Omokhodion Racheal Favour',
'Onifade Kehinde Ayoola',
'Onyema Emmanuella Chinenye',
'Opeloyeru Aishat Yoyinsola',
'Oseni Fathia Olaide',
'Oyebisi Ayomide Habibah',
'Oyetunde Adesewa Esther',
'Saliman Rukayat Abike',
'Tom Tarimoboere Sarah',
'Udeh Gloria Oluchi',
'Ugorji Treasure Chukwudimma',
'Ugwuanyija Amarachi Favour',
'Usman Haliyah Yetunde'

];
    
        /*let student=document.getElementById("search");
        student.addEventListener('click', graduates); 
        */

        
       let student=document.getElementById("sciencegrad");
        student.addEventListener('click', graduates); 
        
       /* if (student=="Science Students"){
            myList=scienceList
        }
        function graduates(myList){

            if (student=="Science Students"){
                myList=scienceList
            }
           */

    function graduates(){
        
            document.body.innerHTML="";

        let heading=document.createElement("header");
        heading.setAttribute("class", "header");

        let ybLogo=document.createElement("div");
        ybLogo.setAttribute("class", "logo");
        ybLogo.textContent="DYB LOGO";

        let menu=document.createElement("div");
        menu.setAttribute("class", "menu");

        let homePage=document.createElement("a");
        homePage.setAttribute("href", "index.html");
        homePage.textContent="Home";

        let About=document.createElement("a");
        About.setAttribute("href", "about.html");
        About.textContent="About";

        let graduatePage=document.createElement("a");
        graduatePage.setAttribute("href", "gradutes.html");
        graduatePage.textContent="Graduates";

        let searchPage=document.createElement("div");
        searchPage.setAttribute("class", "search");
        
        let inputBox=document.createElement("input");
        inputBox.setAttribute("type", "text");
        inputBox.setAttribute("placeholder","Type a Student name");

        let buttonSearch=document.createElement("button");
        buttonSearch.setAttribute("id", "search");

        menu.appendChild(homePage);
        menu.appendChild(About);
        menu.appendChild(graduatePage);

        searchPage.appendChild(inputBox)
        searchPage.appendChild(buttonSearch)

        heading.appendChild(ybLogo);
        heading.appendChild(menu);
        heading.appendChild(searchPage)
        document.body.appendChild(heading);


        
        let mainContent=document.createElement("main");
        mainContent.classList.add("mainPage");
       
        for (let i=0; i<scienceList.length; i++){
           
            let divContent=document.createElement("div");
            let passport=document.createElement("img");
            passport.setAttribute("src","images/SS_3A/" + scienceList[i]+".jpg");
            let studName=document.createElement("p");
            studName.textContent=scienceList[i];
    
            divContent.appendChild(passport);
            divContent.appendChild(studName);
           mainContent.appendChild(divContent);
          
            divContent.classList.add("passports");
            document.body.appendChild(mainContent); 
                        
        }
    }   
    


  
 
   