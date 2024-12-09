// src/constants/index.jsx
import React from "react";
import {
  Flower,
  Sparkle,
  Feather,
  Twitter,
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
// import { Leaf, Heart, Droplet, ShieldCheck } from 'lucide-react';
import cocoImg from "../assets/coconut1.jpg";
import coco1Img from "../assets/coconut2.jpg";

const K = {
  NAVLINKS: [
    {
      id: "home",
      name: "Home",
      icon: <Flower className="w-6 h-6" />,
      color: "text-rose-500",
    },
    {
      id: "about",
      name: "Our Story",
      icon: <Feather className="w-6 h-6" />,
      color: "text-emerald-500",
    },
    {
      id: "products",
      name: "Products",
      icon: <Sparkle className="w-6 h-6" />,
      color: "text-amber-500",
    },
    {
      id: "contact",
      name: "Contact",
      icon: <MapPin className="w-6 h-6" />,
      color: "text-emerald-500",
    },
  ],

  SOCIAL_LINKS: [
    {
      icon: Twitter,
      href: "#",
      color: "hover:text-blue-400",
    },
    {
      icon: Facebook,
      href: "#",
      color: "hover:text-indigo-500",
    },
    {
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-500",
    },
  ],

  MENU_SECTIONS: [
    {
      title: "Explore",
      links: [
        { name: "Home", href: "#home" },
        { name: "Products", href: "#products" },
        { name: "About", href: "#about" },
        { name: "Contact Us", href: "#contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Shipping", href: "#" },
        { name: "Returns", href: "#" },
        { name: "FAQs", href: "#" },
        { name: "Policies", href: "#" },
      ],
    },
  ],

  CONTACT_INFO: [
    {
      icon: MapPin,
      text: "123 Coconut Grove, Tropical Business Park",
    },
    {
      icon: Phone,
      text: "+1 (555) JOYA-COCO",
    },
    {
      icon: Mail,
      text: "hello@joyafoods.com",
    },
  ],

  HERO_IMAGES: [{ src: cocoImg }, { src: coco1Img }],

  TESTIMONIALS: [
    {
      text: "Joya Foods has been a game-changer in our approach to coconut products. Their commitment to quality and innovation is unmatched. Every product feels like a fresh, natural experience that truly enhances our daily nutrition.",
      author: "John Perry",
    },
    {
      text: "The sustainability and ethical practices of Joya Foods set them apart. From sourcing to processing, their dedication to environmental responsibility is truly impressive. Their coconut products are not just delicious, but also conscientious.",
      author: "Sarah Williams",
    },
    {
      text: "Joya Foods' coconut range has become a staple in our household. The purity, taste, and nutritional value of their products are exceptional. It's refreshing to find a brand that prioritizes both health and flavor.",
      author: "Michael Chen",
    },
    {
      text: "Working with Joya Foods has transformed our product lineup. Their innovative coconut solutions and unwavering support have allowed us to offer our customers truly unique and high-quality offerings.",
      author: "Olivia Gonzalez",
    },
  ],

  BRAND_INFO: {
    name: "Joya Foods",
    description: "Elevating nutrition through innovative coconut solutions.",
    icon: Flower,
    TEXT: {
      title: "Welcome to Joya Foods!",
      subtitle: "'Nature's bounty, crafted with precision.",
      buttonText: "Discover Our Products",
    },
  },

  ABOUT_SECTION: {
    title: "Our Coconut Journey",
    subtitle: "Transforming coconuts into exceptional nutritional experiences.",
    story: {
      title: "Our Story: Rooted in Natural Innovation",
      description:
        "Joya Foods was born from a passion for coconuts and a commitment to bringing the highest quality coconut products to your table. We've overcome challenges through innovative processing techniques that preserve the natural goodness of coconuts, ensuring every product delivers maximum nutrition and flavor.",
    },
    mission: {
      title: "Our Mission: Nourishing Lives Naturally",
      description:
        "At Joya Foods, we're dedicated to transforming coconuts into nutritious, delicious products that support your health and well-being. Our team works tirelessly to develop innovative coconut solutions that are pure, preservative-free, and aligned with your lifestyle, bringing the best of nature directly to you.",
    },
  },
};

export default K;
