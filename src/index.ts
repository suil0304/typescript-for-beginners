import crypto from "crypto";

interface BlockShape {
    hash:string;
    prevHash:string;
    height:number;
    data:string;
}

class Block implements BlockShape {
    public hash:string;

    constructor(
        public prevHash:string,
        public height:number,
        public data:string
    ) {
        this.hash = Block.calcHash(prevHash, height, data);
    }

    static calcHash(prevHash:string, height:number, data:string):string {
        const toHash = `${prevHash}${height}${data}`;
        return crypto.createHash("sha256")
            .update(toHash)
            .digest("hex");
    }
}

class BlockChain {
    private blocks:Block[];

    constructor() {
        this.blocks = [];
    }

    private getPrevHash():string {
        const block = this.blocks[Math.max(this.blocks.length - 1, 0)];
        return block ? block.hash : "";
    }

    public addBlock(data:string):void {
        const block = new Block(this.getPrevHash(), this.blocks.length + 1, data);
        this.blocks.push(block);
    }

    public printBlocks():void {
        console.log(this.blocks);
    }
}

const blockChain = new BlockChain();

blockChain.addBlock("aa");
blockChain.addBlock("bb");
blockChain.addBlock("cc");

blockChain.printBlocks();