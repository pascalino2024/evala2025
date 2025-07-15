
  // Slider logic for fade effect
  const sliderTrack = document.getElementById('slider-track');
  const slides = sliderTrack.querySelectorAll('.relative.w-full.h-full.flex-shrink-0');
  let current = 0;

  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.style.opacity = (i === idx) ? '1' : '0';
      slide.style.zIndex = (i === idx) ? '1' : '0';
      slide.style.pointerEvents = (i === idx) ? 'auto' : 'none';
      slide.style.position = 'absolute';
      slide.style.inset = '0';
      slide.style.transition = 'opacity 0.7s cubic-bezier(0.4,0,0.2,1)';
    });
  }

  document.getElementById('prev').onclick = function() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
    resetAutoSlide();
  };
  document.getElementById('next').onclick = function() {
    current = (current + 1) % slides.length;
    showSlide(current);
    resetAutoSlide();
  };

 
  // Auto-slide every 8 seconds
  let autoSlide = setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 3000);

  function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 3000);
  }

  // Initialize
  showSlide(current);
