"use client";
import React from 'react';
import { Heart, MapPin, Phone, Clock, Users, Droplets, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';
import { useRouter } from 'next/navigation';

function Home() {
    const router = useRouter();
    const registerbutton = () => router.push('/api/donar/new');
    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <section id="home" className="relative bg-gradient-to-br from-red-50 to-blue-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex justify-center mb-6">
                            <div className="bg-red-100 p-4 rounded-full">
                                <AlertTriangle className="h-12 w-12 text-red-600" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Save Lives with
                            <span className="text-red-600"> Every Drop</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Our nearby multi-specialty hospital faces critical blood shortages during surgeries.
                            Our college community can be the bridge between life and death. Join our mission to ensure no patient waits for blood.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button onClick={registerbutton} className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all transform hover:scale-105 flex items-center justify-center group">
                                Register as Donor
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center p-6 rounded-lg bg-red-50 border border-red-100">
                            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Heart className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-red-600 mb-2">3km</h3>
                            <p className="text-gray-600">Distance to Hospital</p>
                        </div>
                        <div className="text-center p-6 rounded-lg bg-blue-50 border border-blue-100">
                            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-blue-600 mb-2">800+</h3>
                            <p className="text-gray-600">Ready Donors</p>
                        </div>
                        <div className="text-center p-6 rounded-lg bg-green-50 border border-green-100">
                            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Droplets className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-green-600 mb-2">24/7</h3>
                            <p className="text-gray-600">Emergency Response</p>
                        </div>
                        <div className="text-center p-6 rounded-lg bg-purple-50 border border-purple-100">
                            <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-purple-600 mb-2">&lt;15min</h3>
                            <p className="text-gray-600">Response Time</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem & Solution */}
            <section id="about" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                The Critical Challenge We're Solving
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                                        <AlertTriangle className="h-6 w-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Emergency Blood Shortages</h3>
                                        <p className="text-gray-600">Patients at our nearby multi-specialty hospital face life-threatening delays during surgeries due to blood unavailability.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                                        <Clock className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Time-Critical Situations</h3>
                                        <p className="text-gray-600">Every minute counts when patients need blood transfusions. Our proximity gives us a unique advantage to help.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                                        <Users className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Ready Community</h3>
                                        <p className="text-gray-600">Our college community is young, healthy, and eager to contribute to saving lives through blood donation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Impact</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Lives Saved</span>
                                    <span className="text-2xl font-bold text-red-600">150+</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Active Donors</span>
                                    <span className="text-2xl font-bold text-blue-600">800+</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Blood Units Donated</span>
                                    <span className="text-2xl font-bold text-green-600">800+</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Emergency Responses</span>
                                    <span className="text-2xl font-bold text-purple-600">95%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="process" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">A direct approach to becoming a life-saving hero</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-red-600">1</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Find a Student Volunteer</h3>
                            <p className="text-gray-600">Find a student volunteer in our college who is a part of this program. They are the first point of contact.</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-blue-600">2</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Check Availability</h3>
                            <p className="text-gray-600">Your volunteer will check with the department to see if the needed blood is available. They know the process.</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-green-600">3</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Admin Response</h3>
                            <p className="text-gray-600">If the blood is not available, the volunteer will contact the administration for an emergency response. This saves lives.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blood Types Needed */}
            <section className="py-16 bg-gradient-to-br from-white via-red-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-red-600">🩸 Urgent Blood Type Requests</h2>
                        <p className="mt-2 text-gray-700 text-base">
                            Help us save lives – all types are in critical need.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
                        {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((bloodType) => (
                            <div
                                key={bloodType}
                                className="relative bg-white/30 border border-red-200 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                {/* Pulsing red ring animation */}
                                <span className="absolute top-2 right-2 flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </span>

                                <div className="text-center">
                                    <div className="text-3xl font-bold text-red-700">{bloodType}</div>
                                    <p className="text-xs text-gray-700 mt-1">Critical Need</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-sm text-gray-600 mt-12">
                        Be a hero today. One unit can save up to <span className="font-semibold text-red-600">3 lives</span>.
                    </p>
                </div>
            </section>



            {/* Contact & Location */}
            <section id="contact" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Emergency Contact</h2>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-red-100 p-3 rounded-lg">
                                        <Phone className="h-6 w-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">24/7 Emergency Hotline</h3>
                                        <p className="text-gray-600">+91 9100064545</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-lg">
                                        <MapPin className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Hospital Location</h3>
                                        <p className="text-gray-600">Multi-Specialty Hospital - 3km from College Campus</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="bg-green-100 p-3 rounded-lg">
                                        <Clock className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Response Time</h3>
                                        <p className="text-gray-600">Under 20 minutes from notification to donation</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>


        </div>
    );
}

export default Home;