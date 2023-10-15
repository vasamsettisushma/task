import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Card, Button, Form } from 'react-bootstrap';
import "./home.css"
function Home() {
  return (
        <div>
          {/* Navigation Bar */}
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Software Company</Navbar.Brand>
              <Navbar.Collapse id="basic-navbar-nav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#services">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                  </li>
                </ul>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    
          
          {/* Services Section */}
          <Container id="services" className="my-5">
            <h2 className="text-center">Our Services</h2>
            <div className="row">
              <div className="col-md-4">
                <Card>
                  <Card.Body>
                    <Card.Title>Service 1</Card.Title>
                    <Card.Text>
Digital engineering services
• Distributed agile
• Application platform engineering
• Content and customer experience
• Digital process automation
• Intelligent automation
• Analytics, insights, and data
• AI and machine learning
• Industrial Internet of Things (IIoT)
• Enterprise applications - SAP, Microsoft, Oracle, Pega
</Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4">
                <Card>
                  <Card.Body>
                    <Card.Title>Service 2</Card.Title>
                    <Card.Text>Cloud services
• Strategy and assessments
• Migration
• Cloud native engineering
• Data and analytics
• SaaS applications
• Open innovation platform
• Security
• Managed cloud
Managed services
• Application support and management
• Infrastructure management services
• Knowledge process outsourcing
• Digital process outsourcing (Bots)
• Independent validation (QA/testing)</Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4">
                <Card>
                  <Card.Body>
                    <Card.Title>Service 3</Card.Title>
                    <Card.Text>Consulting & design services
• UI/UX design
• Business capability modeling
• Customer journey mapping
• IT strategy and architecture
• Accelerated solution design
• Operational process design
• DevOps design
• Product design</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Container>
    
          {/* About Us Section */}
          <Container id="about" className="bg-light my-5 py-4">
            <h2 className="text-center">About Us</h2>
            <p className="text-center">Virtusa Corporation is a global provider of digital business transformation, digital engineering, and
information technology (IT) outsourcing services that accelerate our clients’ journey to their digital
future. Virtusa serves Global 2000 companies in banking, financial services, insurance, healthcare,
telecommunications, media, entertainment, travel, manufacturing, and technology industries.
Headquartered in Massachusetts, we have offices throughout the Americas, Europe, Middle
East, and Asia. We view our operations and manage our business as one operating segment.
Historically, we have supplemented organic revenue growth with acquisitions such as Polaris
Consulting and eTouch Systems. Our corporate structure spans multiple jurisdictions, with Virtusa
Corporation incorporated in Delaware and its operating subsidiaries organized in India, Sri Lanka,
the United Kingdom, Hungary, Germany, Singapore, Austria, Malaysia, Sweden, Switzerland, Mexico,
the Netherlands, Australia, the United Arab Emirates, Qatar, Japan, and Canada.
We serve clients across North America, Europe, Asia, Australia, and New Zealand. During the fiscal
year ended March 31, 2021, 74% </p>
          </Container>
    
          {/* Contact Section */}
          <Container id="contact" className="my-5">
            <h2 className="text-center">Contact Us</h2>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <Form.Group controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="3" placeholder="Your Message" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </div>
    
  )
}

export default Home