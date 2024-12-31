var pointnum = 0;
var ison = false;
var x = 0
var y = 0
var px = 0
var py = 0
var bx = 0
var by = 0
var tnum = 0
var rtnum = 0
var dinum = 0
var rnum;
var firenum = 0;
var p1c = "rgb(255, 13, 0,.5)";
var p2c = "rgb(255, 119, 0,.5)";
var p3c = "rgb(237, 237, 9,.5)";
var p4c = "rgb(0, 8, 255,.5)";
var p5c = "rgb(144, 0, 255,.5)";
var rlist = [];
var blist = [];
var point1
var point2 
var point3
var point4
var a
var b
var c
var r = 0
var current1
var current2
var attwr;
var defa = 0;
var player_turn = 1;
var player_num;
var pot = 100;
var t1 = {area: 'gland', owner: 0, numtroops: 0, borders: ['nwt','onario','qubec','iceland']};
var t2 = {area: 'nwt', owner: 0, numtroops: 0, borders: ['gland','alaska','alberta','onario']};
var t3 = {area: 'alaska', owner: 0, numtroops: 0, borders: ['nwt','alberta','kamchakta']};
var t4 = {area: 'alberta', owner: 0, numtroops: 0, borders: ['nwt','alaska','wus']};
var t5 = {area: 'onario', owner: 0, numtroops: 0, borders: ['gland','nwt','qubec']};
var t6 = {area: 'qubec', owner: 0, numtroops: 0, borders: ['gland','onario','eus']};
var t7 = {area: 'wus', owner: 0, numtroops: 0, borders: ['alberta','onario','eus','centralmurca']};
var t8 = {area: 'eus', owner: 0, numtroops: 0, borders: ['qubec','wus','centralmurca']};
var t9 = {area: 'centralmurca', owner: 0, numtroops: 0, borders: ['wus','onario','eus','vendes']};
var t10 = {area: 'vendes', owner: 0, numtroops: 0, borders: ['centralmurca','peru','brazil']};
var t11 = {area: 'brazil', owner: 0, numtroops: 0, borders: ['vendes','peru','argenentina','northafrica']};
var t12 = {area: 'peru', owner: 0, numtroops: 0, borders: ['vendes','brazil','argenentina']};
var t13 = {area: 'argenentina', owner: 0, numtroops: 0, borders: ['brazil','peru',]};
var t14 = {area: 'iceland', owner: 0, numtroops: 0, borders: ['gland','scans','britan']};
var t15 = {area: 'britan', owner: 0, numtroops: 0, borders: ['iceland','scans','weuro','neuro']};
var t16 = {area: 'weuro', owner: 0, numtroops: 0, borders: ['britan','seuro','neuro','northafrica']};
var t17 = {area: 'seuro', owner: 0, numtroops: 0, borders: ['northafrica','weuro','neuro','mideast','ukrane','egypt']};
var t18 = {area: 'neuro', owner: 0, numtroops: 0, borders: ['britan','scans','seuro','weuro','ukrane']};
var t19 = {area: 'scans', owner: 0, numtroops: 0, borders: ['iceland','britan','neuro','ukrane']};
var t20 = {area: 'ukrane', owner: 0, numtroops: 0, borders: ['neuro','scans','seuro','mideast','afganastan','ural']};
var t21 = {area: 'northafrica', owner: 0, numtroops: 0, borders: ['brazil','seuro','weuro','egypt','eastafrica','congo']};
var t22 = {area: 'egypt', owner: 0, numtroops: 0, borders: ['seuro','northafrica','eastafrica','mideast']};
var t23 = {area: 'eastafrica', owner: 0, numtroops: 0, borders: ['northafrica','egypt','congo','madgascar','mideast']};
var t24 = {area: 'congo', owner: 0, numtroops: 0, borders: ['northafrica','eastafrica']};
var t25 = {area: 'southaf', owner: 0, numtroops: 0, borders: ['congo','eastafrica','madgascar']};
var t26 = {area: 'madgascar', owner: 0, numtroops: 0, borders: ['eastafrica','southaf']};
var t27 = {area: 'mideast', owner: 0, numtroops: 0, borders: ['seuro','ukrane','egypt','eastafrica','afganastan','india']};
var t28 = {area: 'afganastan', owner: 0, numtroops: 0, borders: ['ukrane','mideast','ural','india','china']};
var t29 = {area: 'ural', owner: 0, numtroops: 0, borders: ['ukrane','afganastan','siberea','china']};
var t30 = {area: 'india', owner: 0, numtroops: 0, borders: ['mideast','afganastan','china','salm']};
var t31 = {area: 'salm', owner: 0, numtroops: 0, borders: ['india','indoneisa','china']};
var t32 = {area: 'china', owner: 0, numtroops: 0, borders: ['afganastan','ural','india','salm','siberea','mongola']};
var t33 = {area: 'siberea', owner: 0, numtroops: 0, borders: ['ural','china','yaustsk','irktsk','mongola']};
var t34 = {area: 'yaustsk', owner: 0, numtroops: 0, borders: ['siberea','irktsk','kamchakta']};
var t35 = {area: 'kamchakta', owner: 0, numtroops: 0, borders: ['alaska','yaustsk','mongola','irktsk','japan']};
var t36 = {area: 'irktsk', owner: 0, numtroops: 0, borders: ['siberea','yaustsk','kamchakta']};
var t37 = {area: 'mongola', owner: 0, numtroops: 0, borders: ['china','siberea','kamchakta','japan']};
var t38 = {area: 'eastaussie', owner: 0, numtroops: 0, borders: ['westernaustarla']};
var t39 = {area: 'westernaustarla', owner: 0, numtroops: 0, borders: ['indoneisa','eastaussie','newginue']};
var t40 = {area: 'indoneisa', owner: 0, numtroops: 0, borders: ['salm','westernaustarla','newginue']};
var t41 = {area: 'newginue', owner: 0, numtroops: 0, borders: ['indoneisa','westernaustarla']};
var t42 = {area: 'japan', owner: 0, numtroops: 0, borders: ['kamchakta','mongola']};
var placers = [t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16,t17,t18,t19,t20,t21,t22,t23,t24,t25,t26,t27,t28,t29,t30,t31,t32,t33,t34,t35,t36,t37,t38,t39,t40,t41,t42];
var north_america = [t1,t2,t3,t4,t5,t6,t7,t8,t9];
var south_america = [t10,t11,t12,t13];
var europe = [t14,t15,t16,t17,t18,t19,t20];
var africa = [t21,t22,t23,t24,t25];
var aisa = [t26,t27,t28,t29,t30,t31,t32,t33,t34,t35,t36,t37,t42];
var austara = [t38,t39,t40,t41];
var teratories = [north_america,south_america,europe,africa,aisa,austara]

var dot = {
    'position': 'absolute',
  'height': 15 + 'px',
  'width': 15 + 'px',
'left': -15 + 'px',
    'top': -15 + 'px',
  'background-color': '#2e1302',
  'border-radius': 50+'%',
  "display": 'inline-block',
};
$('.dot').css(dot);

$(document).ready(function() {
$('.troop_move').hide();
$('.battlemenu').hide()
$('#defend').hide();
$('#win_screen').hide();
$('#turng').hide();
$('#warning').hide();


$('path').on('mouseenter',function(){

    ison = true;

    updateboard($(this).attr('id'))
    const bbox = this.getBBox();
if (pointnum == 0){
      point1 = ($(this).attr('id'))
}
if (pointnum == 1){
      point2 = ($(this).attr('id'))
}

if ($(this).attr('id') == 'japan'){
 var fx = 50
 var fy = 10
}
else if ($(this).attr('id') == 'ural'){

      var fx = 50
      var fy = -60
} 
else if ($(this).attr('id') == 'china'){

        var fx = 20
        var fy = -40
  }
else if ($(this).attr('id') == 'vendes'){

        var fx = 10
        var fy = 30
  }
else if ($(this).attr('id') == 'peru'){

        var fx = 10
        var fy = -20
  }
else if ($(this).attr('id') == 'madgascar'){

        var fx = 60
        var fy = 0
  }
else if ($(this).attr('id') == 'iceland'){

        var fx = 40
        var fy = 0
  }
else if ($(this).attr('id') == 'ukrane'){

        var fx = 0
        var fy = -50
  }
else if ($(this).attr('id') == 'salm'){

        var fx = 20
        var fy = 0
  }else{
      var fx = 0
        var fy = 0
}
 x = (bbox.x+(60-fx))
 y = (bbox.y-fy)
var pos = {
'top': (bbox.y-fy) + 'px',
'left': (bbox.x+(60-fx)) + 'px'
}    
if(pointnum != 1){
$('.dot').css(pos)
}    
        });

$('path').on('mouseleave',function(){
    ison = false
    $('.dot').css(dot)
    $('.name_data').text('')
    $('.troop_data').text('')
    $('.owner_data').text('')
    });
});
document.addEventListener('click', function(event) {
console.log("current pot:" + pot)
if (pot == 0){
if(r == 0){
if(process()){
    if (ison && pointnum < 2 && !(px == x) && !(py == y)){
      if(pointnum == 1) {
            if(OMG_CLIP_THAT()){
                  pointnum++;
    
                  let poid = ('point'+pointnum)
                  $('body').append("<span class='point' id="+(poid)+"></span>")
                  var das = {
                    'position': 'absolute',
                    'left': x + 'px',
                    'top': y + 'px',
                    'height': 15 + 'px',
                    'width': 15 + 'px',
                    'background-color': '#2e1302',
                    'border-radius': 50+'%',
                    "display": 'inline-block',
                  }
                    
              px = x
              py = y
                  $('#' + poid).css(das)  
            }else{
                  console.log("p1")
            }
      }else{
      
    pointnum++;
    
    let poid = ('point'+pointnum)
    $('body').append("<span class='point' id="+(poid)+"></span>")
    var das = {
      'position': 'absolute',
      'left': x + 'px',
      'top': y + 'px',
      'height': 15 + 'px',
      'width': 15 + 'px',
      'background-color': '#2e1302',
      'border-radius': 50+'%',
      "display": 'inline-block',
    }
      
px = x
py = y
    $('#' + poid).css(das)

    }
}
}else{
   

      if(current1 != 0){
            warning()
            }

  

}
}else{


      if(current1 == player_turn && ison){
            
            current2.numtroops++;
            r-- ;
            if(r == 0){
                  $("#switch").text('you are now in attack mode')
                  $('#turng').show();
            }else{}
            $("#turnu").text("you have " + r + " troops in reserve")
            $('.troop_data').text('number of troops: '+current2.numtroops)
      }else{
            if(current1 != 0){
            warning()
            }
      }
}
}else{
      if(ison){
            if(current2.numtroops == 0 && (check_for_uncolnes() == false)){
            current2.numtroops++;
            pot-- ;
            if(pot == 0){
                  $("#switch").text('you are now in attack mode')
                  $('#turng').show();
            }else{console.log("3")}
            $("#turnu").text("you have " + pot + " troops in the pot")
            $('.troop_data').text('number of troops: '+current2.numtroops)
            current2.owner = player_turn
            
            update_owner()
            if (player_turn == player_num){
                  player_turn = 1 
            }else{
            player_turn++
            }
            $("#turnw").text(player_turn)
            let pojn = `p${player_turn}c`
            console.log(pojn)
            $("#turnw").css({"background-color":window[pojn]});
      }else if(current2.numtroops != 0 && (check_for_uncolnes() == false)){
            console.log("p4")

      }else if(current2.numtroops != 0 && (check_for_uncolnes() == true)){
            if (current2.owner == player_turn){
            current2.numtroops++;
            pot-- ;
            if(pot == 0){
                  $("#switch").text('you are now in attack mode')
                  $('#turng').show();
            }else{}
            $("#turnu").text("you have " + pot + " troops in the pot")
            $('.troop_data').text('number of troops: '+current2.numtroops)
            if (player_turn == player_num){
                  player_turn = 1 
            }else{
            player_turn++
            }    
            $("#turnw").text(player_turn)
            let pojn = `p${player_turn}c`
            console.log(pojn)
            $("#turnw").css({"background-color":window[pojn]});
      }else{
            console.log("p5")
      } 
      }
      }else{
            console.log("sorry bub69")
 
      }
}
});

function seconddot(){
      if(pointnum == 1){
            line()
             document.addEventListener('mousemove', (event) => {
                    bx = event.clientX;
                    by = event.clientY;
                });
            var nv3 = {
            'top': by + 'px',
            'left': bx + 'px'
            }    
            $('.dot').css(nv3);
      }
      if(pointnum == 2){
            showtrop()
            const pix = (parseInt($('#point2').css('left') + 7.5) - (parseInt($('#point1').css('left')) + 7.5));
            const piy = (parseInt($('#point2').css('top') + 7) - (parseInt($('#point1').css('top')) + 7));
            const ayo = Math.atan2(piy, pix);
            $('.line').css(
                  {
                        width: (calculateDistance(
                            parseInt($('#point1').css('left')) + 7.5,
                            parseInt($('#point1').css('top')) + 7,
                            parseInt($('#point2').css('left')) + 7.5,
                            parseInt($('#point2').css('top')) + 7
                        )) + 'px',

                  transform: 'rotate('+(ayo*(180/3.14))+'deg)'
                  })
      }
}
function line(){
var startpoint = [parseInt($('#point1').css('left')),parseInt($('#point1').css('top'))];
var endpoint = calculateDistance(startpoint[0]+7.5, startpoint[1]+7, bx+7.5, by+7)
const delX = (bx + 7.5) - (startpoint[0] + 7.5);
const delY = (by + 7) - (startpoint[1] + 7);
const angleRadians = Math.atan2(delY, delX);
$('.line').css(
      {
      left:(startpoint[0]+7.5)+'px',
       top:(startpoint[1]+7)+'px',
      width: endpoint+'px',
      transform: 'rotate('+(angleRadians*(180/3.14))+'deg)'
      })
}
function calculateDistance(x1, y1, x2, y2) {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}
function pwoeuf(){
      clear()
}
function clear(){

      if(pointnum == 2){
            $('#point1').remove()
            $('#point2').remove()
            pointnum = 0
            point4 = point1
            point1 = ''
            point3 = point2
            point2 = ''
            $('.line').css({
                  position:'absolute',
                  top: -20+'px',
                  left: -20+'px',
                  transform: 'rotate('+0+'deg)',
                  width: 30+'px',
 })
      }else if(pointnum == 1){
            $('#point1').remove()
            $('#point2').remove() 
            pointnum = 0
            point1 = ''
            point2 = ''
            $('.line').css({
                  position:'absolute',
                  top: -20+'px',
                  left: -20+'px',
                  transform: 'rotate('+0+'deg)',
                  width: 30+'px',
 })
      }
}
function updateboard(th){

      for (var i = 0; i < 42; i++) {
            let ack = placers[i]
            if((ack.area) === th){
                  $('.name_data').append('teratory: '+ack.area)
                  $('.troop_data').append('number of troops: '+ack.numtroops)
                  $('.owner_data').append('owned by: '+ack.owner)
                  current1 = (ack.owner)
                  current2 = (ack)


            }
}
}
function sendtroop(inc,max,min,country){

      if (inc){
            if((tnum + 1) <= max){
            tnum++  
            
            }
      }
      else{
             if((tnum - 1) >= min){
            tnum -= 1
            
             }
      }

      $("#send").text(tnum)

}
function protro(pee){

      for (var i = 0; i < 42; i++) {
            let acw = placers[i]
            if((acw.area) === point1){

                  c = acw
            }
      }
      let ereqr = (c.numtroops-1)
      if($("#switch").text() == 'you are now in move mode'){

      max = ereqr
      attwr = false
      }
      else{

      if (ereqr >= 3) {
            max = 3
            attwr = true
      } 
      else{
          max = ereqr
          attwr = true
      }
      }
      sendtroop(pee,max,0,0)
}

function hidetrop(send){
      $('.troop_move').hide()
      if(attwr){
            $('#defend').show();
      }
      else{
      update_troops(point1,point2,send)
      }
      rtnum = tnum
      tnum = 0; 
      $('#send').text(tnum);
      clear()
}
function showtrop(){
      $('.troop_move').show()
}

function update_troops(point1,point2,send){

      for (var i = 0; i < 42; i++) {
            let acp = placers[i]
            if((acp.area) === point1){

                  a = acp
            }
      }
      for (var j = 0; j < 42; j++) {
                  let aco = placers[j]
                  if((aco.area) === point2){

                        b = aco
                  }
}      
      if(send){
      a.numtroops -= tnum
      b.numtroops += tnum
      }

      }
//dice rooling section
function roll_dice(s){
      dinum++
      if(s){
            $('.battlemenu_left').append('<div class="face" id="di'+(dinum)+'"><span class="pip"></span><span class="pip"></span><span class="pip"></span><span class="pip"></span><span class="pip"></span><span class="pip"></span></div>');

$('#di' + dinum).css({
backgroundColor: "#e62315",
boxShadow:"inset 0 5px #f26b6b, inset 0 -5px #d90404, inset 5px 0 #f25555, inset -5px 0 #f25555"
                  }); // red dice
            }

      else{
            $('.battlemenu_right').append('<div class="face" id="di'+(dinum)+'"><span class="pip"></span><span class="pip"></span><span class="pip"></span><span class="pip"></span><span class="pip"></span><span class="pip"></span></div>');

$('#di' + dinum).css({
backgroundColor: "#0b19b3",
boxShadow:"inset 0 5px #616efa, inset 0 -5px #1a2ad9, inset 5px 0 #081280, inset -5px 0 #081280"
                              });// blue dice
      }
     let finalnum = callDiceRo10Times()
      return finalnum;
}
function dice_ro(rnum){
      let $dice = $('#di' + dinum);
      if((rnum % 2) == 0){
            $dice.find('.pip:nth-child(6)').css('grid-area', 'f')
            if(rnum == 2){
                  $dice.find('.pip:nth-child(2)').css('opacity', 0)
                  $dice.find('.pip:nth-child(6)').css('opacity', 0)
                  $dice.find('.pip:nth-child(3)').css('opacity', 0)
                  $dice.find('.pip:nth-child(4)').css('opacity', 0)
                  $dice.find('.pip:nth-child(5)').css('opacity', 1)
                  $dice.find('.pip:nth-child(1)').css('opacity', 1)
            }
            if(rnum == 4){
                  $dice.find('.pip:nth-child(2)').css('opacity', 0)
                  $dice.find('.pip:nth-child(6)').css('opacity', 0)
                  $dice.find('.pip:nth-child(5)').css('opacity', 1)
                  $dice.find('.pip:nth-child(1)').css('opacity', 1)
                  $dice.find('.pip:nth-child(3)').css('opacity', 1)
                  $dice.find('.pip:nth-child(4)').css('opacity', 1)
            }
            if(rnum == 6){
                  $dice.find('.pip:nth-child(2)').css('opacity', 1)
                  $dice.find('.pip:nth-child(6)').css('opacity', 1)
                  $dice.find('.pip:nth-child(5)').css('opacity', 1)
                  $dice.find('.pip:nth-child(1)').css('opacity', 1)
                  $dice.find('.pip:nth-child(3)').css('opacity', 1)
                  $dice.find('.pip:nth-child(4)').css('opacity', 1)
            }

      }
      else{
            $dice.find('.pip:nth-child(6)').css('grid-area', 'g')
            if(rnum == 1){
                  $dice.find('.pip:nth-child(2)').css('opacity', 0)
                  $dice.find('.pip:nth-child(3)').css('opacity', 0)
                  $dice.find('.pip:nth-child(4)').css('opacity', 0)
                  $dice.find('.pip:nth-child(5)').css('opacity', 0)
                  $dice.find('.pip:nth-child(1)').css('opacity', 0)
                  $dice.find('.pip:nth-child(6)').css('opacity', 1)
            }
            if(rnum == 3){
                  $dice.find('.pip:nth-child(2)').css('opacity', 0)
                  $dice.find('.pip:nth-child(3)').css('opacity', 0)
                  $dice.find('.pip:nth-child(4)').css('opacity', 0)
                  $dice.find('.pip:nth-child(5)').css('opacity', 1)
                  $dice.find('.pip:nth-child(1)').css('opacity', 1)
                  $dice.find('.pip:nth-child(6)').css('opacity', 1)
            }
            if(rnum == 5){
                  $dice.find('.pip:nth-child(2)').css('opacity', 0)
                  $dice.find('.pip:nth-child(3)').css('opacity', 1)
                  $dice.find('.pip:nth-child(4)').css('opacity', 1)
                  $dice.find('.pip:nth-child(5)').css('opacity', 1)
                  $dice.find('.pip:nth-child(1)').css('opacity', 1)
                  $dice.find('.pip:nth-child(6)').css('opacity', 1)
            }
      }

}
function callDiceRo10Times() {


       // for (let i = 0; i < 10; i++) {
         //   setTimeout(function() {
                rnum = Math.floor(Math.random() * 6) + 1;
                dice_ro(rnum);



         //   }, i * 200); // Delay by 200ms between each call
        //}



      return rnum;
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function BATTLE(blu, red) {
     $('.battlemenu').show()
    // First loop for rolling dice with 'false' (red)
    for (let i = 0; i < blu; i++) {

        blist.push(roll_dice(false)); // Call roll_dice with `false` for red
        await delay(300); // Wait for 5 seconds between each call
    }


    for (let i = 0; i < red; i++) {

        rlist.push(roll_dice(true)); // Call roll_dice with `true` for blue
        await delay(300); // Wait for 5 seconds between each call
    }
      blist.sort();
      blist.reverse();
      rlist.sort();
      rlist.reverse();
      let hibnum = blist[0]
      let hirnum = rlist[0]
      let lobnum = blist[1]
      let lornum = rlist[1]
      let win1;
      let win2;

      if(hibnum > hirnum){
           win1 = true 
      }
      else if(hibnum < hirnum){
           win1 = false 
      }
      else{
           win1 = 'tie'
      }

      if(lobnum > lornum){
                 win2 = true 
      }
      else if(lobnum < lornum){
                 win2 = false 
      }
      else{
            win2 = 'tie'
      }
      
      if(win1 == true && win2 == true){
            $('#resultdddd').text('defenders win')
      }
      else if(win1 == true && win2 == false){
            $('#resultdddd').text('tie')
      }
      else if(win1 == false && win2 == true){
            $('#resultdddd').text('tie')
      }
      else if(win1 == 'tie' && win2 == 'tie'){
            $('#resultdddd').text('tie')
      }
      else if(win1 == true && win2 == 'tie'){
            $('#resultdddd').text('defenders win')
      }
      else if(win1 == 'tie' && win2 == true){
            $('#resultdddd').text('defenders win')
      }
      else if(win1 == false && win2 == false){
            $('#resultdddd').text('attackers win')
      }
      else if(win1 == 'tie' && win2 == false){
            $('#resultdddd').text('attackers win')
      }
      else if(win1 == false && win2 == 'tie'){
            $('#resultdddd').text('attackers win')
      }
      else{
            console.log('idk who thf win fr')
      }
      let repe = [win1,win2]
      console.log("---" + repe + "---");
      console.log("---" + repe[0] + "---");
      console.log("---" + repe[1] + "---");
      console.log("---" + win1 + "---");
      console.log("---" + win2 + "---");

      if(repe[0] == true){
            a.numtroops -= 1
      } 
      else if(repe[0] == false){
            b.numtroops -= 1
      }         
      else{            
            console.log("tie1")
      }

      if(repe[1] == true){
            a.numtroops -= 1   
      } 
      else if(repe[1] == false){
            b.numtroops -= 1
      }          
      else{           
            console.log("tie2")
      }

      if(b.numtroops == 0){
            b.owner = a.owner 
            b.numtroops += rtnum
            a.numtroops -= rtnum
      }
      if(a.numtroops == 0){
            a.owner = b.owner 
            a.numtroops += rtnum
            b.numtroops -= rtnum
      }
}
function clear_battle(){
      
             
      $('#di1').remove();
      $('#di2').remove();
      $('#di3').remove();
      $('#di4').remove();
      $('#di5').remove();
      

      rlist = [];
      blist = [];
      dinum = 0;

      $('#resultdddd').text('')
      $('.battlemenu').hide()
      update_owner()
      winner()
}  
function phase_shift(){

      if($("#switch").text() == 'you are now in move mode'){
            $("#switch").text('you are now in attack mode')
      }
      else{
            $("#switch").text('you are now in move mode')  
      }
}
function getOption() {
      $('#defend').hide();
      const output = $('#ca').val();

      for (let j = 1; j < 42; j++) {
            let qco = placers[j]
            if((qco.area) === point3){

                  b = qco
            }
      }
      for (var i = 0; i < 42; i++) {
            let acp = placers[i]
            if((acp.area) === point4){

                  a = acp
            }
      }

      if((output == 'two')){
            defa = 2;
      }
      else{
            defa = 1;
      }

      BATTLE(defa,rtnum);
      }
function update_owner(){
      
      for (var i = 0; i < 42; i++) {
            let acp = placers[i]
      if((acp.owner) == 0){
            $("#"+acp.area).css({fill:"rgb(79, 79, 79,.5)"})
      }  
      else if((acp.owner) == 1){
            $("#"+acp.area).css({fill:p1c})          
      }
      else if((acp.owner) == 2){
            $("#"+acp.area).css({fill:p2c})            
      }
      else if((acp.owner) == 3){
            $("#"+acp.area).css({fill:p3c})            
      }
      else if((acp.owner) == 4){
            $("#"+acp.area).css({fill:p4c})            
      }
      else if((acp.owner) == 5){
            $("#"+acp.area).css({fill:p5c})           
      }
}

}
function end_turn(){
      if(r == 0 && pot == 0){
      if($("#switch").text() == 'you are now in attack mode'){
      phase_shift()
      $("#turng").text("end turn")
      }else{

      if (player_turn == player_num){
            player_turn = 1 
      }else{
      player_turn++
      }
      reserve()
      $("#turng").text("start moving")
      $("#turnw").text(player_turn)
      let pojn = `p${player_turn}c`
            console.log(pojn)
            $("#turnw").css({"background-color":window[pojn]});
      phase_shift()
      $("#switch").text('empty your reserves')
      $('#turng').hide();
      }
}else{}
}
function process(){
      if(pointnum == 0){
            if(current1 == player_turn){    
                  return true
            }else{ 
                  return false
            }
      }else if(pointnum == 1){
            if($("#switch").text() == 'you are now in move mode'){
                  if(current1 == player_turn){ 
                        return true
                  }else{ 
                        return false
                  }
            }else{
                  if(current1 != player_turn && current1 != 0){   
                        return true
                  }else{
                        return false
                  }
            
            }
      }else{
            return false  
      }
}
function reserve(){
      for (let j = 1; j < 42; j++) {
            let qco = placers[j]
            if((qco.owner) === player_turn){
                  r++
            }
            
      }
      $("#turnu").text("you have " + r + " troops in reserve")
}
function winner(){
      let oe = 0;
      for (let j = 0; j < 42; j++) {
            let qco = placers[j]
            if((qco.owner) === player_turn){
                  oe++
            }
            
      }
      if (oe == 42){
            
            $('#win_screen').show();
            $('#win_screen').append("<h1>player "+player_turn+" is the WINNERRRR</h1>")
            $('#win_screen').append("<h3>to start a new game, please refresh the page</h3>")
      }else{
            
      }
}
function start_game(){
      const peepeepoopoo = $('#twg').val();
      
      if(peepeepoopoo == 'two'){
            player_num = 2
      }else if(peepeepoopoo == 'three'){
            player_num = 3
      }
      else if(peepeepoopoo == 'four'){
            player_num = 4
      }
      else if(peepeepoopoo == 'five'){
            player_num = 5
      }
      $('#main_menu').hide()
      $("#turnu").text("you have " + pot + " troops in the pot")
      clearInterval(myInterval);
}
function check_for_uncolnes(){
      let yy = 0;
      for (let j = 0; j < 42; j++) {
            let qco = placers[j]
            if((qco.numtroops) != 0){
                  yy++
            }
            
      }
      if (yy == 42){
            return true
      }else{
            return false
      }
}
function OMG_CLIP_THAT(){
      let f1;
      let f2;
      for (let j = 0; j < 42; j++) {
            let qco = placers[j]
            if((qco.area) == point1){
                  f1 = qco
            }
            
      }
      for (let i = 0; i < 42; i++) {
            let qco = placers[i]
            if((qco.area) == point2){
                  f2 = qco
            }
            
      }

      
      if(f1.borders.includes(f2.area)){
            return true
      }else{
            $('#warning').text("you need to pick a place that borders your own")
            $('#warning').show()
            $('#warning').fadeOut()
            return false
      }
      
      
}
function fire() {
      // Remove existing fire elements if only one is needed at a time
      const colors = ['#F9ECA9', '#EFC900', '#D79700', '#D0BB48'];
  
      // Remove old fire element (firenum - 2) for cleanup
      $("#fire-element" + (firenum - 2)).remove();
  
      // Reset firenum if it reaches 30
      if (firenum >= 30) {
          firenum = 0;
      }
  
      for (let i = 0; i < 10; i++) {
          // Delay each iteration by 30ms
          setTimeout(() => {
              firenum++;
              let randomColorIndex = Math.floor(Math.random() * 4); // Picks a random color index
              $(".fire").append("<span id='fire-element" + firenum + "'></span>");
              
  
              // Apply CSS styles to the newly created element
              $("#fire-element" + firenum).css({
                  'position': 'absolute',
                  'left': Math.random() * 50 + 'px',
                  'top': '-60px',
                  'height': Math.floor(Math.random() * (80 - 40 + 1) + 40) + 'px',
                  'width': Math.floor(Math.random() * (80 - 40 + 1) + 40) + 'px',
                  'background-color': colors[randomColorIndex],
                  'border-radius': '50%',
                  'opacity': 1,
                  'mix-blend-mode': 'lighten',
                  'filter': 'brightness' + (1)
              });
  
              // Animation properties
              const animationProps = {
                  'top': Math.floor(Math.random() * (-180 - -100 + 1) + -100) + 'px',
                  'left': '25px',
                  'height': Math.floor(Math.random() * (60 - 20 + 1) + 20) + 'px',
                  'width': Math.floor(Math.random() * (40 - 20 + 1) + 20) + 'px',
                  'opacity': 0
              };
  
              // Animate the element with 200ms duration
              $("#fire-element" + firenum).animate(animationProps, 200);
  
          }, i * 30); // Delay each loop iteration by 30ms
      }
}
function warning(){
      if($("#switch").text() == 'you are now in attack mode'){
            if(pointnum == 0){
            $('#warning').text("you dont own this teretory")
            $('#warning').show()
            $('#warning').fadeOut()
           }else{
            $('#warning').text("you own this teretory")
            $('#warning').show()
            $('#warning').fadeOut()
           }
      }else{
            if(ison){
                  $('#warning').text("you dont own this teretory")
                  $('#warning').show()
                  $('#warning').fadeOut()
            } 
                 
      }
}
const myInterval = setInterval(fire, 400);
setInterval(seconddot, 100);

