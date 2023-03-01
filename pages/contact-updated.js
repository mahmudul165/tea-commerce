import HeroBanner from "@/components/common/Banner";
import { MyButton } from "@/components/common/Buttons";
import IconWithBackground from "@/components/common/IconWithBackground";
import RouteNavSlider from "@/components/common/RouteNavSlider";
import Banner from "@/components/home/banner/Banner";
import OurOffices from "@/components/home/our-offices/OurOffices";
import { Card, Form } from "react-bootstrap";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const OurLocationCard = () => {
  return (
    <>
      <Card className="card border rounded w-25 p-4  position-absolute top-50  mx-5 translate-middle-y d-sm-none d-md-block d-xs-none pb-5">
        <div className="d-grid my-4">
          <MyButton
            style={{ backgroundColor: "#59330E" }}
            type="button"
            size="lg"
            className="fw-bold text-white fs-5"
          >
            Our Locations{" "}
          </MyButton>
        </div>
        <h5 className="my-2">Located in Green Road</h5>
        <div className="mt-2">
          <p>
            Address: Corporate Office: Plot No. SW(I) 4, 25 Gulshan Avenue 1212,
            Bangladesh
          </p>
          <p>Tel: +88 02 9888211</p>
          <p>Fax: 88 02 9888158, 1 Bir Uttam Mir Shawkat Sarak, Dhaka 1208</p>
        </div>
      </Card>
    </>
  );
};

const ContactFrom = () => {
  return (
    <>
      <Form
        id="contact-form"
        name="contact-form p-2"
        action="mail.php"
        method="POST"
      >
        <h2 className="mb-2 fs-5 fw-bold cus-color-secondary">Contact From</h2>
        <Form.Group controlId="name" className="mb-3">
          <Form.Control type="text" name="name" placeholder="Name" />
        </Form.Group>

        <Form.Group controlId="email" className="mb-3">
          <Form.Control type="text" name="email" placeholder="Email" />
        </Form.Group>
        <Form.Group controlId="phone" className="mb-3">
          <Form.Control type="text" name="phone" placeholder="Phone" />
        </Form.Group>

        <Form.Group controlId="message" className="mb-3">
          <Form.Control
            className="p-4"
            as="textarea"
            rows={10}
            name="message"
            placeholder="Message"
          />
        </Form.Group>
        <MyButton
          type="submit"
          size="lg"
          className=" text-white px-5 cus-bg-primary"
        >
          SEND
        </MyButton>
      </Form>
    </>
  );
};
function contact() {
  return (
    <>
      {" "}
      {/* <RouteNavSlider router="Contact Us" /> */}
      <HeroBanner name="Contact Us" />
      <div className="  container my-5  ">
        <div className="rounded border position-relative">
          <OurLocationCard />
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=115%20Ahmedbag,%20Global%20Islami%20Bank%20Building,%20Budhho%20Mondir,%20Dhaka-1214%201214%20Dhaka,%20Dhaka%20Division,%20Bangladesh+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="450px"
            frameBorder="0"
            aria-hidden="false"
          ></iframe>
        </div>

        <div className="row my-4">
          <div className="col-md-4  cus-color-secondary">
            <Card className="card border rounded  p-5 mb-4 ">
              <div className="d-flex gap-5 align-items-center">
                <IconWithBackground>
                  <FaPhoneAlt size={25} className="" />
                </IconWithBackground>

                <div className="cus-color-secondary">
                  <h5 className="mb-2">Phone</h5>
                  <p className="cus-color-secondary">Tel: 000123-8657</p>
                  <p className="cus-color-secondary">Fax: 000123-8657</p>
                </div>
              </div>
            </Card>
            <Card className="card border rounded  p-5 mb-4">
              <div className="d-flex gap-4 align-items-center">
                <IconWithBackground>
                  <FaEnvelope size={25} className="" />
                </IconWithBackground>

                <div>
                  <h5 className="mb-2">Email</h5>
                  <p className="cus-color-secondary">mail@example.com</p>
                  <p className="cus-color-secondary">support@example.com</p>
                </div>
              </div>
            </Card>
            <Card className="card border rounded  p-5 ">
              <div className="d-flex gap-4 align-items-center">
                <IconWithBackground>
                  <FaMapMarkerAlt size={25} className="" />
                </IconWithBackground>

                <div>
                  <h5 className="mb-2">Address</h5>
                  <p className="cus-color-secondary">No: 34 A, Green Road</p>
                  <p className="cus-color-secondary">Dhaka, 6775</p>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-md-8">
            <ContactFrom />
          </div>
        </div>
      </div>
      <OurOffices />
    </>
  );
}

export default contact;
