import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import HUDLabel from './HUDLabel';
import ProjectTitle from './ProjectTitle';

export default function ProjectSlide({ project, isActive }) {
  return (
    <div className="min-w-full h-full flex flex-col lg:flex-row relative overflow-hidden">
      {/* Background large index number */}
      <div className="absolute bottom-0 right-0 lg:right-16 select-none pointer-events-none">
        <span className="text-[120px] sm:text-[180px] lg:text-[240px] font-black text-foreground/[0.03] leading-none tracking-tighter">
          {project.index}
        </span>
      </div>

      {/* Left: Content */}
      <div className="flex-1 flex flex-col justify-center px-6 lg:px-16 py-12 lg:py-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <HUDLabel
              text={`REF: ${project.ref} // CHAIN_ID: ${project.chainId}`}
            />
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="font-mono text-xs text-green-600 tracking-wider">
                {project.status}
              </span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight text-foreground leading-none">
            <ProjectTitle
              projectId={project.id}
              className="text-5xl sm:text-6xl lg:text-8xl"
            />
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground mt-4 font-light max-w-lg">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            {project.techStack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1.5 border border-border text-muted-foreground tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>

          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center gap-3 mt-10 group"
          >
            <span className="font-mono text-sm tracking-wider uppercase text-primary font-medium">
              Open Dossier
            </span>
            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Right: Image */}
      <div className="flex-1 relative min-h-[300px] lg:min-h-0">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={
            isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }
          }
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* HUD overlay corners */}
          <div className="absolute top-4 left-4 z-10">
            <HUDLabel text={`IMG.${project.ref} // ${project.index}`} />
          </div>
          <div className="absolute bottom-4 right-4 z-10">
            <HUDLabel text={`SECTOR: ${project.chainId}`} />
          </div>
          {/* Corner brackets */}
          <div className="absolute top-2 left-2 w-6 h-6 border-l border-t border-muted-foreground/30 z-10" />
          <div className="absolute top-2 right-2 w-6 h-6 border-r border-t border-muted-foreground/30 z-10" />
          <div className="absolute bottom-2 left-2 w-6 h-6 border-l border-b border-muted-foreground/30 z-10" />
          <div className="absolute bottom-2 right-2 w-6 h-6 border-r border-b border-muted-foreground/30 z-10" />

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-background/40 lg:via-transparent" />
        </motion.div>
      </div>
    </div>
  );
}
