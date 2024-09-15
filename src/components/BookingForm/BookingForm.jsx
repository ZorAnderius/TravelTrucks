import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { InputTextarea } from "primereact/inputtextarea";
import { enUS } from "date-fns/locale";
import Button from "../Button/Button";
import styles from "./BookingForm.module.css";
import './BookingForm.css';

const locale = {
  ...enUS,
  localize: {
    ...enUS.localize,
    day: (n) => {
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return days[n];
    },
  },
};

const initialValues = {
  name: "",
  email: "",
  dataBooking: "",
  textarea: "",
};

const bookingSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(3, "Your name is too short")
    .max(50, "Your name is too long")
    .required("Name is required"),
  email: Yup.string()
    .trim()
    .email("Invalid email")
    .required("Email is required"),
  dataBooking: Yup.date().required("Date is required"),
});

const BookingForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const handleSubmit = (prop) => {
    console.log(prop);
  };

  return (
    <div className={styles.bookingForm}>
      <div className={styles.bookingTitle}>
        <h2 className={styles.title}>Book your campervan now</h2>
        <p className={styles.subtitle}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={bookingSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className={styles.form}>
            <Field
              type="text"
              name="name"
              className={styles.fieldInput}
              placeholder="Name*"
            />
            <Field
              type="email"
              name="email"
              className={styles.fieldInput}
              placeholder="Email*"
            />
            <Field name="dataBooking">
              {({ field }) => (
                <DatePicker
                  {...field}
                  selected={startDate}
                  minDate={new Date()}
                  locale={locale}
                  placeholderText="Booking date*"
                  onChange={(date) => {
                    setStartDate(date);
                    setFieldValue("dataBooking", date);
                  }}
                  className={styles.fieldInput}
                />
              )}
            </Field>
            <Field name="textarea" placeholder="Comment*">
              {({ field }) => (
                <InputTextarea
                  className={styles.comment}
                  placeholder="Comment"
                  autoResize={true}
                  rows={3}
                  value={field.value}
                  onChange={(e) => setFieldValue(field.name, e.target.value)}
                />
              )}
            </Field>
            <div className={styles.btnWrap}>
              <Button type="submit" styleProp="submitBtn">
                Send
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
