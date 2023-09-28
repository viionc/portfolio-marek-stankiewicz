import useSectionInView from "../hooks/useSectionInView";

function ContactPage() {
    const {ref} = useSectionInView("Contact", 0.75);
    return (
        <section ref={ref} id="contact-page" className="text-white  scroll-mt-28">
            <div className="py-8 lg:py-16 px-4 mx-auto  w-[22rem] sm:w-[32rem] lg:w-[50rem] ">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                    Let's Talk!
                </h2>
                <form
                    method="post"
                    id="contactForm"
                    name="contactForm"
                    className="space-y-8 flex flex-col items-center"
                    action="https://formspree.io/f/xjvqanga"
                >
                    <div className="w-full">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="name@flowbite.com"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label
                            htmlFor="subject"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Let me know what you thought about my portfolio!"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2 w-full">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                            Your message
                        </label>
                        <textarea
                            id="message"
                            rows={6}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Leave a message..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="flex w-1/4 bg-blue-700 p-2 px-5 rounded-lg gap-2 items-center justify-center hover:bg-gray-900 hover:bg-opacity-25 hover:text-white transition outline-none focus:scale-110 active:scale-105"
                    >
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ContactPage;
