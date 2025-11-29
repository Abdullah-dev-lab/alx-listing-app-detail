import React from "react";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-100 py-10 px-6 mt-10 border-t">
            <div className="text-center text-sm text-gray-500 mt-8">
© {new Date().getFullYear()} StayFinder. All rights reserved.
            </div>
        </footer>
    );
}