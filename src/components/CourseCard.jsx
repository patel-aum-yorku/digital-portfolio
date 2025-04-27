// src/components/CourseCard.jsx
import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { FiChevronUp } from 'react-icons/fi';

/**
 * Chooses a Tailwind font‐size class based on name length
 */
function getNameSizeClass(name) {
  const len = name.length;
  if (len > 50) return 'text-sm';       // very long titles
  if (len > 30) return 'text-base';     // moderately long
  return 'text-lg md:text-xl';          // short titles
}

export default function CourseCard({ code, name, desc }) {
  const nameSize = getNameSizeClass(name);

  return (
    <Disclosure defaultOpen as="div" className="snap-center flex-shrink-0 w-64 h-64">
      {({ open }) => (
        <div className="flex flex-col h-full">
          {/* Header always same height */}
          <DisclosureButton
            className="
              w-full px-4 py-3 
              bg-white/10 backdrop-blur-lg border border-white/20 
              rounded-t-lg 
              flex flex-col items-center text-center gap-1
              flex-shrink-0
            "
          >
            <div className="text-sm text-amber-300 font-medium">{code}</div>
            <div className={`${nameSize} text-white font-semibold break-words`}>
              {name}
            </div>
            <FiChevronUp
              className={`w-5 h-5 text-white transition-transform mt-1 ${
                open ? 'rotate-180' : ''
              }`}
            />
          </DisclosureButton>

          {/* Description scrolls if too long, fixed panel height */}
          <DisclosurePanel
            className="
              flex-1 
              px-4 py-2 
              bg-white/5 text-gray-200 
              rounded-b-lg 
              overflow-y-auto 
              max-h-32
            "
          >
            {desc}
          </DisclosurePanel>
        </div>
      )}
    </Disclosure>
  );
}
