import React from 'react'

const Why = () => {
    return (
        <section className="overflow-hidden py-8 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600">Why SoftSell</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose Us</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                At SoftSell, we make selling your unused software licenses effortless, secure, and rewarding.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                            fill="currentColor" aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600">
                                            <path d="M3 3h14v14H3V3z" />
                                        </svg>
                                        Fast & Easy
                                    </dt>
                                    <dd className="inline"> Upload your license and receive a valuation in minutes—no hassle, no delays.</dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                            fill="currentColor" aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600">
                                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
                                        </svg>
                                        Secure Transactions
                                    </dt>
                                    <dd className="inline"> We ensure safe handling of your license transfers and secure payouts.</dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                            fill="currentColor" aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600">
                                            <path d="M10 1l2 6h6l-4.9 3.6L15 17l-5-3.7L5 17l1.9-6.4L2 7h6z" />
                                        </svg>
                                        Best Value
                                    </dt>
                                    <dd className="inline"> Get the highest market rates for your unused licenses—no middlemen.</dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                            fill="currentColor" aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600">
                                            <path d="M2 5h16v10H2z" />
                                        </svg>
                                        Transparent Process
                                    </dt>
                                    <dd className="inline"> No hidden fees, full visibility into the valuation and sale process.</dd>
                                </div>
                            </dl>
                        </div>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a href="#steps"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Sell My Licenses
                            </a>
                            <a href="#steps" className="text-sm font-semibold leading-6 text-gray-700">
                                Learn how it works <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb21wdXRlcnxlbnwwfDB8fHwxNjkxODE2NjY3fDA&ixlib=rb-4.0.3&q=80&w=1080"
                        alt="Laptop with dashboard"
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        width="2432"
                        height="1442"
                    />
                </div>
            </div>
        </section>
    )
}

export default Why
