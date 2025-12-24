import { TriangleAlert } from "lucide-react";

const ErrorDisplay = () => {
  return (
    <div
      className="mx-auto flex min-h-80 max-w-80 flex-col items-center justify-center gap-6"
      role="alert"
    >
      <div className="flex max-w-80 flex-col items-center gap-3 text-center">
        <TriangleAlert className="h-20 w-20 text-danger" />
        <h2 className="heading-m-variant text-primary transition-colors duration-300">
          Something went wrong
        </h2>
        <p className="heading-s text-tertiary transition-colors duration-300">
          We couldn't load the invoice data. Please try again later
        </p>
      </div>
    </div>
  );
};

export default ErrorDisplay;
