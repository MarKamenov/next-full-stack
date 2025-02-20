"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";
const ErrorBoundary = ({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) => {
    const router = useRouter()

    const reload = () => {
        startTransition(() => {
            router.refresh();
            reset();
        });
    };
    return (
        <div>
            {error.message}{" "}
            <button onClick={() => startTransition(reload)}>Try again</button>
        </div>
    );
}

export default ErrorBoundary