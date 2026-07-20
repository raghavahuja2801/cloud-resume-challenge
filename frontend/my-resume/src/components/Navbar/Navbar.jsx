// // Navbar.jsx - Updated mobile menu section
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import ThemeToggle from "./ThemeToggle";
// import "./Navbar.css";

// const navItems = [
//   { id: "home", label: "Home" },
//   { id: "about", label: "About" },
//   { id: "experience", label: "Experience" },
//   { id: "projects", label: "Projects" },
//   { id: "contact", label: "Contact" },
// ];

// export default function Navbar({ isDark, toggleTheme }) {
//   const [active, setActive] = useState("home");
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (!el) return;

//     window.scrollTo({
//       top: el.offsetTop - 80,
//       behavior: "smooth",
//     });

//     setMobileOpen(false);
//     document.body.style.overflow = '';
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 30);

//       const scroll = window.scrollY + 120;

//       navItems.forEach((item) => {
//         const section = document.getElementById(item.id);
//         if (!section) return;

//         if (
//           scroll >= section.offsetTop &&
//           scroll < section.offsetTop + section.offsetHeight
//         ) {
//           setActive(item.id);
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Toggle mobile menu with body scroll lock
//   // Toggle mobile menu with body scroll lock
//   const toggleMobileMenu = () => {
//     setMobileOpen(!mobileOpen);
//     if (!mobileOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }
//   };

//   return (
//     <>
//       <motion.header
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         className={`navbar ${scrolled ? "scrolled" : ""}`}
//       >
//         <div className="brand">
//           <button onClick={() => scrollToSection("home")}>Raghav</button>
//         </div>

//         <nav className="nav-pill">
//           {navItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => scrollToSection(item.id)}
//               className="nav-item"
//             >
//               {active === item.id && (
//                 <motion.span
//                   layoutId="active-pill"
//                   className="active-pill"
//                   transition={{
//                     type: "spring",
//                     stiffness: 400,
//                     damping: 30,
//                   }}
//                 />
//               )}
//               <span>{item.label}</span>
//             </button>
//           ))}
          
//         </nav>
// <ThemeToggle isDark={isDark} onClick={toggleTheme} />


        

//         <button
//           className="mobile-button"
//           onClick={toggleMobileMenu}
//           aria-label={mobileOpen ? "Close menu" : "Open menu"}
//           aria-expanded={mobileOpen}
//         >
//           <motion.div
//             animate={{ rotate: mobileOpen ? 90 : 0 }}
//             transition={{ duration: 0.2 }}
//           >
//             {mobileOpen ? <X size={22} /> : <Menu size={22} />}
//           </motion.div>
//         </button>
//       </motion.header>

//       <AnimatePresence>
//         {mobileOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="mobile-backdrop"
//               onClick={() => {
//                 setMobileOpen(false);
//                 document.body.style.overflow = '';
//               }}
//             />

//             <motion.div
//               initial={{ opacity: 0, y: -15 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//               className="mobile-menu"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="mobile-menu-items">
//                 {navItems.map((item) => (
//                   <button
//                     key={item.id}
//                     onClick={() => scrollToSection(item.id)}
//                   >
//                     {item.label}
//                   </button>
//                 ))}
//               </div>

//               <div className="mobile-menu-footer">
//                 <ThemeToggle
//                   isDark={isDark}
//                   onClick={toggleTheme}
//                 />
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import ThemeToggle from "./ThemeToggle";
// import "./Navbar.css";

// const navItems = [
//   { id: "home", label: "Home" },
//   { id: "about", label: "About" },
//   { id: "experience", label: "Experience" },
//   { id: "projects", label: "Projects" },
//   { id: "contact", label: "Contact" },
// ];

// export default function Navbar({ isDark, toggleTheme }) {
//   const [active, setActive] = useState("home");
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (!el) return;

//     window.scrollTo({
//       top: el.offsetTop - 80,
//       behavior: "smooth",
//     });

//     setMobileOpen(false);
//     document.body.style.overflow = ''; 
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 30);

//       const scroll = window.scrollY + 120;

//       navItems.forEach((item) => {
//         const section = document.getElementById(item.id);
//         if (!section) return;

//         if (
//           scroll >= section.offsetTop &&
//           scroll < section.offsetTop + section.offsetHeight
//         ) {
//           setActive(item.id);
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMobileMenu = () => {
//     setMobileOpen(!mobileOpen);
//     if (!mobileOpen) {
//         document.body.style.overflow = 'hidden';
//     } else {
//         document.body.style.overflow = '';
//     }
//   };

//   return (
//     <>
//       <motion.header
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         className={`navbar ${scrolled ? "scrolled" : ""}`}
//       >
//         <div className="brand">
//           <button onClick={() => scrollToSection("home")}>Raghav</button>
//         </div>

//         <nav className="nav-pill">
//           {navItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => scrollToSection(item.id)}
//               className="nav-item"
//             >
//               {active === item.id && (
//                 <motion.span
//                   layoutId="active-pill"
//                   className="active-pill"
//                   transition={{
//                     type: "spring",
//                     stiffness: 400,
//                     damping: 30,
//                   }}
//                 />
//               )}
//               <span>{item.label}</span>
//             </button>
//           ))}
          
//           {/* ThemeToggle inside nav-pill */}
//           <div className="theme-toggle-wrapper">
//             <ThemeToggle isDark={isDark} onClick={toggleTheme} />
//           </div>
//         </nav>

//         <button
//           className="mobile-button"
//           onClick={toggleMobileMenu}
//           aria-label={mobileOpen ? "Close menu" : "Open menu"}
//           aria-expanded={mobileOpen}
//         >
//           <motion.div
//             animate={{ rotate: mobileOpen ? 90 : 0 }}
//             transition={{ duration: 0.2 }}
//           >
//             {mobileOpen ? <X size={22} /> : <Menu size={22} />}
//           </motion.div>
//         </button>
//       </motion.header>

//       <AnimatePresence>
//         {mobileOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="mobile-backdrop"
//               onClick={() => {
//                 setMobileOpen(false);
//                 document.body.style.overflow = '';
//               }}
//             />

//             <motion.div
//               initial={{ opacity: 0, y: -15 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//               className="mobile-menu"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="mobile-menu-items">
//                 {navItems.map((item) => (
//                   <button
//                     key={item.id}
//                     onClick={() => scrollToSection(item.id)}
//                   >
//                     {item.label}
//                   </button>
//                 ))}
//               </div>

//               <div className="mobile-menu-footer">
//                 <ThemeToggle
//                   isDark={isDark}
//                   onClick={toggleTheme}
//                 />
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ isDark, toggleTheme }) {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: "smooth",
    });

    setMobileOpen(false);
    document.body.style.overflow = ''; 
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const scroll = window.scrollY + 120;

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        if (
          scroll >= section.offsetTop &&
          scroll < section.offsetTop + section.offsetHeight
        ) {
          setActive(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
    if (!mobileOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`navbar ${scrolled ? "scrolled" : ""}`}
      >
        <div className="brand">
          <button onClick={() => scrollToSection("home")}>Raghav</button>
        </div>

        <nav className="nav-pill">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="nav-item"
            >
              {active === item.id && (
                <motion.span
                  layoutId="active-pill"
                  className="active-pill"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
              <span>{item.label}</span>
            </button>
          ))}
          
          <ThemeToggle isDark={isDark} onClick={toggleTheme} />
        </nav>

        <button
          className="mobile-button"
          onClick={toggleMobileMenu}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <motion.div
            animate={{ rotate: mobileOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.div>
        </button>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-backdrop"
              onClick={() => {
                setMobileOpen(false);
                document.body.style.overflow = '';
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mobile-menu"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mobile-menu-items">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="mobile-menu-footer">
                <ThemeToggle
                  isDark={isDark}
                  onClick={toggleTheme}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}