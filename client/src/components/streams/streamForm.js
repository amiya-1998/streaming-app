import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
// Field is a react component and hence is capitalised.
// reduxForm acts just like connect
// Redux form is about automating the process. It doesn't care what you show. It is upto the developer to create the required form.

class StreamForm extends Component {
  renderInput({ input, label, meta }) {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input type="text" {...input} autoComplete="off" />
        <div className="ui error message">
          {meta.touched ? meta.error : null}
        </div>
      </div>
    );
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div>
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            label="Enter Title"
            name="title"
            component={this.renderInput}
          />
          <Field
            label="Enter Description"
            name="description"
            component={this.renderInput}
          />
          <button type="submit" className="ui button primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must Enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors; // if errors is empty object then only the form gets submitted
};

export default reduxForm({
  form: "streamForm",
  validate
})(StreamForm);
