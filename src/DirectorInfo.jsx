import React from "react";
import { motion } from "framer-motion";

const DirectorInfo = () => {
  return (
    <div>
      <section className="pt-10 overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 md:pt-0 sm:pt-16 2xl:pt-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Hey, I am
                <br className="block sm:hidden" /> Arif Sir
              </h2>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-white md:mt-8">
                "At Aisha Coaching Classes, we sculpt minds with passion and
                precision, fostering academic excellence in every student.
                Welcome to Aisha Humanities Academy, where the art of learning
                meets the science of success, shaping tomorrow's leaders."
              </p>

              <p className="mt-4 text-xl text-white dark:text-gray-300 md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2"></span>
                  <span className="relative"> Have a question? </span>
                </span>
                <br className="block sm:hidden" />
                Ask me on ----{" "}
                <a
                  href="#"
                  title=""
                  className="transition-all duration-200 text-white hover:underline"
                >
                  Whatsapp
                </a>
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt=""
              />

              <img
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src="/assets/images/Director.png"
                alt="Director"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DirectorInfo;
