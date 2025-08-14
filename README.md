# CMPT 415 Course Information Frontend

A modern, responsive web application showcasing course information for CMPT 415 - Special Topics in Software Engineering at Simon Fraser University.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Project Cards**: Expandable cards with detailed project information
- **Modern UI**: Clean, professional design with smooth animations
- **Accessibility**: Keyboard navigation and screen reader friendly
- **Performance**: Fast loading with optimized components

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom React components
- **State Management**: React hooks (useState)

## 📋 Course Information Displayed

### Eligibility Criteria

- Good fit indicators for prospective students
- Prerequisites and selection process
- GPA requirements and relevant experience

### Course Structure

- Meeting format and time commitment
- Assessment methods and licensing requirements
- Weekly hour expectations

### Available Projects

- **iCradle**: Healthcare delivery system for pregnant women
- **CBR**: Community-based rehabilitation services platform

Each project includes:

- Tech stack requirements
- Required and useful skills
- Development needs and real-world impact

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main homepage
├── components/
│   ├── ProjectCard.tsx      # Interactive project display cards
│   └── Section.tsx          # Reusable section wrapper
└── data/
    └── courseInfo.js        # Course and project data
```

## 🎨 Design Features

- **Hero Section**: Eye-catching gradient header with course title
- **Card-based Layout**: Clean, organized information presentation
- **Color-coded Sections**: Visual distinction between different content areas
- **Smooth Animations**: Hover effects and transitions for better UX
- **Typography**: Balanced text layout with proper hierarchy

## 📱 Responsive Breakpoints

- **Mobile**: < 640px - Single column layout
- **Tablet**: 640px - 1024px - Optimized spacing and typography
- **Desktop**: > 1024px - Multi-column grid layouts

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd course-info-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Components

### ProjectCard

Interactive cards that display project information with expandable details including:

- Project overview and requirements
- Complete tech stack
- Required skills and useful experience
- Development needs and real-world impact

### Section

Reusable wrapper component ensuring consistent:

- Spacing and typography
- Section headings
- Responsive behavior

## 🌟 Highlights

- **Professional Quality**: Production-ready code with best practices
- **User Experience**: Intuitive navigation and clear information hierarchy
- **Performance**: Optimized loading and smooth interactions
- **Maintainable**: Clean code structure with reusable components
- **Accessible**: WCAG compliant with proper semantic HTML

## 📄 License

This project is part of the CMPT 415 coursework at Simon Fraser University.

---

Built with ❤️ for CMPT 415 students
