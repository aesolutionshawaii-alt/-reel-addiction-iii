'use client'

export default function SeaKeeper() {
  return (
    <section className="bg-white px-5 py-12 md:px-20 md:py-24">
      <div className="max-w-7xl mx-auto">
        <p className="font-outfit text-[24px] md:text-[48px] text-navy mb-4 md:mb-8">THE DIFFERENCE</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
          <div>
            <h2 className="font-outfit font-bold text-[28px] md:text-[48px] text-navy mb-4 md:mb-6">
              We Fish When Others Can't
            </h2>
            <p className="font-outfit text-[18px] md:text-[40px] text-navy leading-snug md:leading-tight">
              Fitted with SeaKeeper gyro stabilization - eliminating 80% of boat roll. Smooth ride, no seasickness, more time on the water.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img 
              src="/images/Seakeeper-logo.png" 
              alt="SeaKeeper" 
              className="w-48 md:w-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}