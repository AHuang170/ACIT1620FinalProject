var Tree1 = [
    [{type: 'node', name:'node1', pic:'Img/Weap/placeholder.png'}],
    [{type: 'connector', pic: 'Img/connector_2.png'}, {type: 'connector', pic: 'Img/connector_3.png'}, {type: 'connector', pic: 'Img/connector_1.png'}, {type: 'connector', pic: 'Img/connector_3.png'}, {type: 'connector', pic: 'Img/connector_4.png'}],
    [{type: 'node', name:'node2', pic:'Img/Weap/placeholder.png'}, {type: 'blank'}, {type: 'node', name:'node3', pic:'Img/Weap/placeholder.png'}, {type: 'blank'}, {type: 'node', name:'node4', pic:'Img/Weap/placeholder.png'}],
    [{type: 'connector', pic: 'Img/connector_5.png'}, {type: 'blank'}, {type: 'connector', pic: 'Img/connector_5.png'}],
    [{type: 'node', name:'node5', pic:'Img/Weap/placeholder.png'}, {type: 'blank'}, {type: 'node', name:'node6', pic:'Img/Weap/placeholder.png'}]
]

var node_num = 0;
var selected_node = -1;
var info_box_present = false;

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
    
    
    
    var height = tree_arr.length * 100;
    var width = 0;
    for (var index = 0; index < tree_arr.length; index++){
        if (width < tree_arr[index].length){
            width = tree_arr[index].length;
        }
    }
    
    width *= 100;
    
    nDiv.style.height = height+'px';
    nDiv.style.width = width+'px';
    
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

document.getElementById('gen_button').addEventListener("click", function(){
    var selected_tree = document.getElementById("tree_selection").value;
    
    if (selected_tree == "Tree1"){
        disp_Tree(Tree1);
    }
});

document.getElementById('del_button').addEventListener("click", function(){
    
    delete_tree();
});
