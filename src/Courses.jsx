import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    { id: 1, title: 'History', image: '/assets/Coursesimage/1.jpeg', Pdf : '/assets/CoursesPdf/History.pdf' , description: "In the annals of time, history unfolds its tale, Echoes of triumphs, whispers of travail. Through empires' rise and civilizations' fall, In its vast narrative, humanity stands tall." },
    { id: 2, title: 'Political Science', image: '/assets/Coursesimage/2.jpeg',Pdf : '/assets/CoursesPdf/Political Science.pdf' , description: "In the realm of governance, Political Science reigns, A study of power, policies, and societal domains. From theories to systems, it delves deep and wide, Understanding societies" },
    { id: 3, title: 'Geography', image: '/assets/Coursesimage/3.jpeg',Pdf : '/assets/CoursesPdf/Geography.pdf' , description: "Geography unveils Earth's intricate design, From mountains towering to rivers that wind. It teaches of climates, ecosystems in sway, In Geography's embrace, our world finds its way." },
    { id: 4, title: 'Economics', image: '/assets/Coursesimage/4.jpeg',Pdf : '/assets/CoursesPdf/Economics.pdf' , description: "In the realm of markets, where choices unfurl, Economics unveils the dance of supply and demand's swirl. From scarcity's grip to prosperity's embrace, Its theories and models navigate the global economic space." },
    { id: 5, title: 'Sociology', image: '/assets/Coursesimage/5.png',Pdf : '/assets/CoursesPdf/Sociology.pdf' , description: "Sociology delves into society's intricate weave, Unveiling patterns, norms, and beliefs we perceive. It studies cultures, structures, and human interaction, A lens to understand societal evolution's traction." },
    { id: 6, title: 'English', image: '/assets/Coursesimage/6.jpg',Pdf : '/assets/CoursesPdf/English.pdf' , description: "English illuminates the beauty of language and literature. Dive into classic and contemporary works, honing your analytical and creative skills. Discover the profound impact of storytelling and effective communication." },
    { id: 6, title: 'Legal Studies', image: '/assets/Coursesimage/7.jpg',Pdf : '/assets/CoursesPdf/LegalStudies.pdf' , description: "Legal Studies is a broad field that covers everything having to do with law, including methods, theories and principles of legal systems. Legal Studies seek the answer to questions like: what is justice and how can we maximize it with the use of well thought-out laws and sound legal practices?" },
  ];

  const handleCardClick = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseClick = () => {
    setSelectedCourse(null);
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className="text-6xl font-bold text-center mt-4 mb-8">Our Courses</h1>

      <motion.div
        className='flex flex-wrap justify-center gap-8'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {courses.map(course => (
          <motion.div
            key={course.id}
            className="card w-full sm:w-64 bg-base-100 shadow-xl hover:bg-slate-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: course.id * 0.1 }}
            onClick={() => handleCardClick(course)}
          >
            <figure>
              <img src={course.image} alt={course.title} className="h-40 w-full object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-black text-3xl">{course.title}</h2>
              {/* <p>{course.description}</p> */}
              {/* <div className="card-actions justify-center">
                <button className="btn btn-primary ">View More</button>
              </div> */}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseClick}
          >
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-700"
                onClick={handleCloseClick}
              >
                &times;
              </button>
              <figure>
                <img src={selectedCourse.image} alt={selectedCourse.title} className="h-80 w-full object-cover rounded" />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-black text-3xl">{selectedCourse.title}</h2>
                <p>{selectedCourse.description}</p>
              </div>
              <div className="card-actions justify-center">
               <a href={selectedCourse.Pdf} target='blank'><button className="btn btn-primary">View Syllabus</button></a> 
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Courses;
