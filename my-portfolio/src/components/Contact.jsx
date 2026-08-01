import './Contact.css'

const contactItems = [
  {
    label: 'Email',
    value: 'hareematique098@gmail.com',
    href: 'mailto:hareematique098@gmail.com',
  },
  {
    label: 'Phone',
    value: '0324-4482051',
    href: 'tel:03244482051',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/hareematique098/',
    href: 'https://www.linkedin.com/in/hareematique098/',
  },
  {
    label: 'GitHub',
    value: 'github.com/hareemkhan-automation',
    href: 'https://github.com/hareemkhan-automation',
  },
]

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-section__header">
        <p className="contact-section__eyebrow">CONTACT</p>
        <h2 className="contact-section__title">Let’s work together</h2>
        <p className="contact-section__subtitle">
          Open to full-time roles, freelance projects, and collaborations that need sharp strategy and dependable execution.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-left">
          <div className="contact-info-card">
            <p className="contact-info-card__eyebrow">LET'S CONNECT</p>
            <h3 className="contact-info-card__title">Have a project in mind?</h3>
            <p className="contact-info-card__copy">
              I help teams turn ideas into clear systems, better outreach, and results that actually move the business forward.
            </p>
            <p className="contact-info-card__note">
              Send me a note at <a href="mailto:hareematique098@gmail.com">hareematique098@gmail.com</a> and I’ll reply soon.
            </p>
          </div>

          <div className="contact-cards">
            {contactItems.map((item) => (
              <a
                key={item.label}
                className="contact-card"
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-card__icon" aria-hidden="true">
                  {item.label === 'Email' && '✉️'}
                  {item.label === 'Phone' && '📞'}
                  {item.label === 'LinkedIn' && 'in'}
                  {item.label === 'GitHub' && 'GH'}
                </div>
                <div>
                  <p className="contact-card__label">{item.label}</p>
                  <p className="contact-card__value">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <form className="contact-right" action="#" method="post">
          <div className="contact-form-card">
            <div className="contact-form-card__header">
              <p className="contact-form-card__eyebrow">Message Me</p>
              <h3 className="contact-form-card__title">Send a quick note</h3>
              <p className="contact-form-card__copy">
                Share a few details about your project and I’ll get back to you soon.
              </p>
            </div>

            <label className="contact-form__field">
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" required />
            </label>

            <label className="contact-form__field">
              <span>Email</span>
              <input type="email" name="email" placeholder="you@email.com" required />
            </label>

            <label className="contact-form__field contact-form__field--textarea">
              <span>Message</span>
              <textarea name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
            </label>

            <button type="submit" className="contact-form__button">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
