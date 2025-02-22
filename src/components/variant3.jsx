"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";

const Variant3 = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(1024);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <motion.div
      className="relative w-full h-[800px] mx-auto max-w-[800px] mt-8 rounded-[85px] overflow-hidden bg-white shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />

      {/* Top-left cutout */}
      <div
        className="absolute top-0 left-0 w-[200px] h-[200px] bg-white"
        style={{
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
        }}
      />

      {/* Category Tab at Top-Left */}
      <motion.div
        className="absolute top-0 left-0 w-[50%] h-[100px] bg-white p-8 flex items-center"
        style={{
          clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
        }}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-4xl font-semibold text-zinc-900">Sanjay Tomar</h3>
      </motion.div>

      {/* Action buttons */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center">
        <div className="flex space-x-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLike}
          >
            <Heart
              className={`w-8 h-8 ${
                isLiked ? "text-red-500 fill-red-500" : "text-white"
              }`}
            />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowComments(!showComments)}
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Send className="w-8 h-8 text-white" />
          </motion.button>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsBookmarked(!isBookmarked)}
        >
          <Bookmark
            className={`w-8 h-8 ${
              isBookmarked ? "text-yellow-400 fill-yellow-400" : "text-white"
            }`}
          />
        </motion.button>
      </div>

      {/* Like count */}
      <motion.div
        className="absolute bottom-20 left-8 text-white text-lg font-semibold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        {likeCount.toLocaleString()} likes
      </motion.div>

      {/* More options button */}
      <motion.button
        className="absolute top-4 right-4 bg-white/20 rounded-full p-2"
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
        whileTap={{ scale: 0.9 }}
      >
        <MoreHorizontal className="w-6 h-6 text-white" />
      </motion.button>

      {/* Comments section */}
      <AnimatePresence>
        {showComments && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[40px] p-6 max-h-[50%] overflow-y-auto"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <h4 className="text-2xl font-semibold mb-4">Comments</h4>
            {/* Add your comments here */}
            <div className="space-y-4">
              <p>
                <strong>user1:</strong> Amazing video! 😍
              </p>
              <p>
                <strong>user2:</strong> Love the new design!
              </p>
              <p>
                <strong>user3:</strong> Can't wait to see more of these
                redesigns!
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Variant3;
