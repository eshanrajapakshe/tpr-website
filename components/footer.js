class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
           <footer class="container">
      <div class="logo-section">
        <div class="img-col">
          <img src="./assets/images/logo.png" alt="" />
        </div>
        <div class="enrollment-advisor-col">
          <p class="topic">Enrollment Advisor</p>
          <p class="review-line">1-800-2REVIEW (800-273-8439) ext. 1FAQ</p>
          <p class="start-date-line">Mon-Fri 9am-10pm ET</p>
          <p class="end-date-line">Sat-Sun 9am-8pm ET</p>
        </div>
        <div class="student-support-col">
          <p class="topic">Student Support</p>
          <p class="review-line">1-800-2REVIEW (800-273-8439) ext. 2FAQ</p>
          <p class="start-date-line">Mon-Fri 9am-9pm ET</p>
          <p class="end-date-line">Sat-Sun 8:30am-5pm ET</p>
        </div>
        <div class="register-book-col">
          <p class="title">Register Book</p>

          <div class="input-field-wrapper">
            <img src="./assets/images/search-gray.svg" alt="">
            <input class="input" type="text" placeholder="Enter ISBN-13#" />
            <button>Register</button>
          </div>
        </div>
      </div>
      <div class="test-prep-section">
        <div class="test-prep-col">
          <p class="title">Test Prep</p>
          <div class="content-wrapper">
            <div class="left-col">
              <p class="sub-title">College Test Prep</p>
              <div class="content">
                <p class="tests">SAT</p>
                <p class="tests">ACT</p>
                <p class="tests">PSAT</p>
                <p class="tests">AP Tests</p>
                <p class="tests">SAT Subject Tests</p>
              </div>
            </div>
            <div class="right-col">
              <p class="sub-title">Graduate Test Prep</p>
              <div class="content">
                <p class="tests">GRE</p>
                <p class="tests">GMAT</p>
                <p class="tests">LSAT</p>
                <p class="tests">MCAT</p>
                <p class="tests">DAT</p>
                <p class="tests">OAT</p>
              </div>
            </div>
          </div>
        </div>

        <div class="academic-prep-col">
          <p class="title">Academic Prep & College Admissions</p>
          <div class="content-wrapper">
            <div class="left-col">
              <p class="sub-title">Academic Subjects</p>
              <div class="content">
                <p class="tests">Math</p>
                <p class="tests">Science</p>
                <p class="tests">English</p>
                <p class="tests">Social Studies</p>
                <p class="tests">AP Support</p>
              </div>
            </div>
            <div class="right-col">
              <p class="sub-title">Graduate Test Prep</p>
              <div class="content">
                <p class="tests">College Rankings</p>
                <p class="tests">College Advice</p>
                <p class="tests">Applying to College</p>
                <p class="tests">Financial Aid</p>
              </div>
            </div>
          </div>
        </div>
        <div class="partnerships-col">
          <p class="title">Partnerships</p>
          <div class="content-wrapper">
            <div class="left-col">
              <p class="sub-title">Schools & Districts</p>
              <div class="content">
                <p class="tests">K-12 Home</p>
                <p class="tests">Tutor.com</p>
                <p class="tests">Test Prep</p>
                <p class="tests">Professional Development</p>
              </div>
            </div>
            <div class="right-col">
              <p class="sub-title">Other Partnerships</p>
              <div class="content">
                <p class="tests">Affliate Program</p>
                <p class="tests">Partner with Us</p>
                <p class="tests">Advertise with Us</p>
                <p class="tests">International Partnerships</p>
              </div>
            </div>
          </div>
        </div>
        <div class="about-col">
          <p class="title">About The Princeton Review</p>
          <div class="content-wrapper">
            <div class="left-col">
              <p class="sub-title">About Us</p>
              <div class="content">
                <p class="tests">About</p>
                <p class="tests">Teach or Tutor for Us</p>
                <p class="tests">Work for Us</p>
                <p class="tests">Our Guarantees</p>
                <p class="tests">Enrollment Terms & Conditions</p>
              </div>
            </div>
            <div class="right-col">
              <p class="sub-title">Other</p>
              <div class="content">
                <p class="tests">Accessibility</p>
                <p class="tests">Accessibility - Canada</p>
                <p class="tests">Cigna Medical</p>
                <p class="tests">Transparency in Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="resources-section">
        <div class="resource-col">
          <p class="title">Resources</p>
          <div class="content-wrapper">
            <div class="left-col">
              <p class="tests">Webinars</p>
              <p class="tests">Advice Articles</p>
              <p class="tests">Videos</p>
              <p class="tests">LiveOnline</p>
              <p class="tests">Private Tutoring</p>
            </div>
            <div class="right-col">
              <p class="tests">Mobile Apps</p>
              <p class="tests">Local Offices</p>
              <p class="tests">International Offices</p>
              <p class="tests">Counselors</p>
            </div>
          </div>
        </div>
        <div class="company-detail-col">
          <div class="company-details-wrapper">
            <p class="name">
              ©2024 TPR Education IP Holdings, LLC. All Rights Reserved.
            </p>
            <p class="affiliate-section">
              The Princeton Review is not affiliated with Princeton University
            </p>
            <p class="description">
              TPR Education, LLC (doing business as “The Princeton Review”) is
              controlled by Primavera Holdings Limited, a firm owned by Chinese
              nationals with a principal place of business in Hong Kong, China.
            </p>
          </div>
          <div class="privacy-section">
            <p class="rules">Privacy Policy</p>
            <img src="./assets/images/divider.svg" alt="">
            <p class="rules">Terms of Use</p>
            <img src="./assets/images/divider.svg" alt="">
            <p class="rules">CA Privacy Notice</p>
            <img src="./assets/images/divider.svg" alt="">
            <p class="rules">Do Not Sell or Share My Personal Information</p>
            <img src="./assets/images/divider.svg" alt="">
            <p class="rules">Site Map</p>
            <img src="./assets/images/divider.svg" alt="">
            <p class="rules">Your Opt-Out Rights</p>
          </div>

          <div class="social-media-section">
            <img src="./assets/images/facebook.png" alt="">
            <img src="./assets/images/twitter.png" alt="">
            <img src="./assets/images/instagram.png" alt="">
            <img src="./assets/images/linkedin.png" alt="">
            <img src="./assets/images/youtube.png" alt="">
          </div>
        </div>
      </div>
    </footer>
        `;
  }
}

customElements.define("footer-component", Footer);
