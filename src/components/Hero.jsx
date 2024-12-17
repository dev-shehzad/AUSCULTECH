
  export default function Hero({ 
    title, 
    subtitle, 
    backgroundImage = "/placeholder.svg", 
    className = "" 
  }) {
    return (
      <div className={`relative min-h-[45vh] flex flex-col items-center justify-center ${className}`}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#54aeee83] to-[#e76365c7]" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 md:px-6 max-w-5xl mx-auto flex flex-col gap-10">
          <h1 className="text-4xl font-serif md:text-4xl lg:text-[45px] font-[200] text-white tracking-wider mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl font-serif font-[300] lg:text-2xl text-white/90">
            {subtitle}
          </p>
        </div>
      </div>
    )
  }
  
  