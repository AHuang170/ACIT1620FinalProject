var gs_Iron_Sword_Path = [
    [{type: 'node', name:'Iron Sword', rarity: 1, attack: 288, ele_type: "No Element", ele_val: "", num_slot : "---", affinity: "0%", flavour:"A weapon that even novice hunters can use. Charge up for a more powerful slash.", upgrade:["10z", "C. Qurupecco Scale", "55"], craft:["750z", "Iron Ore", "3"], shop: "1500z", sharp:"Img/Weap/gs/Iron_Sword/base_sharp.png", p_sharp:"Img/Weap/gs/Iron_Sword/plus_sharp.png", pic:'Img/Weap/gs/Iron_Sword/render.png', parent:["Shovel", 0, -1], playstyle: "Blademaster", extra: ""}]
]

var gs_trees = ["Iron_Sword_Path"];
var ls_trees = [];
var sns_trees = [];
var db_trees = [];
var ham_trees = [];
var hrn_trees = [];
var lan_trees = [];
var gl_trees = [];
var sa_trees = [];
var cb_trees = [];
var ig_trees = [];
var lbg_trees = [];
var hbg_trees = [];
var bow_trees = [];

var node_num = 0;
var selected_node = -1;
var info_box_present = false;

var weap_toggle = 0;
var arm_toggle = 0;

function disp_Node(x, y, parent_id, tree_arr){
    var nDiv = document.createElement('div');
    var nImg = document.createElement('img');
    var new_id = node_num;
    
    nDiv.id = new_id*10;
    
    nDiv.className = 'panel';
    nImg.className = 'ImgPan';
    
    nImg.src = tree_arr[y][x].pic;
    
    nDiv.style.top = (y*100)+'px';
    nDiv.style.left = (x*100 + 1)+'px';
    
    nDiv.style.borderColor = "dimgray";
    
    nDiv.innerHTML = tree_arr[y][x].name;
    
    nDiv.onclick = function(){
        if(selected_node == -1){
            selected_node = nDiv.id;
            nDiv.style.borderColor = 'turquoise';
            disp_info_box(x, y, tree_arr);
        }
        else{
            if(selected_node == nDiv.id){
                selected_node = -1;
                nDiv.style.borderColor = 'dimgray';
                remove_info_box();
            }
            else{
                document.getElementById(selected_node).style.borderColor = 'dimgray';
                selected_node = nDiv.id;
                nDiv.style.borderColor = 'turquoise';
                disp_info_box(x, y, tree_arr);
            }
        }
        
    };
    
    nDiv.appendChild(nImg);
    document.getElementById(parent_id).appendChild(nDiv);
    
    node_num += 1;
}

function disp_Conn(x, y, parent_id, tree_arr){
    var nDiv = document.createElement('div');
    var nImg = document.createElement('img');
    
    nDiv.className = 'conn_panel';
    nImg.className = 'ConnPan';
    
    nImg.src = tree_arr[y][x].pic;
    
    nDiv.style.top = (y*100) + 'px';
    nDiv.style.left = (x*100) + 'px';
    
    nDiv.appendChild(nImg);
    
    document.getElementById(parent_id).appendChild(nDiv);
    
}

function disp_Tree(tree_arr){
    
    delete_tree();
    
    var nDiv = document.createElement('div');
    nDiv.id = 'diagram';
    nDiv.style.position = 'absolute';
    nDiv.style.top = '0px';
    nDiv.style.left = '0px';
    nDiv.style.border = "1px outset";
    nDiv.style.backgroundImage = "url(Img/tree_back.jpg)";
    nDiv.style.backgroundSize = "cover";
    
    
    var height = tree_arr.length * 100;
    var width = 0;
    for (var index = 0; index < tree_arr.length; index++){
        if (width < tree_arr[index].length){
            width = tree_arr[index].length;
        }
    }
    
    width *= 100;
    
    nDiv.style.height = (height) + 50+'px';
    nDiv.style.width = (width + 50)+'px';
    
    document.getElementById("content").appendChild(nDiv);
    
    for (var y = 0; y < tree_arr.length; y++){
        for(var x = 0; x < tree_arr[y].length; x++){
            if(tree_arr[y][x].type != 'blank'){
                if (tree_arr[y][x].type == 'connector'){
                    disp_Conn(x, y, nDiv.id, tree_arr);
                }
                else{
                    disp_Node(x, y, nDiv.id, tree_arr);
                }
            }
        }
    }
    
        document.getElementById("info_box").style.visibility = "visible";
        document.getElementById("info_box").style.opacity = 1;
        document.getElementById("page_1").style.visibility = "visible";
        document.getElementById("page_1").style.opacity = 1;
        info_box_present = true;
        remove_info_box();
    
    
    
}

function delete_tree(){
    
    var content_div = document.getElementById("content");
    var tree_div = document.getElementById('diagram');
    
    if(tree_div != null){
        
        content_div.removeChild(tree_div);
        
        
        node_num = 0;
        selected_node = -1;
        remove_info_box();

    }
    
}

function toggle_page(page_num){
    switch(page_num){
        case 1:
            document.getElementById("page_1").style.visibility = "hidden";
            document.getElementById("page_1").style.opacity = 0;
            document.getElementById("page_2").style.visibility = "visible";
            document.getElementById("page_2").style.opacity = 1;
            document.getElementById("page_3").style.visibility = "hidden";
            document.getElementById("page_3").style.opacity = 0;
            document.getElementById("page_4").style.visibility = "hidden";
            document.getElementById("page_4").style.opacity = 0;
            break;
        
        case 2:
            document.getElementById("page_1").style.visibility = "hidden";
            document.getElementById("page_1").style.opacity = 0;
            document.getElementById("page_2").style.visibility = "hidden";
            document.getElementById("page_2").style.opacity = 0;
            document.getElementById("page_3").style.visibility = "visible";
            document.getElementById("page_3").style.opacity = 1;
            document.getElementById("page_4").style.visibility = "hidden";
            document.getElementById("page_4").style.opacity = 0;
            break;
            
        case 3:
            document.getElementById("page_1").style.visibility = "hidden";
            document.getElementById("page_1").style.opacity = 0;
            document.getElementById("page_2").style.visibility = "hidden";
            document.getElementById("page_2").style.opacity = 0;
            document.getElementById("page_3").style.visibility = "hidden";
            document.getElementById("page_3").style.opacity = 0;
            document.getElementById("page_4").style.visibility = "visible";
            document.getElementById("page_4").style.opacity = 1;
            break;
            
        case 4:
            document.getElementById("page_1").style.visibility = "visible";
            document.getElementById("page_1").style.opacity = 1;
            document.getElementById("page_2").style.visibility = "hidden";
            document.getElementById("page_2").style.opacity = 0;
            document.getElementById("page_3").style.visibility = "hidden";
            document.getElementById("page_3").style.opacity = 0;
            document.getElementById("page_4").style.visibility = "hidden";
            document.getElementById("page_4").style.opacity = 0;
            break;
    }
}



function disp_info_box(x, y, tree_arr){
    if (info_box_present != false){
        remove_info_box();
    }

        
    document.getElementById("info_box").style.top = (y* 100 + 20)+'px';
    document.getElementById("info_box").style.left = (x*100 +102)+'px';
    document.getElementById("info_box").style.visibility = "visible";
    document.getElementById("info_box").style.opacity = 1;
    document.getElementById("page_1").style.visibility = "visible";
    document.getElementById("page_1").style.opacity = 1;
        

    info_box_present = true;
    update_info_box(tree_arr[y][x]);
    
}

function update_info_box(node_object){
    document.getElementById("info_name").innerHTML = node_object.name;
    document.getElementById("info_rare").innerHTML = "Rarity " + node_object.rarity;
    document.getElementById("info_rare").style.color = update_rare_color(node_object.rarity);
    document.getElementById("atk_val").innerHTML = node_object.attack;
    document.getElementById("ele_lable").innerHTML = node_object.ele_type;
    document.getElementById("ele_val").innerHTML = node_object.ele_val;
    document.getElementById("sharp_img").src = node_object.sharp;
    document.getElementById("sharp_p_img").src = node_object.p_sharp;
    document.getElementById("slot_val").innerHTML = node_object.num_slot;
    document.getElementById("aff_val").innerHTML = node_object.affinity;
    document.getElementById("weap_type_val").innerHTML = node_object.playstyle;
    document.getElementById("extra_info").innerHTML = node_object.extra;
    document.getElementById("flavour").innerHTML = node_object.flavour;
    document.getElementById("flavour").innerHTML = node_object.flavour;
    
    if (node_object.upgrade.length != 0){
        document.getElementById("parent_lable").innerHTML = "Material List";
        document.getElementById("parent_name").innerHTML = node_object.parent[0];
        document.getElementById("up_cost").innerHTML = node_object.upgrade[0];
        for(var i = 1; i < node_object.upgrade.length; i+=2){
            var mat_name = node_object.upgrade[i];
            var mat_amt = node_object.upgrade[i+1];
            
            var up_lable_id = "up_mat"+i;
            var up_val_id = "up_mat"+i+"_amt";
            
            document.getElementById(up_lable_id).innerHTML = mat_name;
            document.getElementById(up_val_id).innerHTML = mat_amt;
            
        }
    }
    else{
        docoument.getElementById("parent_name").innerHTML = "";
        docoument.getElementById("parent_lable").innerHTML = "";
    }
    
    if (node_object.craft.length != 0){
        document.getElementById("cr_cost").innerHTML = node_object.craft[0];
        for(var x = 1; x < node_object.craft.length; x+=2){
            var cr_mat_name = node_object.craft[x];
            var cr_mat_amt = node_object.craft[x+1];
            
            var cr_lable_id = "cr_mat"+x;
            var cr_val_id = "cr_mat"+x+"_amt";
            
            console.log(cr_lable_id);
            console.log(cr_val_id);
            
            document.getElementById(cr_lable_id).innerHTML = cr_mat_name;
            document.getElementById(cr_val_id).innerHTML = cr_mat_amt;
            
        }
    }
    
    document.getElementById("shop_price").innerHTML = node_object.shop;
    
    document.getElementById('lg_img').src = node_object.pic;
    
}

function update_rare_color(rare){
    color='';
    switch(rare){
        case 1:
            color = "white";
            break;
            
        case 2:
            color = "plum";
            break;
            
        case 3:
            color = "yellow";
            break;
            
        case 4:
            color = "pink";
            break;
            
        case 5:
            color = "green";
            break;
            
        case 6:
            color = "cornflowerblue";
            break;
            
        case 7:
            color = "firebrick";
            break;
            
        case 8:
            color = "skyblue";
            break;
            
        case 9:
            color = "orange";
            break;
            
        case 10:
            color = "purple";
            break;
            
        
    }
    return color;
}

function remove_info_box(){
    document.getElementById("info_box").style.visibility = "hidden";
    document.getElementById("info_box").style.opacity = 0;
    document.getElementById("page_1").style.visibility = "hidden";
    document.getElementById("page_1").style.opacity = 0;
    document.getElementById("page_2").style.visibility = "hidden";
    document.getElementById("page_2").style.opacity = 0;
    document.getElementById("page_3").style.visibility = "hidden";
    document.getElementById("page_3").style.opacity = 0;
    document.getElementById("page_4").style.visibility = "hidden";
    document.getElementById("page_4").style.opacity = 0;
    info_box_present = false;
}

function clear_list(){
    var drop_list = document.getElementById("tree_selection");
    while (drop_list.length > 1){
        drop_list.remove(1);
    }
}

function option_select (option){
    if(option.indexOf("wpn_") != -1){
        var wpn_option = option.replace("wpn_", "");
        select_wpn_type(wpn_option);
    }
    else if(option.indexOf("armor_") != -1){
        var amr_option = option.replace("armor_", "");
        select_armor(amr_option);
        
    }
    
}

function select_wpn_type(selection){
    var tree_arr_cat = eval(selection + "_trees");
    clear_list();
    delete_tree();
    for(var index = 0; index < tree_arr_cat.length; index++){
        var new_option = document.createElement("option");
        var new_op_text = tree_arr_cat[index];
        
        while( new_op_text.indexOf("_") != -1){
            new_op_text = new_op_text.replace("_", " ");
        }
        
        var new_op_val = selection + "_" + tree_arr_cat[index];
        
        new_option.innerHTML = new_op_text;
        new_option.value = new_op_val;
        
        document.getElementById("tree_selection").add(new_option);
    }
    
}

function select_armor(selection){
    var gear_selection = "";
    switch(selection){
        case "lrb":
            gear_selection = "Low Rank Blademaster Armor";
            break;
            
        case "lrg":
            gear_selection = "Low Rank Gunner Armor";
            break;
            
        case "hrb":
            gear_selection = "High Rank Blademaster Armor";
            break;
            
        case "hrg":
            gear_selection = "High Rank Gunner Armor";
            break;
            
        case "grb":
            gear_selection = "G Rank Blademaster Armor";
            break;
            
        case "grg":
            gear_selection = "G Rank Gunner Armor";
            break;
            
        case "rlc":
            gear_selection = "Relic Armor";
            break;
    }
    
    var body_message = "Your selection of " + gear_selection + " is currently unavailable" + "<br>" + "Please select a different option."
    
    pop_up("NOTICE", body_message);
}

function pop_up(header_message, body_message){
    document.getElementById("message_box").style.display = "block";
    document.getElementById("pop_header").innerHTML = header_message;
    document.getElementById("pop_header").style.textAlign = "center";
    document.getElementById("message_bod").innerHTML = body_message;
    document.getElementById("message_bod").style.textAlign = "center";
   
}

function close_message(){
    document.getElementById("message_box").style.display = "none";
}

document.getElementById('gen_button').addEventListener("click", function(){
    var selected_tree = document.getElementById("tree_selection").value;
    if (selected_tree != "Empty"){
        disp_Tree(eval(selected_tree));
    }
    
});

document.getElementById('del_button').addEventListener("click", function(){
    
    delete_tree();
});

document.getElementById("toggle_img").addEventListener("click", function(){
    document.getElementById("options").style.visibility = 'hidden';
    document.getElementById("options").style.opacity = '0';
    
    document.getElementById("toggle_button").style.visibility = 'visible';
    document.getElementById("toggle_button").style.opacity = '1';

});

document.getElementById("toggle_button").addEventListener("click", function(){
    document.getElementById("toggle_button").style.visibility = 'hidden';
    document.getElementById("toggle_button").style.opacity = '0';
    
    document.getElementById("options").style.visibility = 'visible';
    document.getElementById("options").style.opacity = '1';

});

document.getElementById("op_weap").addEventListener("click", function(){
    var element1 = document.getElementById("options_middle");
    var style1 = window.getComputedStyle(element1);
    var att_value1 = parseInt(style1.getPropertyValue('top'));
    
    var element2 = document.getElementById("options_bottom");
    var style2 = window.getComputedStyle(element2);
    var att_value2 = parseInt(style1.getPropertyValue('top'));
    
    var new_val1;
    var new_val2;
    
    if(weap_toggle == 0){
        element1.style.top = 280 + 'px';
        
        weap_toggle = 1;
        
        if(arm_toggle == 1){
            element2.style.top = 420 + 'px';
        }
        else{
            element2.style.top = 280 + 'px';
        }
        
    }
    else{
        element1.style.top = 0 + 'px';
        
        if(arm_toggle == 1){
            element2.style.top = 140 + 'px';
        }
        else{
            element2.style.top = 0 + 'px';
        }
        
        weap_toggle = 0;
    }
    

});

document.getElementById("op_armor").addEventListener("click", function(){
    var element1 = document.getElementById("options_bottom");
    var style1 = window.getComputedStyle(element1);
    var att_value1 = parseInt(style1.getPropertyValue('top'));
    
    if(arm_toggle == 0){
        if(weap_toggle == 1){
            element1.style.top = 420 + 'px';
        }
        else{
            element1.style.top = 140+ 'px';
        }
        
        arm_toggle = 1;
    }
    else{
        if(weap_toggle == 1){
            element1.style.top = 280 + 'px';
        }
        else{
            element1.style.top = 0 + 'px';
        }
        
        arm_toggle = 0;
    }
    
    

});