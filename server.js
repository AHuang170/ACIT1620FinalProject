const express = require("express");
const app = express();
const port = 3000;
var cors = require('cors');

var gs_Iron_Sword_Path = [
    [{type: 'node', name:'Iron Sword', rarity: 1, attack: 288, ele_type: "No Element", ele_val: "", num_slot : "---", affinity: "0%", flavour:"A weapon that even novice hunters can use. Charge up for a more powerful slash.", upgrade:[], craft:["750z", "Iron Ore", 3], shop: "1500z", sharp:"Img/Weap/gs/Iron_Sword/base_sharp.png", p_sharp:"Img/Weap/gs/Iron_Sword/plus_sharp.png", pic:'Img/Weap/gs/Iron_Sword/render.png', parent:[], playstyle: "Blademaster", extra: ""}],
    [{type: 'connector', pic: "Img/connector_5.png"}],
    [{type: 'node', name: 'Iron Sword+', rarity: 1, attack: 336, ele_type: "No Element", ele_val: "", num_slot: "---", affinity: "0%", flavour: "A weapon that even novice hunters can use. Charge up for a more powerful slash.", upgrade: ["650z", "Iron Ore", 5], craft: [], shop: "N/A", sharp: "Img/Weap/gs/Iron_Sword+/base_sharp.png", p_sharp: "Img/Weap/gs/Iron_Sword+/plus_sharp.png", pic: "Img/Weap/gs/Iron_Sword+/render.png", parent: ["Iron Sword", 0, 0], playstyle: "Blademaster", extra: ""}],
    [{type: "connector", pic: "Img/connector_2.png"}, {type: "connector", pic: "Img/connector_3.png"}, {type: "connector", pic: "Img/connector_3.png"}, {type: "connector", pic: "Img/connector_3.png"}, {type: "connector", pic: "Img/connector_3.png"}, {type: "connector", pic: "Img/connector_4.png"}],
    [{type: 'node', name: 'Buster Sword', rarity: 1, attack: 384, ele_type: "No Element", ele_val: "", num_slot: "---", affinity: "0%", flavour: "A strong blade made from high-purity iron. A popular choice among hunters.", upgrade: ["850z", "Machalite Ore", 2, "Iron Ore", 8], craft: [], shop: "N/A", sharp:"Img/Weap/gs/Buster_Sword/base_sharp.png", p_sharp: "Img/Weap/gs/Buster_Sword/plus_sharp.png", pic: "Img/Weap/gs/Buster_Sword/render.png", parent: ["Iron Sword+", 0, 2], playstyle: "Blademaster", extra: ""}, {type: "blank"}, {type: "blank"}, {type: "blank"}, {type: "blank"}, 
    {type: "node", name: "Rugged Great Sword", rarity: 1, attack: 480, ele_type: "No Element", ele_val: "", num_slot: "---", affinity: "0%", flavour: "A blade made of the Jaggi's colorful hide. Standard gear for hunters in some regions.", upgrade: ["1400z", "G. Jaggi Claw", 4, "Jaggi Hide", 8, "Machalite Ore", 3], craft: ["2100z", "G. Jaggi Claw", 6, "G. Jaggi Hide", 3, "Machalite Ore", 6], shop: "N/A", sharp: "Img/Weap/gs/Rugged_Great_Sword/base_sharp.png", p_sharp: "Img/Weap/gs/Rugged_Great_Sword/plus_sharp.png", pic: "Img/Weap/gs/Rugged_Great_Sword/render.png", parent: ["Iron Sword+", 0, 2], playstyle: "Blademaster", extra: ""}],
    [{type: "connector", pic: "Img/connector_2.png"}, {type: "connector", pic: "Img/connector_3.png"}, {type: "connector", pic: "Img/connector_3.png"}, {type: "connector", pic: "Img/connector_4.png"}, {type: "blank"}, {type: "connector", pic: "Img/connector_2.png"}, {type: "connector", pic: "Img/connector_3.png"}, {type: "connector", pic: "Img/connector_3.png"}, {type: "connector", pic: "Img/connector_3.png"}, {type: "connector", pic: "Img/connector_4.png"}],
    [{type: 'node', name: 'Buster Sword+', rarity: 2, attack: 480, ele_type: 'No Element', ele_val: '', num_slot: '---', affinity: '0%', flavour: 'A strong blade made from high-purity iron. A popular choice among hunters.', upgrade: ["1400z", "Machalite Ore", 5, "Earth Crystal", 2, "Iron Ore", 5], craft: [], shop: 'N/A', sharp: 'Img/Weap/gs/Buster_Sword+/base_sharp.png', p_sharp: 'Img/Weap/gs/Buster_Sword+/plus_sharp.png', pic: 'Img/Weap/gs/Buster_Sword+/render.png', parent: ["Buster Sword", 0, 4], playstyle: 'Blademaster', extra: ''}, {type: 'blank'}, {type: 'blank'},
    {type: 'node', name: 'Santoku Reaver', rarity: 2, attack: 624, ele_type: 'No Element', ele_val: '', num_slot: '---', affinity: '-10%', flavour: 'A blade made of sharpened Tetsucabra shell. The whorls on the blade affect value.', upgrade: ["2150z", "Tetsucabra Claw", 2, "Tetsucabra Shell", 2, "Machalite Ore", 2], craft: ["3225z", "Tetsucabra Claw", 3, "Tetsucabra Shell", 3, "Tetsucabra Tusks", 2, "Machalite Ore", 5], shop: 'N/A', sharp: 'Img/Weap/gs/Santoku_Reaver/base_sharp.png', p_sharp: 'Img/Weap/gs/Santoku_Reaver/plus_sharp.png', pic: 'Img/Weap/gs/Santoku_Reaver/render.png', parent: ["Buster Sword", 0, 4], playstyle: 'Blademaster', extra: ''}, {type: 'blank'},
    {type: 'node', name: "Chieftain's Great Sword", rarity: 2, attack: 528, ele_type: 'No Element', ele_val: '', num_slot: '---', affinity: '0%', flavour: "A blade made of the Jaggi's colorful hide. Standard gear for hunters in some regions.", upgrade: ["1400z", "King's Frill", 4, "G. Jaggi Hide", 5, "Kecha Pelt", 5], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Chieftain's_Great_Sword/base_sharp.png", p_sharp: "Img/Weap/gs/Chieftain's_Great_Sword/plus_sharp.png", pic: "Img/Weap/gs/Chieftain's_Great_Sword/render.png", parent: ["Rugged Great Sword", 5, 4], playstyle: 'Blademaster', extra: ''}, {type: 'blank'}, {type: 'blank'}, {type: 'blank'},
    {type: 'node', name: "Ludroth Bone Sword", rarity: 2, attack: 480, ele_type: 'Water', ele_val: '230', num_slot: '---', affinity: '0%', flavour: "A blade reinforced with Ludroth parts. A good base level for further upgrading", upgrade: ["1750z", "Spongy Hide", 1, "Monster Fluid", 2, "Monster Bone S", 3], craft: ["2625z", "Royal Ludroth Claw", 2, "Spongy Hide", 2, "Monster Fluid", 2, "Monster Bone M", 2], shop: 'N/A', sharp: "Img/Weap/gs/Ludroth_Bone_Sword/base_sharp.png", p_sharp: "Img/Weap/gs/Ludroth_Bone_Sword/plus_sharp.png", pic: "Img/Weap/gs/Ludroth_Bone_Sword/render.png", parent: ["Rugged Great Sword", 5, 4], playstyle: 'Blademaster', extra: ''}],
    [{type: 'connector', pic: 'Img/connector_2.png'}, {type: 'connector', pic: 'Img/connector_3.png'}, {type: 'connector', pic: 'Img/connector_4.png'}, {type: 'connector', pic: 'Img/connector_2.png'}, {type: 'connector', pic: 'Img/connector_4.png'}, {type: 'connector', pic: 'Img/connector_2.png'}, {type: 'connector', pic: 'Img/connector_4.png'}, {type: 'blank'}, {type: 'blank'}, {type: 'connector', pic: 'Img/connector_5.png'}],
    [{type: 'node', name: "Ravager Blade", rarity: 2, attack: 528, ele_type: 'No Element', ele_val: '', num_slot: '---', affinity: '0%', flavour: "A fearsome steel sword with giant, talon-like spikes that protrudes from its blade.", upgrade: ["1750z", "Dragonite Ore", 3, "Machalite Ore", 5, "Earth Crystal", 2, "Iron Ore", 5], craft: [], shop: '5250z', sharp: "Img/Weap/gs/Ravager_Blade/base_sharp.png", p_sharp: "Img/Weap/gs/Ravager_Blade/plus_sharp.png", pic: "Img/Weap/gs/Ravager_Blade/render.png", parent: ["Buster Sword+", 0, 6], playstyle: 'Blademaster', extra: 'Defense +10'}, {type: 'blank'}, 
    {type: 'node', name: "Khezu Shock Sword", rarity: 2, attack: 528, ele_type: 'Thunder', ele_val: '250', num_slot: '---', affinity: '0%', flavour: "A sword clad in elemental material, which electrifies the blade.", upgrade: ["4250z", "Flabby Hide", 3, "Electro Sac", 2, "Iron Ore", 15], craft: ["6375z", "Flabby Hide", 5, "Electro Sac", 4, "Iron Ore", 15, "Thunderbug", 10], shop: 'N/A', sharp: "Img/Weap/gs/Khezu_Shock_Sword/base_sharp.png", p_sharp: "Img/Weap/gs/Khezu_Shock_Sword/plus_sharp.png", pic: "Img/Weap/gs/Khezu_Shock_Sword/render.png", parent: ["Buster Sword+", 0, 6], playstyle: 'Blademaster', extra: ''}, {type: 'node', name: "Funayuki Reaver", rarity: 3, attack: 720, ele_type: 'No Element', ele_val: '', num_slot: '---', affinity: '-10%', flavour: "A blade made of sharpened Tetsucabra shell. The whorls on the blade affect value.", upgrade: ["6350z", "Tetsucabra Claw", 5, "Dignified Skull", 2, "Paddock Oil", 2, "Firestone", 3], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Funayuki_Reaver/base_sharp.png", p_sharp: "Img/Weap/gs/Funayuki_Reaver/plus_sharp.png", pic: "Img/Weap/gs/Funayuki_Reaver/render.png", parent: ["Santoku Reaver", 3, 6], playstyle: 'Blademaster', extra: ''}, 
    {type: 'node', name: "Brazenwall", rarity: 3, attack: 768, ele_type: 'No Element', ele_val: '', num_slot: '---', affinity: '0%', flavour: "A shining gold blade. Its super-hard edge makes it versatile but hard to wield.", upgrade: ["7150z", "Uragaan Scute", 3, "Gravios Wing", 4, "Monster Bone+", 10], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Brazenwall/base_sharp.png", p_sharp: "Img/Weap/gs/Brazenwall/plus_sharp.png", pic: "Img/Weap/gs/Brazenwall/render.png", parent: ["Santoku Reaver", 3, 6], playstyle: 'Blademaster', extra: 'Defense +20'}, {type: 'node', name: "Schattenstolz", rarity: 3, attack: 576, ele_type: 'Dragon', ele_val: '150', num_slot: 'O--', affinity: '25%', flavour: "A jet black, evil blade made during the Magala eclipse. Inflicts deathly banishment.", upgrade: ["8000z", "Gore Magala Ripclaw", 2, "Gore Magala Shell", 4, "Gore Magala Wing", 2, "Defiled Scale", 3], craft: ["12000z", "Gore Magala Ripclaw", 3, "Gore Magala Shell", 5, "Gore Magala Wing", 3, "Gore Magala Plate", 1], shop: 'N/A', sharp: "Img/Weap/gs/Schattenstolz/base_sharp.png", p_sharp: "Img/Weap/gs/Schattenstolz/plus_sharp.png", pic: "Img/Weap/gs/Schattenstolz/render.png", parent: ["Chieftain's Great Sword", 5, 6], playstyle: 'Blademaster', extra: ''}, {type: 'node', name: "Usurper's Storm", rarity: 3, attack: 672, ele_type: 'Thunder', ele_val: '120', num_slot: 'O--', affinity: '0&', flavour: "A weapon of indelible strength and character. Its might cannot be overstated.", upgrade: ["8900z", "Zinogre Shell", 3, "Zinogre Horn", 2, "Zinogre Shocker", 3], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Usurper's_Storm/base_sharp.png", p_sharp: "Img/Weap/gs/Usurper's_Storm/plus_sharp.png", pic: "Img/Weap/gs/Usurper's_Storm/render.png", parent: ["Chieftain's Great Sword", 5, 6], playstyle: 'Blademaster', extra: ''}, {type: 'blank'}, {type: 'blank'},
    {type: 'node', name: "Ludroth Bone Sword+", rarity: 2, attack: 528, ele_type: 'Water', ele_val: '300', num_slot: '---', affinity: '0%', flavour: "A blade reinforced with Ludroth parts. A good base level for further upgrading.", upgrade: ["3100z", "Spongy Hide", 2, "Nerscylla Claw", 4, "Monster Bone M", 2, "Aqua Sac", 3], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Ludroth_Bone_Sword+/base_sharp.png", p_sharp: "Img/Weap/gs/Ludroth_Bone_Sword+/plus_sharp.png", pic: "Img/Weap/gs/Ludroth_Bone_Sword+/render.png", parent: ["Ludroth Bone Sword", 9, 6], playstyle: 'Blademaster', extra: ''}],
    [{type: 'connector', pic: 'Img/connector_5.png'}, {type: 'blank'}, {type: 'connector', pic: 'Img/connector_5.png'}, {type: 'connector', pic: 'Img/connector_5.png'}, {type: 'connector', pic: 'Img/connector_5.png'}, {type: 'connector', pic: 'Img/connector_5.png'}, {type: 'connector', pic: 'Img/connector_5.png'}, {type: 'blank'}, {type: 'blank'}, {type: 'connector', pic: 'Img/connector_5.png'}],
    [{type: 'node', name: "Ravager Blade+", rarity: 3, attack: 624, ele_type: 'No Element', ele_val: '', num_slot: 'O--', affinity: '0%', flavour: "A fearsome steel sword with giant, talon-like spikes that protrude from its blade.", upgrade: ["6350z", "Firestone", 2, "Dragonite Ore", 10, "Gossamite Ore", 2], craft: ["9525z", "Firestone", 3, "Dragonite Ore", 15, "Gossamite Ore", 3, "Machalite Ore", 10], shop: 'N/A', sharp: "Img/Weap/gs/Ravager_Blade+/base_sharp.png", p_sharp: "Img/Weap/gs/Ravager_Blade+/plus_sharp.png", pic: "Img/Weap/gs/Ravager_Blade+/render.png", parent: ["Ravager Blade", 0, 8], playstyle: 'Blademaster', extra: 'Defense +15'}, {type: 'blank'}, {type: 'node', name: "Khezu Shock Blade", rarity: 5, attack: 720, ele_type: 'Thunder', ele_val: '350', num_slot: 'O--', affinity: '0%', flavour: "A sword clad in elemental material, which electrifies the blade.", upgrade: ["30000z", "Pearl Hide", 8, "Thunder Sac", 2, "Rubbery Hide+", 5], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Khezu_Shock_Blade/base_sharp.png", p_sharp: "Img/Weap/gs/Khezu_Shock_Blade/plus_sharp.png", pic: "Img/Weap/gs/Khezu_Shock_Blade/render.png", parent: ["Khezu Shock Sword", 2, 8], playstyle: 'Blademaster', extra: ''}, {type: 'node', name: "Toad Bereaver", rarity: 4, attack: 864, ele_type: '(A)Water', ele_val: '200', num_slot: '---', affinity: '-20%', flavour: "Almost too strange-looking to be called a Great Sword. This weapon REALLY cooks.", upgrade: ["20000s", "Tetsucabra Claw+", 4, "Tetsucabra Carapace", 5, "Carbalite Ore", 4], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Toad_Bereaver/base_sharp.png", p_sharp: "Img/Weap/gs/Toad_Bereaver/plus_sharp.png", pic: "Img/Weap/gs/Toad_Bereaver/render.png", parent: ["Funayuki Reaver", 3, 8], playstyle: 'Blademaster', extra: ''}, {type: 'node', name: "Crimsonwall", rarity: 5, attack: 960, ele_type: '(A)Fire', ele_val: '150', num_slot: 'O--', affinity: '0%', flavour: "A shining gold blade. Its super-hard edge makes it versatile but hard to wield.", upgrade: ["30000z", "Uragaan Scute", 4, "Uragaan Marrow", 3, "Gravios Carapace", 8, "Fulcium Ore", 3], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Crimsonwall/base_sharp.png", p_sharp: "Img/Weap/gs/Crimsonwall/plus_sharp.png", pic: "Img/Weap/gs/Crimsonwall/render.png", parent: ["Brazenwall", 4, 8], playstyle: 'Blademaster', extra: 'Defense +25'}, {type: 'node', name: "Dusterstolz", rarity: 4, attack: 624, ele_type: 'Dragon', ele_val: '200', num_slot: 'O--', affinity: '35%', flavour: "A jet black, evil blade made during the Magala eclipse. Inflicts deathly banishment.", upgrade: ["12000z", "Gore Magala Scale", 5, "S. Magala Scale", 2, "S. Magala Shell", 4, "S. Magala Tail", 2], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Dusterstolz/base_sharp.png", p_sharp: "Img/Weap/gs/Dusterstolz/plus_sharp.png", pic: "Img/Weap/gs/Dusterstolz/render.png", parent: ["Shattenstolz", 5, 8], playstyle: 'Blademaster', extra: ''}, {type: 'node', name: "Despot's Blackstorm", rarity: 5, attack: 768, ele_type: 'Thunder', ele_val: '220', num_slot: 'O--', affinity: '0%', flavour: "A weapon of indelible strength and character. Its might cannot be overstated.", upgrade: ["30000z", "Zinogre Carapace", 5, "Zinogre Horn+", 2, "Zinogre Shocker+", 4, "Zinogre Plate", 1], craft: ["45000z", "Zinogre Carapace", 8, "Zinogre Horn+", 2, "Zinogre Jasper", 1], shop: 'N/A', sharp: "Img/Weap/gs/Despot's_Blackstorm/base_sharp.png", p_sharp: "Img/Weap/gs/Despot's_Blackstorm/plus_sharp.png", pic: "Img/Weap/gs/Despot's_Blackstorm/render.png", parent: ["Usurper's Storm", 6, 8], playstyle: 'Blademaster', extra: ''}, {type: 'blank'}, {type: 'blank'}, {type: 'node', name: "Cataclysm Sword", rarity: 4, attack: 720, ele_type: 'Water', ele_val: '340', num_slot: 'O--', affinity: '0%', flavour: "A blade of absorbent sponge. Its pressurized water can break through tough shells.", upgrade: ["20000z", "Royal Ludroth Claw", 4, "Torrent Sac", 2, "Kecha Ear+", 3], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Cataclysm_Sword/base_sharp.png", p_sharp: "Img/Weap/gs/Cataclysm_Sword/plus_sharp.png", pic: "Img/Weap/gs/Cataclysm_Sword/render.png", parent: ["Ludroth Bone Sword+", 9, 8], playstyle: 'Blademaster', extra: ''}], 
    [{type: 'connector', pic: 'Img/connector_2.png'}, {type: 'connector', pic: 'Img/connector_4.png'}, {type: 'connector', pic: 'Img/connector_5.png'}, {type: 'connector', pic: 'Img/connector_5.png'}, {type: 'connector', pic: 'Img/connector_5.png'}, {type: 'connector', pic: 'Img/connector_5.png'}, {type: 'connector', pic: 'Img/connector_2.png'}, {type: 'connector', pic: 'Img/connector_1.png'}, {type: 'connector', pic: 'Img/connector_4.png'}, {type: 'connector', pic: 'Img/connector_5.png'}],
    [{type: 'node', name: "Lacerator Blade", rarity: 4, attack: 720, ele_type: '(A)Fire', ele_val: '250', num_slot: 'OO-', affinity: '5%', flavour: "The pinnacle of the Ravager Blade family. Those who wield it will never know fear.", upgrade: ["20000z", "Carbalite Ore", 5, "Lightcrystal", 4, "Hercudrome", 3], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Lacerator_Blade/base_sharp.png", p_sharp: "Img/Weap/gs/Lacerator_Blade/plus_sharp.png", pic: "Img/Weap/gs/Lacerator_Blade/render.png", parent: ["Ravager Bade+", 0, 10], playstyle: 'Blademaster', extra: 'Defense +20'}, {type: 'node', name: "Chrome Razor", rarity: 4, attack: 720, ele_type: 'Poison', ele_val: '300', num_slot: 'O--', affinity: '15%', flavour: "A strong, razor-sharp edge (hence the name). This blade hides a secret poison.", upgrade: ["20000z", "G. Jaggi Claw+", 3, "Carbalite Ore", 2, "Toxin Sac", 3, "Bird Wyvern Gem", 1], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Chrome_Razor/base_sharp.png", p_sharp: "Img/Weap/gs/Chrome_Razor/plus_sharp.png", pic: "Img/Weap/gs/Chrome_Razor/render.png", parent: ["Ravager Blade+", 0, 10], playstyle: 'Blademaster', extra: ''}, {type: 'node', name: "Khezu Shock Full", rarity: 6, attack: 816, ele_type: 'Thunder', ele_val: '450', num_slot: 'O--', affinity: '0%', flavour: "A sword clad in elemental material, which electrifies the blade.", upgrade: ["60000z", "Pale Steak", 2, "Rajang Fang+", 2, "Yoldspar Ore", 5, "Fulgurbug", 6], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Khezu_Shock_Full/base_sharp.png", p_sharp: "Img/Weap/gs/Khezu_Shock_Full/plus_sharp.png", pic: "Img/Weap/gs/Khezu_Shock_Full/render.png", parent: ["Khezu Shock Blade", 2, 10], playstyle: 'Blademaster', extra: ''}, {type: 'node', name: "Millstone Bereaver", rarity: 5, attack: 912, ele_type: '(A)Water', ele_val: '270', num_slot: '---', affinity: '-20%', flavour: "Almost too strange-looking to be called a Great Sword. This weapon REALLY cooks.", upgrade: ["35000z", "Tetsucabra Claw+", 6, "Tetsucabra Tusks+", 4, "Paddock Oil+", 3, "Fucium Ore", 3], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Millstone_Bereaver/base_sharp.png", p_sharp: "Img/Weap/gs/Millstone_Bereaver/plus_sharp.png", pic: "Img/Weap/gs/Millstone_Bereaver/render.png", parent: ["Toad Bereaver", 3, 10], playstyle: 'Blademaster', extra: ''}, {type: 'node', name: "Cragscliff", rarity: 6, attack: 1008, ele_type: '(A)Fire', ele_val: '370', num_slot: 'OOO', affinity: '0%', flavour: "A fierce blade with rigid edges. Once swing can rend both heaven and earth.", upgrade: ["45000z", "Uragaan Scute", 5, "B. Gravios Carapace", 8, "Gravios Medulla", 1, "Firecell Stone", 3], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Cragscliff/base_sharp.png", p_sharp: "Img/Weap/gs/Cragscliff/plus_sharp.png", pic: "Img/Weap/gs/Cragscliff/render.png", parent: ["Crimsonwall", 4, 10], playstyle: 'Blademaster', extra: 'Defense +30'}, {type: 'node', name: "Verhangnisstolz", rarity: 5, attack: 672, ele_type: 'Dragon', ele_val: '220', num_slot: 'O--', affinity: '45%', flavour: "A jet black, evil blade made during the Magala eclipse. Inflicts deathly banishment.", upgrade: ["30000z", "Gore Magala Ripclaw+", 2, "Gore Magala Carapace", 4, "Gore Magala Wing+", 4, "Gore Magala Nyctgem", 1], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Verhangnisstolz/base_sharp.png", p_sharp: "Img/Weap/gs/Verhangnisstolz/plus_sharp.png", pic: "Img/Weap/gs/Verhangnisstolz/render.png", parent: ["Dusterstolz", 5, 10], playstyle: 'Blademaster', extra: ''}, {type: 'node', name: "Brimstone Drakepride", rarity: 6, attack: 816, ele_type: 'Dragon', ele_val: '440', num_slot: 'OO-', affinity: '0%', flavour: "A crimson blade with an ominous air. Its jagged blades slice foes to bits with black lightning.", upgrade: ["55000z", "S. Zinogre Carapace", 4, "Z. Zinogre Dragonhair", 5, "S. Zinogre Claw+", 3, "S.Zinogre Horn+", 2], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Brimstone_Drakepride/base_sharp.png", p_sharp: "Img/Weap/gs/Brimstone_Drakepride/plus_sharp.png", pic: "Img/Weap/gs/Brimstone_Drakepride/render.png", parent: ["Despot's Blackstorm", 6, 10], playstyle: 'Blademaster', extra: ''}, {type: 'node', name: "Demon Rod", rarity: 6, attack: 864, ele_type: 'Thunder', ele_val: '240', num_slot: 'OO-', affinity: '20%', flavour: "Wrapped in thunderous Rajang fur, this weapon can easily cleave anything it touches.", upgrade: ["70000z", "Rajang Fang+", 3, "Rajang Blackfur", 4, "Gold Rajang Pelt", 1, "Fucium Ore", 4], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Demon_Rod/base_sharp.png", p_sharp: "Img/Weap/gs/Demon_Rod/plus_sharp.png", pic: "Img/Weap/gs/Demon_Rod/render.png", parent: ["Despot's Blackstorm", 6, 10], playstyle: 'Blademaster', extra: ''}, {type: 'node', name: "Oppressor's Forger", rarity: 9, attack: 1104, ele_type: 'Thunder', ele_val: '400', num_slot: 'OO-', affinity: '0%', flavour: "A weapon of indelible strength and character. Its might cannot be overstated..", upgrade: ["90000z", "Zinogre Cortex", 3, "Zinogre Hardhorn", 2, "Zinogre D-Shocker", 3], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Oppressor's Forger/base_sharp.png", p_sharp: "Img/Weap/gs/Oppressor's Forger/plus_sharp.png", pic: "Img/Weap/gs/Oppressor's Forger/render.png", parent: ["Despot's Blackstorm", 6, 10], playstyle: 'Blademaster', extra: ''}, {type: 'node', name: "Cataclysm Blade", rarity: 5, attack: 816, ele_type: 'Water', ele_val: '480', num_slot: 'O--', affinity: '0%', flavour: "A blase of absorbent sponge. Its pressurized water can break through tough shells.", upgrade: ["35000z", "Spongy Hide", 5, "Zamtrios Fin+", 4, "Monster Keenbone", 5, "Paddock Oil+", 2], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Cataclysm_Blade/base_sharp.png", p_sharp: "Img/Weap/gs/Cataclysm_Blade/plus_sharp.png", pic: "Img/Weap/gs/Cataclysm_Blade/render.png", parent: ["Cataclysm Sword", 9, 10], playstyle: 'Blademaster', extra: ''}], 
    [{type: 'connector', pic: 'Img/connector_5.png'}, {type: 'connector', pic: 'Img/connector_5.png'}, {type: 'connector', pic: 'Img/connector_5.png'}, {type: 'connector', pic: 'Img/connector_5.png'}, {type: 'connector', pic: 'Img/connector_5.png'}, {type: 'connector', pic: 'Img/connector_5.png'}, {type: 'connector', pic: 'Img/connector_5.png'}, {type: 'connector', pic: 'Img/connector_5.png'}, {type: 'connector', pic: 'Img/connector_5.png'}, {type: 'connector', pic: 'Img/connector_5.png'}], 
    [{type: 'node', name: "Devastator Blade", rarity: 5, attack: 768, ele_type: '(A)Fire', ele_val: '380', num_slot: 'OOO', affinity: '5%', flavour: "The pinnacle of the Ravager Blade family. Those who wield it will never know fear.", upgrade: ["30000z", "P. Rathian Carapace", 2, "Tigrex Claw+", 5, "Carbalite Ore", 10], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Devastator_Blade/base_sharp.png", p_sharp: "Img/Weap/gs/Devastator_Blade/plus_sharp.png", pic: "Img/Weap/gs/Devastator_Blade/render.png", parent: ["Lacerator Blade", 0, 12], playstyle: 'Blademaster', extra: 'Defense +30'}, {type: 'node', name: "Chrome Quietus", rarity: 5, attack: 768, ele_type: 'Poison', ele_val: '370', num_slot: 'OO-', affinity: '20%', flavour: "A strong, razor shap edge (hence the name). This blade hides a secret poison.", upgrade: ["30000z", "Basarios Carapace", 4, "Fucium Ore", 3, "Wyvern Gem", 1], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Chrome_Quietus/base_sharp.png", p_sharp: "Img/Weap/gs/Chrome_Quietus/plus_sharp.png", pic: "Img/Weap/gs/Chrome_Quietus/render.png", parent: ["Chrome Razor", 1, 12], playstyle: 'Blademaster', extra: ''}, {type: 'node', name: "Blood Sword", rarity: 8, attack: 1008, ele_type: 'Thunder', ele_val: '550', num_slot: 'O--', affinity: '0%', flavour: "A Great Sword made of Red Khezu Materials. It runs with blood that continues to redden.", upgrade: ["85000z", "Alluring Glosshide", 4, "Lightning Sac", 3, "Rubbery Purple Hide+", 5], craft: ["127500z", "Alluring Fellwing", 6, "Pearl Glosshide", 8, "Khezu Special Cut", 2, "Lrg Wyvern Gem", 1], shop: 'N/A', sharp: "Img/Weap/gs/Blood_Sword/base_sharp.png", p_sharp: "Img/Weap/gs/Blood_Sword/plus_sharp.png", pic: "Img/Weap/gs/Blood_Sword/render.png", parent: ["Khezu Shock Full", 2, 10], playstyle: 'Blademaster', extra: ''}, {type: 'node', name: "Rampage Blade", rarity: 8, attack: 1248, ele_type: '(A)Blastblight', ele_val: '350', num_slot: 'O--', affinity: '-20%', flavour: "A Berzerk Tetsucabra Great Sword whose edge reflects hell's boiling inferno.", upgrade: ["60000z", "B. Tetsucabra Hardclaw", 4, "B. Tetsucabra Cortex", 5, "Eltatlie Ore", "4"], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Rampage_Blade/base_sharp.png", p_sharp: "Img/Weap/gs/Rampage_Blade/plus_sharp.png", pic: "Img/Weap/gs/Rampage_Blade/render.png", parent: ["Millstone Bereaver", 3, 12], playstyle: 'Blademaster', extra: ''}, {type: 'node', name: "Cragscliff+", rarity: 9, attack: 1392, ele_type: '(A)Fire', ele_val: '380', num_slot: 'OOO', affinity: '0%', flavour: "A fierce blade with rigid edges. One swing can rend both heaven and earth.", upgrade: ["95000z", "S. Uragaan Scute+", 4, "B. Gravios Cortex", 3, "Allfire Ore", 3], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Cragscliff+/base_sharp.png", p_sharp: "Img/Weap/gs/Cragscliff+/plus_sharp.png", pic: "Img/Weap/gs/Cragscliff+/render.png", parent: ["Cragscliff", 4, 10], playstyle: 'Blademaster', extra: 'Defense +40'}, {type: 'node', name: "L'Apotheose", rarity: 7, attack: 768, ele_type: 'Dragon', ele_val: '250', num_slot: 'O--', affinity: '65%', flavour: "A blade like a prism that transforms sunlight into a mesmerizing spell.", upgrade: ["60000z", "S. Magala Caress+", 2, "S. Magala Carapace", 4, "S. Magala Prismwing+", 2, "S. Magala Phosgem", 1], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/L'Aptheose/base_sharp.png", p_sharp: "Img/Weap/gs/L'Aptheose/plus_sharp.png", pic: "Img/Weap/gs/L'Aptheose/render.png", parent: ["Verhangnisstolz", 5, 12], playstyle: 'Blademaster', extra: ''}, {type: 'node', name: "Brimstone Drakepride+", rarity: 9, attack: 1152, ele_type: 'Dragon', ele_val: '490', num_slot: 'OO-', affinity: '0%', flavour: "A crimson blade with an ominous air. Its jagged blades slice foes to bits with black lightning.", upgrade:["95000z", "S. Zinogre Cortex", 3, "S. Zinogre Hardhorn", 2, "S. Zinogre Drakehold", 3], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Brimstone_Drakepride+/base_sharp.png", p_sharp: "Img/Weap/gs/Brimstone_Drakepride+/plus_sharp.png", pic: "Img/Weap/gs/Brimstone_Drakepride+/render.png", parent: ["Brimstone Drakepride", 6, 12], playstyle: 'Blademaster', extra: ''}, {type: 'node', name: "Great Demon Rod", rarity: 7, attack: 912, ele_type: 'Thunder', ele_val: '260', num_slot: 'OO-', affinity: '25%', flavour: "Wrapped in thunderous Rajang fur, this weapon can easily cleave anything it touches.", upgrade: ["85000z", "Ghoulish Gold Horn", 2, "Rajang Claw+", 5, "Rajang Ragehair", 4, "Rajang Nerve", 1], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Great_Demon_Rod/base_sharp.png", p_sharp: "Img/Weap/gs/Great_Demon_Rod/plus_sharp.png", pic: "Img/Weap/gs/Great_Demon_Rod/render.png", parent: ["Demon Rod", 7, 12], playstyle: 'Blademaster', extra: ''}, {type: 'node', name: "Orcus Tonitrus", rarity: 9, attack: 1248, ele_type: 'Thunder', ele_val: '500', num_slot: 'OOO', affinity: '0%', flavour: "A weapon of indelible strength and character. Its might cannot be overstated.", upgrade: ["120000z", "Zinogre Electrofur+", 6, "Zinogre Lash", 2, "Rajang Hardclaw", 3, "Zinogre Skymerald", 1], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Orcus_Tonitrus/base_sharp.png", p_sharp: "Img/Weap/gs/Orcus_Tonitrus/plus_sharp.png", pic: "Img/Weap/gs/Orcus_Tonitrus/render.png", parent: ["Oppressor's Forger", 8, 12], playstyle: 'Blademaster', extra: ''}, {type: 'node', name: "Cataclysm Blade+", rarity: 9, attack: 1200, ele_type: 'Water', ele_val: '600', num_slot: 'O--', affinity: '0%', flavour: "A blade of absorbent sponge. Its pressurized water can break through tough shells.", upgrade: ["100000z", "Spongy Hide", 2, "S. Queen Pectus+", 4, "S. Queen Maw", 2, "Monster Slogbone", 5], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Cataclysm_Blade+/base_sharp.png", p_sharp: "Img/Weap/gs/Cataclysm_Blade+/plus_sharp.png", pic: "Img/Weap/gs/Cataclysm_Blade+/render.png", parent: ["Cataclysm Blade", 9, 12], playstyle: 'Blademaster', extra: ''}], 
    [{type: 'connector', pic: 'Img/connector_5.png'}, {type: 'connector', pic: 'Img/connector_5.png'}, {type: 'connector', pic: 'Img/connector_5.png'}, {type: 'connector', pic: 'Img/connector_5.png'}, {type: 'connector', pic: 'Img/connector_5.png'}, {type: 'connector', pic: 'Img/connector_5.png'}, {type: 'connector', pic: 'Img/connector_5.png'}, {type: 'connector', pic: 'Img/connector_5.png'}], 
    [{type: 'node', name: "Exemplar Blade", rarity: 8, attack: 1104, ele_type: '(A)Fire', ele_val: '400', num_slot: 'OOO', affinity: '10%', flavour: "The pinnacle of the Ravager Blade family. Those who wield it will never know fear.", upgrade: ["60000z", "Eltatlite Ore", 5, "Novacrystal", 4, "Emperor Hopper", 3], craft: ["90000z", "Eltatlite Ore", 8, "Novacrystal", 5, "Emperor Hopper", 4, "Carbalite Ore", 15], shop: 'N/A', sharp: "Img/Weap/gs/Exemplar_Blade/base_sharp.png", p_sharp: "Img/Weap/gs/Exemplar_Blade/plus_sharp.png", pic: "Img/Weap/gs/Exemplar_Blade/render.png", parent: ["Devastator Blade", 0, 14], playstyle: 'Blademaster', extra: 'Defense +35'}, {type: 'node', name: "Chrome Hell", rarity: 8, attack: 1056, ele_type: 'Poison', ele_val: '420', num_slot: 'OO-', affinity: '20%', flavour: "A strong, razor-sharp edge (hence the name). This blade hides a secret poison.", upgrade: ["60000z", "Velocidrome Hardclaw", 3, "Eltalite Ore", 4, "Deadly Poison Sac", 3, "Fey Wyvern Gem", 1], craft: ["90000z", "Eltatlite Ore", 8, "Firecell St   one", 5, "Monster Essence", 10, "Fey Wyvern Gem", 1], shop: 'N/A', sharp: "Img/Weap/gs/Chrome_Hell/base_sharp.png", p_sharp: "Img/Weap/gs/Chrome_Hell/plus_sharp.png", pic: "Img/Weap/gs/Chrome_Hell/render.png", parent: ["Chrome Quietus", 1, 14], playstyle: 'Blademaster', extra: ''}, {type: 'node', name: "Blood Shock", rarity: 9, attack: 1200, ele_type: 'Thunder', ele_val: '630', num_slot: 'O--', affinity: '0%', flavour: "A Great Sword made from Red Khezu materials. It runs with blood that continues to redden.", upgrade: ["110000z", "Special Special Cut", 2, "B. Gravios Crown", 2, "Cosmicite Ore", 5], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Blood_Shock/base_sharp.png", p_sharp: "Img/Weap/gs/Blood_Shock/plus_sharp.png", pic: "Img/Weap/gs/Blood_Shock/render.png", parent: ["Blood Sword", 2, 14], playstyle: 'Blademaster', extra: ''}, {type: 'node', name: "Rampage Temperline", rarity: 9, attack: 1392, ele_type: '(A)Blastblight', ele_val: '420', num_slot: 'O--', affinity: '-20%', flavour: "A Berserk Tetsucabra Great Sword whose edge relfects hell's boilling inferno.", upgrade: ["100000z", "B. Tetsucabra Hardclaw", 6, "B. Tetsucabra Gnawrl", 4, "Paddock Cream", 3, "Allfire Stone", 3], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Rampage_Temperline/base_sharp.png", p_sharp: "Img/Weap/gs/Rampage_Temperline/plus_sharp.png", pic: "Img/Weap/gs/Rampage_Temperline/render.png", parent: ["Rampage Blade", 3, 14], playstyle: 'Blademaster', extra: ''}, {type: 'node', name: "Cliffsword Titanius", rarity: 9, attack: 1488, ele_type: '(A)Fire', ele_val: '390', num_slot: 'OOO', affinity: '0%', flavour: "A fierce blade with rigid edges. One swing can rend both heaven and earth.", upgrade: ["120000z", "S. Uragaan Scute+", 5, "B. Gravios Cortex", 8, "Flame Shard", 4, "Gravios Pallium", 1], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Cliffsword_Titanius/base_sharp.png", p_sharp: "Img/Weap/gs/Cliffsword_Titanius/plus_sharp.png", pic: "Img/Weap/gs/Cliffsword_Titanius/render.png", parent: ["Cragscliff+", 4, 14], playstyle: 'Blademaster', extra: 'Defense +50'}, {type: 'node', name: "L'Eclat", rarity: 9, attack: 1056, ele_type: 'Dragon', ele_val: '320', num_slot: 'O--', affinity: '65%', flavour: "A blade like a prism that transforms sunlight into a mesmerizing spell.", upgrade: ["90000z", "Gore Magala Shredder", 2, "Gore Magala Cortex", 4, "Gore Magala Eclipse", 2, "Gore Magala Mantle", 1], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/L'Eclat/base_sharp.png", p_sharp: "Img/Weap/gs/L'Eclat/plus_sharp.png", pic: "Img/Weap/gs/L'Eclat/render.png", parent: ["L'Apotheose", 5, 14], playstyle: 'Blademaster', extra: ''}, {type: 'node', name: "Stygian Acedia", rarity: 10, attack: 1296, ele_type: 'Dragon', ele_val: '550', num_slot: 'OOO', affinity: '0%', flavour: "A crimson blade with an ominous air. Its jagged blades slice foes to bits with black lightning.", upgrade: ["120000z", "S. Zinogre Dragonlocks", 6, "Zinogre Lash", 2, "Lrg ElderDragon Bone", 5, "S. Zinogre Skymerald", 1], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Stygian_Acedia/base_sharp.png", p_sharp: "Img/Weap/gs/Stygian_Acedia/plus_sharp.png", pic: "Img/Weap/gs/Stygian_Acedia/render.png", parent: ["Brimstone Drakepride+", 6, 14], playstyle: 'Blademaster', extra: ''}, {type: 'node', name: "Great Demon Hot Rod", rarity: 9, attack: 1296, ele_type: 'Thunder', ele_val: '300', num_slot: 'OO-', affinity: '30%', flavour: "Wrapped in thunderous Rajang fur, this weapon can easily cleave anything it touches.", upgrade: ["90000z", "Rajang Hardfang", 3, "Rajang Wildpelt", 4, "Gold Rajang Pelt+", 1, "Purecrystal", 1], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Great_Demon_Hot_Rod/base_sharp.png", p_sharp: "Img/Weap/gs/Great_Demon_Hot_Rod/plus_sharp.png", pic: "Img/Weap/gs/Great_Demon_Hot_Rod/render.png", parent: ["Great Demon Rod", 7, 14], playstyle: 'Blademaster', extra: ''}], 
    [{type: 'connector', pic: 'Img/connector_5.png'}, {type: 'connector', pic: 'Img/connector_5.png'}, {type: 'blank'}, {type: 'blank'}, {type: 'blank'}, {type: 'connector', pic: 'Img/connector_5.png'}, {type: 'blank'}, {type: 'connector', pic: 'Img/connector_5.png'}], 
    [{type: 'node', name: "Grandglory Blade", rarity: 9, attack: 1248, ele_type: '(A)Fire', ele_val: '430', num_slot: 'OOO', affinity: '10%', flavour: "The pinnacle of the Ravager Blade family. Those who wield it will never know fear.", upgrade: ["100000z", "P. Rathian Cortex", 2, "Tigrex Hardclaw", 5, "Eltatlite Ore", 10], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Grandglory_Blade/base_sharp.png", p_sharp: "Img/Weap/gs/Grandglory_Blade/plus_sharp.png", pic: "Img/Weap/gs/Grandglory_Blade/render.png", parent: ["Exemplar Blade", 0, 16], playstyle: 'Blademaster', extra: 'Defense +40'}, {type: 'node', name: "Chrome Heaven", rarity: 9, attack: 1152, ele_type: 'Poison', ele_val: '420', num_slot: 'OOO', affinity: '30%', flavour: "A strong, razor-sharp edge (hence the name). This blade hides a secret poison.", upgrade: ["100000z", "Basarios Cortex", 4, "Meldspar Ore", 2, "Lrg Wyvern Gem", 1], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Chrome_Heaven/base_sharp.png", p_sharp: "Img/Weap/gs/Chrome_Heaven/plus_sharp.png", pic: "Img/Weap/gs/Chrome_Heaven/render.png", parent: ["Chrome Hell", 1, 16], playstyle: 'Blademaster', extra: ''}, {type: 'blank'}, {type: 'blank'}, {type: 'blank'}, {type: 'node', name: "L'Origine", rarity: 10, attack: 1152, ele_type: 'Dragon', ele_val: '400', num_slot: 'O--', affinity: '65%', flavour: "A blade like a prism that transforms sunlight into a mesmerizing spell.", upgrade: ["130000z", "S. Magala Purifier", 2, "S. Magala Cortex", 4, "S. Magala Lightwing", 2, "S. Magala Mantle", 1], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/L'Origine/base_sharp.png", p_sharp: "Img/Weap/gs/L'Origine/plus_sharp.png", pic: "Img/Weap/gs/L'Origine/render.png", parent: ["L'Eclate", 5, 16], playstyle: 'Blademaster', extra: ''}, {type: 'blank'}, {type: 'node', name: "Demonlord Rod", rarity: 10, attack: 1344, ele_type: 'Thunder', ele_val: '350', num_slot: 'OO-', affinity: '30%', flavour: "A golden mass of Rajang menace. One swing summons thunderclouds that bring ruin to the area.", upgrade: ["120000z", "Ghoulish Golden Gorer", 2, "Rajang Hardclaw", 5, "Rajang Apoplexy", 4, "Rajang Heart", 1], craft: [], shop: 'N/A', sharp: "Img/Weap/gs/Demonlord_Rod/base_sharp.png", p_sharp: "Img/Weap/gs/Demonlord_Rod/plus_sharp.png", pic: "Img/Weap/gs/Demonlord_Rod/render.png", parent: ["Great Demon Hot Rod", 7, 16], playstyle: 'Blademaster', extra: ''}]
];

var gs_Amons_Sword_Path = [
    [{type: 'node', name: "Amon's Sword", rarity: 10, attack: 1296, ele_type: 'Fire', ele_val: '520', num_slot: '---', affinity: '20%', flavour: "A huge sword imbued with a supernatural power. Its burning flame metls evern metal and tears through everything.", upgrade: [], craft: ["100000z", "Balbadd Royal Sword", 3, "M. Tigrex Trigger", 4, "Allfire Stone", 2, "Tigrex Mantle", 1], shop: 'N/A', sharp: "Img/Weap/gs/Amons_Sword/base_sharp.png", p_sharp: "Img/Weap/gs/Amons_Sword/plus_sharp.png", pic: "Img/Weap/gs/Amons_Sword/render.png", parent: [], playstyle: 'Blademaster', extra: ''}]
];

//{type: 'node', name: "", rarity: , attack: , ele_type: '', ele_val: '', num_slot: '', affinity: '', flavour: "", upgrade: [], craft: [], shop: '', sharp: "", p_sharp: "", pic: "", parent: [], playstyle: '', extra: ''}
//{type: 'connector', pic: 'Img/connector_.png'}
//{type: 'blank'}

app.use(cors());

app.listen(3000, (err)=>{
   if(err) {
       console.log(err);
       return false;
   }
    
    console.log('SERVER IS RUNNING');
});

app.get("/", (req, resp)=>{
    resp.sendFile("/index.html", {root: __dirname});
});

app.get("/hi/:string", (req, resp)=>{
    var input_str = req.params.string;
    resp.end("Just saying hi!"+input_str);
});

app.get("/get_arr/:string", (req, resp)=>{
    var input_selection = req.params.string;
    var selected_arr = eval(input_selection);
    var return_string = JSON.stringify(selected_arr);
    //console.log(return_string);
    resp.end(return_string);
});

/*
EXAMPLE:
            var server = "http://localhost:3000";
            document.getElementById("hi_butt").addEventListener("click", function(){
                fetch(server+"/hi/"+"amazing").then((resp)=>{
                    return resp.text();
                }).then((text)=>{
                    alert(text);
                });
            });
 */

