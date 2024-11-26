import { buttonVariants } from "@/components/ui/button";
import { PathEnum } from "@/shared/enums/path-enum";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-appPrimary">404</h1>
        <h2 className="text-2xl font-semibold text-appTextSecondary mb-4">
          Page not found.
        </h2>
        <p className="text-appTextTertiary mb-8 max-w-md">
          The page you are looking for does not exist or has been moved. Please
          check the URL or go back to the homepage.
        </p>

        <div>
          <Link
            href={PathEnum.Home}
            className={buttonVariants({
              variant: "default",
              className: "bg-appPrimary",
            })}
          >
            <ChevronLeft />
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
