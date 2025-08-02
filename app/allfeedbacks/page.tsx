'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface Feedback {
  id: string;
  person: string;
  message: string;
  stars: number;
  createdAt: string;
}

export default function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('/api/feedback');
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };
    fetchFeedbacks();
  }, []);

  const handleNewFeedback = () => {
    router.push('/api/feedback/new');
  };

  const StarRating = ({ stars }: { stars: number }) => (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < stars ? 'text-red-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.968a1 1 0 00.95.691h4.17c1.02 0 1.446 1.29.623 1.903l-3.376 2.45a1 1 0 00-.364 1.118l1.287 3.968c.3.921-.755 1.688-1.57 1.118l-3.377-2.45a1 1 0 00-1.176 0l-3.377 2.45c-.815.57-1.87-.197-1.57-1.118l1.287-3.968a1 1 0 00-.364-1.118L2.054 9.489c-.823-.613-.397-1.903.623-1.903h4.17a1 1 0 00.95-.691l1.286-3.968z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-tr from-white via-red-50 to-white p-6 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-red-600 mb-2">🩸 Donor Feedback</h1>
          <p className="text-lg text-gray-600">Stories and gratitude from our life-saving heroes.</p>
          <button
            onClick={handleNewFeedback}
            className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full shadow-md transition duration-300"
          >
            + Submit New Feedback
          </button>
        </header>

        {/* Highlighted Personal Testimonial */}
        <div className="bg-red-100 border border-red-300 rounded-lg shadow p-6 mb-10">
          <h2 className="text-2xl font-bold text-red-700 mb-2">My Thoughts - Shankar Kalyankar</h2>
          <p className="text-gray-800 text-base leading-relaxed">
            I have seen a lot of people in super-specialty hospitals struggling during blood emergencies. 
            If this website can help even one person in need, I will be happy. 
            The issue isn't about the availability of donors — our college has plenty of generous individuals. 
            The real challenge is in the approach and connection. 
            I believe this platform will bridge that gap and truly help save lives.
          </p>
        </div>

        {feedbacks.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            No feedback has been submitted yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {feedbacks.map((feedback) => (
              <div
                key={feedback.id}
                className="bg-white border border-red-200 rounded-lg shadow-md hover:shadow-lg transition duration-200 p-4"
              >
                <div>
                  <StarRating stars={feedback.stars} />
                  <h2 className="text-base font-semibold text-gray-900 mt-2">{feedback.person}</h2>
                  <p className="text-sm text-gray-700 mt-1">{feedback.message}</p>
                </div>
                <footer className="mt-3 text-xs text-gray-500 italic">
                  Submitted on: {new Date(feedback.createdAt).toLocaleDateString()}
                </footer>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
