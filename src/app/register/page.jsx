import React from 'react';
import RegisterForm from './components/RegisterForm';

const page = () => {
    return (
        <div>
            <div className="hero  ">
  <div className="hero-content flex-col lg:flex-row-reverse mt-30 mb-40">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register Now!</h1>
      <p className="py-6 w-70">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
          <RegisterForm></RegisterForm>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default page;