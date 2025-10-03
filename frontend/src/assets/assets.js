// Import all images
import Ananya from "./Ananya.png";
import App from "./App.png";
import Arjun from "./Arjun.png";
import Book_Course from "./Book_Course.png";
import Book_icon from "./Book_icon.png";
import Calendar from "./Calendar.png";
import Certified from "./Certified.png";
import Clock from "./Clock.png";
import Clock_Course from "./Clock_Course.png";
import College_Program from "./College_Program.png";
import Course from "./Course.png";
import Doubt from "./Doubt.png";
import Edu_icon from "./Edu_icon.png";
import Entrance_Program from "./Entrance_Program.png";
import facebook from "./facebook.png";
import Government_Program from "./Government_Program.png";
import Headset from "./Headset.png";
import Insta from "./Insta.png";
import Language from "./Language.png";
import Live from "./Live.png";
import live_icon from "./live_icon.png";
import Mathematics from "./Mathematics.png";
import Physics from "./Physics.png";
import Priya from "./Priya.png";
import Quotation_mark from "./Quotation_mark.png";
import Rahul from "./Rahul.png";
import Rating_icon from "./Rating_icon.png";
import School_Program from "./School_Program.png";
import Skill_Programs from "./Skill_Programs.png";
import Sneha from "./Sneha.png";
import Ssc from "./Ssc.png";
import Star_Course from "./Star_Course.png";
import Student_icon from "./Student_icon.png";
import Students from "./Students.png";
import Success from "./Success.png";
import Test from "./Test.png";
import Tiwtter from "./Tiwtter.png";
import Tracking from "./Tracking.png";
import Upsc from "./Upsc.png";
import Upsc_Programs from "./Upsc_Programs.png";
import Vikash from "./Vikash.png";
import Watch_icon from "./Watch_icon.png";
import Youtube from "./Youtube.png";
import Hero  from "./Hero.jpg";
import AppStore from "./AppStore.png";
import Google from "./Google.png"
// Export as object
export const assets = {
  Ananya,
  AppStore,
  App,
  Arjun,
  Book_Course,
  Book_icon,
  Calendar,
  Certified,
  Clock,
  Clock_Course,
  College_Program,
  Course,
  Doubt,
  Edu_icon,
  Entrance_Program,
  facebook,
  Government_Program,
  Google,
  Headset,
  Hero,
  Insta,
  Language,
  Live,
  live_icon,
  Mathematics,
  Physics,
  Priya,
  Quotation_mark,
  Rahul,
  Rating_icon,
  School_Program,
  Skill_Programs,
  Sneha,
  Ssc,
  Star_Course,
  Student_icon,
  Students,
  Success,
  Test,
  Tiwtter,
  Tracking,
  Upsc,
  Upsc_Programs,
  Vikash,
  Watch_icon,
  Youtube,
};



export const programs = [
  {
    title: "School Tuition",
    description: "Classes 4-12 covering CBSE, ICSE, and State syllabi",
    points: ["Interactive Live Classes", "Doubt Clearing Sessions", "Regular Assessments"],
    icon: School_Program,
  },
  {
    title: "College Tuition",
    description: "BSc, BCom, BA, BTech and other degree programs",
    points: ["Subject Experts", "Practical Learning", "Project Guidance"],
    icon: College_Program,
  },
  {
    title: "Entrance Coaching",
    description: "NEET, JEE, KEAM, CUET preparation",
    points: ["Mock Tests", "Previous Year Papers", "Rank Prediction"],
    icon: Entrance_Program,
  },
  {
    title: "Government Exams",
    description: "SSC, Bank, PSC, Railway exam preparation",
    points: ["Current Affairs", "Speed Training", "Interview Prep"],
    icon: Government_Program,
  },
  {
    title: "UPSC Coaching",
    description: "Prelims, Mains, Interview, Optional subjects",
    points: ["Comprehensive Coverage", "Essay Writing", "Personality Dev"],
    icon: Upsc_Programs
  },
  {
    title: "Skill Development",
    description: "Professional skills and certification courses",
    points: ["Industry Relevant", "Hands-on Practice", "Certificate"],
    icon: Skill_Programs,
  },
];


export const features = [
  {
    title: "Live Interactive Classes",
    description: "Attend live classes with real-time interaction, whiteboard sharing, and instant doubt resolution.",
    icon: Live,
  },
  {
    title: "Doubt Clearing",
    description: "24/7 doubt clearing through chat, voice calls, or dedicated doubt clearing sessions.",
    icon: Doubt,
  },
  {
    title: "Flexible Scheduling",
    description: "Choose class timings that fit your schedule with recorded sessions for missed classes.",
    icon: Calendar,
  },
  {
    title: "Test Series & Practice",
    description: "Regular mock tests, chapter-wise quizzes, and previous year question papers.",
    icon: Test,
  },
  {
    title: "Progress Tracking",
    description: "Detailed analytics of your performance with personalized improvement suggestions.",
    icon: Tracking,
  },
  {
    title: "Multi-language Support",
    description: "Learn in your preferred language with content available in Hindi, English, and regional languages.",
    icon: Language,
  },
  {
    title: "Certified Instructors",
    description: "Learn from experienced teachers with proven track records in their respective subjects.",
    icon: Certified,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical and academic support to ensure smooth learning experience.",
    icon: Headset,
  }
];


export const stats = [
  {
    value: "50,000+",
    label: "Active Students",
    description: "Learning with us",
    icon: Students,
  },
  {
    value: "500+",
    label: "Courses Available",
    description: "Across all categories",
    icon: Course,
  },
  {
    value: "98%",
    label: "Success Rate",
    description: "In competitive exams",
    icon: Success,
  },
  {
    value: "10,000+",
    label: "Hours of Content",
    description: "High-quality videos",
    icon: Clock,
  }
];

export const courses = [
  {
    id: 1,
    title: "Complete Mathematics for Class 10 CBSE",
    instructor: "Dr. Rajesh Kumar",
    duration: "6 months",
    lessons: 180,
    rating: 4.8,
    students: 12500,
    price: 2999,
    oldPrice: 8999,
    discount: "44% OFF",
    level: "Advanced",
    tags: ["Popular"],
    image: Mathematics,
  },
  {
    id: 2,
    title: "CBSE Class 12 Physics Complete Course",
    instructor: "Prof. Meera Sharma",
    duration: "4 months",
    lessons: 120,
    rating: 4.7,
    students: 8900,
    price: 2999,
    oldPrice: 4999,
    discount: "40% OFF",
    level: "Intermediate",
    tags: [],
    image:Physics,
  },
  {
    id: 3,
    title: "UPSC Prelims & Mains Strategy 2024",
    instructor: "IAS Priya Joshi",
    duration: "12 months",
    lessons: 300,
    rating: 4.9,
    students: 15600,
    price: 7999,
    oldPrice: 12999,
    discount: "38% OFF",
    level: "Expert",
    tags: ["Popular"],
    image: Upsc,
  },
  {
    id: 4,
    title: "SSC CGL Complete Preparation",
    instructor: "Amit Verma",
    duration: "5 months",
    lessons: 150,
    rating: 4.6,
    students: 6700,
    price: 3499,
    oldPrice: 5999,
    discount: "42% OFF",
    level: "Intermediate",
    tags: [],
    image: Ssc,
  },
];


export const testimonials = [
  {
    id: 1,
    rating: 5,
    name: "Priya Sharma",
    title: "NEET 2024 AIR 156",
    course: "NEET",
    quote: "EduPlatform's NEET coaching was  exceptional. The structured approach and regular mock tests helped me achieve my dream of getting into AIIMS.",
    image: Priya,
  },
  {
    id: 2,
    rating: 5,
    name: "Arjun Patel",
    title: "JEE Advanced AIR 89",
    course: "JEE",
    quote: "The doubt clearing sessions and personalized attention from teachers made all the difference. Highly recommend for JEE preparation.",
    image: Arjun,
  },
  {
    id: 3,
    rating: 5,
    name: "Sneha Reddy",
    title: "Class 12 CBSE - 98.2%",
    course: "CBSE",
    quote: "The interactive classes and comprehensive study material helped me score excellent marks in my boards. The teachers are very supportive.",
    image: Sneha,
  },
  {
    id: 4,
    rating: 5,
    name: "Rahul Kumar",
    title: "UPSC CSE 2023 - Rank 45",
    course: "UPSC",
    quote: "EduPlatform's UPSC course is comprehensive with excellent current affairs coverage. The essay writing sessions were particularly helpful.",
    image: Rahul,
  },
  {
    id: 5,
    rating: 5,
    name: "Ananya Singh",
    title: "SSC CGL 2023 Selected",
    course: "SSC",
    quote: "The speed training and mock tests for SSC were exactly what I needed. The quantitative aptitude sessions boosted my confidence significantly.",
    image: Ananya,
  },
  {
    id: 6,
    rating: 5,
    name: "Vikash Mehta",
    title: "Banking PO - SBI",
    course: "Banking",
    quote: "The banking exam preparation course is well-structured with focus on reasoning and quantitative aptitude. Cleared SBI PO in first attempt!",
    image: Vikash,
  },
];
