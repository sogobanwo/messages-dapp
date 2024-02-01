import React from "react";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { sendMessage } from "../services/functions";

const MessageForm = ({setMessages}) => {

  return (
    <section className="form">
      <Formik
        initialValues={{ Message: "" }}
        onSubmit={async (values, { setSubmitting }) => {
          const message = await sendMessage(values.Message)
          setMessages(message)
          setSubmitting(true);
          toast.success("Message created")
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="Message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Message}
                placeholder="Set your Message"
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-block"
              >
                {isSubmitting ? "Creating Message" : "Create Message"}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default MessageForm;