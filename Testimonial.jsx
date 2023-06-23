const Testimonial = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          What our <span className="text-blue-500 ">clients</span> say
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
          At DocRoute, we are committed to revolutionizing the healthcare
          experience by offering a convenient and user-friendly platform for
          online doctor appointment booking, connecting patients with qualified
          medical professionals.
        </p>

        <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
          <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
            <p className="leading-loose text-gray-500 dark:text-gray-300">
              “Using the online doctor appointment booking site was incredibly
              convenient and time-saving. I no longer had to wait on hold or
              navigate through a busy phone line to schedule an appointment. The
              process was user-friendly, and I could easily find a suitable
              doctor and appointment slot that fit my schedule. It has made
              managing my healthcare much more efficient. Highly recommended!”.
            </p>

            <div className="flex items-center mt-6">
              <img
                className="object-cover rounded-full w-14 h-14"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <div className="mx-4">
                <h1 className="font-semibold text-blue-500">Robbert</h1>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  CTO, Robert Consultency
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
            <p className="leading-loose text-gray-500 dark:text-gray-300">
              “I recently used the online doctor appointment booking site, and
              I'm extremely satisfied with the experience. The platform was
              intuitive and straightforward to use. I appreciated the ability to
              browse through various doctors' profiles, read reviews, and select
              the one that best suited my needs. The appointment confirmation
              and reminders were helpful, ensuring I didn't miss my appointment.
              It's a fantastic tool that streamlines the entire booking process
              and takes away the hassle of traditional appointment scheduling.”.
            </p>

            <div className="flex items-center mt-6">
              <img
                className="object-cover rounded-full w-14 h-14"
                src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="mx-4">
                <h1 className="font-semibold text-blue-500">Mia Brown</h1>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  Marketing Manager at Stech
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
