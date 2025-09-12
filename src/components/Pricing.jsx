import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const currencies = [
  { code: 'MWK', symbol: 'MWK', rate: 1 },
  { code: 'USD', symbol: '$', rate: 0.00058 }, // 1 MWK ≈ 0.00058 USD (Sep 2025)
  { code: 'EUR', symbol: '€', rate: 0.00052 }, // 1 MWK ≈ 0.00052 EUR
  { code: 'GBP', symbol: '£', rate: 0.00044 }, // 1 MWK ≈ 0.00044 GBP
];

const pricingPlans = [
  {
    id: 'basic',
    title: 'Basic Website',
    description: 'Ideal for small businesses or personal sites. 5 pages with essential features.',
    features: [
      'Up to 5 pages',
      'Photo gallery',
      'Contact form',
      'SEO ready',
      'WhatsApp integration',
    ],
    priceWithCMS: 550000,
    priceNoCMS: 250000,
    note: 'Choose with CMS (e.g., WordPress) or static (no CMS)',
  },
  {
    id: 'standard',
    title: 'Standard Website',
    description: 'For growing businesses needing more pages and marketing tools. 10 pages.',
    features: [
      'Up to 10 pages',
      'All Basic features',
      'Social media creation and integration',
      'Advanced SEO optimization',
    ],
    price: 910000,
    note: '',
  },
  {
    id: 'advanced',
    title: 'Advanced Website',
    description: 'Feature-rich site for professional needs. 15 pages with interactive elements.',
    features: [
      'Up to 15 pages',
      'All Standard features',
      'Payment integration (e.g., PayPal, Stripe)',
      'Live chat support',
      'CMS included',
    ],
    price: 1150000,
    note: '',
  },
  {
    id: 'custom',
    title: 'Custom Website',
    description: 'Tailored solutions for complex projects like eCommerce, booking systems, or large-scale sites.',
    features: [
      'Unlimited pages',
      'All Advanced features',
      'Custom booking systems',
      'E-commerce functionality (product catalog, cart, secure checkout)',
      'Betting or marketplace integrations (if applicable)',
      'Custom API integrations',
      'Scalable architecture for high traffic',
    ],
    price: 3000000, // Based on research: ~$1730 USD for mid-level custom eCommerce
    note: 'Price starts at; custom quote based on requirements',
  },
];

const additionalServices = [
  {
    id: 'seo',
    title: 'SEO Optimization Package',
    description: 'Boost your site\'s visibility on search engines.',
    features: ['Keyword research', 'On-page SEO', 'Content optimization', 'Monthly reporting'],
    price: 150000,
  },
  {
    id: 'graphic',
    title: 'Graphic Design Services',
    description: 'Custom visuals to enhance your brand.',
    features: ['Logo design', 'Banner graphics', 'UI/UX design elements', 'Social media graphics'],
    price: 100000,
  },
  {
    id: 'it-support',
    title: 'IT Support & Maintenance',
    description: 'Ongoing support for your digital needs.',
    features: ['Monthly maintenance (10% of project cost)', 'Bug fixes', 'Server monitoring', 'Security updates'],
    price: '10% of project cost / month',
  },
  {
    id: 'tutoring',
    title: 'Tutoring Services',
    description: 'Personalized training in software development, IT, or web technologies.',
    features: ['1-on-1 sessions', 'Custom curriculum', 'Hands-on projects', 'Certification guidance'],
    price: 50000, // Per session or package
  },
  {
    id: 'hosting',
    title: 'Website Hosting & Domain',
    description: 'Reliable hosting for your site.',
    features: ['Annual hosting', 'Domain registration', 'SSL certificate', 'Email setup'],
    price: 50000,
  },
];

const Pricing = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('MWK');

  const getPrice = (price) => {
    if (typeof price === 'string') return price;
    const currency = currencies.find(c => c.code === selectedCurrency);
    return (price * currency.rate).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const getSymbol = () => {
    const currency = currencies.find(c => c.code === selectedCurrency);
    return currency.symbol;
  };

  return (
    <section id="pricing" style={{ position: 'relative', marginTop: '40px', padding: '0 10px', maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
      <Helmet>
        <title>Pricing - Gabriel Kadiwa | Web Development & IT Services</title>
        <meta
          name="description"
          content="Affordable pricing for website development, IT support, graphic design, and tutoring services by Gabriel Kadiwa. Packages starting from MWK 250,000 with discounts for new and referred customers."
        />
        <meta
          name="keywords"
          content="website pricing Malawi, software development cost, IT support pricing, graphic design fees, tutoring services, web development packages, Gabriel Kadiwa"
        />
        <meta property="og:title" content="Pricing Plans - Gabriel Kadiwa | Professional Services" />
        <meta
          property="og:description"
          content="Discover competitive pricing for custom websites, eCommerce, SEO, graphic design, and more. Enjoy 30% discount for first-time customers and referrals."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gabrielkadiwa.vercel.app/#pricing" />
        <meta property="og:image" content="https://gabrielkadiwa.vercel.app/images/pricing-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing Plans - Gabriel Kadiwa" />
        <meta
          name="twitter:description"
          content="Explore pricing for web development, IT support, and design services with special discounts."
        />
        <meta name="twitter:image" content="https://gabrielkadiwa.vercel.app/images/pricing-og-image.jpg" />
      </Helmet>
      <h2 style={{ fontSize: '1.8rem', color: 'var(--accent)', textAlign: 'center', marginBottom: '1.5rem' }}>Pricing</h2>
      <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', flexDirection: 'column' }}>
        <label htmlFor="currency" style={{ fontSize: '1rem', color: 'var(--text)', fontWeight: 500 }}>Select Currency:</label>
        <select
          id="currency"
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
          style={{
            padding: '0.5rem',
            borderRadius: '6px',
            background: 'var(--input-bg)',
            color: 'var(--text)',
            border: '1px solid var(--accent)',
            fontSize: '1rem',
            cursor: 'pointer',
            width: '100%',
            maxWidth: '200px',
          }}
        >
          {currencies.map((curr) => (
            <option key={curr.code} value={curr.code}>
              {curr.code}
            </option>
          ))}
        </select>
      </div>
      <div>
        <motion.div
          className="plans-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                background: 'var(--card-bg)',
                color: 'var(--text)',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease',
              }}
            >
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem', color: 'var(--accent)' }}>{plan.title}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text)', marginBottom: '1rem' }}>{plan.description}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem' }}>
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    style={{ fontSize: '0.9rem', color: 'var(--text)', marginBottom: '0.5rem', position: 'relative', paddingLeft: '1.2rem' }}
                  >
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div>
                {plan.priceWithCMS ? (
                  <>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text)' }}>
                      With CMS: {getSymbol()} {getPrice(plan.priceWithCMS)}
                    </div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text)' }}>
                      No CMS: {getSymbol()} {getPrice(plan.priceNoCMS)}
                    </div>
                  </>
                ) : (
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text)' }}>
                    {getSymbol()} {getPrice(plan.price)}
                    {plan.note && (
                      <span style={{ fontSize: '0.85rem', fontWeight: 'normal', color: 'var(--text)', opacity: 0.8 }}>
                        {' '}
                        ({plan.note})
                      </span>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 style={{ fontSize: '1.8rem', color: 'var(--accent)', marginBottom: '1.5rem', textAlign: 'center' }}>
            Additional Services
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: 'var(--card-bg)',
                  color: 'var(--text)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s ease',
                }}
              >
                <h4 style={{ margin: '0 0 0.5rem', fontSize: '1.3rem', color: 'var(--accent)' }}>{service.title}</h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text)', marginBottom: '1rem' }}>{service.description}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem' }}>
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      style={{ fontSize: '0.9rem', color: 'var(--text)', marginBottom: '0.5rem', position: 'relative', paddingLeft: '1.2rem' }}
                    >
                      <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text)' }}>
                  {getPrice(service.price)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 style={{ fontSize: '1.8rem', color: 'var(--accent)', marginBottom: '1.5rem', textAlign: 'center' }}>
            Special Offers & Fees
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem' }}>
            <li style={{ fontSize: '0.95rem', color: 'var(--text)', marginBottom: '0.7rem', paddingLeft: '1.2rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>★</span>
              <strong>30% Discount for First-Time Customers:</strong> Applied to your initial project.
            </li>
            <li style={{ fontSize: '0.95rem', color: 'var(--text)', marginBottom: '0.7rem', paddingLeft: '1.2rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>★</span>
              <strong>30% Discount on Next Purchase for Referrals:</strong> Refer a new customer who completes a project, get 30% off your next service.
            </li>
            <li style={{ fontSize: '0.95rem', color: 'var(--text)', marginBottom: '0.7rem', paddingLeft: '1.2rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>★</span>
              <strong>Expedited Projects:</strong> Add 50% fee for rush delivery (e.g., 50% project completion in half the time).
            </li>
            <li style={{ fontSize: '0.95rem', color: 'var(--text)', marginBottom: '0.7rem', paddingLeft: '1.2rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>★</span>
              <strong>Maintenance:</strong> 10% of the agreed project amount per month for ongoing support.
            </li>
          </ul>
          <p style={{ fontSize: '0.9rem', color: 'var(--text)', textAlign: 'center', opacity: 0.8 }}>
            Contact me for a custom quote or to apply discounts. All prices are estimates and subject to project scope.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;