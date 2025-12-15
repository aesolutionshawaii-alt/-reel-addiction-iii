import Image from 'next/image'

export default function SeaKeeperSection() {
  return (
    <>
      {/* Gradient transition from navy to offwhite */}
      <div className="h-32 bg-gradient-to-b from-navy to-offwhite" />
      
      <section className="bg-offwhite px-5 py-16 md:px-20 md:py-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left - Text Content */}
            <div>
              <p className="font-outfit text-sm uppercase tracking-[0.2em] text-navy/50 mb-4">
                THE DIFFERENCE
              </p>
              <h2 className="font-outfit font-bold text-3xl md:text-4xl lg:text-5xl text-navy mb-6">
                We Fish When Others Can&apos;t
              </h2>
              <p className="text-navy/80 text-lg leading-relaxed">
                Fitted with SeaKeeper gyro stabilization — eliminating 80% of boat roll. 
                Smooth ride, no seasickness, more time on the water.
              </p>
            </div>

            {/* Right - SeaKeeper Logo */}
            <div className="flex justify-center md:justify-end">
              <Image
                src="/images/seakeeper-logo.png"
                alt="SeaKeeper Gyro Stabilization"
                width={300}
                height={120}
                className="w-auto h-20 md:h-28"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
