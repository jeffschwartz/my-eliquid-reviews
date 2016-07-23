class EliquidService {
    constructor () {
        this.eliquids = [
            {name: "a", company: "lkdfask", category: "1", rating: "5", vgpg: "65/35", nic: ".3", reviews: []},
            {name: "b", company: "lkdfask", category: "2", rating: "5", vgpg: "65/35", nic: ".3", reviews: []},
            {name: "c", company: "lkdfask", category: "3", rating: "5", vgpg: "65/35", nic: ".3", reviews: []},
            {name: "d", company: "lkdfask", category: "4", rating: "5", vgpg: "65/35", nic: ".3", reviews: []},
            {name: "e", company: "lkdfask", category: "5", rating: "5", vgpg: "65/35", nic: ".3", reviews: []},
            {name: "f", company: "lkdfask", category: "6", rating: "5", vgpg: "65/35", nic: ".3", reviews: []},
            {name: "g", company: "lkdfask", category: "7", rating: "5", vgpg: "65/35", nic: ".3", reviews: []},
            {name: "h", company: "lkdfask", category: "8", rating: "5", vgpg: "65/35", nic: ".3", reviews: []},
            {name: "i", company: "lkdfask", category: "9", rating: "5", vgpg: "65/35", nic: ".3", reviews: []},
            {name: "j", company: "lkdfask", category: "10", rating: "5", vgpg: "65/35", nic: ".3", reviews: []},
            {name: "k", company: "lkdfask", category: "11", rating: "5", vgpg: "65/35", nic: ".3", reviews: []},
            {name: "l", company: "lkdfask", category: "12", rating: "5", vgpg: "65/35", nic: ".3", reviews: []}
        ];
        // generate ids
        for (let i = 0; i < this.eliquids.length; i++) {
            this.eliquids[i].id = i;
        }
    }
    get () {
        return new Promise((resolve, reject) => {
            resolve(this.eliquids);
        });
    }
    getById (id) {
        return new Promise((resolve, reject) => {
            let result = this.eliquids.filter(eliquid => eliquid.id === id);
            console.log("getById returning", result[0]);
            resolve(result[0]);
        });
    }
    add (eliquid) {
        return new Promise((resolve, reject) => {
            eliquid.id = this.eliquids.length;
            this.eliquids.push(eliquid);
            resolve(this.eliquids);
        });
    }
    update (eliquid) {
        for (let i = 0; i < this.eliquids.length; i++) {
            if (this.eliquids[i].id === eliquid.id) {
                this.eliquids[i] = eliquid;
                break;
            }
        }
    }
    delete (id) {
        for (let i = 0; i < this.eliquids.length; i++) {
            if (this.eliquids[i].id === eliquid.id) {
                this.eliquids.splice(i, 1);
                break;
            }
        }
    }
}

let eliquidService = new EliquidService();
export default eliquidService;

