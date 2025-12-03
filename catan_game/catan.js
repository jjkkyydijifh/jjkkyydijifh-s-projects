//areas to harvest resources
var a1 = {land:1,number:12,robber:false,visual:"#a1"}
var a2 = {land:1,number:12,robber:false,visual:"#a2"}
var a3 = {land:1,number:12,robber:false,visual:"#a3"}
var a4 = {land:1,number:12,robber:false,visual:"#a4"}
var a5 = {land:1,number:12,robber:false,visual:"#a5"}
var a6 = {land:1,number:12,robber:false,visual:"#a6"}
var a7 = {land:1,number:12,robber:false,visual:"#a7"}
var a8 = {land:1,number:12,robber:false,visual:"#a8"}
var a9 = {land:1,number:12,robber:false,visual:"#a9"}
var a10 = {land:1,number:12,robber:false,visual:"#a10"}
var a11 = {land:1,number:12,robber:false,visual:"#a11"}
var a12 = {land:1,number:12,robber:false,visual:"#a12"}
var a13 = {land:1,number:12,robber:false,visual:"#a13"}
var a14 = {land:1,number:12,robber:false,visual:"#a14"}
var a15 = {land:1,number:12,robber:false,visual:"#a15"}
var a16 = {land:1,number:12,robber:false,visual:"#a16"}
var a17 = {land:1,number:12,robber:false,visual:"#a17"}
var a18 = {land:1,number:12,robber:false,visual:"#a18"}
var a19 = {land:1,number:12,robber:false,visual:"#a19"}
var lands = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19]
//settlemts to harvest resources
var b1 = {owner: 0, type: 0, havrest: [a1], visual: "#b1"};
var b2 = {owner: 0, type: 0, havrest: [a1], visual: "#b2"};
var b3 = {owner: 0, type: 0, havrest: [a1,a2], visual: "#b3"};
var b4 = {owner: 0, type: 0, havrest: [a2], visual: "#b4"};
var b5 = {owner: 0, type: 0, havrest: [a2,a3], visual: "#b5"};
var b6 = {owner: 0, type: 0, havrest: [a3], visual: "#b6"};
var b7 = {owner: 0, type: 0, havrest: [a3], visual: "#b7"};
var b8 = {owner: 0, type: 0, havrest: [a4], visual: "#b8"};
var b9 = {owner: 0, type: 0, havrest: [a1,a4], visual: "#b9"};
var b10 = {owner: 0, type: 0, havrest: [a1,a4,a5], visual: "#b10"};
var b11 = {owner: 0, type: 0, havrest: [a1,a2,a5], visual: "#b11"};
var b12 = {owner: 0, type: 0, havrest: [a2,a5,a6], visual: "#b12"};
var b13 = {owner: 0, type: 0, havrest: [a2,a3,a6], visual: "#b13"};
var b14 = {owner: 0, type: 0, havrest: [a3,a6,a7], visual: "#b14"};
var b15 = {owner: 0, type: 0, havrest: [a3,a7], visual: "#b15"};
var b16 = {owner: 0, type: 0, havrest: [a7], visual: "#b16"};
var b17 = {owner: 0, type: 0, havrest: [a8], visual: "#b17"};
var b18 = {owner: 0, type: 0, havrest: [a4,a8], visual: "#b18"};
var b19 = {owner: 0, type: 0, havrest: [a4,a8,a9], visual: "#b19"};
var b20 = {owner: 0, type: 0, havrest: [a4,a5,a9], visual: "#b20"};
var b21 = {owner: 0, type: 0, havrest: [a5,a9,a10], visual: "#b21"};
var b22 = {owner: 0, type: 0, havrest: [a5,a6,a10], visual: "#b22"};
var b23 = {owner: 0, type: 0, havrest: [a6,a10,a11], visual: "#b23"};
var b24 = {owner: 0, type: 0, havrest: [a6,a7,a11], visual: "#b24"};
var b25 = {owner: 0, type: 0, havrest: [a7,a11,a12], visual: "#b25"};
var b26 = {owner: 0, type: 0, havrest: [a7,a12], visual: "#b26"};
var b27 = {owner: 0, type: 0, havrest: [a12], visual: "#b27"};
var b28 = {owner: 0, type: 0, havrest: [a8], visual: "#b28"};
var b29 = {owner: 0, type: 0, havrest: [a8,a13], visual: "#b29"};
var b30 = {owner: 0, type: 0, havrest: [a8,a9,a13], visual: "#b30"};
var b31 = {owner: 0, type: 0, havrest: [a9,a13,a14], visual: "#b31"};
var b32 = {owner: 0, type: 0, havrest: [a9,a10,a14], visual: "#b32"};
var b33 = {owner: 0, type: 0, havrest: [a10,a14,a15], visual: "#b33"};
var b34 = {owner: 0, type: 0, havrest: [a10,a11,a15], visual: "#b34"};
var b35 = {owner: 0, type: 0, havrest: [a11,a15,a16], visual: "#b35"};
var b36 = {owner: 0, type: 0, havrest: [a11,a12,a16], visual: "#b36"};
var b37 = {owner: 0, type: 0, havrest: [a12,a16], visual: "#b37"};
var b38 = {owner: 0, type: 0, havrest: [a12], visual: "#b38"};
var b39 = {owner: 0, type: 0, havrest: [a13], visual: "#b39"};
var b40 = {owner: 0, type: 0, havrest: [a13,a17], visual: "#b40"};
var b41 = {owner: 0, type: 0, havrest: [a13,a14,a17], visual: "#b41"};
var b42 = {owner: 0, type: 0, havrest: [a14,a17,a18], visual: "#b42"};
var b43 = {owner: 0, type: 0, havrest: [a14,a15,a18], visual: "#b43"};
var b44 = {owner: 0, type: 0, havrest: [a15,a18,a19], visual: "#b44"};
var b45 = {owner: 0, type: 0, havrest: [a15,a16,a19], visual: "#b45"};
var b46 = {owner: 0, type: 0, havrest: [a16,a19], visual: "#b46"};
var b47 = {owner: 0, type: 0, havrest: [a16], visual: "#b47"};
var b48 = {owner: 0, type: 0, havrest: [a17], visual: "#b48"};
var b49 = {owner: 0, type: 0, havrest: [a17], visual: "#b49"};
var b50 = {owner: 0, type: 0, havrest: [a17,a18], visual: "#b50"};
var b51 = {owner: 0, type: 0, havrest: [a18], visual: "#b51"};
var b52 = {owner: 0, type: 0, havrest: [a18,a19], visual: "#b52"};
var b53 = {owner: 0, type: 0, havrest: [a19], visual: "#b53"};
var b54 = {owner: 0, type: 0, havrest: [a19], visual: "#b54"};
var settlements = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20,b21, b22, b23, b24, b25, b26, b27, b28, b29, b30,b31, b32, b33, b34, b35, b36, b37, b38, b39, b40,b41, b42, b43, b44, b45, b46, b47, b48, b49, b50,b51, b52, b53, b54];
//roads for conecting settlemts
var c1 = {owner: 0, connection: [b1,b2], visual: "#c1"};
var c2 = {owner: 0, connection: [b2,b3], visual: "#c2"};
var c3 = {owner: 0, connection: [b3,b4], visual: "#c3"};
var c4 = {owner: 0, connection: [b4,b5], visual: "#c4"};
var c5 = {owner: 0, connection: [b5,b6], visual: "#c5"};
var c6 = {owner: 0, connection: [b6,b7], visual: "#c6"};
var c7 = {owner: 0, connection: [b1,b9], visual: "#c7"};
var c8 = {owner: 0, connection: [b3,b11], visual: "#c8"};
var c9 = {owner: 0, connection: [b5,b13], visual: "#c9"};
var c10 = {owner: 0, connection: [b7,b15], visual: "#c10"};
var c11 = {owner: 0, connection: [b8,b9], visual: "#c11"};
var c12 = {owner: 0, connection: [b9,b10], visual: "#c12"};
var c13 = {owner: 0, connection: [b10,b11], visual: "#c13"};
var c14 = {owner: 0, connection: [b11,b12], visual: "#c14"};
var c15 = {owner: 0, connection: [b12,b13], visual: "#c15"};
var c16 = {owner: 0, connection: [b13,b14], visual: "#c16"};
var c17 = {owner: 0, connection: [b14,b15], visual: "#c17"};
var c18 = {owner: 0, connection: [b15,b16], visual: "#c18"};
var c19 = {owner: 0, connection: [b8,b18], visual: "#c19"};
var c20 = {owner: 0, connection: [b10,b20], visual: "#c20"};
var c21 = {owner: 0, connection: [b12,b22], visual: "#c21"};
var c22 = {owner: 0, connection: [b14,b24], visual: "#c22"};
var c23 = {owner: 0, connection: [b16,b26], visual: "#c23"};
var c24 = {owner: 0, connection: [b17,b18], visual: "#c24"};
var c25 = {owner: 0, connection: [b18,b19], visual: "#c25"};
var c26 = {owner: 0, connection: [b19,b20], visual: "#c26"};
var c27 = {owner: 0, connection: [b20,b21], visual: "#c27"};
var c28 = {owner: 0, connection: [b21,b22], visual: "#c28"};
var c29 = {owner: 0, connection: [b22,b23], visual: "#c29"};
var c30 = {owner: 0, connection: [b23,b24], visual: "#c30"};
var c31 = {owner: 0, connection: [b24,b25], visual: "#c31"};
var c32 = {owner: 0, connection: [b25,b26], visual: "#c32"};
var c33 = {owner: 0, connection: [b26,b27], visual: "#c33"};
var c34 = {owner: 0, connection: [b17,b28], visual: "#c34"};
var c35 = {owner: 0, connection: [b19,b30], visual: "#c35"};
var c36 = {owner: 0, connection: [b21,b32], visual: "#c36"};
var c37 = {owner: 0, connection: [b23,b34], visual: "#c37"};
var c38 = {owner: 0, connection: [b25,b36], visual: "#c38"};
var c39 = {owner: 0, connection: [b27,b38], visual: "#c39"};
var c40 = {owner: 0, connection: [b28,b29], visual: "#c40"};
var c41 = {owner: 0, connection: [b29,b30], visual: "#c41"};
var c42 = {owner: 0, connection: [b30,b31], visual: "#c42"};
var c43 = {owner: 0, connection: [b31,b32], visual: "#c43"};
var c44 = {owner: 0, connection: [b32,b33], visual: "#c44"};
var c45 = {owner: 0, connection: [b33,b34], visual: "#c45"};
var c46 = {owner: 0, connection: [b34,b35], visual: "#c46"};
var c47 = {owner: 0, connection: [b35,b36], visual: "#c47"};
var c48 = {owner: 0, connection: [b36,b37], visual: "#c48"};
var c49 = {owner: 0, connection: [b37,b38], visual: "#c49"};
var c50 = {owner: 0, connection: [b29,b39], visual: "#c50"};
var c51 = {owner: 0, connection: [b31,b41], visual: "#c51"};
var c52 = {owner: 0, connection: [b33,b43], visual: "#c52"};
var c53 = {owner: 0, connection: [b35,b45], visual: "#c53"};
var c54 = {owner: 0, connection: [b37,b47], visual: "#c54"};
var c55 = {owner: 0, connection: [b39,b40], visual: "#c55"};
var c56 = {owner: 0, connection: [b40,b41], visual: "#c56"};
var c57 = {owner: 0, connection: [b41,b42], visual: "#c57"};
var c58 = {owner: 0, connection: [b42,b43], visual: "#c58"};
var c59 = {owner: 0, connection: [b43,b44], visual: "#c59"};
var c60 = {owner: 0, connection: [b44,b45], visual: "#c60"};
var c61 = {owner: 0, connection: [b45,b46], visual: "#c61"};
var c62 = {owner: 0, connection: [b46,b47], visual: "#c62"};
var c63 = {owner: 0, connection: [b40,b48], visual: "#c63"};
var c64 = {owner: 0, connection: [b42,b50], visual: "#c64"};
var c65 = {owner: 0, connection: [b44,b52], visual: "#c65"};
var c66 = {owner: 0, connection: [b46,b54], visual: "#c66"};
var c67 = {owner: 0, connection: [b48,b49], visual: "#c67"};
var c68 = {owner: 0, connection: [b49,b50], visual: "#c68"};
var c69 = {owner: 0, connection: [b50,b51], visual: "#c69"};
var c70 = {owner: 0, connection: [b51,b52], visual: "#c70"};
var c71 = {owner: 0, connection: [b52,b53], visual: "#c71"};
var c72 = {owner: 0, connection: [b53,b54], visual: "#c72"};
var roads = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10,c11, c12, c13, c14, c15, c16, c17, c18, c19, c20,c21, c22, c23, c24, c25, c26, c27, c28, c29, c30,c31, c32, c33, c34, c35, c36, c37, c38, c39, c40,c41, c42, c43, c44, c45, c46, c47, c48, c49, c50,c51, c52, c53, c54, c55, c56, c57, c58, c59, c60,c61, c62, c63, c64, c65, c66, c67, c68, c69, c70,c71,c72];
var ship1 = {visual: "#ship1",resource:'',ratio:[2,1],conection:[]}
var ship2 = {visual: "#ship2",resource:'',ratio:[3,1],conection:[]}
var ship3 = {visual: "#ship3",resource:'',ratio:[2,1],conection:[]}
var ship4 = {visual: "#ship4",resource:'',ratio:[2,1],conection:[]}
var ship5 = {visual: "#ship5",resource:'',ratio:[3,1],conection:[]}
var ship6 = {visual: "#ship6",resource:'',ratio:[3,1],conection:[]}
var ships = [ship1,ship2,ship3,ship4,ship5,ship6]
//players
var dummy_player = {nom:'player1',owner:1,ore:0,lumber:0,brick:0,grain:0,wool:0,vp:0,vpc:0,kc:0,kcp:0,dc:[],lr:false,la:false,color:"#e81809"}
var dummy_player2 = {nom:'player2',owner:2,ore:0,lumber:0,brick:0,grain:0,wool:0,vp:0,vpc:0,kc:0,kcp:0,dc:[],lr:false,la:false,color:"#e89309"}
var dummy_player3 = {nom:'player3',owner:3,ore:0,lumber:0,brick:0,grain:1,wool:0,vp:0,vpc:0,kc:0,kcp:0,dc:[],lr:false,la:false,color:"#dfede3"}
var dummy_player4 = {nom:'player4',owner:4,ore:0,lumber:0,brick:0,grain:0,wool:0,vp:0,vpc:0,kc:0,kcp:0,dc:[],lr:false,la:false,color:"#1f7f9c"}
var players = [dummy_player,dummy_player2,dummy_player3,dummy_player4]
var settindex = [[],[],[],[]]
var player_turn = 1;
var playedcard = false
var numofplayers = 4;
//game functions
function dish_out() {
                    //0           //1        //2       //3          //4       //5
    let areas = { mountains: 3, fields: 4, cliffs: 3, forests: 4, farms: 4, desert: 1 };
    // loop for the lands like moutans and cliffs

    for (var i = 0; i < 19; i++) {
        // Get a random key from the areas object
        let keys = Object.keys(areas);
        let randomKeyIndex = Math.floor(Math.random() * keys.length);
        let randomKey = keys[randomKeyIndex];
        
       
        // Check if the value for the key is greater than 0
        while(areas[randomKey] == 0){
           
            randomKeyIndex = Math.floor(Math.random() * keys.length);
            randomKey = keys[randomKeyIndex];
        }
        
        areas[randomKey]--;
        lands[i].land = randomKeyIndex
        
       
    }
    
    // loop for the rareits
    let rareNums = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 8, 9, 9, 10, 10, 11, 11, 12]; // 18 nums (excluding 7)
for (let i = 0; i < 19; i++) {
    let idx = Math.floor(Math.random() * rareNums.length);
    lands[i].number = rareNums.splice(idx, 1)[0];
    
}
    //loop for robber
    for (var i = 0; i < 19; i++) {
        
        if(lands[i].land == 5){
            lands[i].robber = true
        }
        
    }
    console.log(lands)
}
function roll_dice(){
        let r1 = Math.floor((Math.random() * 6)+1);
        let r2 = Math.floor((Math.random() * 6)+1);
        return [r1,r2,(r1 + r2)]
        //return [5,5,5]
}// find ts the thing, found is what you are looking for and wound is the list
function getobject(find,found,wound){
    let c;
    for (var i = 0; i < wound.length; i++) {
        let acw = wound[i]
        if((acw[find]) === found){

              c = acw
        }
  }
  return c;
}
// in place_thing, true for settlement, false for road. also, loaction is the index of the object in the list, not the name.
function place_thing(Qbject, owners, location){
    let e;
    if(Qbject){      
        console.log(check_settle(location))
        if(check_settle(location)){
        if(settlements[location].owner > 0){
            console.log('wait nvm' + owners)
            $("#promptt").text("you cant place that settlement there")
        }else{
        e = settlements
        e[location].owner = owners;
        players[owners].vp++
        assign_color()
        }
    }else{
        $("#promptt").text("you cant place that settlement there")
    }
    }else{
        e = roads
        if(check_road(e[location],owners)){
        console.log('yes, you can place a road there ' + (owners + 1))
        if(e[location].owner > 0){
            console.log('wait nvm' + (owners + 1))
            $("#promptt").text("you cant place that road there")
        }else{
        console.log('road is being placed ' + (owners + 1))
        $("#promptt").text('road is being placed ' + (owners + 1))
        e[location].owner = (owners + 1);
        assign_color()
        }
        }else{
            console.log('NO!!! ' + (owners + 1))
            $("#promptt").text("you cant place that road there")
            alert("you cant place that road there"  + (owners + 1))
        }
    }
}

function move_robber(a){
        let b = getobject("robber",true,lands)
        $("#aa"+(lands.findIndex(p => p.robber === true) + 1)).css({backgroundColor:"#ba7830"})
        b.robber = false
        
        a.robber = true
        $("#aa"+(lands.findIndex(p => p.robber === true) + 1)).css({backgroundColor:"gray"})
}

async function roll_7(){
    console.log("the function is being played")
    let rofrf;
    while(true){
    rofrf = await new Promise((resolve) => {
        $("#promptt").text(players[player_turn - 1].nom + ", where do you want to move the robber")
        function handlere(event) {
            document.removeEventListener("click", handlere);
            resolve(event.target.id);
        }
        document.addEventListener("click", handlere);
    })
    if(rofrf.startsWith("aa")){
        break
    }
}
 let roff = (parseInt(rofrf.slice(2)) - 1)
    //alert("its getting here")
    console.log(roff)
    move_robber(lands[roff])
    let things_to_rob = settlements.filter(sett => sett.havrest.includes(lands[roff]));
    things_to_rob = things_to_rob.filter(sett => sett.owner !== 0 && sett.owner !== player_turn);
    let ownersef = things_to_rob.map(item => item.owner).join(", ");
    let rofex;
    while(true){
    rofex = await new Promise((resolve) => {
        $("#promptt").text(players[player_turn - 1].nom +", Who do you want to steal from? click on a settlement to steal that owner, click an unowned settlement to not steal from anyone")
        function handlere(event) {
            document.removeEventListener("click", handlere);
            resolve(event.target.id);
        }
        document.addEventListener("click", handlere);
    })
    if(rofex.startsWith("b")){
        let robberLand = getobject("robber", true, lands);
        console.log(robberLand)
        let harvestr = getobject("visual", "#" + rofex, settlements).havrest;
            if (harvestr.includes(robberLand)) {
            console.log("you clicked a correct one");
            break;
        }
    }

    }
    let rofe = parseInt(getobject("visual", "#" + rofex, settlements).owner) - 1
    console.log(rofe)
    let wee;
    if(rofe == -1){
        wee = false
    }else{
        if ((players[rofe + 1]).brick == 0 && (players[rofe + 1]).grain == 0 && (players[rofe + 1]).wool == 0 && (players[rofe + 1]).ore == 0&& (players[rofe + 1]).lumber == 0) {
            alert("no resources")
            wee = false
        }else{
            wee = true
        }
    }
     
    while(wee){
        let retosetal = Math.floor((Math.random() * 5)+1);
        console.log((players[rofe]).ore)
        switch(retosetal){
            case 1:if((players[rofe]).ore == 0){
                //alert("no ore")
                continue
                
            }else{
                (players[rofe]).ore--
                players[player_turn - 1].ore++
                wee = false
            }
                ;break;
            case 2:if((players[rofe]).brick == 0){
                //alert("no brick")
                continue
            }else{
                (players[rofe]).brick--
                players[player_turn - 1].brick++
                wee = false
            }
                ;break;
            case 3:if((players[rofe]).grain == 0){
                //alert("no grain")
                continue
            }else{
                (players[rofe]).grain--
                players[player_turn - 1].grain++
                wee = false
            }
                ;break;
            case 4:if((players[rofe]).wool == 0){
                //alert("no wool")
                continue
            }else{
                (players[rofe]).wool--
                players[player_turn - 1].wool++
                wee = false
            }
                ;break;
            case 5:if((players[rofe]).lumber == 0){
                //alert("no lumber")
                continue
            }else{
                (players[rofe]).lumber--
                players[player_turn - 1].lumber++
                wee = false
            }
                ;break;
        }
    }
    console.log(players.length)
    for(let i = 0; i < players.length; i++){
        let e = 0;
        e = e + players[i].brick
        e = e + players[i].ore
        e = e + players[i].lumber
        e = e + players[i].wool
        e = e + players[i].grain
        if(e >= 8){
            console.log(players[i].owner + ", this player has more than 8 resources")
            while((e >= 8)){
                console.log("total:" + e)
                if(players[i].brick > 0){
                players[i].brick--
                e--
                }
                if((e <= 8)){
                    break;
                }
                if(players[i].ore > 0){
                players[i].ore--
                e--
                }
                if((e <= 8)){
                    break;
                }
                if(players[i].lumber > 0){
                players[i].lumber--
                e--
                }
                if((e <= 8)){
                    break;
                }
                if(players[i].wool > 0){
                players[i].wool--
                e--
                }
                if((e <= 8)){
                    break;
                }
                if(players[i].grain > 0){
                players[i].grain--
                e--
                }
                if((e <= 8)){
                    break;
                }
            }
            console.log("total:" + e)
            console.log(players[i])
        }else{
            console.log(players[i].owner + ", yer good")
        }
    }
    //--------------------------------------------------------------add update
    for(let i = 0; i < numofplayers;i++){
    let playerrId = `#ply${(i + 1)}`;
    console.log(playerrId)

    $(`${playerrId}-brick`).text(`brick:${players[i].brick}`);
    $(`${playerrId}-lumber`).text(`lumber:${players[i].lumber}`);
    $(`${playerrId}-wool`).text(`wool:${players[i].wool}`);
    $(`${playerrId}-grain`).text(`grain:${players[i].grain}`);
    $(`${playerrId}-ore`).text(`ore:${players[i].ore}`);
    }
}
//this function was written by chatgpt.
async function harvest(dice) {
    $("#roll_number").text("the roll is: "+dice)
    if(dice == 7){
        await roll_7()
    }
    let ammount;
    let things_to_harvest = lands.filter(land => land.number === dice);
    settlements.forEach(settlement => {
        if (settlement.owner !== 0) { // Skip unowned settlements
            settlement.havrest.forEach(harvestLand => {
                if (things_to_harvest.includes(harvestLand)) {
                    let player = players.find(p => p.owner === settlement.owner);
                    if (player) {
                        if(settlement.type == 0){
                            ammount = 1
                        }else{
                            ammount = 2
                        }
                        if(harvestLand.robber){
                            ammount = 0
                            //alert("theres a robber on spot " + harvestLand.land)
                        }
                        switch (harvestLand.land) {
                            case 0: ;player.ore += ammount;$("#ply" + (players.findIndex(p => p.owner === settlement.owner) + 1) + "-ore").text("ore:"+player.ore); break;
                            case 1: ;player.wool += ammount;$("#ply" + (players.findIndex(p => p.owner === settlement.owner) + 1) + "-wool").text("wool:"+player.wool); break;
                            case 2: ;player.brick += ammount;$("#ply" + (players.findIndex(p => p.owner === settlement.owner) + 1) + "-brick").text("brick:"+player.brick); break;
                            case 3: ;player.lumber += ammount;$("#ply" + (players.findIndex(p => p.owner === settlement.owner) + 1) + "-lumber").text("lumber:"+player.lumber); break;
                            case 4: ;player.grain += ammount;$("#ply" + (players.findIndex(p => p.owner === settlement.owner) + 1) + "-grain").text("grain:"+player.grain); break;
                            default: break; // Desert or invalid land
                        }
                        console.log($(harvestLand.visual).position())
                        let id = "ainmqq-" + Math.random().toString(36).slice(2, 6);
                        $(".uilayer").append(`<div id='${id}'></div>`);
                        console.log($("#"+id))
                        $(("#"+id)).css({
                        position: 'absolute',
                        top: $(harvestLand.visual).position().top + 'px',
                        left: $(harvestLand.visual).position().left + 'px',
                        width: '15px',
                        height:'10px',
                        backgroundColor: '#7f84e3',
                        border: 'none',
                        borderRadius: '50%',
                        zIndex: 99999,
                    })
                    console.log(player)
                    let keyframe1 = {
                        top: ($("#ply" + (players.indexOf(player) + 1)).position().top) + 40 + 'px',
                        left: '15px',
                        width: '10px',
                    }
                    $(("#"+id)).animate(keyframe1,500,'swing',function(){
                        console.log("it anim")
                        $(("#"+id)).remove()
                    })
                    }
                }
            });
        }
    });
}
function upgrade_settlement(locion){
    if(settlements[locion].owner === player_turn){
    if(settlements[locion].type == 0){
        console.log("TIME TO BE A CITY")
        players[player_turn - 1].vp++
        settlements[locion].type++
    }else{
        console.log("TIME TO BE NOT A CITY")
    }
}else{
    console.log("HAH, noy yours")
}
}
function check_settle(location){
    let assoated_roads = []
    let assoated_settlements = []
    //loop to see the roads included in the settlement 
        for (var i = 0; i < 72; i++) {
            if(roads[i].connection.includes(settlements[location])){
                assoated_roads.push(roads[i])
            }
        }
        //loop to add new settlements to the ones that cant be used anymore
        for (var i = 0; i < assoated_roads.length; i++) {
            for (var j = 0; j < assoated_roads[i].connection.length; j++) {
                //console.log("the settlement that is conected to the road:"+assoated_roads[i].connection[j].visual)
                //console.log("is it the clicked on one or not:" + (assoated_roads[i].connection[j] == settlements[location]))
                if(assoated_roads[i].connection[j] != settlements[location]){
                    assoated_settlements.push(assoated_roads[i].connection[j])
                }
            }

        }
        
        for (var i = 0; i < assoated_roads.length; i++) {
        console.log(assoated_roads[i])
        console.log(assoated_settlements[i])
            
        if((assoated_roads[i].owner === player_turn)){
            console.log('yes, you can place a settlement there ' + player_turn)
            for (var j = 0; j < assoated_roads.length; j++) {
                console.log((assoated_settlements[j].owner != 0))
                if((assoated_settlements[j].owner != 0)){
                    console
                    return false;
                }
            }
            return true;
        }else{
            console.log('no, you cant place a settlement there ' + player_turn)
            
        }
        }
        console.log('none of your roads are conecting to this settlement, ' + player_turn)
        return false;
                    
}
function requirments(B,L,W,G,O,play){
    console.log(play)
    let a = players[(play - 1)].brick
    let b = players[(play - 1)].lumber
    let c = players[(play - 1)].wool
    let d = players[(play - 1)].grain
    let e = players[(play - 1)].ore
    let f = [a,b,c,d,e]
    let g = [B,L,W,G,O]
    for (var i = 0; i < 5; i++) {
        if(f[i] >= g[i]){
        }else{
            return false
            break;
        }
    }
    return true
}
function take_resources(B, L, W, G, O, play) {
    const player = players[play - 1];

    // Subtract resources in the object
    player.brick -= B;
    player.lumber -= L;
    player.wool -= W;
    player.grain -= G;
    player.ore -= O;

    // Update the HTML using jQuery
    const playerId = `#ply${play}`;

    $(`${playerId}-brick`).text(`brick:${player.brick}`);
    $(`${playerId}-lumber`).text(`lumber:${player.lumber}`);
    $(`${playerId}-wool`).text(`wool:${player.wool}`);
    $(`${playerId}-grain`).text(`grain:${player.grain}`);
    $(`${playerId}-ore`).text(`ore:${player.ore}`);
}
function check_road(road, player) {
    console.log(player);
    let currentp = players[player];
    let thi = road.connection;
    let connectedRoads = [];

    // Gather all roads connected to either endpoint of the road
    for (let i = 0; i < thi.length; i++) {
        for (let j = 0; j < 71; j++) {
            if (roads[j].connection.includes(thi[i])) {
                connectedRoads.push(roads[j]);
            }
        }
    }

    console.log("Connected Roads:", connectedRoads);

    // Check if player owns at least one of the connected settlements
    if (thi[0].owner === currentp.owner || thi[1].owner === currentp.owner) {
        console.log("One of the settlements is owned by the player. Valid placement.");
        for(let i = 0; i < numofplayers; i++){
            if(players[i] == currentp){

            }else{
                if(thi[0].owner === players[i].owner || thi[1].owner === players[i].owner){
                    return false;
                }
            }
        }
        return true;
    }

    // Otherwise, check if any connected road is owned by the player
    for (let j = 0; j < connectedRoads.length; j++) {
        if (connectedRoads[j].owner === player_turn) {
            console.log("Connected road is owned by player. Valid placement.");
            for(let i = 0; i < numofplayers; i++){
                if(players[i] == currentp){
    
                }else{
                    if(thi[0].owner === players[i].owner || thi[1].owner === players[i].owner){
                        return false;
                    }
                }
            }
            return true;
        }
    }

    console.log("No connection through settlements or roads. Invalid placement.");
    return false;
}

function trade(fromPlayer, toPlayer, offer, want) {       
            console.log("checking")
            if (requirments(offer[0],offer[1],offer[2],offer[3],offer[4],fromPlayer)) {
                if(requirments(want[0],want[1],want[2],want[3],want[4],toPlayer)){
                    
                    take_resources(want[0],want[1],want[2],want[3],want[4], toPlayer);
                    take_resources(-(offer[0]), -(offer[1]), -(offer[2]), -(offer[3]), -(offer[4]), toPlayer);
                    take_resources(offer[0], offer[1], offer[2], offer[3], offer[4], fromPlayer);
                    take_resources(-(want[0]), -(want[1]), -(want[2]), -(want[3]), -(want[4]), fromPlayer);
                }else{console.log("we can NOT comence the trade cus toplayer dosent have the goods")}
            }else{console.log("we can NOT comence the trade cus fromplayer dosent have the goods")}
                        
        }

function buy_card(player){
    if(requirments(0,0,1,1,1,player)){
        console.log("purchase sucsesscul")
        take_resources(0,0,1,1,1,player);
        let fiddle = Math.floor((Math.random() * 3)+1)
        console.log(fiddle)
        switch(fiddle){
            case 1:alert("one knight")
            players[(player - 1)].kc++
            ;break;
            case 2:alert("one victory");
            players[(player - 1)].vpc++
            ;break;
            case 3:alert("one devlopment");
            let fiddle2 = Math.floor((Math.random() * 3)+1)
            switch(fiddle2){
                case 1:players[(player - 1)].dc.push("a1");break;
                case 2:players[(player - 1)].dc.push("a2");break;
                case 3:players[(player - 1)].dc.push("a3");break;
            }
            ;break;
            default:console.log("we are having tecknecal diffuculites, you will not get your resources back");break;
        }
    }else{
        console.log("purchase not sucsesscul")
        $("#promptt").text("you dont have the resources")
    }
}
async function summon_knight(player) {
    let e = players[player - 1];
    let rof = 0
    if (e.kc > 0) {
        e.kc--;
        e.kcp++;
        while(true){
    rof = await new Promise((resolve) => {
            $("#promptt").text(players[player_turn - 1].nom + ", where do you want to move the robber")
            function handler(event) {
                document.removeEventListener("click", handler);
                resolve(event.target.id);
            }
            document.addEventListener("click", handler);
        })
        if(rof.startsWith("aa")){
            break
        }
    }
    let fjie = parseInt(rof.slice(2))
        move_robber(lands[fjie - 1]);
        console.log("knight placed");
    } else {
        console.log("you have no knights");
    }
}
async function progress_card(card){
    let e = players[player_turn - 1]
    if(card == "a1"){      
        let clickCount = 0
        let selectedRoads = []
        while(true){
            s2 = await new Promise((resolve) => {
                      let currentPlayer = player_turn - 1
                    $("#promptt").text(players[player_turn - 1].nom + ' pick your first road')
                    function handler(event) {
                        console.log("the handler works")
                        if((event.target.id).startsWith('c')){
                            console.log("and the pass works")
                        selectedRoads.push(parseInt((event.target.id).slice(1)) - 1)
                        clickCount++;
                        $("#"+(event.target.id)).css({backgroundColor:"#dbeb34"})
                        if(clickCount == 2){
                        // ---all the checking stuff
                        if (selectedRoads[0] === selectedRoads[1]) {
                            alert("You picked the same road twice, try again!");
                            $("#promptt").text(players[currentPlayer].nom + ' pick your first road');
                            assign_color();
                            selectedRoads = [];
                            clickCount = 0;
                            return;
                        }
                        
                        // Validate road placement
                        if ((check_road(roads[selectedRoads[0]], currentPlayer) &&
                             check_road(roads[selectedRoads[1]], currentPlayer)) &&
                            !(roads[selectedRoads[0]].owner > 0 && roads[selectedRoads[1]].owner > 0)) {
                            console.log(roads[selectedRoads[0]].owner + roads[selectedRoads[1]].owner + " is equal to 0")
                            
                            place_thing(false, currentPlayer, selectedRoads[0]);
                            place_thing(false, currentPlayer, selectedRoads[1]);
        
                            assign_color();
                            selectedRoads = [];
                            clickCount = 0;
                            console.log("clickcount:" + clickCount)
                            
                            document.removeEventListener("click", handler);
                            resolve(selectedRoads);
        
                            
                        } else {
                            console.log(roads[selectedRoads[0]].owner + roads[selectedRoads[1]].owner + " is NOT equal to 0")
                            alert("Invalid road placement, try again!");
                            $("#promptt").text(players[currentPlayer].nom + ' pick your first road');
                            assign_color();
                            selectedRoads = [];
                            clickCount = 0;
                            
                        }
                        //---
                        
                        }else{
                            $("#promptt").text(players[currentPlayer].nom + ' pick your second road');
                        }
                    }
                    }
                    document.addEventListener("click", handler);
                })
            break;    
        }
        
        
        e.dc.splice(e.dc.indexOf("a1"), 1);
        console.log(roads)
            
    }else if(card == "a2"){
        let s3 = ''
        while(true){
            s3 = await new Promise((resolve) => {
                    $("#promptt").text("which resource do you want 2 of, click the land you want")
                    function handler(event) {
                        document.removeEventListener("click", handler);
                        resolve(event.target.id);
                    }
                    document.addEventListener("click", handler);
                })
                if(s3.startsWith("a")){
                    break
                }
            }
        if(s3.startsWith('aa')){
            s3 = s3.slice(1)
        }
        console.log(s3)
        let s3b = getobject("visual", "#" + s3, lands);
        switch (s3b.land) {
            case 0: ;players[player_turn - 1].ore += 2;$("#ply" + player_turn + "-ore").text("ore:"+players[player_turn - 1].ore); break;
            case 1: ;players[player_turn - 1].wool += 2;$("#ply" + player_turn + "-wool").text("wool:"+players[player_turn - 1].wool); break;
            case 2: ;players[player_turn - 1].brick += 2;$("#ply" + player_turn + "-brick").text("brick:"+players[player_turn - 1].brick); break;
            case 3: ;players[player_turn - 1].lumber += 2;$("#ply" + player_turn + "-lumber").text("lumber:"+players[player_turn - 1].lumber); break;
            case 4: ;players[player_turn - 1].grain += 2;$("#ply" + player_turn + "-grain").text("grain:"+players[player_turn - 1].grain); break;
            default:alert("desert resource(none)"); break; // Desert or invalid land
        }
        console.log(s3b.land)

        e.dc.splice(e.dc.indexOf("a2"), 1);
    }else if(card == "a3"){
        let s4 = ''
        
        while(true){
            s4 = await new Promise((resolve) => {
                    $("#promptt").text("which resource do you want to monoploise of, click the land you want to have all of")
                    function handler(event) {
                        document.removeEventListener("click", handler);
                        resolve(event.target.id);
                    }
                    document.addEventListener("click", handler);
                })
                if(s4.startsWith("a")){
                    break
                }
            }
        if(s4.startsWith('aa')){
            s4 = s4.slice(1)
        }
        console.log(s4)
        let s4b = getobject("visual", "#" + s4, lands);

        let give = players
        give.splice(give.indexOf(e), 1);
        switch (s4b.land) {
            case 0: 
            give.forEach(player => {
                e.ore += player.ore;
                $("#ply" + player_turn + "-ore").text("ore:"+players[player_turn - 1].ore)
                player.ore = 0;
                $("#ply" + (players.indexOf(player) + 1) + "-ore").text("ore:"+player.ore)
            });break;
            case 1: 
            give.forEach(player => {
                e.wool += player.wool;
                $("#ply" + player_turn + "-wool").text("wool:"+players[player_turn - 1].wool)
                player.wool = 0;
                $("#ply" + (players.indexOf(player) + 1) + "-wool").text("wool:"+player.wool)
            });break;
            case 2: 
            give.forEach(player => {
                e.brick += player.brick;
                $("#ply" + player_turn + "-brick").text("brick:"+players[player_turn - 1].brick)
                player.brick = 0;
                $("#ply" + (players.indexOf(player) + 1) + "-brick").text("brick:"+player.brick)
            }); break;
            case 3: 
            give.forEach(player => {
                e.lumber += player.lumber;
                $("#ply" + player_turn + "-lumber").text("lumber:"+players[player_turn - 1].lumber)
                player.lumber = 0;
                $("#ply" + (players.indexOf(player) + 1) + "-lumber").text("lumber:"+player.lumber)
            }); break;
            case 4: give.forEach(player => {
                e.grain += player.grain;
                $("#ply" + player_turn + "-grain").text("grain:"+players[player_turn - 1].grain)
                player.grain = 0;
                $("#ply" + (players.indexOf(player) + 1) + "-grain").text("grain:"+player.grain)
            }); break;
            default: 
    console.log("Invalid choice");
    break;
        }
        console.log(e)
        console.log(players)
        e.dc.splice(e.dc.indexOf("a3"), 1);
        
        
    }
}
//this function was written by chatgpt.
function longest_road(player_turn) {
    let player_roads = roads.filter(road => road.owner === player_turn); // Get all roads owned by the player
    let longestPath = 0;

    function dfs(currentRoad, visited) {
        visited.add(currentRoad);

        let maxLength = 0;
        for (let nextRoad of player_roads) {
            //console.log("checking")
            if (!visited.has(nextRoad) && currentRoad.connection.some(b => nextRoad.connection.includes(b))) {
                //console.log("moving on to the next one")
                maxLength = Math.max(maxLength, dfs(nextRoad, new Set(visited)));
            }
        }
        //console.log(maxLength + 1)
        return maxLength + 1;
    }

    // Try DFS from every player's road to find the longest continuous path
    for (let road of player_roads) {
        let visited = new Set();
        longestPath = Math.max(longestPath, dfs(road, visited));
    }

    //console.log("Longest Road Length:", longestPath);
    return longestPath;
}
function find_longest_road() {
    let playerRoads = [];
    for(i=0;i<numofplayers;i++){
        playerRoads.push({ player: players[i], roadLength: longest_road(i + 1) })
    }

    // Sort players by road length in descending order
    playerRoads.sort((a, b) => b.roadLength - a.roadLength);

    console.log(playerRoads.map(p => p.roadLength));

    let longest = playerRoads[0];

    // Only award "Longest Road" if the top road is longer than 5
    if (longest.roadLength >= 5) {
        let tlr = longest.player;

        // If someone else had it, remove it from them
        if (!tlr.lr) {
            for (let i = 0; i < numofplayers; i++) {
                if (players[i].lr) {
                    players[i].lr = false;
                    $("#ply" + (i + 1) + "-lr").hide();
                    players[i].vp -= 2;
                    break;
                }
            }

            tlr.lr = true;
            $("#ply" + (players.indexOf(tlr) + 1) + "-lr").show();
            tlr.vp += 2;
        }

       
    } else {
       
        for (let i = 0; i < numofplayers; i++) {
            if (players[i].lr) {
                players[i].lr = false;
                $("#ply" + (i + 1) + "-lr").hide();
                players[i].vp -= 2;
                break;
            }
        }
    }
}
function largest_army() {
    // Sort players by their kcp in descending order
    let sortedPlayers = [...players].sort((a, b) => b.kcp - a.kcp);

   

    let tlr = sortedPlayers[0]; // Player with the highest kcp

    if (!tlr.la && tlr.kcp >= 3) {
        for (let i = 0; i < numofplayers; i++) {
            if (players[i].la) {
                players[i].la = false; 
                $("#ply" + (i + 1) + "-la").hide();
                players[i].vp = players[i].vp - 2
                break;
            }
        }
        console.log(tlr.nom + " has the largest army")
        tlr.la = true;
        tlr.vp = tlr.vp + 2
        $("#ply" + (players.indexOf(tlr) + 1) + "-la").show();
    }
}
function assign_color(){
    for (let i = 0; i < 54; i++) {
        if(settlements[i].owner == 0){
            $(settlements[i].visual).css({backgroundColor:"#736f58"})
        }else{
            //console.log(players[settlements[i].owner - 1].color)
       $(settlements[i].visual).css({backgroundColor:players[settlements[i].owner - 1].color})
        }        
    }
    for (let i = 0; i < 71; i++) {
        if(roads[i].owner == 0){
            $(roads[i].visual).css({backgroundColor:"#736f58"})
        }else{
            //console.log(players[roads[i].owner - 1].color)
       $(roads[i].visual).css({backgroundColor:players[roads[i].owner - 1].color})
        } 
    }
}

function getBuildableSettlements() {
    let buildableLocations = [];

    for (let i = 0; i < settlements.length; i++) {
        if (check_settle(i)) {
            buildableLocations.push(i);
        }
    }

    return buildableLocations;
}

function start_game() {
    let currentPlayer = 0;
    let clickCount = 0;
    let selectedSettlements = [];
    let assoated_roads2 = [];
    let assoated_roads3 = [];
    let assoated_settlements2 = [];
    $("#promptt").text(players[currentPlayer].nom + ' pick your first settlement')
    document.addEventListener("click", function handleSettlementClick(event) {
        let clickedId = event.target.id;
        
        // Check if the clicked element is a valid settlement
        if (!clickedId.startsWith("b")) return;
        
        let settlementIndex = parseInt(clickedId.substring(1)) - 1; // Convert ID to index
        $("#promptt").text(players[currentPlayer].nom + " pick your second settlement")
        $(settlements[settlementIndex].visual).css({backgroundColor:"#dbeb34"})
        // Check if it's already owned
        if (settlements[settlementIndex].owner !== 0) {
            alert("That settlement is already owned!");
            assign_color()
            $("#promptt").text(players[currentPlayer].nom + " pick your first settlement")
            return;
        }

        // Store the selection
        selectedSettlements.push(settlementIndex);
        clickCount++;

        if (clickCount === 2) {
            // Ensure settlements are different
            if (selectedSettlements[0] === selectedSettlements[1]) {
                alert("You picked the same settlement twice, try again!");
                assign_color()
                $("#promptt").text(players[currentPlayer].nom + " pick your first settlement")
                selectedSettlements = [];
                clickCount = 0;
                assoated_roads2 = [];
                assoated_roads3 = [];
                assoated_settlements2 = [];
                return;
            }
            //ensure distanse rune is applying

            
    //loop to see the roads included in the settlement 
        for (var i = 0; i < 72; i++) {
            if(roads[i].connection.includes(settlements[selectedSettlements[1]])){
                console.log(roads[i])
                assoated_roads2.push(roads[i])
            }
        }
        for (var i = 0; i < 72; i++) {
            if(roads[i].connection.includes(settlements[selectedSettlements[0]])){
                console.log(roads[i])
                assoated_roads3.push(roads[i])
            }
        }
        //loop to add new settlements to the ones that cant be used anymore
        for (var i = 0; i < assoated_roads2.length; i++) {
            for (var j = 0; j < assoated_roads2[i].connection.length; j++) {
                if(assoated_roads2[i].connection[j] != settlements[selectedSettlements[1]]){
                    assoated_settlements2.push(assoated_roads2[i].connection[j])
                }
            }

        }
        
        for (var i = 0; i < assoated_roads3.length; i++) {
            for (var j = 0; j < assoated_roads3[i].connection.length; j++) {
                if(assoated_roads3[i].connection[j] != settlements[selectedSettlements[0]]){
                    assoated_settlements2.push(assoated_roads3[i].connection[j])
                }
            }

        }
        
        for (var i = 0; i < assoated_settlements2.length; i++) {
            console.log(assoated_settlements2[i])
                if(assoated_settlements2[i].owner != 0 || assoated_settlements2[i] == settlements[selectedSettlements[0]]){
                    alert("your settlement is next to another one");
                assign_color()
                $("#promptt").text(players[currentPlayer].nom + " pick your first settlement")
                selectedSettlements = [];
                clickCount = 0;
                assoated_roads2 = [];
                assoated_roads3 = [];
                assoated_settlements2 = [];
                return;
                }
        }
        


            // Assign settlements to the player
            settlements[selectedSettlements[0]].owner = currentPlayer + 1;
            settlements[selectedSettlements[1]].owner = currentPlayer + 1;

            settindex[currentPlayer].push("b" + (selectedSettlements[0] + 1));
            settindex[currentPlayer].push("b" + (selectedSettlements[1] + 1));

            //alert("Settlements placed for player " + (currentPlayer + 1));
            assign_color()
            // Reset for next player
            selectedSettlements = [];
            clickCount = 0;
            currentPlayer++;
            assoated_roads2 = [];
            assoated_roads3 = [];
            assoated_settlements2 = [];
            if (currentPlayer >= numofplayers) {
                document.removeEventListener("click", handleSettlementClick);
                startRoadSelection();
            }else{
                $("#promptt").text(players[currentPlayer].nom + ' pick your first settlement')
            }
        }
    });
}

// Road selection phase
/*async*/ function startRoadSelection() {
    console.log("starting road phase")
   // return new Promise((resolve) => {
        let currentPlayer = 0;
        let clickCount = 0;
        let selectedRoads = [];
        document.addEventListener("click", handleRoadClick);
        $("#promptt").text(players[currentPlayer].nom + ' pick your first road');

        function handleRoadClick(event) {
            let clickedId = event.target.id;

            // Check if the clicked element is a valid road
            if (!clickedId.startsWith("c")) return;

            $("#promptt").text(players[currentPlayer].nom + ' pick your second road');
            let roadIndex = parseInt(clickedId.substring(1)) - 1;

            $(roads[roadIndex].visual).css({ backgroundColor: "#dbeb34" });

            // Store the selection
            selectedRoads.push(roadIndex);
            clickCount++;

            if (clickCount === 2) {
                console.log("you clicked twice")
                if (selectedRoads[0] === selectedRoads[1]) {
                    alert("You picked the same road twice, try again!");
                    $("#promptt").text(players[currentPlayer].nom + ' pick your first road');
                    assign_color();
                    selectedRoads = [];
                    clickCount = 0;
                    return;
                }
                
                // Validate road placement
                if ((check_road(roads[selectedRoads[0]], currentPlayer) &&
                     check_road(roads[selectedRoads[1]], currentPlayer)) &&
                    !(roads[selectedRoads[0]].owner > 0 && roads[selectedRoads[1]].owner > 0)) {
                    console.log(roads[selectedRoads[0]].owner + roads[selectedRoads[1]].owner + " is equal to 0")
                    
                    place_thing(false, currentPlayer, selectedRoads[0]);
                    place_thing(false, currentPlayer, selectedRoads[1]);

                    assign_color();
                    selectedRoads = [];
                    clickCount = 0;
                    console.log("clickcount:" + clickCount)
                    currentPlayer++;
                    console.log("current player:" + currentPlayer)
                    

                    if (currentPlayer >= numofplayers) {
                        document.removeEventListener("click", handleRoadClick);
                        $("#promptt").text("Game setup complete!");
                        startphase = true;
                        startGame()

                        //resolve(); // Setup complete, resolve the Promise
                    } else {
                        console.log("current player:" + players[currentPlayer].nom)
                        $("#promptt").text(players[currentPlayer].nom + ' pick your first road');
                    }
                } else {
                    console.log(roads[selectedRoads[0]].owner + roads[selectedRoads[1]].owner + " is NOT equal to 0")
                    alert("Invalid road placement, try again!");
                    $("#promptt").text(players[currentPlayer].nom + ' pick your first road');
                    assign_color();
                    selectedRoads = [];
                    clickCount = 0;
                }
            }
        }

        
   // });
}

function waitForPlayerPrompt() {
    //alert(players[player_turn - 1].nom + ". Start your turn!");
    

    return prompt_player(); // it's already async, so this works fine
}


// Main game loop (Executes only after startRoadSelection is complete)
async function startGame() {
    outerLoop: while (startphase) {
        if (findwinnwer() != null) {
            alert("The winner is " + findwinnwer());
            break outerLoop;
        }
        find_longest_road()
        largest_army()
        let horwi = roll_dice();
        $("#promptt").text("the roll is " + horwi[2]);
        //alert("the roll is " + horwi[2]);
        await harvest(horwi[2]);

        let result;
        
        do {
            console.log("where going back, time to reinform")
            $("#upgrade_card").empty();
            $("#promptt").text(players[player_turn - 1].nom + ". Start your turn!");
        if(requirments(1,1,1,1,0,player_turn)){
            $("#upgrade_card").append('<p>you can bulid a settlement</p>')
        }
        if(requirments(1,1,0,0,0,player_turn)){
            console.log("you can bulid a road")
            $("#upgrade_card").append('<p>you can bulid a road</p>')
        }
        if(requirments(0,0,0,2,3,player_turn)){
            $("#upgrade_card").append('<p>you can upgrade a settlement</p>')
        }
        if(requirments(0,0,1,1,1,player_turn)){
            $("#upgrade_card").append('<p>you can buy a card</p>')
        }
            result = await waitForPlayerPrompt();

            switch (result) {
                case 0:
                    $("#promptt").text("games over folks...");
                    break outerLoop;

                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    // Do stuff for valid turn actions here, if any
                    break;

                case 7:
                    //alert("Player cancelled action. Repeating turn...");
                    break;
            }
        } while (result === 7); // re-prompt if user cancelled their turn

        // Only increment turn if not cancel
        if (result !== 7) {
            playedcard = false
            if(player_turn == numofplayers){
                player_turn = 1;
            }else{
                player_turn++;
            }
            //player_turn = player_turn === numofplayers ? 1 : player_turn + 1;
        }
    }
}

function make_cards(){
    $(".uilayer").append('<div id="menucard"></div>')
    let currentpl = players[player_turn - 1]
    for(i = 0;i < (currentpl.dc.length + currentpl.kc);i++){
        //console.log("card:" + (i+1))
        let cardcolor = '';
        let cardtext = ''
        if(i < currentpl.dc.length){
            switch(currentpl.dc[i]){
                case 'a1': cardcolor = '#258520';cardtext ='progress card \n make 2 roads';break;
                case 'a2': cardcolor = '#2ea628';cardtext ='progress card \n get 2 of any resource';break;
                case 'a3': cardcolor = '#37c730';cardtext ='progress card \n pick 1 resource, every player has to give you all of that resource';break;
            }
        }else{
            cardcolor =  '#53186b'
            cardtext = 'knight card \n, if you play it you get to move the robber, the knight will then be in your army'
        }
        if(playedcard){
            cardcolor = '#595757'
        }
        $("#menucard").append('<div class="card" id = "ard'+i+'"><p style="pointer-events:none;">' + (cardtext) + '</p></div>')
        
        $("#ard"+i).css({
            'margin-top': ''+(Math.abs((i-((currentpl.dc.length + currentpl.kc)/2))*5)-5)+'px',
            width: '50px',
            height:'90px',
            padding: '8px',
            backgroundColor: cardcolor,
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5%',
           'margin-left': '-10px',
           'margin-right': '-10px',
           'z-index': 10+i,
           'font-size':"10px",
            transform: 'rotate('+ (((i)-((currentpl.dc.length + currentpl.kc)/2))*5) +'deg)'
        })

        
    }
}



function filterByOwner(ownerNumber, objects) {
    return objects.filter(obj => obj.owner === ownerNumber);
}
function findwinnwer(){   
        if((players[player_turn - 1].vp + players[player_turn - 1].vpc) >= 10){
            return players[player_turn - 1].nom;
        }else{
            return null;
        }  
}
function createLineBetweenDivs(div1, div2, id) {
    // Get the position of the two divs using jQuery
    var rect1 = $(div1)[0].getBoundingClientRect();
    var rect2 = $(div2)[0].getBoundingClientRect();

    // Calculate the center points of the divs
    var centerX1 = rect1.left + rect1.width / 2;
    var centerY1 = rect1.top + rect1.height / 2;
    var centerX2 = rect2.left + rect2.width / 2;
    var centerY2 = rect2.top + rect2.height / 2;

    // Calculate the distance between the centers of the two divs
    var distance = (Math.sqrt(Math.pow(centerX2 - centerX1, 2) + Math.pow(centerY2 - centerY1, 2))) - 25;

    // Calculate the angle between the two divs in radians
    var angle = Math.atan2(centerY2 - centerY1, centerX2 - centerX1);

    // Create or update the div that represents the line
    var line = $('#' + id);
    if (line.length === 0) {
        line = $('<div id="' + id + '"></div>').appendTo('.uilayer');
    }

    // Set the line's styles using jQuery
    line.css({
        position: 'absolute',
        width: '10px', 
        height: '5px', 
        backgroundColor: '#736f58', 
        transformOrigin: '50% 50%', 
        transform: 'rotate(' + angle + 'rad)',
        left: (((centerX1 + centerX2) / 2 - distance / 2)) + 'px', 
        top: (((centerY1 + centerY2) / 2)-7) + 'px', 
        'z-index': 15,
        "border": "2px solid black",
    });
}
// just have the ratio in the thing instead of four, it will sort itself out
function showOptionsMenu(targetId,other) {
    return new Promise((resolve) => {
        if(targetId != "trade"){
        const position = $("#" + targetId).offset();
        const $menu = $('<div class="menu" id="lilthing"></div>').css({
            position: 'absolute',
            top: position.top + 'px',
            left: position.left + 'px',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: '15%',
            padding: '0px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            zIndex: 9999
        });
        const options = ['build', 'upgrade', 'xcancel'];

if (targetId.startsWith("b")) {
    let isowned = (other.owner === player_turn);
    let isupgraded = (isowned && other.type === 1);

    if (isowned) {
        options.splice(options.indexOf("build"), 1);
    }
    if (!isowned || isupgraded) {
        options.splice(options.indexOf("upgrade"), 1);
    }
} else {
    let isowned = (other.owner === player_turn);
    options.splice(options.indexOf("upgrade"), 1);
    if (isowned) {
        options.splice(options.indexOf("build"), 1);
    }
}
        

        options.forEach((text) => {
            const $btn = $('<button ></button>')
                .attr('id', text)
                .text(text)
                .css({
                    display: 'block',
                    margin: '0px 0',
                    width: '100%',
                    padding: '8px',
                    backgroundColor: '#fff',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '15%',
                })
                .one('click',function() {
                    //alert("You clicked me—just this once!");
                    console.log($(this).attr('id'))
                    //$("#lilthing").remove();
                    resolve($(this).attr('id'));
                    
                });

            $menu.append($btn);
        });

        $('.uilayer').append($menu);
    }else{
        
        //const position = $("#" + targetId).offset();
        const $menu = $('<div class="menu" id="lilthing"></div>').css({
            position: 'absolute',
            top: '25%',
            left: '20%',
            width: '60%',
            height: '50%',
            backgroundColor: '#ba7830',
            border: '3px solid #ad6a21',
            borderRadius: '5%',
            padding: '0px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            zIndex: 9999,
            
        });
        $('.uilayer').append($menu);
        const options = ['brickdrw', 'lumberdrw', 'wooldrw','graindrw','oredrw'];
        for(i = 0;i < options.length;i++){
            $menu.append('<div id=row' + i + '></div>')
            $("#row"+i).css({
                display: 'flex',
                flexDirection: 'row',      
                justifyContent: 'space-around', 
                alignItems: 'center',    
                flexWrap: 'wrap'   
            })
        }
        options.forEach((text) => {
           
            
            const $btn = $('<select class = "playertradein"></select>')
                .attr('id', text)
                .text(text)
                .css({
                    display: 'block',
                    margin: '0px 0',
                    width: '10%',
                    height: '10%',
                    padding: '8px',
                    backgroundColor: '#8ca88e',
                    border: '2px rgb(40, 55, 45) solid',
                    cursor: 'pointer',
                    
                })

                /*
                .one('click',function() {
                    //alert("You clicked me—just this once!");
                    console.log($(this).attr('id'))
                    //$("#lilthing").remove();
                    resolve($(this).attr('id'));
                    
                });
                */
            
                $("#row1").append($btn);
            
        });
        //changes when the dropdown whith the things changes
        $(".playertradein").on('change',function(){
            if(yesm == 5){

            let resourceTypes = ['brick', 'lumber', 'wool', 'grain', 'ore'];

            // Find all ships owned by the current player
            let ownedShips = [];
            for (let i = 0; i < ships.length; i++) {
                let ship = ships[i];
                let connectedSettlement = ship.conection[0];
                if (connectedSettlement && connectedSettlement.owner === player_turn) {
                    ownedShips.push(ship);
                }
            }

            // Build a map of best ratios per resource
            let bestRatios = {}; // { brick: 4, lumber: 3, ... }
            let selectedIndex = parseInt(martimetr.attr('id').slice(6));

    // Set all to default first
    for (let resource of resourceTypes) {
        bestRatios[resource] = 4;
    }

    // Update the one selected resource only
    for (let ship of ownedShips) {
        let resource = resourceTypes[selectedIndex];
        if (ship.resource === resource || ship.resource === 'anything') {
            bestRatios[resource] = Math.min(bestRatios[resource], ship.ratio[0]);
        }
    }
              console.log(bestRatios)
              //find which one to use
              let shipvalues = Object.values(bestRatios);
              console.log(shipvalues[0])
              shipvalues.sort((a, b) => a - b)
              console.log(shipvalues[0])

              
              console.log(martimetr.css("backgroundColor"))
              let poinn = options.map(id => parseInt($("#" + id).val()));
                    let fullnum = 0
                    for (i = 0;i < 5;i++){
                        fullnum = fullnum + poinn[i]
                    }
                    if((fullnum % shipvalues[0]) == 0){
                        martimetr.text(fullnum/shipvalues[0])
                    }else if(((fullnum - 1) % shipvalues[0]) == 0){
                        martimetr.text((fullnum - 1)/shipvalues[0])
                    }else if(((fullnum - 2) % shipvalues[0]) == 0){
                        martimetr.text((fullnum - 2)/shipvalues[0])
                    }else if(((fullnum - 3) % shipvalues[0]) == 0){
                        martimetr.text((fullnum - 3)/shipvalues[0])
                    }else{
                        martimetr.text(0)
                    }
            }
        })
        $menu.append('<label for="selectplayer">which player is it</label>')
        $menu.append('<select name="selectplayer"id="selectplayer"></select>')
        $("#selectplayer").css({
            display: 'block',
            margin: '2px',
            width: 'auto',
            height: 'auto',
            padding: '8px',
            backgroundColor: '#8ca88e',
            border: '2px rgb(40, 55, 45) solid',
            cursor: 'pointer',
            
        })
        $("#selectplayer").append('<option value="'+5+'">maratime</option>')
        for(i = 0;i <numofplayers;i++){
            if(i == (player_turn - 1)){

            }else{
                $("#selectplayer").append('<option value="'+i+'">'+players[i].nom+'</option>')
            }
        }
        let yesm = $("#selectplayer").val();
        let martimetr;
        console.log(yesm)
        $("#selectplayer").on('change', function() {
            yesm = $(this).val();
            console.log("Selected player:", yesm);
            // You can store it or pass it on from here
            $("#row2").empty();
            $("#row3").empty();
            
            if (yesm != 5) {
                for(i = 0;i < 5;i++){
                    let verytemppp = [players[yesm].brick,players[yesm].lumber,players[yesm].wool,players[yesm].grain,players[yesm].ore]
                    let verytempp = ['brick','lumber','wool','grain','ore']
                    //console.log("add++++")
                    $("#row2").append('<p id ="enyth'+i+'">their '+verytempp[i]+'</p>')
                    $("#row3").append('<select id = "othertrader' +i + '"></select>')
                    $("#othertrader"+i).css({
                        display: 'block',
                        margin: '2px',
                        width: 'auto',
                        height: 'auto',
                        padding: '8px',
                        backgroundColor: '#8ca88e',
                        border: '2px rgb(40, 55, 45) solid',
                        cursor: 'pointer',
                        
                    })
                    for(j = 0;j < (verytemppp[i] + 1);j++){
                    //console.log("im adding the option")
                    $("#othertrader"+i).append('<option value="'+j+'">'+j+'</option>')
                }
                }
            }else{
                let verytempp = ['brick','lumber','wool','grain','ore']
                for(i = 0;i < 5;i++){
                    
                    
                    //console.log("add++++")
                    $("#row2").append('<p id ="enyth'+i+'">their '+verytempp[i]+'</p>')
                    $("#row3").append('<p class="maratimething" id ="enythh'+i+'">0</p>')
                    $("#enythh"+i).css({
                        display: 'block',
                        margin: '3px',
                        width: 'auto',
                        height: 'auto',
                        padding: '8px',
                        backgroundColor: '#8ca88e',
                        border: '2px rgb(40, 55, 45) solid',
                        cursor: 'pointer',
                        
                    })
                }
                $(".maratimething").on('click',function(){
                    martimetr = $(this)
                    for(i = 0;i < 5;i++){
                        if(($("#enythh"+i).css("backgroundColor")) == "rgb(126, 196, 131)"){
                            console.log("i found it")
                            $("#enythh"+i).css({
                                backgroundColor: '#8ca88e',
                            })
                            $("#enythh"+i).text(0)
                        }
                    }
                    $(this).css({
                        backgroundColor: '#7ec483',
                    })
                    //add ship
                    let ownedShips = [];
            for (let i = 0; i < ships.length; i++) {
                let ship = ships[i];
                let connectedSettlement = ship.conection[0];
                if (connectedSettlement && connectedSettlement.owner === player_turn) {
                    ownedShips.push(ship);
                }
            }
            console.log(verytempp)
            // Build a map of best ratios per resource
            let bestRatios = {}; // { brick: 4, lumber: 3, ... }
            let selectedIndex = parseInt(martimetr.attr('id').slice(6));

    // Set all to default first
    for (let resource of verytempp) {
        bestRatios[resource] = 4;
    }

    // Update the one selected resource only
    for (let ship of ownedShips) {
        let resource = verytempp[selectedIndex];
        if (ship.resource === resource || ship.resource === 'anything') {
            bestRatios[resource] = Math.min(bestRatios[resource], ship.ratio[0]);
        }
    }
              console.log(bestRatios)
              //find which one to use
              let shipvalues = Object.values(bestRatios);
              console.log(shipvalues[0])
              shipvalues.sort((a, b) => a - b)
              console.log(shipvalues[0])
                    //add ship
                    let poinn = options.map(id => parseInt($("#" + id).val()));
                    let fullnum = 0
                    for (i = 0;i < 5;i++){
                        fullnum = fullnum + poinn[i]
                    }
                    if((fullnum % shipvalues[0]) == 0){
                        $(this).text(fullnum/shipvalues[0])
                    }else if(((fullnum - 1) % shipvalues[0]) == 0){
                        $(this).text((fullnum - 1)/shipvalues[0])
                    }else if(((fullnum - 2) % shipvalues[0]) == 0){
                        $(this).text((fullnum - 2)/shipvalues[0])
                    }else if(((fullnum - 3) % shipvalues[0]) == 0){
                        $(this).text((fullnum - 3)/shipvalues[0])
                    }else{
                        $(this).text(0)
                    }
                    

                })
            }

        });
        for(i = 0;i < options.length;i++){
        $("#row0").append('<p>your '+options[i]+'</p>');
        }
            for(i = 0; i < (players[player_turn - 1].brick)+1; i++){
                $("#"+options[0]).append('<option value="'+i+'">'+i+'</option>')
            }
            for(i = 0; i < (players[player_turn - 1].lumber)+1; i++){
                $("#"+options[1]).append('<option value="'+i+'">'+i+'</option>')
            }
            for(i = 0; i < (players[player_turn - 1].wool)+1; i++){
                $("#"+options[2]).append('<option value="'+i+'">'+i+'</option>')
            }
            for(i = 0; i < (players[player_turn - 1].grain)+1; i++){
                $("#"+options[3]).append('<option value="'+i+'">'+i+'</option>')
            }
            for(i = 0; i < (players[player_turn - 1].ore)+1; i++){
                $("#"+options[4]).append('<option value="'+i+'">'+i+'</option>')
            }

            $("#row4").append('<button id="commencetrade">trade</button>');
            $("#commencetrade").css({
                display: 'block',
                margin: '2px',
                width: 'auto',
                height: 'auto',
                padding: '20px',
                backgroundColor: '#8ca88e',
                border: '2px rgb(40, 55, 45) solid',
                borderRadius:'50%',
                cursor: 'pointer',
                
            })
            $("#commencetrade").on('click',function() {
                //alert("You clicked me—just this once! " + yesm);
                //console.log($(this).attr('id'))
                //$("#lilthing").remove();
                let poin = options.map(id => parseInt($("#" + id).val()));
                
                if (yesm != 5) {
                    let eqfr = [0, 1, 2, 3, 4].map(i => parseInt($("#othertrader" + i).val()));
                    let equal1 = 0
                    let equal2 = 0
                    for(i = 0; i < poin.length; i++){
                        //console.log("poin:"+poin[i])
                        //console.log("eqfr:"+eqfr[i])
                        equal1 += poin[i]
                        equal2 += eqfr[i]
                    }
                    console.log(equal1)
                    console.log(equal2)
                    if(equal1 == equal2){
                        //alert("fair trade")
                        let receivingPlayerxz = parseInt(yesm, 10) + 1;
                        console.log("player:" + receivingPlayerxz);
                        trade(player_turn,receivingPlayerxz,poin,eqfr)
                        resolve($(this).attr('id'));
                    }else{
                        alert("not fair trade")
                    }
                }else{
                    let equal1 = 0
                    for(i = 0; i < poin.length; i++){  
                        equal1 += poin[i]
                    }
                    if(martimetr == undefined){
                        console.log("you need to undefine this")
                    }else{
                    let margive = [0,0,0,0,0]
                    let marxxe = 0
                    for(i = 0; i < 5; i++){
                        if($("#enythh"+i).attr('id') == martimetr.attr('id')){
                            console.log("i found it")
                            console.log(parseInt($("#enythh"+i).text()))
                            margive[i] = parseInt($("#enythh"+i).text())
                            marxxe = parseInt($("#enythh"+i).text())
                        }else{

                        }
                    }
                    //calc
                    let resourceTypes = ['brick', 'lumber', 'wool', 'grain', 'ore'];

            // Find all ships owned by the current player
            let ownedShips = [];
            for (let i = 0; i < ships.length; i++) {
                let ship = ships[i];
                let connectedSettlement = ship.conection[0];
                if (connectedSettlement && connectedSettlement.owner === player_turn) {
                    ownedShips.push(ship);
                }
            }

            // Build a map of best ratios per resource
            let bestRatios = {}; // { brick: 4, lumber: 3, ... }
            let selectedIndex = parseInt(martimetr.attr('id').slice(6));

    // Set all to default first
    for (let resource of resourceTypes) {
        bestRatios[resource] = 4;
    }

    // Update the one selected resource only
    for (let ship of ownedShips) {
        let resource = resourceTypes[selectedIndex];
        if (ship.resource === resource || ship.resource === 'anything') {
            bestRatios[resource] = Math.min(bestRatios[resource], ship.ratio[0]);
        }
    }
              console.log(bestRatios)
              //find which one to use
              let shipvalues = Object.values(bestRatios);
              console.log(shipvalues[0])
              shipvalues.sort((a, b) => a - b)
              console.log(shipvalues[0])
                    //calc
                    let approacate = (equal1 - (marxxe * shipvalues[0]));

                    while (equal1 >= approacate) {
                        console.log("total:" + equal1);
                        console.log(poin);
                    
                        if (players[player_turn - 1].brick > 0 && poin[0] > 0) {
                            players[player_turn - 1].brick--;
                            poin[0]--;
                            equal1--;
                        }
                        if (equal1 <= approacate) {
                            break;
                        }
                    
                        if (players[player_turn - 1].ore > 0 && poin[4] > 0) {
                            players[player_turn - 1].ore--;
                            poin[4]--;
                            equal1--;
                        }
                        if (equal1 <= approacate) {
                            break;
                        }
                    
                        if (players[player_turn - 1].lumber > 0 && poin[1] > 0) {
                            players[player_turn - 1].lumber--;
                            poin[1]--;
                            equal1--;
                        }
                        if (equal1 <= approacate) {
                            break;
                        }
                    
                        if (players[player_turn - 1].wool > 0 && poin[2] > 0) {
                            players[player_turn - 1].wool--;
                            poin[2]--;
                            equal1--;
                        }
                        if (equal1 <= approacate) {
                            break;
                        }
                    
                        if (players[player_turn - 1].grain > 0 && poin[3] > 0) {
                            players[player_turn - 1].grain--;
                            poin[3]--;
                            equal1--;
                        }
                        if (equal1 <= approacate) {
                            break;
                        }
                    }
                    
for(let i = 0; i < 5; i++){
    console.log(-margive[i])
}
                    
                    take_resources(-margive[0],-margive[1],-margive[2],-margive[3],-margive[4],player_turn)
                    
                    const playerId = `#ply${player_turn}`;

                $(`${playerId}-brick`).text("brick:"+players[player_turn - 1].brick);
                $(`${playerId}-lumber`).text("lumber:"+players[player_turn - 1].lumber);
                $(`${playerId}-wool`).text("wool:"+players[player_turn - 1].wool);
                $(`${playerId}-grain`).text("grain:"+players[player_turn - 1].grain);
                 $(`${playerId}-ore`).text("ore:"+players[player_turn - 1].ore);
                    resolve($(this).attr('id'));
                    
                }
                }
                
                
            });
    }
    $("#row4").append('<button id="xcancletrade">cancel</button>');
            $("#xcancletrade").css({
                display: 'block',
                margin: '2px',
                width: 'auto',
                height: 'auto',
                padding: '20px',
                backgroundColor: '#8ca88e',
                border: '2px rgb(55, 46, 40) solid',
                borderRadius:'50%',
                cursor: 'pointer',
                
            })
            $("#xcancletrade").on('click',function() {

                resolve($(this).attr('id'));

            })
    });
}

async function prompt_player() {
    make_cards()
    $("#promptt").text(players[player_turn - 1].nom + ". Start your turn!");
    
    let p1;
    let cangoon = true;
    
    while (cangoon) {
        // Wait for the user to click something
        //alert(thingyouclickedon)
        let thingyouclickedon = await new Promise((resolve) => {
            function handler(event) {
                
                document.removeEventListener("click", handler);
                resolve(event.target.id);
            }
            document.addEventListener("click", handler);
        });
        //$("#promptt").text(thingyouclickedon)
    let objx;
if (thingyouclickedon.startsWith("b")) {
    objx = getobject("visual", "#" + thingyouclickedon, settlements);
} else if (thingyouclickedon.startsWith("c")) {
    objx = getobject("visual", "#" + thingyouclickedon, roads);
} else {
    console.warn("Clicked an unrecognized item:", thingyouclickedon);
   //continue; // or skip / handle differently
}
//alert("this object is owned by " + objx?.owner)        
        if (thingyouclickedon === "quit") {
            $("#menucard").remove()
            let peew = confirm("are you sure you wanna quit\nclick OK to quit");
            if(peew){
            cangoon = false;
            p1 = 0; // quit
            }else{
            cangoon = false;
            p1 = 7; // quit
            }
        }

        else if (
           thingyouclickedon.startsWith("b") &&
    (objx?.owner === player_turn || objx?.owner === 0)
        ) {
            //alert();
            
            //alert(((getobject("visual", "#"+thingyouclickedon, settlements)).owner) == player_turn || ((getobject("visual", "#"+thingyouclickedon, settlements)).owner) == 0)
            const choice = await showOptionsMenu(thingyouclickedon,objx);

            if (choice === "xcancel") {
                console.log("Player cancelled action");
                $("#menucard").remove()
                $("#lilthing").remove();
                p1 = 7; // repeat turn
                cangoon = false;
            } else if(choice === "build") {
                    $("#lilthing").remove();
                    console.log(requirments(1,1,1,1,0,player_turn))
                    if(requirments(1,1,1,1,0,player_turn)){
                        place_thing(true,player_turn,settlements.indexOf(objx))
                        take_resources(1,1,1,1,0,player_turn)
                    }else{
                        $("#promptt").text("you dont have the resources")
                    }
                    $("#menucard").remove()
                    p1 = 7; // repeat turn
                    cangoon = false;
            }else{
                $("#lilthing").remove();
                if(requirments(0,0,0,2,3,player_turn)){
                    objx.type++
                    $(objx.visual).css({"border": "2px solid white"})
                    take_resources(0,0,0,2,3,player_turn)
                }else{
                    $("#promptt").text("you dont have the resources")
                }
                    $("#menucard").remove()
                    p1 = 7; // repeat turn
                    cangoon = false;
                
            }
        }else if(thingyouclickedon.startsWith("c") && (objx?.owner === player_turn || objx?.owner === 0)){
            
            
            const choice = await showOptionsMenu(thingyouclickedon,objx);
            if (choice === "xcancel") {
                console.log("Player cancelled action");
                $("#lilthing").remove();
                $("#menucard").remove()
                p1 = 7; // repeat turn
                cangoon = false;
            } else if(choice === "build") {
                    $("#lilthing").remove();
                    if(requirments(1,1,0,0,0,player_turn)){
                    place_thing(false,(player_turn - 1),roads.indexOf(objx))
                    if(objx.owner == player_turn){
                    take_resources(1,1,0,0,0,player_turn)
                    }
                    }else{
                        $("#promptt").text("you dont have the resources")
                    }
                    $("#menucard").remove()
                    p1 = 7; // repeat turn
                    cangoon = false;
                    
            }
        }else if(thingyouclickedon === "end_turn") {
            $("#menucard").remove()
            //alert("you get a message")
            
            cangoon = false;
            p1 = 6; // quit
            
            
        }
        else if(thingyouclickedon === "trade") {
            const choice = await showOptionsMenu(thingyouclickedon,objx);
            $("#lilthing").remove();
            $("#menucard").remove()
            cangoon = false;
            p1 = 7; // quit
        }
        else if(thingyouclickedon.startsWith("ard")) {
            //const choice = await showOptionsMenu(thingyouclickedon,objx);
            //$("#lilthing").remove();
            if (playedcard == false) {
                $("#promptt").text(thingyouclickedon[3])
                if(parseInt(thingyouclickedon[3]) > players[player_turn - 1].dc.length - 1){
                    $("#promptt").text("this is a knight card")
                    await summon_knight(player_turn)
                    $(".uilayer").append('<div id="movv"></div>')
                    console.log($("#movv").attr('id'))
                    $("#movv").css({
                        position: 'absolute',
                        top: '557px',
                        left: '673px',
                        width: '50px',
                        height:'90px',
                        padding: '8px',
                        backgroundColor: '#53186b',
                        border: 'none',
                        borderRadius: '5%',
                        zIndex: 99999,
    
                    })
                    let keyframe1 = {
                        top: '157px',
                    }
                    let yy = 0
                    switch(player_turn){
                        case 1:yy=50 ;break;
                        case 2:yy=100 ;break;
                        case 3:yy=150 ;break;
                        case 4:yy=200 ;break;
                    }
                    let keyframe2 = {
                        top: yy+'px',
                        left: '40px',
                        width: '5px',
                        height:'5px',
                        borderRadius: '50%',
                    }
                    $("#movv").animate(keyframe1,400,'swing',function(){
                        $("#movv").animate(keyframe2,800,'swing',function(){
                         $("#movv").remove()
                        })
                    })
                }else{
                    console.log($("#" + thingyouclickedon).css("backgroundColor"));
                    if($("#" + thingyouclickedon).css("backgroundColor") == "rgb(37, 133, 32)"){
                        console.log("a1");
                        await progress_card('a1')
                    }else if($("#" + thingyouclickedon).css("backgroundColor") == "rgb(55, 199, 48)"){
                        console.log("a3");
                        await progress_card('a3')
                    }else if($("#" + thingyouclickedon).css("backgroundColor") == "rgb(46, 166, 40)"){
                        console.log("a2");
                        await progress_card('a2')
                    }else{
                        console.log("yeah idk");
                    }
                    $(".uilayer").append('<div id="movv"></div>')
                    console.log($("#movv").attr('id'))
                    $("#movv").css({
                        position: 'absolute',
                        top: '557px',
                        left: '673px',
                        width: '50px',
                        height:'90px',
                        padding: '8px',
                        backgroundColor: 'rgb(55, 199, 48)',
                        border: 'none',
                        borderRadius: '5%',
                        zIndex: 99999,
    
                    })
                    let keyframe1 = {
                        top: '-100px',
                    }
                    
                    $("#movv").animate(keyframe1,400,'swing',function(){
                      
                         $("#movv").remove()
                        
                    })
                }
            }else{
                console.log("you can olny play 1 card per turn")
            }

            $("#menucard").remove()
            playedcard = true
            cangoon = false;
            p1 = 7; // quit
        }else if(thingyouclickedon=='purchase'){
            buy_card(player_turn)
                $("#menucard").remove()
                p1 = 7; // repeat turn
                cangoon = false;
        }

        
    }

    return p1;
}
async function mainmenu(){
    rof2 = await new Promise((resolve) => {
        $('.uilayer').append('<div id="main_menu"></div>')
        $('#main_menu').css({
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '100%',
            height:'100%',
            backgroundColor: 'rgb(117, 96, 29)',
            border: 'none',
            zIndex: 99999,

        })
        $('#main_menu').append('<h1 id="TITLR">SETTLERS OF CATAN<h1>')
        $('#main_menu').append('<button id="trats">start</button>')
        $('#trats').css({
            position: 'absolute',
        'inset-inline-start': '39%',
        'inset-block-start': '60%',
            width: '14%',
            height:'11%',
            'font-size':'30px' ,
            backgroundColor: 'rgb(95, 79, 24)',
            border: '3px black solid',
            
            
        })
        $('#main_menu').append('<select name="tratss"id="tratss"></select>')
        $('#tratss').css({
            position: 'absolute',
        'inset-inline-start': '20%',
        'inset-block-start': '20%',
            width: '16%',
            height:'9%',
            'font-size':'30px' ,
            backgroundColor: 'rgb(95, 79, 24)',
            border: '3px black solid',
            
            
        })
        for(i = 4;i>0;i--){
            
                $("#tratss").append('<option value="'+i+'">'+i+'</option>')
                $('#main_menu').append('<p id="namme'+(i)+'" contenteditable="true">player</p>')
                $('#namme'+(i)).css({
                    position: 'absolute',
                'inset-inline-start': '50%',
                'inset-block-start': ((i*10))+'%',
                    width: '16%',
                    height:'9%',
                    'font-size':'30px' ,
                    backgroundColor: players[i - 1].color,
                    border: '3px black solid',
                    
                    
                })
            
        }
            
        $("#tratss").on('change',function(){
            numofplayers = $("#tratss").val()
            $('#namme'+(4)).remove()
            $('#namme'+(3)).remove()
            $('#namme'+(2)).remove()
            $('#namme'+(1)).remove()
            for(i = numofplayers;i>0;i--){
                console.log("its removing")
                $('#namme'+(i)).remove()
                $('#main_menu').append('<p id="namme'+(i)+'" contenteditable="true">player</p>')
                $('#namme'+(i)).css({
                    position: 'absolute',
                'inset-inline-start': '50%',
                'inset-block-start': ((i*10))+'%',
                    width: '16%',
                    height:'9%',
                    'font-size':'30px' ,
                    backgroundColor: players[i - 1].color,
                    border: '3px black solid',
                    
                    
                })
            
        }

        })
        function handler(event) {
            if(event.target.id == 'trats'){
            numofplayers = $("#tratss").val()
            for(i=0; i<4; i++){
                if(i >= numofplayers){
                    console.log("#ply"+(i+1))
                    $("#ply"+(i+1)).remove()
                }
            }
            for(i=0; i<numofplayers; i++){
                
                    console.log("#ply"+(i+1))
                    players[i].nom = $('#namme'+(i+1)).text()
                    $("#ply"+(i+1)+"-name").text($('#namme'+(i+1)).text())
                
            }
            let keyframe1 = {
                        top: '1%',
            }
            let keyframe2 = {
                        top: '-100%',
            }
            document.removeEventListener("click", handler);
            $('#main_menu').animate(keyframe1,400,'swing',function(){
                $('#main_menu').animate(keyframe2,400,'swing',function(){
                $('#main_menu').remove()
            })
            })
            
            resolve(event.target.id);
            }
        }
        document.addEventListener("click", handler);
    })
    
}
function placeships() {
    let ships_placed = 0;
    let fffffffff = []
    while (ships_placed < 6) {
        let siuhu = Math.floor(Math.random() * 54); // 0–53

        if (settlements[siuhu].havrest.length !== 3 && !(fffffffff.includes(siuhu))) {
            fffffffff.push(siuhu)
            //console.log("settlement b" + (siuhu + 1) + " is a shore");
            //console.log("ship" + (ships_placed + 1) + " will go here");

            ships[ships_placed].conection.push(settlements[siuhu]);
            const options = ['brick', 'lumber', 'wool','grain','ore','anything'];
            let siuhux = Math.floor(Math.random() * 6); //0-5
            ships[ships_placed].resource = options[siuhux]
            console.log("this merchant ship is giving "+options[siuhux] + ". its ratio is " +ships[ships_placed].ratio[0]+ " to " +ships[ships_placed].ratio[1])

            
            let top = $(settlements[siuhu].visual).position().top;
            let left = $(settlements[siuhu].visual).position().left;
            //console.log("top: " + top + ", left: " + left)
            let xxxs = 0;
            let yyys = 0;
            switch(siuhu + 1){
                case 1: yyys = -35;break;
                case 2: yyys = -35;break;
                case 3: yyys = -35;break;
                case 4: yyys = -35;break;
                case 5: yyys = -35;break;
                case 6: yyys = -35;break;
                case 7: yyys = -35;break;
                case 48: yyys = 35;break;
                case 49: yyys = 35;break;
                case 50: yyys = 35;break;
                case 51: yyys = 35;break;
                case 52: yyys = 35;break;
                case 53: yyys = 35;break;
                case 54: yyys = 35;break;
                case 9: yyys = -35;xxxs = -35;break;
                case 8: yyys = -35;xxxs = -35;break;
                case 17: xxxs = -35;break;
                case 18: yyys = -35;xxxs = -35;break;
                case 28: xxxs = -35;break;
                case 29: yyys = 35;xxxs = -35;break;
                case 38: xxxs = 35;break;
                case 39: yyys = 35;xxxs = -35;break;
                case 40: yyys = 35;xxxs = -35;break;
                case 15: yyys = -35;xxxs = 35;break;
                case 16: yyys = 35;xxxs = 35;break;
                case 26: yyys = -35;xxxs = 35;break;
                case 27: xxxs = 35;break;
                case 38: yyys = 35;xxxs = 35;break;
                case 37: yyys = 35;xxxs = 35;break;
                case 47: yyys = 35;xxxs = 35;break;
                case 46: yyys = 35;xxxs = 35;break;
            }

            $(".uilayer").append(`<div id="${ships[ships_placed].visual.substring(1)}"></div>`);
            $(ships[ships_placed].visual).css({
                "width": "auto",
                "height": "auto",
                "background-color": "#ffffff",
                "color": "black",
                "font-size": "11px",
                "display": "flex",
                'flex-direction':'column',
                "align-items": "center",
                "justify-content": "center",
                "position": "absolute",
                "top": (top + yyys) + "px",
                "left": ((left + xxxs) - 5) + "px",
                "border": ships[ships_placed].ratio[0]+"px solid black",
                "border-radius": "10%",
                "z-index": "20",
            });
            $("#ship" + (ships_placed + 1)).append("<p style='margin: 0px'>" + ships[ships_placed].ratio[0] + ":" + ships[ships_placed].ratio[1] + "</p>");
            $("#ship" + (ships_placed + 1)).append("<p style='margin: 0px'>" + ships[ships_placed].resource + "</p>");

            ships_placed++;
        }
    }
}

//main game section
$(document).ready(async function() {
    let startphase = false;
    dish_out()
    //loop for player names
    for(i=0; i<numofplayers; i++){
        $("#ply" + (i+1) + "-name").text(players[i].nom)
        $("#ply" + (i+1) + "-lr").hide()
        $("#ply" + (i+1) + "-la").hide()
    }
    //loop for lands
    for(let i = 0; i < 19; i++){
        let yy2eyy
        //alert(lands[i].land)
        switch(lands[i].land){
            case 0:$("body").append(`<img id="a`+ (i+1) +`" src="moutan.png" width="100" height="100">`); ;break;
            case 1:$("body").append(`<img id="a`+ (i+1) +`" src="feald.png" width="100" height="100">`); ;break;
            case 2:$("body").append(`<img id="a`+ (i+1) +`" src="cliff.png" width="100" height="100">`); ;break;
            case 3:$("body").append(`<img id="a`+ (i+1) +`" src="forest.png" width="100" height="100">`); ;break;
            case 4:$("body").append(`<img id="a`+ (i+1) +`" src="farm.png" width="100" height="100">`); ;break;
            case 5:$("body").append(`<img id="a`+ (i+1) +`" src="desert.png" width="100" height="100">`); ;break;
        }
        let positions =[[50,550],[50,635],[50,720],[125,507],[125,593],[125,678],[125,763],[200,464],[200,550],[200,636],[200,720],[200,806],[275,507],[275,593],[275,678],[275,763],[350,550],[350,635],[350,720]]
        let move = {
            "top":((positions[i][0]))+"px",
            "left":((positions[i][1]))+"px",
        }
        $("#a"+(i+1)).css({"position":"absolute"})
        $("#a"+(i+1)).css(move)
        
        if(lands[i].robber){
             yy2eyy = "gray"
        }else{
             yy2eyy = "#ba7830"
        }
        //alert(lands[i].robber)
        $("body").append("<div id='aa"+(i+1) +"' class='dot'>" + lands[i].number + "</div>");
    
        $("#aa" + (i+1)).css({
        "width": "30px",
        "height": "30px",
        "background-color": yy2eyy,
        "border": "2px solid #965917",
        "color": "#523c26",
        "font-size": "17px",
        'font-weight': 'bold',
        "display": "flex",
        "align-items": "center",
        "justify-content": "center",
        "position": "absolute",
        "top": ((positions[i][0])+32)+"px",
        "left": ((positions[i][1])+32)+"px",
        "border-radius": "50%"
    });
    }
    
    //loop for settlements
    
    for (let i = 0; i < 54; i++) { // Adjusted loop to include new layers
        let x = 460;
        let y = 60;
    
        // First layer (7 dots)
        if (i < 7) {
            x = (x + 90) + (i * 41);
            if (i % 2 !== 0) {
                y = y - 11;
            }
        }
        // Second layer (8 dots)
        else if (i > 6 && i < (8 + 8)) {
            x = (x + 50) + ((i - 7) * 41);
            y = y + 75;
            if (i % 2 === 0) {
                y = y - 11;
            }
        }
        // Third layer (9 dots) **shifted by 1**
        else if (i > 15 && i < (10 + 17)) {
            x = (x + 8) + ((i - 16) * 41);
            y = y + 150;
            if (i % 2 !== 0) {
                y = y - 11;
            }
        }
        // Fourth layer (10 dots) **fixed alignment**
        else if (i > 26 && i < (12 + 26)) { 
            x = (x+90) + ((i - 29) * 42);
            y = y + 220;
            if (i % 2 !== 0) {
                y = y - 11;
            }
        }
        // Fifth layer (8 dots, 2 fewer than fourth) **fixed alignment**
        else if (i > 37 && i < (7 + 40)) { // Fixed range
            x = (x + 175) + ((i - 41) * 41); // Adjusted x calculation
            y = y + 300;
            if (i % 2 == 0) {
                y = y - 20;
            }
        }
        // Sixth layer (6 dots, 2 fewer than fifth) **fixed alignment**
        else if (i > 46 && i < (6 + 48)) { // Fixed range
            x = (x + 175) + ((i - 49) * 41); // Adjusted x calculation
            y = y + 370;
            if (i % 2 !== 0) {
                y = y - 11;
            }
        }
        
        //console.log("b" + (i+1) + " is going at " + (x) + ", " + y);
        $(".uilayer").append("<div id='b" + (i + 1) + "' class='dot2'></div>");
        $("#b" + (i + 1)).css({
            "width": "20px",
            "height": "20px",
            "background-color": "#736f58",
            "color": "black",
            "display": "flex",
            "align-items": "center",
            "justify-content": "center",
            "position": "absolute",
            "top": y + "px",
            "left": x + "px",
            "border-radius": "50%",
            "border": "2px solid black",
            "z-index": "10"
        });
        //console.log(settlements[i].havrest.length)
        
        
        
    }
    
    // loop for roads
    for(i = 0; i < 72;i++){
        let fitthi = roads[i].connection[0].visual
        let secthi = roads[i].connection[1].visual
       
        createLineBetweenDivs(fitthi, secthi, "c" + (i+1))
    }
    
    await mainmenu()
    placeships()
    assign_color()
    start_game()   
    
    
})

