import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/"); 
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold">
        Welcome, {session.user?.name ?? "User"}!
      </h1>
      <p>Email: {session.user?.email}</p>
      {session.user?.image && (
        <img
          src={session.user.image}
          alt="Profile"
          className="rounded-full mt-4 w-32 h-32"
        />
      )}
    </div>
  );
}
