import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Navigation = ({ setSection }) => (
  <div className="fixed top-0 left-0 right-0 h-20 bg-transparent z-50 font-inter">
    <div className="h-full px-4 md:px-8 flex items-center justify-between md:justify-start relative">
      <img
        src="https://raw.githubusercontent.com/RobertsLuke/YVTCWeb/refs/heads/main/public/images/YouVsTheChuTitleText.png"
        alt="You Vs The Chu"
        className="h-16 w-auto object-contain font-inter"
      />
      <div className="flex items-center gap-6 md:gap-12 ml-auto md:ml-24">
        <a
          href="#"
          onClick={() => setSection("home")}
          className="text-[#1A2B49] hover:text-[#1A2B49]/80 font-semibold text-sm"
        >
          Home
        </a>
        <a
          href="#"
          onClick={() => setSection("faq")}
          className="text-[#1A2B49] hover:text-[#1A2B49]/80 font-semibold text-sm"
        >
          FAQ
        </a>
        <a
          href="#"
          onClick={() => setSection("terms")}
          className="text-[#1A2B49] hover:text-[#1A2B49]/80 font-semibold text-sm"
        >
          T&C's
        </a>
      </div>
    </div>
  </div>
);

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://raw.githubusercontent.com/RobertsLuke/YVTCWeb/refs/heads/main/public/images/placeholder1.png",
    "https://raw.githubusercontent.com/RobertsLuke/YVTCWeb/refs/heads/main/public/images/placeholder2.png",
    "https://raw.githubusercontent.com/RobertsLuke/YVTCWeb/refs/heads/main/public/images/placeholder3.png",
    "https://raw.githubusercontent.com/RobertsLuke/YVTCWeb/refs/heads/main/public/images/placeholder4.png",
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="h-full flex items-center justify-center relative pt-20">
      <div className="flex items-center gap-8 relative">
        <div className="rounded-xl border-8 border-white shadow-lg overflow-hidden">
          <img
            src={images[currentIndex]}
            alt="Product"
            className="w-72 h-[36rem] object-cover"
          />
        </div>
        <button
          onClick={nextImage}
          className="absolute left-[calc(50%-1.5rem)] p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 z-10"
        >
          <ChevronRight size={20} />
        </button>
        <div className="relative">
          <div
            className="rounded-xl border-8 border-white shadow-lg overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, black 50%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, black 50%, transparent)",
            }}
          >
            <img
              src={images[(currentIndex + 1) % images.length]}
              alt="Product"
              className="w-72 h-[36rem] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeContent = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 50 }}
    transition={{ duration: 0.5 }}
    className="max-w-lg mx-auto px-6 flex flex-col justify-center min-h-screen pt-20 font-inter"
  >
    <h1 className="text-3xl md:text-[3.5rem] leading-tight font-medium text-[#1A2B49] mb-6">
      You vs The Chu
    </h1>
    <p className="text-lg text-gray-600 mb-8">
      Embark on an epic journey through knowledge-filled worlds, where you'll
      battle the mighty Chu using the power of your answers, mastering subjects
      one quiz at a time.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4">
      <a
        href="https://apps.apple.com"
        className="bg-black text-white py-3 px-8 rounded-lg hover:bg-gray-800 flex items-center justify-center gap-2"
      >
        <img
          src="https://raw.githubusercontent.com/RobertsLuke/YVTCWeb/refs/heads/main/public/images/apple-logo.png"
          alt="Apple logo"
          className="w-6 h-7 invert"
        />
        <div className="flex flex-col items-start">
          <span className="text-xs">Download on the</span>
          <span className="text-sm font-semibold">App Store</span>
        </div>
      </a>
      <a
        href="https://play.google.com"
        className="bg-black text-white py-3 px-8 rounded-lg hover:bg-gray-800 flex items-center justify-center gap-2"
      >
        <img
          src="https://raw.githubusercontent.com/RobertsLuke/YVTCWeb/refs/heads/main/public/images/google-play.png"
          alt="Google Play logo"
          className="w-8 h-8 invert"
        />
        <div className="flex flex-col items-start">
          <span className="text-xs">GET IT ON</span>
          <span className="text-sm font-semibold">Google Play</span>
        </div>
      </a>
    </div>
  </motion.div>
);

const FaqContent = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 50 }}
    transition={{ duration: 0.5 }}
    className="max-w-lg mx-auto px-6 flex flex-col min-h-screen pt-20  font-inter"
  >
    <h1 className="text-3xl md:text-4xl font-medium text-[#1A2B49] mb-6">
      FAQ
    </h1>
    <div className="text-lg text-gray-700 space-y-4">
      <p>
        <strong>Q: What is You vs The Chu?</strong>
      </p>
      <p>
        A: You vs The Chu is a knowledge-based adventure where you take quizzes
        and defeat opponents using your knowledge.
      </p>

      <p>
        <strong>Q: Where can I download the app?</strong>
      </p>
      <p>
        A: The app is available on both the{" "}
        <a href="https://apps.apple.com" className="text-blue-600">
          Apple App Store
        </a>{" "}
        and{" "}
        <a href="https://play.google.com" className="text-blue-600">
          Google Play Store
        </a>
        .
      </p>

      <p>
        <strong>Q: Is the game free to play?</strong>
      </p>
      <p>
        A: Yes, the game is free to play with optional in-app purchases
        available.
      </p>
    </div>
  </motion.div>
);

const TermsContent = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="max-w-lg mx-auto px-6 flex flex-col min-h-screen pt-20  font-inter"
    >
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl md:text-4xl font-medium text-[#1A2B49] text-center md:text-left">
          {showPrivacy ? "Privacy Policy" : "Terms and Conditions"}
        </h1>
        <button
          onClick={() => setShowPrivacy(!showPrivacy)}
          className="relative px-6 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-b from-[#40E0D0] to-[#20B2AA] shadow-lg hover:from-[#45E5D5] hover:to-[#25B7AF] transition-all duration-200 overflow-hidden"
          style={{
            boxShadow:
              "0 4px 15px -3px rgba(64, 224, 208, 0.4), inset 0 -2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          <span className="relative z-10">
            Show {showPrivacy ? "Terms" : "Privacy Policy"}
          </span>
        </button>
      </div>

      <div className="flex-1 relative">
        <div
          className="h-[60vh] overflow-y-auto pr-4 text-gray-700 space-y-6 scrollbar-thin scrollbar-track-transparent [&::-webkit-scrollbar-thumb]:bg-gradient-to-b [&::-webkit-scrollbar-thumb]:from-[#40E0D0] [&::-webkit-scrollbar-thumb]:to-[#20B2AA] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-4 [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:bg-clip-padding [&::-webkit-scrollbar]:w-3 hover:[&::-webkit-scrollbar-thumb]:from-[#45E5D5] hover:[&::-webkit-scrollbar-thumb]:to-[#25B7AF] [&::-webkit-scrollbar-thumb]:shadow-lg"
          style={{
            maskImage: "linear-gradient(to bottom, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 85%, transparent)",
          }}
        >
          {!showPrivacy ? (
            <>
              <section>
                <h2 className="text-xl font-semibold text-[#1A2B49] mb-3">
                  1. Agreement to Terms
                </h2>
                <p>
                  By downloading, installing, or using You vs The Chu ("the
                  App"), you agree to be bound by these Terms and Conditions. If
                  you disagree with any part of these terms, you must not use
                  the App.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#1A2B49] mb-3">
                  2. Age Restrictions
                </h2>
                <p>
                  You must be at least 13 years of age to use the App. If you
                  are under 18, you represent that you have your
                  parent/guardian's permission to use the App. Some regions may
                  have additional age restrictions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#1A2B49] mb-3">
                  3. Privacy Policy
                </h2>
                <p>
                  Your use of the App is also governed by our Privacy Policy,
                  which can be found within the App. The policy outlines how we
                  collect, use, and protect your information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#1A2B49] mb-3">
                  4. User Accounts
                </h2>
                <p>
                  You are responsible for maintaining the confidentiality of
                  your account credentials and for all activities under your
                  account. Notify us immediately of any unauthorized use of your
                  account.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#1A2B49] mb-3">
                  5. In-App Purchases
                </h2>
                <p>
                  The App offers in-app purchases. All purchases are final and
                  non-refundable, except where required by law. Refunds are
                  governed by the respective platform's (Apple App Store/Google
                  Play) refund policies.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#1A2B49] mb-3">
                  6. Intellectual Property
                </h2>
                <p>
                  All content in the App, including but not limited to text,
                  graphics, logos, and quiz content, is our property and is
                  protected by intellectual property laws. You may not copy,
                  modify, or distribute any content without written permission.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#1A2B49] mb-3">
                  7. Prohibited Activities
                </h2>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Use the App for any illegal purpose</li>
                  <li>
                    Attempt to gain unauthorized access to any part of the App
                  </li>
                  <li>Use any automated systems or bots</li>
                  <li>
                    Reverse engineer or attempt to extract the source code
                  </li>
                  <li>Manipulate or interfere with the App's scoring system</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#1A2B49] mb-3">
                  8. Termination
                </h2>
                <p>
                  We reserve the right to terminate or suspend your account
                  immediately, without prior notice, for any breach of these
                  Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#1A2B49] mb-3">
                  9. Disclaimer
                </h2>
                <p>
                  The App is provided "as is" without warranties of any kind. We
                  are not responsible for any damages resulting from your use of
                  the App.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#1A2B49] mb-3">
                  10. Changes to Terms
                </h2>
                <p>
                  We reserve the right to modify these terms at any time.
                  Continued use of the App after changes constitutes acceptance
                  of the new terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-[#1A2B49] mb-3">
                  11. Contact Information
                </h2>
                <p>
                  For any questions about these Terms, please contact us at:
                  support@youvsthechu.com
                </p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-xl font-semibold text-[#1A2B49] mb-3">
                  1. Introduction
                </h2>
                <p>
                  This Privacy Policy explains how You vs The Chu ("we," "our,"
                  or "us") collects, uses, and protects your information when
                  you use our mobile application. We are committed to ensuring
                  your privacy and protecting any information that we maintain.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#1A2B49] mb-3">
                  2. Information Collection
                </h2>
                <p>We collect and store the following types of information:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>
                    Learning Analytics: We collect data about your quiz answers
                    and learning progress to power our spaced repetition
                    algorithm and provide personalized content suggestions.
                  </li>
                  <li>
                    Authentication Information: If you choose to create an
                    account through Firebase Authentication, we store the email
                    address and name you provide during signup.
                  </li>
                  <li>
                    Device Information: Basic information about your device type
                    and operating system to ensure proper app functionality.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#1A2B49] mb-3">
                  3. Data Storage and Use
                </h2>
                <p>
                  Your information is stored and used in the following ways:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>
                    Local Storage: Your learning progress and analytics are
                    primarily stored locally on your device.
                  </li>
                  <li>
                    Cloud Backup: For users with accounts, we maintain a backup
                    of your learning data online to preserve your progress
                    across devices.
                  </li>
                  <li>
                    Firebase Authentication: Account credentials are securely
                    managed through Firebase Authentication services.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#1A2B49] mb-3">
                  4. How We Use Your Information
                </h2>
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>
                    Personalize your learning experience through our spaced
                    repetition algorithm
                  </li>
                  <li>Maintain and improve the app's functionality</li>
                  <li>Protect against fraud and abuse</li>
                  <li>Communicate important updates about the app</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#1A2B49] mb-3">
                  5. Data Protection
                </h2>
                <p>
                  We implement appropriate security measures to protect your
                  information against unauthorized access, alteration,
                  disclosure, or destruction. Your data is encrypted during
                  transmission and at rest.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#1A2B49] mb-3">
                  6. Your Rights
                </h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Access your personal data</li>
                  <li>Request deletion of your account and associated data</li>
                  <li>Export your learning progress data</li>
                  <li>Update your account information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#1A2B49] mb-3">
                  7. Children's Privacy
                </h2>
                <p>
                  We do not knowingly collect personal information from children
                  under 13. If you believe we have collected information from a
                  child under 13, please contact us immediately, and we will
                  take steps to remove such information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#1A2B49] mb-3">
                  8. Changes to Privacy Policy
                </h2>
                <p>
                  We may update this Privacy Policy periodically. We will notify
                  you of any material changes through the app or via email if
                  you have provided one.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-[#1A2B49] mb-3">
                  9. Contact Us
                </h2>
                <p>
                  If you have questions about this Privacy Policy or your
                  personal data, please contact us at: privacy@youvsthechu.com
                </p>
              </section>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const App = () => {
  const [section, setSection] = useState("home");

  return (
    <div className="relative min-h-screen  font-inter">
      <div
        className="fixed inset-0 bg-gradient-to-b from-[#6EC2EE] to-white"
        style={{ zIndex: -1 }}
      />
      <Navigation setSection={setSection} />
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          {section === "home" && <HomeContent />}
          {section === "faq" && <FaqContent />}
          {section === "terms" && <TermsContent />}
        </div>
        <div className="w-full md:w-1/2 h-[80vh] md:h-screen">
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
};

export default App;
