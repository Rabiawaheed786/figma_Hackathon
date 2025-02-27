import React from 'react'
import Image from "next/image"
import { FaRegHeart } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { Button } from '@/components/ui/button';

function Page() {
  return (
    <>
      <section className='flex flex-col md:flex-row justify-between mt-[50px] mb-[50px] px-4'>

        {/* First div (Bag items) */}
        <div className='w-full md:w-[70%]'>

          <h2 className='text-[22px] leading-[33px] font-medium'>Bag</h2>

          {/* Card div 1 */}
          <div className='w-full flex flex-col md:flex-row gap-[30px] mt-[25px] pb-[37px] border-b-[1px]'>
            {/* Picture div */}
            <div>
              <Image src={"/products/product3.png"} alt="chair" width={150} height={150} />
            </div>

            {/* Text div */}
            <div className='w-full md:w-[687px]'>
              <div className='flex items-center justify-between'>
                <p className='text-[16px] leading-[20px] text-[#272343]'>Library Stool Chair</p>
                <h2 className='text-[15px] leading-[28px] font-medium'>MRP: $99</h2>
              </div>

              <p className='text-[15px] leading-[28px] text-[#757575] mt-[28px]'>Ashen Slate/Cobalt Bliss</p>

              <div className='flex items-center gap-[32px] text-[15px] leading-[28px] text-[#757575]'>
                <p>Size: <span className='text-black'>L</span></p>
                <p>Quantity: <span className='text-black'>1</span></p>
              </div>

              {/* Icons div */}
              <div className='flex items-center gap-[16px] mt-[20px]'>
                <FaRegHeart size={24} />
                <IoTrashOutline size={24} />
              </div>
            </div>
          </div>

          {/* Second card div */}
          <div className='w-full flex flex-col md:flex-row gap-[30px] mt-[25px] pb-[37px] border-b-[1px]'>
            {/* Picture div */}
            <div>
              <Image src={"/products/cat1.png"} alt="chair" width={150} height={150} />
            </div>

            {/* Text div */}
            <div className='w-full md:w-[687px]'>
              <div className='flex items-center justify-between'>
                <p className='text-[16px] leading-[20px] text-[#272343]'>Library Stool Chair</p>
                <h2 className='text-[15px] leading-[28px] font-medium'>MRP: $99</h2>
              </div>

              <p className='text-[15px] leading-[28px] text-[#757575] mt-[28px]'>Ashen Slate/Cobalt Bliss</p>

              <div className='flex items-center gap-[32px] text-[15px] leading-[28px] text-[#757575]'>
                <p>Size: <span className='text-black'>L</span></p>
                <p>Quantity: <span className='text-black'>1</span></p>
              </div>

              {/* Icons div */}
              <div className='flex items-center gap-[16px] mt-[20px]'>
                <FaRegHeart size={24} />
                <IoTrashOutline size={24} />
              </div>
            </div>
          </div>

        </div>

        {/* Second div (Summary) */}
        <div className='w-full md:w-[350px] h-auto text-[#111111] mt-6 md:mt-0'>
          <h1 className='text-[21px] leading-[33px]'>Summary</h1>

          <div className='flex items-center justify-between mt-[25px]'>
            <p className='text-[15px] leading-[28px]'>Subtotal</p>
            <h2 className='text-[14px] leading-[24px] font-medium'>$198.00</h2>
          </div>

          <div className='flex items-center justify-between mt-[8px]'>
            <p className='text-[15px] leading-[28px]'>Estimated Delivery & Handling</p>
            <h2 className='text-[15px] leading-[28px] font-medium'>Free</h2>
          </div>

          <div className='w-full h-[62px] flex items-center justify-between border-t-[1px] border-b-[1px] mt-[20px]'>
            <p className='text-[15px] leading-[28px]'>Total</p>
            <h2 className='text-[14px] leading-[24px] font-medium'>$198.00</h2>
          </div>

          {/* Button */}
          <Button className='w-full md:w-[334px] h-[60px] text-[15px] leading-[24px] font-medium text-white mt-[32px] py-[18px] px-[100px] rounded-[30px] bg-[#029FAE]'>
            Member Checkout
          </Button>
        </div>

      </section>
    </>
  )
}

export default Page;
