import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface AuthenticationEmailProps {
  userName: string;
  userEmail: string;
  verificationCode: string;
  verificationLink: string;
}

const VerificationEmail = ({
  userName,
  userEmail,
  verificationCode,
  verificationLink,
}: AuthenticationEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>
          Verify your email address to complete your account setup
        </Preview>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-sm max-w-[580px] mx-auto p-[40px]">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[28px] font-bold text-gray-900 m-0 mb-[8px]">
                Verify Your Email
              </Heading>
              <Text className="text-[16px] text-gray-600 m-0">
                Complete your account setup by verifying your email address
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                Hi there,
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                Thanks for signing up! To complete your account setup and ensure
                the security of your account, please verify your email address
                by clicking the button below.
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                We just need to confirm that this email address belongs to you.
              </Text>
            </Section>
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[24px]">
                Your email: <strong>{userEmail}</strong>
              </Text>
            </Section>

            {/* Verification Button */}
            <Section className="text-center mb-[32px]">
              <Button
                href={verificationLink}
                className="bg-blue-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border inline-block"
              >
                Verify Email Address
              </Button>
            </Section>

            {/* Alternative Verification */}
            <Section className="mb-[32px]">
              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[16px]">
                If the button doesn&apos;t work, you can also verify your
                account using this code:
              </Text>
              <Section className="bg-gray-50 border border-solid border-gray-200 rounded-[8px] p-[16px] text-center">
                <Text className="text-[24px] font-mono font-bold text-gray-900 m-0 tracking-[4px]">
                  {verificationCode}
                </Text>
              </Section>
              <Text className="text-[14px] text-gray-600 leading-[20px] mt-[16px]">
                Or copy and paste this link in your browser:
              </Text>
              <Text className="text-[14px] text-blue-600 break-all">
                <Link
                  href={verificationLink}
                  className="text-blue-600 underline"
                >
                  {verificationLink}
                </Link>
              </Text>
            </Section>

            {/* Security Notice */}
            <Section className="bg-amber-50 border border-solid border-amber-200 rounded-[8px] p-[16px] mb-[32px]">
              <Text className="text-[14px] text-amber-800 leading-[20px] m-0">
                <strong>Security Notice:</strong> This verification link will
                expire in 24 hours. If you didn't create an account, please
                ignore this email or contact our support team.
              </Text>
            </Section>

            {/* Support */}
            <Section className="mb-[32px]">
              <Text className="text-[14px] text-gray-600 leading-[20px]">
                Need help? Contact our support team at{" "}
                <Link
                  href="mailto:support@company.com"
                  className="text-blue-600 underline"
                >
                  support@company.com
                </Link>{" "}
                or visit our{" "}
                <Link
                  href="https://company.com/help"
                  className="text-blue-600 underline"
                >
                  Help Center
                </Link>
                .
              </Text>
            </Section>

            {/* Footer */}
            <Section className="border-t border-solid border-gray-200 pt-[24px]">
              <Text className="text-[12px] text-gray-500 leading-[16px] text-center m-0 mb-[8px]">
                This email was sent to {userEmail}
              </Text>
              <Text className="text-[12px] text-gray-500 leading-[16px] text-center m-0 mb-[8px]">
                Company Name, 123 Business Street, City, State 12345
              </Text>
              <Text className="text-[12px] text-gray-500 leading-[16px] text-center m-0">
                © 2025 Company Name. All rights reserved.{" "}
                <Link
                  href="https://company.com/unsubscribe"
                  className="text-gray-500 underline"
                >
                  Unsubscribe
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerificationEmail;
