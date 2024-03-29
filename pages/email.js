import { useState } from "react";

import Head from "next/head";

import { LsLink } from "../components/LsLink";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { useRouter } from "next/router";

export default function email() {
  const router = useRouter();

  const query = router.query.verifyAgain;

  const password = () => {
    router.push("password");
  };

  return (
    <>
      <Head>
        <title>Livestock Information Service</title>
        <meta name="description" content="Livestock Information Service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <div className="cla-width-container">
        <div className="d--flex m--t-xlarge">
          <div className="ls-grid-column-two-thirds">
            <div>
              <h1 className="m--b-xlarge">Please check your inbox</h1>
              <h2 className="m--b-xlarge" onClick={password}>
                We've {query ? "re" : ""}sent you a verification email to{" "}
                <strong>*****@email.com</strong>
              </h2>
              <div className="m--b-xlarge">
                {/* <p>We've hidden some of the characters of your email shown for security reasons. This email address is the one we have on record for your CPH number.</p> */}
                <p className="m--b-large">
                  In order to verify your account, we've {query ? "re" : ""}{" "}
                  sent you a verification email. We've obscured some of the
                  characters for security. Please follow the steps on the
                  verification email to get access to Livestock information.{" "}
                </p>

                <p className="m--b-xlarge">
                  The verification email is only{" "}
                  <strong>valid for 24hrs</strong>, please check your spam
                  folder, if not received.
                </p>

                {!query ? (
                  <>
                    <p className="m--b-xxlarge">
                      {" "}
                      I've not received my verification email? {" "}
                      <LsLink url="email?verifyAgain=true">
                        Re-try sending verification
                      </LsLink>
                      .
                    </p>
                  </>
                ) : null}

                <p className="m--b-xxlarge">
                  {" "}
                  If you've still not received your verification email or you
                  don't regonise it as being yours, why not try{" "}
                  <LsLink url="confirmDetails-mobile">
                    mobile verification
                  </LsLink>
                  .
                </p>

                {/* <p>The email address shown doesn't seem to be mine? <LsLink>Contact helpdesk</LsLink></p> */}
                <p>
                  By registering an account you agree to our{" "}
                  <LsLink
                    target="_blank"
                    url="https://livestockinformation.org.uk/privacy/"
                  >
                    privacy policy
                  </LsLink>{" "}
                  and{" "}
                  <LsLink
                    url="https://livestockinformation.org.uk/cookies/"
                    target="_blank"
                  >
                    cookies
                  </LsLink>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
