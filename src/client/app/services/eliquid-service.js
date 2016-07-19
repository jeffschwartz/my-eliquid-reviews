class EliquidService {
    constructor () {
        this.eliquids = [
            {name: "a", company: "lkdfask", category: "1", rating: "5", vgpg: "65/35", nic: ".3"},
            {name: "b", company: "lkdfask", category: "2", rating: "5", vgpg: "65/35", nic: ".3"},
            {name: "c", company: "lkdfask", category: "3", rating: "5", vgpg: "65/35", nic: ".3"},
            {name: "d", company: "lkdfask", category: "4", rating: "5", vgpg: "65/35", nic: ".3"},
            {name: "e", company: "lkdfask", category: "5", rating: "5", vgpg: "65/35", nic: ".3"},
            {name: "f", company: "lkdfask", category: "6", rating: "5", vgpg: "65/35", nic: ".3"},
            {name: "g", company: "lkdfask", category: "7", rating: "5", vgpg: "65/35", nic: ".3"},
            {name: "h", company: "lkdfask", category: "8", rating: "5", vgpg: "65/35", nic: ".3"},
            {name: "i", company: "lkdfask", category: "9", rating: "5", vgpg: "65/35", nic: ".3"},
            {name: "j", company: "lkdfask", category: "10", rating: "5", vgpg: "65/35", nic: ".3"},
            {name: "k", company: "lkdfask", category: "11", rating: "5", vgpg: "65/35", nic: ".3"},
            {name: "l", company: "lkdfask", category: "12", rating: "5", vgpg: "65/35", nic: ".3"}
        ];
    }
    getAll () {
        return new Promise((resolve, reject) => {
            resolve(this.eliquids);
        });
    }
}

let eliquidService = new EliquidService();
export default eliquidService;

