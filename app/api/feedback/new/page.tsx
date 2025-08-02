"use client";

import { useState } from "react";

export default function FeedbackPage() {
    const [person, setPerson] = useState("");
    const [stars, setStars] = useState(5);
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Submitting...");

        try {
            const res = await fetch("/api/feedback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ person, stars, message }),
            });

            if (!res.ok) throw new Error("Failed to submit");

            setStatus("✅ Feedback submitted successfully!");
            setPerson("");
            setStars(5);
            setMessage("");
        } catch (err) {
            setStatus("❌ Failed to submit feedback.");
            console.error(err);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-white to-red-100 p-4">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8 border border-red-200">
                <h1 className="text-3xl font-bold text-center text-black sm:text-red-700 mb-6">
                    🩸 Submit Donor Feedback
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-black font-medium mb-1">
                            Your Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={person}
                            onChange={(e) => setPerson(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400 text-black"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-black font-medium mb-1">
                            Star Rating
                        </label>
                        <select
                            value={stars}
                            onChange={(e) => setStars(Number(e.target.value))}
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400 text-black"
                            required
                        >
                            {[5, 4, 3, 2, 1].map((star) => (
                                <option key={star} value={star}>
                                    {star} Star{star > 1 && "s"}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-black font-medium mb-1">
                            Feedback Message
                        </label>
                        <textarea
                            placeholder="Write your feedback..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-2 rounded h-28 resize-none focus:outline-none focus:ring-2 focus:ring-red-400 text-black"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-semibold transition duration-200"
                    >
                        Submit Feedback
                    </button>
                </form>

                {status && (
                    <p className="mt-4 text-center text-sm font-medium text-black">
                        {status}
                    </p>
                )}
            </div>
        </div>
    );
}
