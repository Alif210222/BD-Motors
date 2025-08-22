import dbConnect from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react';

const page = async({params}) => {
    const  p = await params;

const serviceCollection = dbConnect("car_services")
const data = await serviceCollection.findOne({_id: new ObjectId(p._id)})


    return (
        <div>
            <h1  className='text-center text-3xl mt-20  font-bold underline'> Services Details</h1>
        
        <div className='max-w-6xl m-auto  mt-4 '>
             {/* <p>this is id : {JSON.stringify(data)}</p> */}

   <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={data.img}
      className="max-w-sm   rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">{data.title}</h1>
      <p className="py-4 ">
       {data.description}
      </p>
      <p className=' text-lg font-bold text-red-500 mb-4'>Service cost : {data.price}</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default page;