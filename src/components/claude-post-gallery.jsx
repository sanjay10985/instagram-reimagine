"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Share2, Bookmark } from "lucide-react";
import MaskedDiv from "./ui/masked-div";
import { SubscribeButton } from "./like-button";

const CurvedPost = ({ user, videoUrl, initialLikes, caption, timeAgo }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState(initialLikes);

  return (
    <motion.article
      className="bg-white mb-6 max-w-[470px] w-full rounded-[35px] overflow-hidden relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Curved Header */}
      <div className="relative h-[470px]  ">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoUrl || "/demo.mp4"} type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

        {/* Top-left curved cutout for user info */}
        <div className="absolute z-100 top-0 left-0 w-[200px] h-[70px] bg-white rounded-br-[25px] p-4 flex items-center space-x-3">
          <motion.div
            className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-100 p-0.5"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={user.avatar || "/api/placeholder/40/40"}
              alt={user.username}
              className="w-full h-full rounded-full object-cover"
            />
          </motion.div>
          <div>
            <h3 className="font-medium text-sm text-zinc-900">
              {user.username}
            </h3>
            <p className="text-xs text-zinc-500">{timeAgo}</p>
          </div>
        </div>

        <motion.div
          className="hidden md:block absolute top-0 left-[200px] w-24 h-24 bg-transparent rounded-[25%]"
          style={{ boxShadow: "-20px -45px 0 white" }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        />

        <motion.div
          className="hidden md:block absolute top-[70px] left-0 w-24 h-24 bg-transparent rounded-[50%]"
          style={{ boxShadow: "-50px -45px 0 white" }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
        />
      </div>

      {/* Actions Bar */}
      <div className="p-4 bg-zinc-50/90">
        <div className="flex items-center -ml-2">
          <SubscribeButton
            onClick={(liked) => setLikes(likes + (liked ? 1 : -1))}
          />
          <motion.button
            onClick={() => setShowComments(!showComments)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2"
          >
            <MessageCircle size={24} className="text-zinc-900" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2"
          >
            <Share2 size={24} className="text-zinc-900" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSaved(!isSaved)}
            className="p-2 ml-auto"
          >
            <Bookmark
              size={24}
              className={
                isSaved ? "fill-zinc-900 text-zinc-900" : "text-zinc-900"
              }
            />
          </motion.button>
        </div>

        {/* Likes & Caption */}
        <div className="mt-2">
          <div className="flex items-baseline ">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={likes}
                className="font-medium text-sm mr-1"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
              >
                {likes.toLocaleString()}
              </motion.span>
            </AnimatePresence>
            <span className="font-medium text-sm">likes</span>
          </div>
          <p className="mt-1 text-sm">
            <span className="font-medium mr-2">{user.username}</span>
            {caption}
          </p>
        </div>
      </div>
      <AnimatePresence>
        {showComments && (
          <motion.div
            className="absolute z-120 right-0 top-0 h-full w-[300px] bg-white/70 backdrop-blur-md p-6 overflow-y-auto"
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ type: "spring", damping: 25 }}
          >
            <h4 className="text-xl font-semibold text-zinc-800 mb-4">
              Comments
            </h4>
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="mb-3 p-3 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                  <p className="font-semibold text-sm">User_{i}</p>
                </div>
                <p className="text-xs text-zinc-600">
                  This design looks amazing! 🔥
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

const InstagramFeed = () => {
  const posts = [
    {
      id: 1,
      user: {
        username: "sanjay.tomar",
        avatar:
          "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      videoUrl: "/demo.mp4",
      likes: 1234,
      caption:
        "Reimagining Instagram UI with curved elements ✨ #uidesign #whatif",
      timeAgo: "2 hours ago",
    },
    {
      id: 2,
      user: {
        username: "design.weekly",
        avatar:
          "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      videoUrl: "/demo1.mp4",
      likes: 892,
      caption: "Exploring new possibilities in social media design 🎯",
      timeAgo: "4 hours ago",
    },
    {
      id: 3,
      user: {
        username: "ui.trends",
        avatar:
          "https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      videoUrl: "/demo2.mp4",
      likes: 2156,
      caption: "When curves meet content. A fresh take on the classic feed 🖤",
      timeAgo: "6 hours ago",
    },
  ];

  const ads = [
    {
      id: 2,
      videoUrl: "/ad2.mp4",
    },
    {
      id: 1,
      videoUrl: "/ad1.mp4",
    },

    {
      id: 3,
      videoUrl: "/ad3.mp4",
    },
  ];

  return (
    <div className="max-w-[470px] mx-auto py-4 px-0 space-y-8">
      {posts.map((post) => (
        <CurvedPost key={post.id} {...post} initialLikes={post.likes} />
      ))}
      <motion.div
        className="overflow-x-auto whitespace-nowrap py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.div
          className="flex relative  gap-4"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          {ads.map((item, index) => (
            <motion.div
              key={item.id}
              // whileHover={{ scale: 1.05, y: -5 }}
              // whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="min-w-full"
            >
              <MaskedDiv maskType="type-3" className="">
                <video
                  className="cursor-pointer transition-all duration-300"
                  autoPlay
                  loop
                  muted
                >
                  <source src={item.videoUrl} type="video/mp4" />
                </video>
              </MaskedDiv>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InstagramFeed;
