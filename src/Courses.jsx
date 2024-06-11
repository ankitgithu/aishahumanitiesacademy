import React from 'react';

const Courses = () => {
  return (
    <div className='container mx-auto px-4'>
      <h1 className="text-6xl font-bold text-center mt-4 mb-8">Our Courses</h1>

      <div className='flex flex-wrap justify-center gap-8'>
        <div className="card w-full sm:w-64 bg-base-100 shadow-xl hover:bg-slate-300">
          <figure><img src="/assets/Coursesimage/1.jpeg" alt="History" /></figure>
          <div className="card-body">
            <h2 className="card-title font-black text-3xl">History</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View More</button>
            </div>
          </div>
        </div>

        <div className="card w-full sm:w-64 bg-base-100 shadow-xl hover:bg-slate-300">
          <figure><img src="/assets/Coursesimage/2.jpeg" alt="Political Science" /></figure>
          <div className="card-body">
            <h2 className="card-title font-black text-3xl">Political Science</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View More</button>
            </div>
          </div>
        </div>

        <div className="card w-full sm:w-64 bg-base-100 shadow-xl hover:bg-slate-300">
          <figure><img src="/assets/Coursesimage/3.jpeg" alt="Geography" /></figure>
          <div className="card-body">
            <h2 className="card-title font-black text-3xl">Geography</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View More</button>
            </div>
          </div>
        </div>

        <div className="card w-full sm:w-64 bg-base-100 shadow-xl hover:bg-slate-300">
          <figure><img src="/assets/Coursesimage/4.jpeg" alt="Economics" /></figure>
          <div className="card-body">
            <h2 className="card-title font-black text-3xl">Economics</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View More</button>
            </div>
          </div>
        </div>

        <div className="card w-full sm:w-64 bg-base-100 shadow-xl hover:bg-slate-300">
          <figure><img src="/assets/Coursesimage/5.png" alt="Sociology" /></figure>
          <div className="card-body">
            <h2 className="card-title font-black text-3xl">Sociology</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
