function sortEliquids (eLiquidList, [sortOn, sortAscending]) {
    let eList = eLiquidList.slice(0);
    sortAscending = sortAscending === "a";
    console.log("sortEliquids", eList, sortOn, sortAscending);
    switch (sortOn) {
    case "name":
        eList.sort((a, b) => {
            if (a.name > b.name) {
                return sortAscending ? 1 : -1;
            }
            if (a.name < b.name) {
                return sortAscending ? -1 : 1;
            }
            if (parseFloat(a.rating) > parseFloat(b.rating)) {
                return sortAscending ? 1 : -1;
            }
            if (parseFloat(a.rating) < parseFloat(b.rating)) {
                return sortAscending ? -1 : 1;
            }
            if (a.category > b.category) {
                return sortAscending ? 1 : -1;
            }
            if (a.category > b.category) {
                return sortAscending ? -1 : 1;
            }
            if (a.company > b.company) {
                return sortAscending ? 1 : -1;
            }
            if (a.company > b.company) {
                return sortAscending ? -1 : 1;
            }
            if (a.vgpg > b.vgpg) {
                return sortAscending ? 1 : -1;
            }
            if (a.vgpg > b.vgpg) {
                return sortAscending ? -1 : 1;
            }
            if (parseFloat(a.nic) > parseFloat(b.nic)) {
                return sortAscending ? 1 : -1;
            }
            if (parseFloat(a.nic) > parseFloat(b.nic)) {
                return sortAscending ? -1 : 1;
            }
        });
        break;
    case "rating":
        eList.sort((a, b) => {
            if (parseFloat(a.rating) > parseFloat(b.rating)) {
                return sortAscending ? 1 : -1;
            }
            if (parseFloat(a.rating) < parseFloat(b.rating)) {
                return sortAscending ? -1 : 1;
            }
            if (a.name > b.name) {
                return sortAscending ? 1 : -1;
            }
            if (a.name < b.name) {
                return sortAscending ? -1 : 1;
            }
            if (a.category > b.category) {
                return sortAscending ? 1 : -1;
            }
            if (a.category > b.category) {
                return sortAscending ? -1 : 1;
            }
            if (a.company > b.company) {
                return sortAscending ? 1 : -1;
            }
            if (a.company > b.company) {
                return sortAscending ? -1 : 1;
            }
            if (a.vgpg > b.vgpg) {
                return sortAscending ? 1 : -1;
            }
            if (a.vgpg > b.vgpg) {
                return sortAscending ? -1 : 1;
            }
            if (parseFloat(a.nic) > parseFloat(b.nic)) {
                return sortAscending ? 1 : -1;
            }
            if (parseFloat(a.nic) > parseFloat(b.nic)) {
                return sortAscending ? -1 : 1;
            }
        });
        break;
    case "category":
        eList.sort((a, b) => {
            if (a.category > b.category) {
                return sortAscending ? 1 : -1;
            }
            if (a.category > b.category) {
                return sortAscending ? -1 : 1;
            }
            if (a.name > b.name) {
                return sortAscending ? 1 : -1;
            }
            if (a.name < b.name) {
                return sortAscending ? -1 : 1;
            }
            if (parseFloat(a.rating) > parseFloat(b.rating)) {
                return sortAscending ? 1 : -1;
            }
            if (parseFloat(a.rating) < parseFloat(b.rating)) {
                return sortAscending ? -1 : 1;
            }
            if (a.company > b.company) {
                return sortAscending ? 1 : -1;
            }
            if (a.company > b.company) {
                return sortAscending ? -1 : 1;
            }
            if (a.vgpg > b.vgpg) {
                return sortAscending ? 1 : -1;
            }
            if (a.vgpg > b.vgpg) {
                return sortAscending ? -1 : 1;
            }
            if (parseFloat(a.nic) > parseFloat(b.nic)) {
                return sortAscending ? 1 : -1;
            }
            if (parseFloat(a.nic) > parseFloat(b.nic)) {
                return sortAscending ? -1 : 1;
            }
        });
        break;
    }
    return eList;
}

export default sortEliquids;