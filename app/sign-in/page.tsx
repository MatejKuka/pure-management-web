import React from 'react';
import SignInForm from "@/components/user-components/SignInForm";
import RootPageLayout from "@/components/page-layouts/RootPageLayout";

function Page() {
  return (
    <RootPageLayout>
      <SignInForm />
    </RootPageLayout>
  );
}

export default Page;