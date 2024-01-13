
"use client";

import React, { useEffect, useRef } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project';

import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);


  return (
    <section
      ref={ref}
      id='projects'
      className='scroll-mt-28 mb-28'>
      <SectionHeading>
        My Projects
      </SectionHeading>
      <div>
        {
          projectsData.map((projsct, index) => (
            <React.Fragment key={index}>
              <Project {...projsct} />
            </React.Fragment>

          ))
        }
      </div>
    </section>
  )
}