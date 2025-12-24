import React from "react";
import { ErrorDisplay } from "@/components/ui/errorDisplay";

interface ErrorProps {
  children: React.ReactNode;
}

interface ErrorState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<ErrorProps, ErrorState> {
  state: ErrorState = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorDisplay />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
