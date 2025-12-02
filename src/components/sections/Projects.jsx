// ============================================
// COMPONENTS/SECTIONS/PROJECTS.JSX
// Section projets avec hover image
// ============================================

import { memo, useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../lib/i18n';
import { projects } from '../../data/content';
import { icons } from '../ui/Icons';
import { cn } from '../../lib/utils';

const ProjectItem = memo(function ProjectItem({
  project,
  onHoverEnter,
  onHoverLeave,
  onProjectHover,
}) {
  const { t } = useLanguage();

  const handleMouseEnter = () => {
    onHoverEnter?.();
    onProjectHover?.(project.image);
  };

  const handleMouseLeave = () => {
    onHoverLeave?.();
    onProjectHover?.(null);
  };

  return (
    <a
      href={project.url}
      className="projects__item hover-trigger"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="projects__name">{project.name}</div>
      <div className="projects__role">{t(project.role)}</div>
      <div className="projects__role">{project.year}</div>
      <div className="projects__arrow">{icons.arrow}</div>
    </a>
  );
});

export const Projects = memo(function Projects({ onHoverEnter, onHoverLeave, cursorPos }) {
  const { t } = useLanguage();
  const [activeImage, setActiveImage] = useState(null);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  // Preload images with Intersection Observer
  useEffect(() => {
    if (imagesPreloaded || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            projects.forEach((project) => {
              const img = new Image();
              img.src = project.image;
            });
            setImagesPreloaded(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [imagesPreloaded]);

  // Update hover image position
  useEffect(() => {
    if (activeImage && imageRef.current && cursorPos?.current) {
      const animate = () => {
        if (imageRef.current && cursorPos.current) {
          imageRef.current.style.left = `${cursorPos.current.x}px`;
          imageRef.current.style.top = `${cursorPos.current.y}px`;
        }
        if (activeImage) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [activeImage, cursorPos]);

  const handleProjectHover = (image) => {
    setActiveImage(image);
  };

  return (
    <section ref={sectionRef} className="section-padding" aria-labelledby="projects-heading">
      <div className="container">
        <h2 className="label" id="projects-heading">
          {t('label_projects')}
        </h2>

        <div className="projects__list">
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              project={project}
              onHoverEnter={onHoverEnter}
              onHoverLeave={onHoverLeave}
              onProjectHover={handleProjectHover}
            />
          ))}
        </div>
      </div>

      {/* Hover Image */}
      <img
        ref={imageRef}
        src={activeImage || ''}
        className={cn('projects__hover-image', activeImage && 'projects__hover-image--active')}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
    </section>
  );
});
