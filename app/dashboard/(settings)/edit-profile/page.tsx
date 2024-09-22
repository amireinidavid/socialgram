import { auth } from "@/auth";
import ProfileForm from "@/components//ProfileForm";
import { fetchProfile } from "@/lib/data";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Edit profile",
  description: "Edit profile",
};

async function EditProfile() {
  const session = await auth();
  const profile = await fetchProfile(session?.user.username!);

  if (!profile) {
    notFound();
  }

  return (
    <div className="px-12">
      <ProfileForm profile={profile} />
    </div>
  );
}

export default EditProfile;
