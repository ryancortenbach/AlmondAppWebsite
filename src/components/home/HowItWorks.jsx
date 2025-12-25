import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faShieldAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const steps = [
    {
      icon: faCamera,
      title: "Scan Any Product",
      description:
        "Point your camera at any barcode to instantly identify the product and its ingredients",
      image: "/image.png",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: faShieldAlt,
      title: "Get Instant Analysis",
      description:
        "Our AI analyzes ingredients against your dietary restrictions and health preferences",
      image: "/Group 69.png",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: faSearch,
      title: "Find Safe Alternatives",
      description:
        "Discover similar products that match your dietary needs and taste preferences",
      image: "/Group 70.png",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      ref={ref}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
            How Olive Works
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Three simple steps to ensure every food choice is safe and healthy
            for you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => setActiveStep(index)}
              className={`relative cursor-pointer`}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 z-10">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                >
                  {index + 1}
                </div>
              </div>

              {/* Card */}
              <div
                className={`bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 ${activeStep === index ? "ring-2 ring-green-500 shadow-2xl scale-105" : ""}`}
              >
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} bg-opacity-10 flex items-center justify-center`}
                  >
                    <FontAwesomeIcon
                      icon={step.icon}
                      size="xl"
                      className="text-gray-700"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
        >
          <div className="grid md:grid-cols-2 items-center">
            {/* Left - Phone Mockup */}
            <div className="p-12 bg-gradient-to-br from-green-50 to-white">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="bg-gray-900 rounded-[2rem] p-3 shadow-2xl max-w-[300px] mx-auto">
                  <div className="bg-white rounded-[1.5rem] overflow-hidden">
                    <div className="bg-gray-900 h-6 flex items-center justify-center">
                      <div className="w-16 h-3 bg-gray-800 rounded-full"></div>
                    </div>
                    <div className="p-4">
                      <img
                        src={steps[activeStep].image}
                        alt={steps[activeStep].title}
                        className="w-full h-[400px] object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right - Step Details */}
            <div className="p-12">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className={`inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-gradient-to-r ${steps[activeStep].color} text-white`}
                >
                  <FontAwesomeIcon icon={steps[activeStep].icon} />
                  <span className="font-semibold">Step {activeStep + 1}</span>
                </div>

                <h3 className="text-3xl font-bold mb-4">
                  {steps[activeStep].title}
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  {steps[activeStep].description}
                </p>

                {/* Feature List */}
                <ul className="space-y-3">
                  {activeStep === 0 && (
                    <>
                      <li className="flex items-center gap-3">
                        <span className="text-green-500">✓</span>
                        <span className="text-gray-700">
                          Works with any barcode or QR code
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-green-500">✓</span>
                        <span className="text-gray-700">
                          Instant product recognition
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-green-500">✓</span>
                        <span className="text-gray-700">
                          Access to millions of products
                        </span>
                      </li>
                    </>
                  )}
                  {activeStep === 1 && (
                    <>
                      <li className="flex items-center gap-3">
                        <span className="text-green-500">✓</span>
                        <span className="text-gray-700">
                          Personalized allergen detection
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-green-500">✓</span>
                        <span className="text-gray-700">
                          Nutritional breakdown
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-green-500">✓</span>
                        <span className="text-gray-700">
                          Health impact scoring
                        </span>
                      </li>
                    </>
                  )}
                  {activeStep === 2 && (
                    <>
                      <li className="flex items-center gap-3">
                        <span className="text-green-500">✓</span>
                        <span className="text-gray-700">
                          Smart product recommendations
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-green-500">✓</span>
                        <span className="text-gray-700">
                          Compare similar products
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-green-500">✓</span>
                        <span className="text-gray-700">
                          Save favorites for later
                        </span>
                      </li>
                    </>
                  )}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
