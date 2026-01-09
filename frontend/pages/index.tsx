
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Scene = dynamic(() => import("../components/Scene"), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-green-900 text-white overflow-hidden">
      <Scene />
      <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:1}}
        className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold">GOAT 🐐</h1>
        <p className="mt-2 opacity-80">Government Of All Tests</p>
      </motion.div>
    </div>
  );
}
