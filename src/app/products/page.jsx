import dbConnect from '@/lib/dbConnect';
import Link from 'next/link';
import React from 'react';

const Products = async() => {

const serviceCollection = dbConnect("car_services")
const data = await serviceCollection.find({}).toArray()

    return (
              <div className='mb-30 max-w-7xl m-auto p-2'>

          <h1  className='text-center text-3xl mt-20  font-bold underline'>All Services</h1>
        <div className='grid grid-cols-12 gap-6 mt-6'>
            
            {
                data.map((item)=>  <div className='lg:col-span-4 md:col-span-6 col-span-12 border-2 border-gray-300  rounded-xl'> 
                
                   <img src={item.img} className='w-full h-50 rounded-t-xl'  alt="" />
                   <div className='p-4'>
                     <h2 className='tetx-xl font-bold'> Service type :{item.servicename}</h2>
                     <p className='text-red-500 font-medium'>Service Cost : {item.price}</p>
                     <div className='mt-3'>
                        <Link href={`/services/${item._id}`} className='hover:bg-gray-300 bg-gray-400  p-2 mt-2 rounded-xl'> Details</Link>
                     </div>

                   </div>
                  
                
                 </div>
                )
            }
        </div>
         </div>
    );
    
};

export default Products;