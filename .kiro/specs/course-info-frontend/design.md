# Design Document

## Overview

The CMPT 415 Course Information Frontend is a simple, clean website built with Next.js, React, and Tailwind CSS. The goal is to create a straightforward page that presents the course information in an easy-to-read format. Think of it like a modern course syllabus webpage that helps students quickly understand what CMPT 415 is about and whether they should take it.

The design will be simple but professional - no fancy animations or complex interactions, just good organization and clean styling that any undergraduate developer could build and maintain.

## Architecture

### Simple File Structure

Keep it straightforward with minimal files:

```
src/
├── app/
│   ├── layout.tsx          # Basic layout
│   ├── page.tsx            # Main page with all content
│   └── globals.css         # Tailwind and basic styles
├── components/
│   ├── ProjectCard.tsx     # Reusable card for projects
│   └── Section.tsx         # Simple section wrapper
└── data/
    └── courseInfo.js       # Course data as plain JavaScript
```

### Simple Approach

- **One main page** with all the course information
- **A few reusable components** for repeated elements like project cards
- **Plain JavaScript object** for storing course data
- **Basic React hooks** (useState) for simple interactions
- **Tailwind classes** for all styling

## Components and Interfaces

### Course Data Structure

Just a simple JavaScript object with all the course info:

```javascript
export const courseInfo = {
  title: "CMPT 415 - Special Topics in Software Engineering",
  instructor: "Dr. Brian",
  goodFitCriteria: [
    "Want to develop professional quality tools which help people",
    "3rd or 4th year student with 4+ upper division CS courses",
    // ... more items
  ],
  poorFitCriteria: [
    "Hesitant about learning new frameworks quickly",
    "Cannot commit 10h/week to coursework",
    // ... more items
  ],
  courseStructure: {
    meeting: "Online via Discord, Vancouver timezone",
    timeCommitment: "10 hours per week",
    assessment: "Code contributions and written reports",
    licensing: "All work must follow project licenses (like GPL)",
  },
};

export const projects = [
  {
    name: "iCradle",
    studentsNeeded: 4,
    description: "Healthcare system for pregnant women in Uganda...",
    techStack: ["Python/Flask", "React", "TypeScript", "Android/Kotlin"],
    skills: ["Android experience", "React/TypeScript", "Python"],
    // ... more details
  },
  // ... more projects
];
```

### Simple Components

#### ProjectCard Component

```jsx
function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="border rounded-lg p-6 hover:shadow-lg">
      <h3 className="text-xl font-bold">{project.name}</h3>
      <p className="text-gray-600">
        Looking for {project.studentsNeeded} students
      </p>
      {/* Basic show/hide for details */}
    </div>
  );
}
```

#### Section Component

```jsx
function Section({ title, children, className = "" }) {
  return (
    <section className={`mb-12 ${className}`}>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      {children}
    </section>
  );
}
```

## Data Models

### Simple Data Organization

All course information stored in plain JavaScript objects - no complex types or interfaces needed. Just organize the data logically:

- Course overview info
- Eligibility criteria (good fit vs poor fit)
- Course structure details
- Project information with tech stacks and requirements

## Error Handling

Keep error handling simple:

- Basic try/catch for any data loading
- Simple fallback text if something goes wrong
- Console.log for debugging during development

## Testing Strategy

Basic testing approach suitable for undergraduates:

- **Manual testing** in browser during development
- **Responsive testing** by resizing browser window
- **Basic accessibility** by trying to navigate with keyboard
- **Cross-browser testing** in Chrome, Firefox, Safari

## Responsive Design

Simple responsive approach using Tailwind:

- **Mobile-first** - design for phone first, then add larger screen styles
- **Basic breakpoints** - sm, md, lg for phone, tablet, desktop
- **Simple layouts** - stack things vertically on mobile, side-by-side on desktop
- **Readable text** - make sure text isn't too small or too wide

### Layout Strategy

- **Single column** on mobile phones
- **Two columns** on tablets for eligibility criteria
- **Grid layout** on desktop for project cards
- **Simple navigation** - just scroll down the page

## Styling Approach

### Tailwind CSS Basics

- Use utility classes for everything
- Consistent spacing with Tailwind's spacing scale (p-4, mb-6, etc.)
- Simple color scheme - grays, blues, maybe one accent color
- Basic hover effects on interactive elements

### Visual Design

- **Clean and minimal** - lots of white space
- **Good typography** - clear headings, readable body text
- **Simple cards** for projects and sections
- **Basic icons** if needed (maybe from Heroicons)
- **Consistent styling** - same button styles, same card styles throughout

## Performance

Simple performance considerations:

- **Next.js handles most optimization** automatically
- **Optimize images** using Next.js Image component
- **Keep bundle small** by not adding unnecessary dependencies
- **Fast loading** since it's mostly static content

## Accessibility

Basic accessibility that any student should implement:

- **Proper HTML structure** - use h1, h2, h3 in order
- **Alt text** for any images
- **Good color contrast** - dark text on light backgrounds
- **Keyboard navigation** - make sure you can tab through interactive elements
- **Descriptive link text** - no "click here" links

## Implementation Notes

### Development Workflow

1. Start with basic HTML structure in page.tsx
2. Add Tailwind classes for styling
3. Break repeated elements into simple components
4. Add basic interactivity with useState
5. Test on different screen sizes
6. Polish and refine

### Code Style

- **Simple and readable** - other students should be able to understand it
- **Consistent naming** - use clear variable and function names
- **Basic comments** for any complex logic
- **Standard React patterns** - functional components, hooks, props

This approach focuses on creating a solid, maintainable website that showcases good fundamental web development skills without over-engineering.
