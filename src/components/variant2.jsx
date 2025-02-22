import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";

const Variant2 = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState("");

  return (
    <motion.div
      className="relative w-full h-[800px] mx-auto max-w-[800px] mt-8 rounded-[85px] overflow-hidden bg-zinc-50"
      initial={{ opacity: 0, y: 20 }}
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

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />

      {/* Decorative Elements */}
      <motion.div
        className="hidden md:block absolute top-0 left-[50%] w-24 h-24 bg-transparent rounded-[25%]"
        style={{ boxShadow: "-45px -45px 0 white" }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      />

      <motion.div
        className="hidden md:block absolute top-[100px] left-0 w-24 h-24 bg-transparent rounded-[50%]"
        style={{ boxShadow: "-45px -45px 0 white" }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
      />

      {/* User Info Header */}
      <motion.div
        className="absolute top-0 left-0 w-[50%] h-[100px] bg-white rounded-br-[20px] p-8 flex items-center space-x-4"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-0.5"
          whileHover={{ scale: 1.1 }}
        >
          <img
            src="/api/placeholder/48/48"
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </motion.div>
        <div>
          <h3 className="text-2xl font-semibold text-zinc-900">Sanjay Tomar</h3>
          <p className="text-sm text-zinc-500">2 hours ago</p>
        </div>
        <motion.button
          className="ml-auto text-zinc-600 hover:text-zinc-900"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <MoreHorizontal size={24} />
        </motion.button>
      </motion.div>

      {/* Interaction Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-6 bg-white/80 backdrop-blur-md"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={() => setIsLiked(!isLiked)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Heart
                size={28}
                className={
                  isLiked ? "fill-red-500 text-red-500" : "text-zinc-700"
                }
              />
            </motion.button>
            <motion.button
              onClick={() => setShowComments(!showComments)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MessageCircle size={28} className="text-zinc-700" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Share2 size={28} className="text-zinc-700" />
            </motion.button>
          </div>
          <motion.button
            onClick={() => setIsSaved(!isSaved)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Bookmark
              size={28}
              className={
                isSaved ? "fill-zinc-700 text-zinc-700" : "text-zinc-700"
              }
            />
          </motion.button>
        </div>

        <div className="space-y-2">
          <p className="font-semibold text-zinc-900">1,234 likes</p>
          <p className="text-zinc-700">
            <span className="font-semibold">Sanjay Tomar</span> Exploring new UI
            designs and pushing creative boundaries! 🎨✨
          </p>
        </div>

        {/* Comment Input */}
        <motion.div
          className="mt-4 flex items-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 bg-transparent border-none focus:outline-none text-zinc-700 placeholder-zinc-500"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <motion.button
            className="text-blue-500 font-semibold disabled:opacity-50"
            disabled={!comment.trim()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Post
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Comments Section */}
      <AnimatePresence>
        {showComments && (
          <motion.div
            className="absolute right-0 top-0 h-full w-[300px] bg-white/90 backdrop-blur-md p-6 overflow-y-auto"
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ type: "spring", damping: 25 }}
          >
            <h4 className="text-xl font-semibold mb-4">Comments</h4>
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="mb-4 p-3 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                  <p className="font-semibold text-sm">User_{i}</p>
                </div>
                <p className="text-sm text-zinc-600">
                  This design looks amazing! 🔥
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Variant2;
