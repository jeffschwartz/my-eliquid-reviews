import {Field, reduxForm} from "redux-form";
import {browserHistory} from "react-router";

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

const cancelHandler = () => browserHistory.push("/");

const renderField = field => (
    <div className="form-item-container">
        <div className="label-container">
            <label htmlFor={field.name}>{field.label}: </label>
        </div>
        <div className="input-container">
            <input
                {...field.input}
                placeholder={field.placeholder}
                autoFocus={field.autoFocus}
                type="text"
            />
            {field.meta.touched && field.meta.error &&
            <span className="invalid-value">{field.meta.error}</span>}
        </div>
    </div>
);

const EliquidAddForm = ({handleSubmit, pristine, submitting, invalid}) => {
    console.log("handleSubmit", handleSubmit);
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-container">
                <h2>Add A New Eliquid</h2>

                <Field name="name" label="Name" className="input-container__input" component={renderField} placeholder="enter name" autoFocus="true" />

                <Field name="company" label="Company" className="input-container__input" component={renderField} placeholder="enter company"/>

                <Field name="category" label="Category" className="input-container__input" component={renderField} placeholder="enter category"/>

                <Field name="rating" label="Rating" className="input-container__input" component={renderField} placeholder="enter rating"/>

                <Field name="vgpg" label="Vg/Pg (%)" className="input-container__input" component={renderField} placeholder="enter vg/pg"/>

                <Field name="nic" label="Nic (mg)" className="input-container__input" component={renderField} placeholder="enter nic"/>

                <div className="form-item-container">
                    <div className="button-container">
                        <button type="submit" disabled={pristine || submitting || invalid}>Submit</button> <button type="button" onClick={cancelHandler}>Cancel</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default reduxForm({
    form: "newEliquid",
    validate
})(EliquidAddForm);
