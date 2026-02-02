import { AlertCircle } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md mx-4 bg-white rounded-lg shadow-lg border">
                <div className="p-6">
                    <div className="flex mb-4 gap-2">
                        <AlertCircle className="h-8 w-8 text-red-500" />
                        <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
                    </div>
                    <p className="mt-4 text-sm text-gray-600">
                        The page you're looking for doesn't exist.
                    </p>
                    <a
                        href="/"
                        className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                        Go Home
                    </a>
                </div>
            </div>
        </div>
    );
}