import React from "react";
import { Formik } from "formik";
import { sendMessage } from "../services/functions";
import { Comment } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";

const MessageForm = ({ setMessages, setShowForm }) => {
  return (
    <section className="form">
      <Formik
        initialValues={{ Message: "" }}
        onSubmit={async (values, { setSubmitting }) => {
          const message = await sendMessage(values.Message);
          setSubmitting(true);
          await setMessages(message);
          setShowForm(false);
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
            {isSubmitting ? (
              <div width="100%" style={{ alignSelf: "center" }}>
                <Comment
                  className="loader"
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="comment-loading"
                  wrapperStyle={{}}
                  wrapperClass="comment-wrapper"
                  color="#fff"
                  backgroundColor="#000000"
                />
              </div>
            ) : (
              <>
                <h2>Create a Message</h2>
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
              </>
            )}
          </form>
        )}
      </Formik>
    </section>
  );
};

export default MessageForm;
