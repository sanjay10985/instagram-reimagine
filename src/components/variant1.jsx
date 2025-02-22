import React from "react";
import { motion } from "framer-motion";

const Variant1 = () => (
  <motion.div
    className="relative w-full h-[800px] max-w-[800px] mx-auto  rounded-[85px] overflow-hidden bg-center bg-cover bg-no-repeat"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    {/* Video Background */}
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/demo.mp4" type="video/mp4" />
    </video>

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/10" />

    {/* Cutouts */}
    {/* Bottom-right cutout for category tab */}
    <div
      className="absolute bottom-0 right-0 w-24 h-24 bg-transparent rounded-[50%]"
      style={{ boxShadow: "-45px -45px 0 #F4F4F5" }}
    />

    {/* Category Tab at Bottom-Right */}
    <div className="absolute bottom-0 right-0 w-[50%] h-[250px] bg-zinc-100 rounded-tl-[85px] p-8">
      <h3 className="text-xl font-semibold mb-4 text-zinc-900">
        Explore Categories
      </h3>
      {/* Category buttons and navigation dots go here */}
      <motion.div
        className="flex flex-wrap gap-3"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {[
          { name: "Furniture", icon: "🪑" },
          { name: "Gaming", icon: "🎮" },
          { name: "Beauty", icon: "✨" },
          { name: "Baby", icon: "👶" },
        ].map((category) => (
          <motion.button
            key={category.name}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-[30px] hover:bg-zinc-800 transition-colors"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{category.icon}</span>
            <span className="text-sm">{category.name}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mt-4">
        <motion.div
          className="w-2 h-2 rounded-full bg-zinc-900"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8 }}
        />
        <motion.div
          className="w-2 h-2 rounded-full bg-zinc-900/30"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9 }}
        />
        <motion.div
          className="w-2 h-2 rounded-full bg-zinc-900/30"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
        />
        <motion.div
          className="w-2 h-2 rounded-full bg-zinc-900/30"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.1 }}
        />
      </div>
    </div>

    {/* Play Button (original position) */}
    <div className="absolute right-0 top-[50%] translate-y-[-50%] flex items-center border-l-[15px] bg-zinc-100 border-t-[15px] border-b-[15px] border-zinc-100 rounded-l-[1000px]">
      <motion.button
        className="relative z-10 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-2xl hover:bg-amber-400 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 0 0 0px rgba(251, 191, 36, 0.4)",
            "0 0 0 10px rgba(251, 191, 36, 0)",
          ],
        }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
      >
        →
      </motion.button>
    </div>
  </motion.div>
);

export default Variant1;
