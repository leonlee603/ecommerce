import Image from "next/image";
// import loader from "/images/loader.gif";

export default function LoadingPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Image src="/images/loader.gif" alt="Loading spinner" width={150} height={150} />
    </div>
  );
}
