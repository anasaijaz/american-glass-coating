import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Hr,
  Link,
} from "@react-email/components";

export const EmailTemplate = ({ name, email, phone, subject, message }) => {
  return (
    <Html>
      <Head />
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header */}
          <Section style={headerStyle}>
            <Heading as="h1" style={headingStyle}>
              New Contact Form Submission
            </Heading>
          </Section>

          {/* Subject */}
          <Section style={sectionStyle}>
            <Heading as="h2" style={subheadingStyle}>
              {subject}
            </Heading>
          </Section>

          {/* Contact Information */}
          <Section style={sectionStyle}>
            <Row>
              <Column>
                <Text style={labelStyle}>From:</Text>
              </Column>
              <Column>
                <Text style={valueStyle}>{name}</Text>
              </Column>
            </Row>
            <Row>
              <Column>
                <Text style={labelStyle}>Email:</Text>
              </Column>
              <Column>
                <Link href={`mailto:${email}`} style={linkStyle}>
                  {email}
                </Link>
              </Column>
            </Row>
            <Row>
              <Column>
                <Text style={labelStyle}>Phone:</Text>
              </Column>
              <Column>
                <Text style={valueStyle}>{phone || "Not provided"}</Text>
              </Column>
            </Row>
          </Section>

          <Hr style={hrStyle} />

          {/* Message */}
          <Section style={sectionStyle}>
            <Heading as="h3" style={messageHeadingStyle}>
              Message:
            </Heading>
            <Text style={messageStyle}>{message}</Text>
          </Section>

          {/* Footer */}
          <Section style={footerStyle}>
            <Text style={footerTextStyle}>
              This email was sent from your website contact form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const bodyStyle = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  margin: 0,
  padding: 0,
};

const containerStyle = {
  backgroundColor: "#ffffff",
  margin: "40px auto",
  padding: "20px",
  maxWidth: "600px",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
};

const headerStyle = {
  backgroundColor: "#054177",
  padding: "20px",
  borderRadius: "6px 6px 0 0",
  marginBottom: "20px",
};

const headingStyle = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0",
  textAlign: "center",
};

const sectionStyle = {
  padding: "0 20px",
  marginBottom: "20px",
};

const subheadingStyle = {
  color: "#054177",
  fontSize: "20px",
  fontWeight: "bold",
  margin: "0 0 15px 0",
};

const labelStyle = {
  color: "#666666",
  fontSize: "14px",
  fontWeight: "bold",
  margin: "8px 0",
};

const valueStyle = {
  color: "#333333",
  fontSize: "14px",
  margin: "8px 0",
};

const linkStyle = {
  color: "#054177",
  fontSize: "14px",
  textDecoration: "underline",
};

const hrStyle = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const messageHeadingStyle = {
  color: "#054177",
  fontSize: "16px",
  fontWeight: "bold",
  margin: "0 0 10px 0",
};

const messageStyle = {
  color: "#333333",
  fontSize: "14px",
  lineHeight: "1.6",
  whiteSpace: "pre-wrap",
};

const footerStyle = {
  backgroundColor: "#f6f9fc",
  padding: "15px",
  borderRadius: "0 0 6px 6px",
  marginTop: "20px",
};

const footerTextStyle = {
  color: "#8898aa",
  fontSize: "12px",
  textAlign: "center",
  margin: "0",
};
