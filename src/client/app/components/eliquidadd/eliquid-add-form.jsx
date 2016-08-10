import {Field, reduxForm} from "redux-form";

const validate = values => {
    const errors = {};
    let required = "Required!";

    console.log("validate called! values =", values);

    if (!values.name) {
        errors.name = required;
    }
    if (!values.company) {
        errors.company = required;
    }
    if (!values.category) {
        errors.category = required;
    }
    if (!values.rating) {
        errors.rating = required;
    }
    if (!values.vgpg) {
        errors.vgpg = required;
    }
    if (!values.nic) {
        errors.nic = required;
    }

    return errors;
};

const renderField = field => (
    <div className="form-item-container">
        <div className="label-container">
            <label htmlFor={field.name}>{field.label}: </label>
        </div>
        <div className="input-container">
            <input {...field.input} type="text" />
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

                <Field name="vgpg" label="Vg/Pg" className="input-container__input" component={renderField} placeholder="enter vg/pg"/>

                <Field name="nic" label="Nic" className="input-container__input" component={renderField} placeholder="enter nic"/>

                <div className="form-item-container">
                    <div className="button-container">
                        <button type="submit" disabled={pristine || submitting || invalid}>Submit</button> <button type="button">Cancel</button>
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
