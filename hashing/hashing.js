"use strict";

var crypto = require("crypto"); //natuve library already exists in node

// The Power of a Smile
// by Tupac Shakur
var poem = [
	"The power of a gun can kill",
	"and the power of fire can burn",
	"the power of wind can chill",
	"and the power of a mind can learn",
	"the power of anger can rage",
	"inside until it tears u apart",
	"but the power of a smile",
	"especially yours can heal a frozen heart",
];

var Blockchain = { //created onject
	blocks: [],
};

// Genesis block
Blockchain.blocks.push({
	index: 0,
	hash: "000000",
	data: "",
	timestamp: Date.now(),
});

// TODO: insert each line into blockchain


//create for loop , then when we use line let poem goes through poem
for (let line of poem) {
	createBlock(line)

}
// console.log(`Blockchain is valid: ${verifyChain(Blockchain)}`);

//'index'
//'previous hash'
//'data' - poetry
//'time stamp' 
//'hash'

//create a function called createblock()
function createBlock(data) {
	let block = {
		index: Blockchain.blocks.length, //index
		prevHash: Blockchain.blocks[Blockchain.blocks.
			length - 1].hash,
		data: _data,
		timestamp: Date.now()
	}
	block.hash = blockHash(block)
	Blockchain.blocks.push(block)
	console.log(block)
	return block



}



// **********************************

function blockHash(bl) { //bl is short for block - refrence bl to access features in block
	return crypto.createHash("sha256").update(
		// TODO: use block data to calculate hash
		`${bl.index};${bl.prevHash};${bl.data};${bl.
			timestamp};`



	).digest("hex");
}

