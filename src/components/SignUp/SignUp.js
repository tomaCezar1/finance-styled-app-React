import React from 'react';
import ContentSection from '../ContentSection/ContentSection';
import svg6 from '../../images/svg-6.svg';
import Footer from '../Footer/Footer';

function SignUp() {
  return (
    <>
      <ContentSection
        headline="SIGN UP TODAY"
        heading="Join today to receive an exclusive offer"
        infoText="Get access to our exclusive diamond card that allows
                you to send unlimited transactions without getting charged any fees"
        imageSrc={svg6}
        lightText="yes"
        buttonTitle="Sign Up"
        onTop="true"
      />
      <Footer />
    </>
  );
}

export default SignUp;
