import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 2,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

const item2 = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 2,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};
const Loader = ({
  loading,
  setLoading,
}: {
  loading: boolean;
  setLoading: any;
}) => {
  return (
    <div
      key="loaders"
      className="bg-red-50 w-screen h-screen scrollbar-hide z-[10] flex justify-center p-2 relative"
    >
      <motion.div
        className="bg-red-50 w-full h-full scrollbar-hide z-[10] grid items-center justify-items-center"
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => setLoading(true)}
        key="loader"
      >
        <motion.div className="" variants={item}>
          <h1>Design</h1>
        </motion.div>
        <motion.div className="" variants={item}>
          <h1>Automation</h1>
        </motion.div>
        <div className="">
          <h1 className="text-3xl font-latoBold">Daco</h1>
        </div>
        <motion.div className="" variants={item}>
          <h1>Development</h1>
        </motion.div>
        <motion.div className="" variants={item}>
          <h1>Operations</h1>
        </motion.div>
        <motion.div
          className="border-8 border-black absolute h-full w-full"
          variants={item2}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;
