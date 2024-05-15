import { Ban } from "lucide-react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex justify-center items-center w-screen h-screen flex-col gap-8">
      <Ban size={90} />
      <Link to={'/'} className="underline">Home</Link>
    </div>
  )
}
