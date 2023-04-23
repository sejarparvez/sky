import { motion } from "framer-motion";

function Animation() {
  const transition = { type: "spring", duration: 2.5 };

  return (
    <div className="  relative mx-auto mb-10 flex w-fit items-center justify-center rounded-full bg-black px-6 py-4 text-white md:mx-0">
      <motion.div
        initial={{ left: "238px" }}
        whileInView={{ left: "8px" }}
        transition={{ ...transition, type: "tween" }}
        className=" absolute left-2 z-[1] h-[80%] w-20 rounded-[3.5rem] bg-pink"
      ></motion.div>
      <span className="z-[2] text-2xl font-bold">sky Architect & interior</span>
    </div>
  );
}

export default Animation;
