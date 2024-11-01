import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "02",
    img: "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Economic Information",
    des: "How do you think the country's growth rate has been... Let's dive in?",
    url: "/economic",
  },
  {
    id: "03",
    img: "https://dailytrust.com/wp-content/uploads/2021/04/Nigeria-Population-Problems.jpg",
    title: "Nigeria Population Data",
    des: "This data gives insight how how Nigeria population keeps growing",
    url: "/population",
  },
  {
    id: "04",
    img: "https://images.unsplash.com/photo-1613919517761-0d9e719d3244?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Migration Data",
    des: "This gives revelational insight into the country's migration ",
    url: "/migrant",
  },
];

export default function CardScreen() {
  return (
    <section>
      <div className="my-10"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-10 lg:pb-16">
        <Link to={`${projects[0].url}`}>
          <motion.article className="relative group shadow-lg overflow-hidden rounded-xl">
            {/* Image with a slight hover scale effect */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="h-72 w-full"
            >
              <img
                src={projects[0].img}
                alt={projects[0].title}
                height={600}
                width={1200}
                className="h-full w-full object-cover transition-transform duration-500 ease-in-out rounded-xl"
              />
            </motion.div>

            {/* Project Info Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <h3 className="text-xl font-bold text-white">
                {projects[0].title}
              </h3>
              <p className="text-sm text-gray-300 mt-2">{projects[0].des}</p>
            </div>

            {/* Icon at the bottom right */}
            <div className="absolute bottom-5 right-5 p-3 bg-black/70 rounded-full text-white transition-transform duration-500 ease-in-out group-hover:scale-125">
              <MoveUpRight className="w-6 h-6" />
            </div>
          </motion.article>
        </Link>

        <Link to={`${projects[2].url}`}>
          <motion.article className="relative group shadow-lg overflow-hidden rounded-xl">
            {/* Image with a slight hover scale effect */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="h-72 w-full"
            >
              <img
                src={projects[2].img}
                alt={projects[2].title}
                height={600}
                width={1200}
                className="h-full w-full object-cover transition-transform duration-500 ease-in-out rounded-xl"
              />
            </motion.div>

            {/* Project Info Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <h3 className="text-xl font-bold text-white">
                {projects[2].title}
              </h3>
              <p className="text-sm text-gray-300 mt-2">{projects[2].des}</p>
            </div>

            {/* Icon at the bottom right */}
            <div className="absolute bottom-5 right-5 p-3 bg-black/70 rounded-full text-white transition-transform duration-500 ease-in-out group-hover:scale-125">
              <MoveUpRight className="w-6 h-6" />
            </div>
          </motion.article>
        </Link>
        <Link
          to={`${projects[1].url}`}
          className="col-span-1 md:col-span-2 xl:col-span-1"
        >
          <motion.article className="relative group shadow-lg overflow-hidden rounded-xl ">
            {/* Image with a slight hover scale effect */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="h-72 w-full"
            >
              <img
                src={projects[1].img}
                alt={projects[1].title}
                height={600}
                width={1200}
                className="h-full w-full object-cover transition-transform duration-500 ease-in-out rounded-xl"
              />
            </motion.div>

            {/* Project Info Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <h3 className="text-xl font-bold text-white">
                {projects[1].title}
              </h3>
              <p className="text-sm text-gray-300 mt-2">{projects[1].des}</p>
            </div>

            {/* Icon at the bottom right */}
            <div className="absolute bottom-5 right-5 p-3 bg-black/70 rounded-full text-white transition-transform duration-500 ease-in-out group-hover:scale-125">
              <MoveUpRight className="w-6 h-6" />
            </div>
          </motion.article>
        </Link>
      </div>
    </section>
  );
}
