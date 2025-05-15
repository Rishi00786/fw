import React from 'react'

const WorkflowSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">How It Works</h2>
                </div>

                {/* Vertical Line */}
                <div className="relative">
                    <div className="absolute md:flex hidden left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-600 z-0"></div>

                    {/* Step 1 */}
                    <div className="relative z-10 mb-24">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-2xl shadow-lg mx-4 md:mx-8">
                                1
                            </div>
                            <div className="w-full md:w-5/12 md:pr-8 mb-8 md:mb-0">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Upload your unused software license</h3>
                                <p className="text-gray-600 text-lg">
                                    Simply upload details of your unused or unwanted software licenses. We accept all major software types and versions.
                                </p>
                            </div>
                            <div className="md:flex hidden items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-2xl shadow-lg mx-4 md:mx-8">
                                1
                            </div>
                            <div className="w-full md:w-5/12 md:pl-8">
                                <div className="backdrop-blur-md bg-white/50 p-6 rounded-lg shadow-lg">
                                    <div className="flex justify-center">
                                        <img
                                            src="https://uploads-ssl.webflow.com/605ba92cee75fcdebfce666c/605ba92cee75fceb19ce678e_criteria-small.svg"
                                            alt="Upload License"
                                            className="h-48 object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative z-10 mb-24">
                        <div className="flex flex-col md:flex-row-reverse items-center">
                            <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-purple-500 text-white font-bold text-2xl shadow-lg mx-4 md:mx-8">
                                2
                            </div>
                            <div className="w-full md:w-5/12 md:pl-8 mb-8 md:mb-0">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Get an instant valuation from our experts</h3>
                                <p className="text-gray-600 text-lg">
                                    Our pricing algorithm combined with expert review gives you a fast and accurate license valuation within minutes.
                                </p>
                            </div>
                            <div className="md:flex hidden items-center justify-center w-12 h-12 rounded-full bg-purple-500 text-white font-bold text-2xl shadow-lg mx-4 md:mx-8">
                                2
                            </div>
                            <div className="w-full md:w-5/12 md:pr-8">
                                <div className="backdrop-blur-md bg-white/50 p-6 rounded-lg shadow-lg">
                                    <div className="flex justify-center">
                                        <img
                                            src="https://uploads-ssl.webflow.com/605ba92cee75fcdebfce666c/605ba92cee75fc1d59ce678f_validate.svg"
                                            alt="Valuation"
                                            className="h-48 object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-2xl shadow-lg mx-4 md:mx-8">
                                3
                            </div>
                            <div className="w-full md:w-5/12 md:pr-8 mb-8 md:mb-0">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Receive payment directly to your account</h3>
                                <p className="text-gray-600 text-lg">
                                    Once you accept the offer, we handle the rest. Get paid securely and quickly—no delays, no hassle.
                                </p>
                            </div>
                            <div className="md:flex hidden items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-2xl shadow-lg mx-4 md:mx-8">
                                3
                            </div>
                            <div className="w-full md:w-5/12 md:pl-8">
                                <div className="backdrop-blur-md bg-white/50 p-6 rounded-lg shadow-lg">
                                    <div className="flex justify-center">
                                        <img
                                            src="https://uploads-ssl.webflow.com/605ba92cee75fcdebfce666c/605ba92cee75fcfe00ce6795_leads.svg"
                                            alt="Get Paid"
                                            className="h-48 object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default WorkflowSection
