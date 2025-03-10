import { Metadata } from "next";
import { auth } from "../../../../auth";
import { SessionProvider } from "next-auth/react";
import ProfileForm from "./ProfileForm";

export const metadata: Metadata = {
  title: "Customer Profile",
};

export default async function page() {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <div className="mx-auto max-w-md space-y-4">
        <h2 className="h2-bold">Profile</h2>
        <ProfileForm />
      </div>
    </SessionProvider>
  );
}
