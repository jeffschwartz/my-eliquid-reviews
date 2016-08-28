import {Field, reduxForm} from "redux-form";
import {browserHistory} from "react-router";
import Container from "../container/container";
import FormGroup from "react-bootstrap/lib/FormGroup";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import FormControl from "react-bootstrap/lib/FormControl";
import HelpBlock from "react-bootstrap/lib/HelpBlock";

const cancelHandler = () => browserHistory.push("/");

const renderField = field => (
    <FormGroup controlId={field.name}>
        <ControlLabel>{field.label}</ControlLabel>
        <FormControl
            {...field.input}
            type={field.type}
            placeholder={field.placeholder}
            autoFocus={field.autofocus} />
        <HelpBlock
            className="invalid-value">
            {field.meta.touched && field.meta.error ? field.meta.error : ""}
        </HelpBlock>
    </FormGroup>
);

const EliquidAddForm = ({handleSubmit, pristine, submitting, invalid}) => {
    return (
        <div className="page-container">
            <Container>
                <h1 className="page-title">Add A New Eliquid</h1>
            </Container>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Field
                        type="text"
                        name="name"
                        label="Name"
                        className="input-container__input"
                        component={renderField}
                        placeholder="enter name"
                        autoFocus="true"
                        />

                    <Field
                        type="text"
                        name="company"
                        label="Company"
                        className="input-container__input"
                        component={renderField}
                        placeholder="enter company"
                        />

                    <Field
                        type="text"
                        name="category"
                        label="Category"
                        className="input-container__input"
                        component={renderField}
                        placeholder="enter category"
                        />

                    <Field
                        type="text"
                        name="rating"
                        label="Rating"
                        className="input-container__input"
                        component={renderField}
                        placeholder="enter rating"
                        />

                    <Field
                        type="text"
                        name="vgpg"
                        label="Vg/Pg (%)"
                        className="input-container__input"
                        component={renderField}
                        placeholder="enter vg/pg"
                        />

                    <Field
                        type="text"
                        name="nic"
                        label="Nic (mg)"
                        className="input-container__input"
                        component={renderField}
                        placeholder="enter nic"
                        />

                    <Field
                        type="textarea"
                        name="review"
                        label="Review"
                        className="label-container"
                        component={renderField}
                        />
                    <div className="form-item-container">
                        <div className="button-container">
                            <button type="submit" disabled={pristine || submitting || invalid}>Submit</button>
                            <button type="button" onClick={cancelHandler}>Cancel</button>
                        </div>
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default reduxForm({
    form: "newEliquid"
})(EliquidAddForm);
