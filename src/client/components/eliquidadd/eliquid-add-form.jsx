import {Field, reduxForm} from "redux-form";
import {browserHistory} from "react-router";
import Container from "../container/container";
import FormGroup from "react-bootstrap/lib/FormGroup";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import FormControl from "react-bootstrap/lib/FormControl";
import HelpBlock from "react-bootstrap/lib/HelpBlock";
import Button from "react-bootstrap/lib/Button";
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";

const cancelHandler = () => browserHistory.push("/");

const renderInputField = ({name, label, input, type, placeholder, autoFocus, meta: {touched, error}}) => (
    <FormGroup controlId={name}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl
            {...input}
            type={type}
            placeholder={placeholder}
            autoFocus={autoFocus} />
        <HelpBlock
            className="invalid-value">
            {touched && error ? error : ""}
        </HelpBlock>
    </FormGroup>
);

const renderTextAreaField = ({componentClass, label, input, placeholder, rows}) => (
    <FormGroup controlId={name}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl
            {...input}
            componentClass={componentClass}
            placeholder={placeholder}
            rows={rows} />
        {/*
        <HelpBlock
            className="invalid-value">
            {field.meta.touched && field.meta.error ? field.meta.error : ""}
        </HelpBlock>
        */}
    </FormGroup>
);
const EliquidAddForm = ({handleSubmit, pristine, submitting, invalid}) => {
    return (
        <div className="page-container page-container--xtra-margin-bottom">
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
                        component={renderInputField}
                        placeholder="enter name"
                        autoFocus="true"
                        />

                    <Field
                        type="text"
                        name="company"
                        label="Company"
                        className="input-container__input"
                        component={renderInputField}
                        placeholder="enter company"
                        />

                    <Field
                        type="text"
                        name="category"
                        label="Category"
                        className="input-container__input"
                        component={renderInputField}
                        placeholder="enter category"
                        />

                    <Field
                        type="text"
                        name="rating"
                        label="Rating"
                        className="input-container__input"
                        component={renderInputField}
                        placeholder="enter rating"
                        />

                    <Field
                        type="text"
                        name="vgpg"
                        label="Vg/Pg (%)"
                        className="input-container__input"
                        component={renderInputField}
                        placeholder="enter vg/pg"
                        />

                    <Field
                        type="text"
                        name="nic"
                        label="Nic (mg)"
                        className="input-container__input"
                        component={renderInputField}
                        placeholder="enter nic"
                        />

                    <Field
                        componentClass="textarea"
                        name="review"
                        label="Review"
                        className="label-container"
                        component={renderTextAreaField}
                        rows="5"
                        placeholder="enter review"
                        />

                    <ButtonGroup>
                        <Button
                            type="submit"
                            bsStyle="primary"
                            disabled={pristine || submitting || invalid}
                            >Submit</Button>
                        <Button
                            type="button"
                            onClick={cancelHandler}
                            >Cancel</Button>
                    </ButtonGroup>
                </form>
            </Container>
        </div>
    );
};

export default reduxForm({
    form: "newEliquid"
})(EliquidAddForm);
