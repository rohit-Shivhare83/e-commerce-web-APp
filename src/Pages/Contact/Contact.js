import React from "react";

const Contact = () => {
  return (
    <div className="conatainer-fluid">
      <h2 className="my-4 text-center">Feel Free TO Contact Us</h2>
      <iframe
        className="my-2"
        src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d15488.487353508553!2d72.82127754304722!3d18.963188147424564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x3be7d16b29564357%3A0xcc7f83bd268dd0f9!2sWRQM%2BXVM%20CST%20Railway%20Station%2C%20Dhobi%20Talao%2C%20Chhatrapati%20Shivaji%20Terminus%20Area%2C%20Fort%2C%20Mumbai%2C%20Maharashtra%20400001%2C%20India!3m2!1d18.940113099999998!2d72.8357207!4m3!3m2!1d18.9711013!2d72.8285441!5e0!3m2!1sen!2sin!4v1679932394623!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/*  */}

      <div className="container my-5  w-sm-100 w-lg-50">
        <h2 className="my-3">Contact Us</h2>
        <form action="https://formspree.io/f/xayzdgkk" method="POST">
          <div className="mb-3 ">
            <input
              name="Name"
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-3">
            <input
              name="Email"
              type="email"
              className="form-control"
              autoComplete="off"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              name="comment"
              className="form-control"
              rows="3"
              autoComplete="off"
              placeholder="Comment"
              required
            ></textarea>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary" value="Send">
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
