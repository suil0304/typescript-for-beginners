type Words = {
    [key:string]:string
};

class Dict {
    private words:Words;

    constructor() {
        this.words = {};
    }

    add(word:Word):void {
        if(this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }

    getWord(term:string):string | undefined {
        return this.words[term];
    }
}

class Word {
    constructor(
        public term:string,
        public def:string
    ) {}
}