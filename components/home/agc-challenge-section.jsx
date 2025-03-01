"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  CheckCircle2,
  ArrowRight,
  Shield,
  Sun,
  TornadoIcon as Hurricane,
  Home,
  Eye,
  GuitarIcon as Golf,
  FileText,
  DollarSign,
  Link2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AGCChallengeSection() {
  const [answers, setAnswers] = useState({
    comfortIssues: null,
    protectionNeeds: null,
    specificSituation: null,
    // Conditional questions
    hotspots: null,
    shades: null,
    storms: null,
    burglary: null,
    fading: null,
    golfCourse: null,
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Main question groups
  const mainQuestions = [
    {
      id: "comfortIssues",
      text: "Are you experiencing comfort issues with your windows? (heat, glare, or constant shade needs)",
      icon: Sun,
      followUpQuestions: [
        {
          id: "hotspots",
          text: "Do you have specific hotspots in your building/home?",
          icon: Sun,
        },
        {
          id: "shades",
          text: "Do you need to keep your shades down most of the time?",
          icon: Home,
        },
        {
          id: "fading",
          text: "Are you concerned about UV damage and fading?",
          icon: Eye,
        },
      ],
    },
    {
      id: "protectionNeeds",
      text: "Are you looking for additional protection? (storms, security, or privacy)",
      icon: Shield,
      followUpQuestions: [
        {
          id: "storms",
          text: "Are you concerned about severe storms and impact protection?",
          icon: Hurricane,
        },
        {
          id: "burglary",
          text: "Would you like to enhance your security against break-ins?",
          icon: Shield,
        },
      ],
    },
    {
      id: "specificSituation",
      text: "Do you have any specific situation? (golf course, waterfront property)",
      icon: Golf,
      followUpQuestions: [
        {
          id: "golfCourse",
          text: "Is your property on or near a golf course?",
          icon: Golf,
        },
      ],
    },
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => {
      const newAnswers = { ...prev, [questionId]: answer };

      // If answering a main question with "No", clear its follow-up answers
      if (!answer && mainQuestions.find((q) => q.id === questionId)) {
        const followUps = mainQuestions.find(
          (q) => q.id === questionId
        ).followUpQuestions;
        followUps.forEach((q) => {
          newAnswers[q.id] = null;
        });
      }

      return newAnswers;
    });
  };

  // Get current questions based on previous answers
  const getCurrentQuestions = () => {
    if (currentStep === 0) {
      return mainQuestions.map((q) => ({
        id: q.id,
        text: q.text,
        icon: q.icon,
      }));
    }

    const activeFollowUps = mainQuestions
      .filter((q) => answers[q.id] === true)
      .flatMap((q) => q.followUpQuestions);

    return activeFollowUps;
  };

  const currentQuestions = getCurrentQuestions();

  const handleNext = () => {
    if (currentStep === 0 && Object.values(answers).some((v) => v === true)) {
      setCurrentStep(1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepAnswered = () => {
    if (currentStep === 0) {
      return mainQuestions.every((q) => answers[q.id] !== null);
    }
    return getCurrentQuestions().every((q) => answers[q.id] !== null);
  };

  const hasRecommendations = () => {
    return Object.values(answers).includes(true);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <h2 className="text-4xl font-semibold mb-6 font-oswald tracking-tighter">
                <span className="text-[#054177]">Take The AGC</span>{" "}
                <span className="text-[#C03140]">Challenge</span>
              </h2>
              <div className="w-24 h-1 bg-[#C03140] mb-6"></div>

              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  For over three decades, American Glass Coatings has been
                  transforming properties across South Florida with innovative
                  window film solutions.
                </p>

                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#054177]">
                  <h3 className="text-xl font-semibold mb-4 text-[#054177]">
                    Why Take The Challenge?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-[#C03140] mr-2 flex-shrink-0 mt-1" />
                      <span>
                        Identify potential energy savings opportunities
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-[#C03140] mr-2 flex-shrink-0 mt-1" />
                      <span>
                        Discover security vulnerabilities in your property
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-[#C03140] mr-2 flex-shrink-0 mt-1" />
                      <span>Learn about storm protection solutions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-[#C03140] mr-2 flex-shrink-0 mt-1" />
                      <span>
                        Enhance your comfort and protect your investments
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Progress Steps */}
            <div className="mt-8 flex items-center justify-center gap-4">
              {[0, 1].map((step) => (
                <div
                  key={step}
                  className={`h-2 w-12 rounded-full transition-colors duration-300 ${
                    step === currentStep
                      ? "bg-[#C03140]"
                      : step < currentStep
                      ? "bg-[#054177]"
                      : "bg-gray-200"
                  }`}
                />
              ))}
            </div>

            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#054177] opacity-5 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Right Column - Quiz */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div
                  key={`step-${currentStep}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="text-lg font-medium text-[#054177] mb-6">
                    {currentStep === 0
                      ? "Let's identify your needs:"
                      : "Tell us more about your specific concerns:"}
                  </div>

                  {currentQuestions.map((question) => (
                    <motion.div
                      key={question.id}
                      className="border-b border-gray-100 pb-6 last:border-0"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex items-start gap-4">
                        <question.icon className="h-6 w-6 text-[#054177] flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <p className="text-lg font-medium mb-3">
                            {question.text}
                          </p>
                          <div className="flex gap-3">
                            <Button
                              variant="outline"
                              className={`flex-1 ${
                                answers[question.id] === true
                                  ? "bg-[#054177] text-white"
                                  : ""
                              }`}
                              onClick={() => handleAnswer(question.id, true)}
                            >
                              Yes
                            </Button>
                            <Button
                              variant="outline"
                              className={`flex-1 ${
                                answers[question.id] === false
                                  ? "bg-[#C03140] text-white"
                                  : ""
                              }`}
                              onClick={() => handleAnswer(question.id, false)}
                            >
                              No
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  <div className="flex justify-between pt-4">
                    {currentStep > 0 && (
                      <Button
                        variant="outline"
                        onClick={handlePrevious}
                        className="flex items-center gap-2"
                      >
                        <ArrowRight className="h-4 w-4 rotate-180" />
                        Previous
                      </Button>
                    )}
                    <div className="flex-1" />
                    {(currentStep === 0 || currentQuestions.length > 0) && (
                      <Button
                        onClick={handleNext}
                        disabled={!currentStepAnswered()}
                        className="flex items-center gap-2 bg-[#054177] text-white hover:bg-[#054177]/90"
                      >
                        {currentStep === 0 ? "Next" : "Finish"}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-center space-y-6 py-8"
                >
                  {hasRecommendations() ? (
                    <>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className="text-2xl font-semibold text-[#054177] mb-4">
                          We Have Solutions For You!
                        </h3>
                        <p className="text-lg text-gray-700 mb-6">
                          Based on your answers, AGC can help improve your
                          property with our specialized window film solutions.
                        </p>
                      </motion.div>
                      <motion.a
                        href="tel:5615414005"
                        className="inline-flex items-center justify-center gap-2 bg-[#C03140] text-white px-8 py-4 rounded-md hover:bg-[#C03140]/90 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Phone className="h-5 w-5" />
                        Call (561) 541-4005 for a Free Consultation
                      </motion.a>
                      <motion.p
                        className="text-sm text-gray-600 mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        Let us help turn your standard glass into
                        "high-performance" glass
                      </motion.p>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <p className="text-lg text-gray-700">
                        While you may not have immediate concerns, we'd still
                        love to show you how our solutions can enhance your
                        property's comfort and value.
                      </p>
                      <Button
                        onClick={() => {
                          setCurrentStep(0);
                          setShowResult(false);
                          setAnswers(
                            Object.keys(answers).reduce(
                              (acc, key) => ({
                                ...acc,
                                [key]: null,
                              }),
                              {}
                            )
                          );
                        }}
                        className="mt-6 bg-[#054177] text-white hover:bg-[#054177]/90"
                      >
                        Take the Challenge Again
                      </Button>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="font-semibold text-[#054177] mb-4 flex items-center text-lg">
                <Sun className="h-5 w-5 mr-2" />
                Energy & Efficiency
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.energystar.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#C03140] flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-[#C03140] rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:translate-x-1 transition-transform">
                      EnergyStar.gov: Reducing Supplemental Loads
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="http://aceee.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#C03140] flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-[#C03140] rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:translate-x-1 transition-transform">
                      American Council for an Energy-Efficient Economy
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.resnet.us/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#C03140] flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-[#C03140] rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:translate-x-1 transition-transform">
                      Residential Energy Services Network (RESNET)
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="font-semibold text-[#054177] mb-4 flex items-center text-lg">
                <FileText className="h-5 w-5 mr-2" />
                Research & Standards
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.buildings.com/news/industry-news/articleid/14300/title/new-low-e-glass-or-window-film-a-comparison-to-help-you-decide/viewall/true.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#C03140] flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-[#C03140] rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:translate-x-1 transition-transform">
                      Buildings.com: Low-e Glass vs Window Film Comparison
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.usgbc.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#C03140] flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-[#C03140] rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:translate-x-1 transition-transform">
                      U.S. Green Building Council
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nfrc.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#C03140] flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-[#C03140] rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:translate-x-1 transition-transform">
                      National Fenestration Rating Council
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="font-semibold text-[#054177] mb-4 flex items-center text-lg">
                <DollarSign className="h-5 w-5 mr-2" />
                Financial Benefits
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.energy.gov/savings"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#C03140] flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-[#C03140] rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:translate-x-1 transition-transform">
                      Tax Credits, Rebates & Savings
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.irs.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#C03140] flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-[#C03140] rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:translate-x-1 transition-transform">
                      IRS.gov - Energy Incentives
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="font-semibold text-[#054177] mb-4 flex items-center text-lg">
                <Link2 className="h-5 w-5 mr-2" />
                Additional Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="http://thegreendestination.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#C03140] flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-[#C03140] rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:translate-x-1 transition-transform">
                      The Green Destination
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.doe2.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#C03140] flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-[#C03140] rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:translate-x-1 transition-transform">
                      DOE-2: Building Energy Analysis
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
