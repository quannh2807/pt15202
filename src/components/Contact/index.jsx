import React from "react";

const Contact = () => {
    return (
        <div className="container mx-auto my-10">
            <h2 className="text-center text-secondary font-bold text-3xl pb-3">
                Contact to us
            </h2>

            <form action="#" method="POST">
                <div class="shadow border overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-2 gap-6">
                            <div class="">
                                <label
                                    for="first_name"
                                    class="block text-sm font-medium text-gray-700"
                                >
                                    First name
                                </label>
                                <input
                                    type="text"
                                    placeholder="First name"
                                    id="first_name"
                                    class="border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>

                            <div class="">
                                <label
                                    for="email"
                                    class="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="Email"
                                    class="border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>

                            <div className="col-span-2">
                                <label
                                    for="messages"
                                    class="block text-sm font-medium text-gray-700"
                                >
                                    Messages
                                </label>
                                <textarea
                                    id="messages"
                                    placeholder="Your messages"
                                    className="border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    cols="30"
                                    rows="5"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                            type="submit"
                            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-semibold rounded-md text-white focus:outline-none btn-orange"
                        >
                            Send us
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;
