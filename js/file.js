
    // Winners slider logic
    const winnersTrack = document.getElementById('winners-slider-track');
    const winnersSlides = winnersTrack.children;
    let winnerIndex = 0;
    function showWinnerSlide(i) {
      winnersTrack.style.transform = `translateX(-${i * 100}%)`;
    }
    document.getElementById('winner-prev').onclick = () => {
      winnerIndex = (winnerIndex - 1 + winnersSlides.length) % winnersSlides.length;
      showWinnerSlide(winnerIndex);
    };
    document.getElementById('winner-next').onclick = () => {
      winnerIndex = (winnerIndex + 1) % winnersSlides.length;
      showWinnerSlide(winnerIndex);
    };
    setInterval(() => {
      winnerIndex = (winnerIndex + 1) % winnersSlides.length;
      showWinnerSlide(winnerIndex);
    }, 5000);
