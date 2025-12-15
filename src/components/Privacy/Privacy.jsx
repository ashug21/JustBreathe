import React from "react";
import "./Privacy.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Privacy = () => {
  return (
    <div>
      <Navbar />

      <section className="legal-page21">
        <div className="legal-container21">
          <h1 className="legal-title21">Privacy Policy</h1>
          <p className="legal-updated21">Last updated: December 2025</p>

          <p className="legal-text21">
            JustBreathe values your privacy and is committed to protecting the
            personal information you share with us through our website and at
            our yoga studio locations. This Privacy Policy explains how we
            collect, use, and safeguard your information.
          </p>

          <h2 className="legal-heading21">Information We Collect</h2>
          <p className="legal-text21">
            We may collect personal information such as your name, email
            address, phone number, and booking details when you register,
            enquire, or book classes through our website or at either of our
            yoga centers.
          </p>

          <h2 className="legal-heading21">Information Collected at Studios</h2>
          <p className="legal-text21">
            When you visit our yoga studios, we may collect basic information
            required for membership registration, attendance tracking, and
            safety purposes. This may include health-related details voluntarily
            shared with instructors to ensure safe participation.
          </p>

          <h2 className="legal-heading21">How We Use Your Information</h2>
          <p className="legal-text21">
            Your information is used to manage class bookings, communicate
            schedules or changes, respond to enquiries, improve our services,
            and provide a better experience across our website and studio
            locations.
          </p>

          <h2 className="legal-heading21">Website Analytics & Cookies</h2>
          <p className="legal-text21">
            Our website may use cookies or analytics tools to understand visitor
            behavior, improve performance, and enhance user experience. This
            data is collected in an aggregated and non-identifiable manner.
          </p>

          <h2 className="legal-heading21">Data Protection & Security</h2>
          <p className="legal-text21">
            We implement reasonable administrative and technical safeguards to
            protect your personal data from unauthorized access, disclosure, or
            misuse. However, no online system or physical storage method is
            completely secure.
          </p>

          <h2 className="legal-heading21">Third-Party Sharing</h2>
          <p className="legal-text21">
            JustBreathe does not sell, rent, or trade your personal information.
            Data may be shared only with trusted service providers when required
            to operate our services or comply with legal obligations.
          </p>

          <h2 className="legal-heading21">Your Rights</h2>
          <p className="legal-text21">
            You have the right to request access, correction, or deletion of
            your personal information held by us. Requests can be made by
            contacting JustBreathe directly through our official communication
            channels.
          </p>

          <h2 className="legal-heading21">Policy Updates</h2>
          <p className="legal-text21">
            This Privacy Policy may be updated periodically to reflect changes
            in our practices or legal requirements. Continued use of our
            website or studio services constitutes acceptance of the updated
            policy.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
