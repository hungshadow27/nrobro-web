"use client";

import Link from "next/link";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/UI/Card";
import { Button } from "@/components/UI/Button";
import { Input } from "@/components/UI/Input";
import { Textarea } from "@/components/UI/Textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/Avatar";
import { Badge } from "@/components/UI/Badge";
import {
  Heart,
  MessageCircle,
  Share2,
  MoreHorizontal,
  ImageIcon,
  Send,
  Reply,
  ThumbsUp,
  Pin,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
import NavBar from "@/components/NavBar";

interface User {
  id: string;
  username: string;
  avatar: string;
  vipLevel?: number;
  isOnline?: boolean;
  title?: string;
}

interface Comment {
  id: string;
  author: User;
  content: string;
  createdAt: Date;
  likes: number;
  replies: Comment[];
  isLiked?: boolean;
  isEdited?: boolean;
}

interface Post {
  id: string;
  author: User;
  content: string;
  images?: string[];
  createdAt: Date;
  likes: number;
  comments: Comment[];
  shares: number;
  isLiked?: boolean;
  isPinned?: boolean;
  category?: string;
}

const CommunityPage = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      author: {
        id: "user1",
        username: "DragonMaster2024",
        avatar: "/placeholder.svg?height=40&width=40&text=DM",
        vipLevel: 5,
        isOnline: true,
        title: "Cao Thủ Võ Thuật",
      },
      content: `Vừa hoàn thành sự kiện Vì Vũ Bái Biến! 🔥 
      
Sau 3 tuần chiến đấu không ngừng nghỉ, cuối cùng mình cũng đạt được Top 10! Cảm ơn team đã support nhiệt tình 💪

Một số tips cho ae muốn tham gia:
- Chuẩn bị đội hình cân bằng (tank + damage + support)
- Luyện combo trước khi vào ranked
- Đừng quên buff trước mỗi trận!

#DragonBall #Tournament #Gaming`,
      images: [
        "/placeholder.svg?height=300&width=500&text=Victory+Screenshot",
        "/placeholder.svg?height=300&width=500&text=Ranking+Board",
      ],
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      likes: 156,
      shares: 23,
      isLiked: false,
      isPinned: true,
      category: "Achievement",
      comments: [
        {
          id: "c1",
          author: {
            id: "user2",
            username: "SaiyanPrince",
            avatar: "/placeholder.svg?height=32&width=32&text=SP",
            vipLevel: 3,
            title: "Chiến Binh Elite",
          },
          content:
            "Chúc mừng bro! Mình cũng đang cố gắng leo rank, có thể share thêm về combo không? 🙏",
          createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
          likes: 12,
          replies: [
            {
              id: "r1",
              author: {
                id: "user1",
                username: "DragonMaster2024",
                avatar: "/placeholder.svg?height=32&width=32&text=DM",
                vipLevel: 5,
                title: "Cao Thủ Võ Thuật",
              },
              content:
                "Sure bro! Mình sẽ làm video hướng dẫn chi tiết, stay tuned nhé! 😊",
              createdAt: new Date(Date.now() - 30 * 60 * 1000),
              likes: 8,
              replies: [],
            },
          ],
        },
        {
          id: "c2",
          author: {
            id: "user3",
            username: "KameHameHa",
            avatar: "/placeholder.svg?height=32&width=32&text=KH",
            vipLevel: 2,
          },
          content:
            "Quá đỉnh! Mình mới chỉ đạt rank Silver thôi 😅 Phải học hỏi nhiều từ các cao thủ",
          createdAt: new Date(Date.now() - 45 * 60 * 1000),
          likes: 5,
          replies: [],
        },
      ],
    },
    {
      id: "2",
      author: {
        id: "user4",
        username: "FusionWarrior",
        avatar: "/placeholder.svg?height=40&width=40&text=FW",
        vipLevel: 4,
        isOnline: false,
        title: "Thợ Săn Boss",
      },
      content: `Ai muốn team up đánh boss Frieza Golden không? 🤝

Mình đang tìm 2 người nữa cho team, yêu cầu:
- Level 60+
- Có kinh nghiệm đánh boss
- Online từ 20h-22h hàng ngày

Comment hoặc inbox nếu quan tâm!`,
      createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
      likes: 89,
      shares: 15,
      category: "LFG",
      comments: [
        {
          id: "c3",
          author: {
            id: "user5",
            username: "UltraInstinct",
            avatar: "/placeholder.svg?height=32&width=32&text=UI",
            vipLevel: 6,
          },
          content:
            "Mình có thể join! Level 65, main Goku UI. Add friend nhé: UltraInstinct#1234",
          createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
          likes: 3,
          replies: [],
        },
      ],
    },
  ]);

  const [newPostContent, setNewPostContent] = useState("");
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [newComment, setNewComment] = useState("");
  const [newReply, setNewReply] = useState("");

  // Mock current user
  const currentUser: User = {
    id: "currentUser",
    username: "YourUsername",
    avatar: "/placeholder.svg?height=40&width=40&text=YOU",
    vipLevel: 3,
    isOnline: true,
  };

  const handleCreatePost = () => {
    if (!newPostContent.trim()) return;

    const newPost: Post = {
      id: Date.now().toString(),
      author: currentUser,
      content: newPostContent,
      createdAt: new Date(),
      likes: 0,
      shares: 0,
      comments: [],
      category: "General",
    };

    setPosts([newPost, ...posts]);
    setNewPostContent("");
  };

  const handleLikePost = (postId: string) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const handleComment = (postId: string) => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: currentUser,
      content: newComment,
      createdAt: new Date(),
      likes: 0,
      replies: [],
    };

    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [...post.comments, comment],
            }
          : post
      )
    );

    setNewComment("");
  };

  const handleReply = (postId: string, commentId: string) => {
    if (!newReply.trim()) return;

    const reply: Comment = {
      id: Date.now().toString(),
      author: currentUser,
      content: newReply,
      createdAt: new Date(),
      likes: 0,
      replies: [],
    };

    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map((comment) =>
                comment.id === commentId
                  ? {
                      ...comment,
                      replies: [...comment.replies, reply],
                    }
                  : comment
              ),
            }
          : post
      )
    );

    setNewReply("");
    setReplyingTo(null);
  };

  const handleLikeComment = (
    postId: string,
    commentId: string,
    isReply = false,
    parentCommentId?: string
  ) => {
    setPosts(
      posts.map((post) => {
        if (post.id !== postId) return post;

        return {
          ...post,
          comments: post.comments.map((comment) => {
            if (isReply && comment.id === parentCommentId) {
              return {
                ...comment,
                replies: comment.replies.map((reply) =>
                  reply.id === commentId
                    ? {
                        ...reply,
                        isLiked: !reply.isLiked,
                        likes: reply.isLiked
                          ? reply.likes - 1
                          : reply.likes + 1,
                      }
                    : reply
                ),
              };
            } else if (!isReply && comment.id === commentId) {
              return {
                ...comment,
                isLiked: !comment.isLiked,
                likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
              };
            }
            return comment;
          }),
        };
      })
    );
  };

  const getVipBadge = (vipLevel?: number) => {
    if (!vipLevel) return null;
    return (
      <Badge
        className={`text-xs ${
          vipLevel >= 5
            ? "bg-yellow-500"
            : vipLevel >= 3
            ? "bg-purple-500"
            : "bg-blue-500"
        }`}
      >
        VIP {vipLevel}
      </Badge>
    );
  };

  const getCategoryBadge = (category?: string) => {
    if (!category) return null;
    const colors = {
      Achievement: "bg-green-500",
      LFG: "bg-blue-500",
      General: "bg-gray-500",
      Guide: "bg-orange-500",
    };
    return (
      <Badge
        className={`text-xs ${
          colors[category as keyof typeof colors] || "bg-gray-500"
        }`}
      >
        {category}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen">
      <div className="flex gap-2 items-center">
        <img
          className="w-[15px] h-[15px] object-cover"
          src="/18-1.png"
          alt="18+"
        />
        <span className="text-[12px]">
          Chơi quá 180 phút một ngày sẽ ảnh hưởng xấu đến sức khỏe.
        </span>
      </div>
      <section>
        <div className=" flex flex-col justify-between items-center w-full rounded-t-2xl bg-[url('/banner.jpg')] bg-cover bg-center">
          <NavBar />
          <img
            style={{ filter: "drop-shadow(3px 3px 2px white)" }}
            src="/LOGOdragon.png"
            alt=""
            width={300}
            className="py-12"
          />
        </div>
      </section>
      <div className="p-5 bg-orange-300">
        {/* Header */}
        <Card className="text-center mb-5">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            <span className=" text-black">CỘNG ĐỒNG CHIA SẺ</span>
          </h1>
          <p className="text-gray-700">Nơi giao lưu và chia sẻ</p>
        </Card>

        {/* Stats Bar */}

        {/* Create Post */}
        <Card className="bg-white  mb-6">
          <CardHeader>
            <CardTitle className="text-gray-700 flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src={currentUser.avatar || "/placeholder.svg"} />
                <AvatarFallback>
                  {currentUser.username.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              Chia sẻ suy nghĩ của bạn...
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <Textarea
              placeholder="Bạn đang nghĩ gì về Dragon Ball? Chia sẻ kinh nghiệm, thành tích hoặc tìm đồng đội..."
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              className="bg-white/10 border-gray-300 text-gray-700 placeholder:text-gray-700/50 min-h-[50px]"
            />
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="t hover:text-gray-700 hover:bg-white/10"
                >
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Ảnh
                </Button>
              </div>
              <Button
                onClick={handleCreatePost}
                disabled={!newPostContent.trim()}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600"
              >
                <Send className="w-4 h-4 mr-2" />
                Đăng bài
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Posts Feed */}
        <div className="space-y-3">
          {posts.map((post) => (
            <Card key={post.id} className="bg-white ">
              <CardContent className="p-0">
                {/* Post Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="w-12 h-12">
                          <AvatarImage
                            src={post.author.avatar || "/placeholder.svg"}
                          />
                          <AvatarFallback>
                            {post.author.username.slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        {post.author.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-500" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-gray-700 font-semibold">
                            {post.author.username}
                          </h3>
                          {getVipBadge(post.author.vipLevel)}
                          {post.isPinned && (
                            <Pin className="w-4 h-4 text-yellow-400" />
                          )}
                        </div>
                        {post.author.title && (
                          <p className="t text-sm">{post.author.title}</p>
                        )}
                        <div className="flex items-center gap-2 mt-1">
                          <p className="text-purple-400 text-xs">
                            {formatDistanceToNow(post.createdAt, {
                              addSuffix: true,
                              locale: vi,
                            })}
                          </p>
                          {getCategoryBadge(post.category)}
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="t hover:text-gray-700"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Post Content */}
                  <div className="mb-4">
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                      {post.content}
                    </p>
                  </div>

                  {/* Post Images */}
                  {post.images && post.images.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 mb-4 rounded-lg overflow-hidden">
                      {post.images.map((image, index) => (
                        <img
                          key={index}
                          src="/5.png"
                          alt={`Post image ${index + 1}`}
                          className="w-full h-48 object-cover hover:scale-105 transition-transform cursor-pointer"
                        />
                      ))}
                    </div>
                  )}

                  {/* Post Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-6">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleLikePost(post.id)}
                        className={`t hover:text-gray-700 ${
                          post.isLiked ? "text-red-400" : ""
                        }`}
                      >
                        <Heart
                          className={`w-5 h-5 mr-2 ${
                            post.isLiked ? "fill-current" : ""
                          }`}
                        />
                        {post.likes}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          setSelectedPost(
                            selectedPost === post.id ? null : post.id
                          )
                        }
                        className="t hover:text-gray-700"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        {post.comments.length}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="t hover:text-gray-700"
                      >
                        <Share2 className="w-5 h-5 mr-2" />
                        {post.shares}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Comments Section */}
                {selectedPost === post.id && (
                  <div className="border-t border-white/10 bg-white/5">
                    <div className="p-6">
                      {/* Comment Form */}
                      <div className="flex gap-3 mb-6">
                        <Avatar className="w-8 h-8">
                          <AvatarImage
                            src={currentUser.avatar || "/placeholder.svg"}
                          />
                          <AvatarFallback>
                            {currentUser.username.slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 flex gap-2">
                          <Input
                            placeholder="Viết bình luận..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="bg-white/10 border-gray-500 text-gray-700 placeholder:text-gray-700/50"
                            onKeyPress={(e) =>
                              e.key === "Enter" && handleComment(post.id)
                            }
                          />
                          <Button
                            onClick={() => handleComment(post.id)}
                            size="sm"
                            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600"
                          >
                            <Send className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Comments List */}
                      <div className="space-y-1">
                        {post.comments.map((comment) => (
                          <div key={comment.id} className="space-y-1">
                            {/* Main Comment */}
                            <div className="flex gap-3">
                              <Avatar className="w-8 h-8">
                                <AvatarImage
                                  src={
                                    comment.author.avatar || "/placeholder.svg"
                                  }
                                />
                                <AvatarFallback>
                                  {comment.author.username.slice(0, 2)}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="bg-white/10 rounded-lg p-3">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="text-gray-700 font-semibold text-sm">
                                      {comment.author.username}
                                    </span>
                                    {getVipBadge(comment.author.vipLevel)}
                                    <span className="text-purple-400 text-xs">
                                      {formatDistanceToNow(comment.createdAt, {
                                        addSuffix: true,
                                        locale: vi,
                                      })}
                                    </span>
                                  </div>
                                  <p className="text-gray-500 text-sm">
                                    {comment.content}
                                  </p>
                                </div>
                                <div className="flex items-center gap-4 mt-2">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() =>
                                      handleLikeComment(post.id, comment.id)
                                    }
                                    className={`text-purple-400 hover:text-gray-700 text-xs ${
                                      comment.isLiked ? "text-red-400" : ""
                                    }`}
                                  >
                                    <ThumbsUp
                                      className={`w-3 h-3 mr-1 ${
                                        comment.isLiked ? "fill-current" : ""
                                      }`}
                                    />
                                    {comment.likes}
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() =>
                                      setReplyingTo(
                                        replyingTo === comment.id
                                          ? null
                                          : comment.id
                                      )
                                    }
                                    className="text-purple-400 hover:text-gray-700 text-xs"
                                  >
                                    <Reply className="w-3 h-3 mr-1" />
                                    Trả lời
                                  </Button>
                                </div>

                                {/* Reply Form */}
                                {replyingTo === comment.id && (
                                  <div className="flex gap-2 mt-3">
                                    <Avatar className="w-6 h-6">
                                      <AvatarImage
                                        src={
                                          currentUser.avatar ||
                                          "/placeholder.svg"
                                        }
                                      />
                                      <AvatarFallback>
                                        {currentUser.username.slice(0, 2)}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 flex gap-2">
                                      <Input
                                        placeholder="Trả lời bình luận..."
                                        value={newReply}
                                        onChange={(e) =>
                                          setNewReply(e.target.value)
                                        }
                                        className="bg-white/10 border-white/30 text-gray-700 placeholder:text-gray-700/50 text-sm"
                                        onKeyPress={(e) =>
                                          e.key === "Enter" &&
                                          handleReply(post.id, comment.id)
                                        }
                                      />
                                      <Button
                                        onClick={() =>
                                          handleReply(post.id, comment.id)
                                        }
                                        size="sm"
                                        className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600"
                                      >
                                        <Send className="w-3 h-3" />
                                      </Button>
                                    </div>
                                  </div>
                                )}

                                {/* Replies */}
                                {comment.replies.length > 0 && (
                                  <div className="ml-6 mt-3 space-y-1">
                                    {comment.replies.map((reply) => (
                                      <div
                                        key={reply.id}
                                        className="flex gap-3"
                                      >
                                        <Avatar className="w-6 h-6">
                                          <AvatarImage
                                            src={
                                              reply.author.avatar ||
                                              "/placeholder.svg"
                                            }
                                          />
                                          <AvatarFallback>
                                            {reply.author.username.slice(0, 2)}
                                          </AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1">
                                          <div className="bg-white/5 rounded-lg p-2">
                                            <div className="flex items-center gap-2 mb-1">
                                              <span className="text-gray-700 font-semibold text-xs">
                                                {reply.author.username}
                                              </span>
                                              {getVipBadge(
                                                reply.author.vipLevel
                                              )}
                                              <span className="text-purple-400 text-xs">
                                                {formatDistanceToNow(
                                                  reply.createdAt,
                                                  {
                                                    addSuffix: true,
                                                    locale: vi,
                                                  }
                                                )}
                                              </span>
                                            </div>
                                            <p className="text-gray-500 text-xs">
                                              {reply.content}
                                            </p>
                                          </div>
                                          <div className="flex items-center gap-4 mt-1">
                                            <Button
                                              variant="ghost"
                                              size="sm"
                                              onClick={() =>
                                                handleLikeComment(
                                                  post.id,
                                                  reply.id,
                                                  true,
                                                  comment.id
                                                )
                                              }
                                              className={`text-purple-400 hover:text-gray-700 text-xs ${
                                                reply.isLiked
                                                  ? "text-red-400"
                                                  : ""
                                              }`}
                                            >
                                              <ThumbsUp
                                                className={`w-3 h-3 mr-1 ${
                                                  reply.isLiked
                                                    ? "fill-current"
                                                    : ""
                                                }`}
                                              />
                                              {reply.likes}
                                            </Button>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
