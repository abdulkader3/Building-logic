let ifone                                = document.querySelector('.ifone')
let iftwo                                = document.querySelector('.iftwo')
let partOne                              = document.querySelector('.partOne')
let buttonWELLCOME                       = document.querySelector('.buttonWELLCOME')
let partTow                              = document.querySelector('.partTow')
let diclearTow                           = document.querySelector('.diclearTow')
let noticeTow                            = document.querySelector('.noticeTow')
let playerItaractionTow                  = document.querySelector('.playerItaractionTow')
let inputForNameTow                      = document.querySelector('.inputForNameTow')
let buttonPLYnameONE                     = document.querySelector('.buttonPLYnameONE')
let partThree                            = document.querySelector('.partThree')
let diclearThree                         = document.querySelector('.diclearThree')
let noticeThree                          = document.querySelector('.noticeThree')
let playerItaractionThree                = document.querySelector('.playerItaractionThree')
let inputForNameThree                    = document.querySelector('.inputForNameThree')
let buttonPLYnameTWO                     = document.querySelector('.buttonPLYnameTWO')
let ifoneh                               = document.querySelector('.ifoneh')
let iftwoh                               = document.querySelector('.iftwoh')
let partfour                             = document.querySelector('.partfour')
let plyname                              = document.querySelector('.plyname')
let NotificationPLYone                   = document.querySelector('.NotificationPLYone')
let plyNUMBERinputONE                    = document.querySelector('.plyNUMBERinputONE')
let buttonPLYnumberONE                   = document.querySelector('.buttonPLYnumberONE')
let partfive                             = document.querySelector('.partfive')
let plynametow                           = document.querySelector('.plynametow')
let plyNUMBERinputTWO                    = document.querySelector('.plyNUMBERinputTWO')
let buttonPLYnumberTWO                   = document.querySelector('.buttonPLYnumberTWO')
let partsix                              = document.querySelector('.partsix')
let NotificationPLYtwo                   = document.querySelector('.NotificationPLYtwo')




// ===================D.O.O.M=============================================================









// =========part one js=================
buttonWELLCOME.addEventListener('click', () => {
    partOne.style = 'display: none;'
    partTow.style = 'display: block;'
})
//============part one js end============






//==========part two js===================
buttonPLYnameONE.addEventListener('click', () => {
    if (inputForNameTow.value.trim() === '') {
        noticeTow.innerHTML = 'Please enter your name😌 you stupid🤦'
    } else {
        ifoneh.innerHTML = inputForNameTow.value;
        partThree.style = 'display: block;'
        partTow.style = 'display: none;'
        plyname.innerHTML = inputForNameTow.value;
    }
})
//==========part two js end===================







//==========part three js=======================
buttonPLYnameTWO.addEventListener('click', () => {
    if (inputForNameThree.value.trim() === '') {
        noticeThree.innerHTML = 'Please enter your name😌 you stupid🤦'
    } else {
        iftwoh.innerHTML = inputForNameThree.value;
        partThree.style = 'display: none;'
        partfour.style = 'display: block;'
        plynametow.innerHTML = inputForNameThree.value;
    }
})
//==========part three js end===================


//==========part four js end===================
buttonPLYnumberONE.addEventListener('click',()=>{
    if(plyNUMBERinputONE.value == ''){
        NotificationPLYone.innerHTML = 'Please enter Appropriate number😌 you stupid🤦'
    }else{
        if(plyNUMBERinputONE.value > 100){
            NotificationPLYone.innerHTML = 'Please enter number below 100😌 you stupid🤦'
        }else{
            partfour.style = 'display: none;'
            partfive.style = 'display: block;'
        }
    }
})

//==========part four js end===================



//==========part four js end===================
buttonPLYnumberTWO.addEventListener('click',()=>{
    if(plyNUMBERinputTWO.value == ''){
        NotificationPLYtwo.innerHTML = 'Please enter Appropriate number😌 you stupid🤦'
    }else{
        if(plyNUMBERinputTWO.value > 100){ NotificationPLYtwo.innerHTML = 'Please enter number below 100😌 you stupid🤦'
           }else{
            if (plyNUMBERinputTWO.value == plyNUMBERinputONE.value) {
                iftwo.style = 'display: block'
                partfive.style = 'display: none'
            }else{
                ifone.style = 'display: block'
                partfive.style = 'display: none'
            }
           }
    }
})

//==========part four js end===================





















































































































































































































































































































































































































