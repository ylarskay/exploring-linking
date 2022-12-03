let tarot = [];
let numTarot = 78;

function preload() {
  let tarot1 = loadImage('1.png');
  let tarot2 = loadImage('2.png');
  let tarot3 = loadImage('3.png');
  let tarot4 = loadImage('4.png');
  let tarot5 = loadImage('5.png');
  let tarot6 = loadImage('6.png');
  let tarot7 = loadImage('7.png');
  let tarot8 = loadImage('8.png');
  let tarot9 = loadImage('9.png');
  let tarot10 = loadImage('10.png');
  let tarot11 = loadImage('11.png');
  let tarot12 = loadImage('12.png');
  let tarot13 = loadImage('13.png');
  let tarot14 = loadImage('14.png');
  let tarot15 = loadImage('15.png');
  let tarot16 = loadImage('16.png');
  let tarot17 = loadImage('17.png');
  let tarot18 = loadImage('18.png');
  let tarot19 = loadImage('19.png');
  let tarot20 = loadImage('20.png');
  let tarot21 = loadImage('21.png');
  let tarot22 = loadImage('22.png');
  let tarot23 = loadImage('23.png');
  let tarot24 = loadImage('24.png');
  let tarot25 = loadImage('25.png');
  let tarot26 = loadImage('26.png');
  let tarot27 = loadImage('27.png');
  let tarot28 = loadImage('28.png');
  let tarot29 = loadImage('29.png');
  let tarot30 = loadImage('30.png');
  let tarot31 = loadImage('31.png');
  let tarot32 = loadImage('32.png');
  let tarot33 = loadImage('33.png');
  let tarot34 = loadImage('34.png');
  let tarot35 = loadImage('35.png');
  let tarot36 = loadImage('36.png');
  let tarot37 = loadImage('37.png');
  let tarot38 = loadImage('38.png');
  let tarot39 = loadImage('39.png');
  let tarot40 = loadImage('40.png');
  let tarot41 = loadImage('41.png');
  let tarot42 = loadImage('42.png');
  let tarot43 = loadImage('43.png');
  let tarot44 = loadImage('44.png');
  let tarot45 = loadImage('45.png');
  let tarot46 = loadImage('46.png');
  let tarot47 = loadImage('47.png');
  let tarot48 = loadImage('48.png');
  let tarot49 = loadImage('49.png');
  let tarot50 = loadImage('50.png');
  let tarot51 = loadImage('51.png');
  let tarot52 = loadImage('52.png');
  let tarot53 = loadImage('53.png');
  let tarot54 = loadImage('54.png');
  let tarot55 = loadImage('55.png');
  let tarot56 = loadImage('56.png');
  let tarot57 = loadImage('57.png');
  let tarot58 = loadImage('58.png');
  let tarot59 = loadImage('59.png');
  let tarot60 = loadImage('60.png');
  let tarot61 = loadImage('61.png');
  let tarot62 = loadImage('62.png');
  let tarot63 = loadImage('63.png');
  let tarot64 = loadImage('64.png');
  let tarot65 = loadImage('65.png');
  let tarot66 = loadImage('66.png');
  let tarot67 = loadImage('67.png');
  let tarot68 = loadImage('68.png');
  let tarot69 = loadImage('69.png');
  let tarot70 = loadImage('70.png');
  let tarot71 = loadImage('71.png');
  let tarot72 = loadImage('72.png');
  let tarot73 = loadImage('73.png');
  let tarot74 = loadImage('74.png');
  let tarot75 = loadImage('75.png');
  let tarot76 = loadImage('76.png');
  let tarot77 = loadImage('77.png');
  let tarot78 = loadImage('78.png');
  tarot = [tarot1,tarot2,tarot3,tarot4,tarot5,tarot6,tarot7,tarot8,tarot9,tarot10,tarot11,tarot12,tarot13,tarot14,tarot15,tarot16,tarot17,tarot18,tarot19,tarot20,tarot21,tarot22,tarot23,tarot24,tarot25,tarot26,tarot27,tarot28,tarot29,tarot30,tarot31,tarot32,tarot33,tarot34,tarot35,tarot36,tarot37,tarot38,tarot39,tarot40,tarot41,tarot42,tarot43,tarot44,tarot45,tarot46,tarot47,tarot48,tarot49,tarot50,tarot51,tarot52,tarot53,tarot54,tarot55,tarot56,tarot57,tarot58,tarot59,tarot60,tarot61,tarot62,tarot63,tarot64,tarot65,tarot66,tarot67,tarot68,tarot69,tarot70,tarot71,tarot72,tarot73,tarot74,tarot75,tarot76,tarot77,tarot78];
  
  backg = loadImage('starrysky2.jpeg');
  
  back = loadImage('back.png');
}


function setup() {
  createCanvas(1400, 780);
  background(backg);
  
  image(back, 150, 100, 300, 500);
  image(back, 550, 100, 300, 500);
  image(back, 950, 100, 300, 500);
  
  noLoop();
}

function draw() {
 
   imageMode(CENTER);
  
  var n = 3
  let randoImg = random(tarot)

    
  }
  
  


function mouseClicked() {
  
  // redraw();
    randoImg = random(tarot)
    image(randoImg, 300, 350, 300, 500);
    randoImg = random(tarot)
    image(randoImg, 700, 350, 300, 500);
    randoImg = random(tarot)
    image(randoImg, 1100, 350, 300, 500);
}