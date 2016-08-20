import axios from "axios";
import store from "../redux/store";

class EliquidService {
    get () {
        return axios.get("/api/v1/ejuice")
        .then(result => result);
    }
    getById (id) {
        var state = store.getState();
        return new Promise((resolve, reject) => {
            console.log("state.eLiquidsState.eLiquids", state.eLiquidsState.eLiquids);
            let result = state.eLiquidsState.eLiquids.filter(eliquid => eliquid._id === id);
            resolve(result[0]);
        });
    }
    add (eliquid) {
        return axios.post("/api/v1/ejuice", eliquid)
        .then(result => result);
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
            if (this.eliquids[i].id === id) {
                this.eliquids.splice(i, 1);
                break;
            }
        }
    }
}

let eliquidService = new EliquidService();
export default eliquidService;
