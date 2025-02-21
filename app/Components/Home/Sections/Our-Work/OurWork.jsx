import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "./Data/ProjectCardsData";
import ProjectCard from "./Components/ProjectCard";
import Title from "./Title";
import PrimaryButton from "@/app/Components/Buttons/PrimaryButton";

function OurWork() {
  // Calculate total projects across all categories
  const totalProjects = Object.values(projectsData).reduce(
    (acc, curr) => acc + (curr?.length || 0),
    0
  );

  return (
    <section className="relative min-h-[100svh] w-full py-8 sm:py-10 md:py-12 lg:py-16 overflow-hidden">
      <div className="container mx-auto px-0 xs:px-5 sm:px-6 lg:px-8 relative z-10 max-w-[2000px]">
        {/* Animated Title Section */}
        <Title />

        {/* Projects Grid with Filtering */}
        <div className="relative mt-12 xs:mt-16 sm:mt-20">
          <ProjectCard projectsData={projectsData} />
        </div>

        {/* View All Button - Enhanced Responsive Margins */}
        {totalProjects > 8 && (
          <motion.div
            className="text-center mt-16 xs:mt-20 sm:mt-24 md:mt-28 lg:mt-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 0.9] },
            }}
            viewport={{ once: true }}
          >
            <PrimaryButton
              variant="primary"
              size="large"
              withParticles={true}
              className="hardware-accelerated rounded-full 
                        text-sm xs:text-base sm:text-lg
                        px-6 py-3 xs:px-8 xs:py-4 sm:px-10"
            >
              View All Projects
            </PrimaryButton>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default OurWork;
