import EliquidAddForm from "./eliquid-add-form";

const validateRating = value => {
    if (/^([1-5{1}]+(\.[0-9{1}])?|Infinity)$/.test(value)) {
        return Number(value);
    }
    return NaN;
};

const filterInt = value => {
    if (/^([0-9]+|Infinity)$/.test(value)) {
        return Number(value);
    }
    return NaN;
};

const validateVgPg = vgpg => {
    let a = vgpg.split("/");
    if (a.length !== 2) {
        return false;
    }
    if (isNaN(filterInt(a[0])) || isNaN(filterInt(a[1])) || parseInt(a[0]) + parseInt(a[1]) !== 100) {
        return false;
    }
    return true;
};

const validateNic = nic => {
    return !isNaN(parseFloat(nic));
};

const validate = values => {
    const errors = {};
    let required = "*required";
    let name = `${required}, enter the name of the juice`;
    let company = `${required}, enter the name of the company/manufacturer`;
    let category = `${required},  enter the category/flavor profile - e.g. fruit, cereal, desert, etc.`;
    let rating = `${required},  enter a number between 1 and 5 - e.g. 3, 4.5 etc.`;
    let vgpg = `${required}, enter a ratio of vg/pg and must = 100 - e.g. 65/35`;
    let nic = `${required}, enter a positive number 0 or greater`;

    console.log("validate called! values =", values);

    if (!values.name) {
        errors.name = name;
    }

    if (!values.company) {
        errors.company = company;
    }

    if (!values.category) {
        errors.category = category;
    }

    if (!values.rating || isNaN(validateRating(values.rating)) || parseFloat(values.rating) > 5) {
        errors.rating = rating;
    }

    if (!values.vgpg || !validateVgPg(values.vgpg)) {
        errors.vgpg = vgpg;
    }

    if (!values.nic || !validateNic(values.nic) || parseInt(values.nic) < 0) {
        errors.nic = nic;
    }

    return errors;
};
const EliquidAddContainer = () => {
    const handleSubmit = data => {
        alert("handleSubmit called, data = " + JSON.stringify(data));
    };
    return (
        <EliquidAddForm onSubmit={handleSubmit} validate={validate}/>
    );
};

export default EliquidAddContainer;
