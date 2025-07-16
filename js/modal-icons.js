
  // Modal logic for slider icons
  function showSliderModal(contentHtml) {
    document.getElementById('slider-modal-body').innerHTML = contentHtml;
    document.getElementById('slider-modal-overlay').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  function closeSliderModal() {
    document.getElementById('slider-modal-overlay').style.display = 'none';
    document.body.style.overflow = '';
  }
  document.getElementById('close-slider-modal').onclick = closeSliderModal;
  document.getElementById('slider-modal-overlay').onclick = function(e) {
    if (e.target === this) closeSliderModal();
  };

  document.getElementById('open-testimony-modal').onclick = function() {
    showSliderModal(`
      <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-red-700">Témoignages</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <img src="images/testimony1.jpg" alt="Kossi" class="w-20 h-20 rounded-full object-cover mb-2 border-2 border-red-400" />
          <blockquote class="italic text-gray-800 text-base">"Un événement inoubliable, porteur de valeurs et de fraternité."</blockquote>
          <span class="text-xs text-gray-500 mt-2">— Kossi, Kara</span>
        </div>
        <div class="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <img src="images/testimony2.jpg" alt="Akou" class="w-20 h-20 rounded-full object-cover mb-2 border-2 border-green-400" />
          <blockquote class="italic text-gray-800 text-base">"La force et la tradition réunies dans une ambiance festive."</blockquote>
          <span class="text-xs text-gray-500 mt-2">— Akou, Lomé</span>
        </div>
        <div class="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <img src="images/testimony3.jpg" alt="Yao" class="w-20 h-20 rounded-full object-cover mb-2 border-2 border-yellow-400" />
          <blockquote class="italic text-gray-800 text-base">"J'ai découvert la vraie signification du courage et du respect."</blockquote>
          <span class="text-xs text-gray-500 mt-2">— Yao, Sokodé</span>
        </div>
        <div class="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <img src="images/testimony4.jpg" alt="Afi" class="w-20 h-20 rounded-full object-cover mb-2 border-2 border-blue-400" />
          <blockquote class="italic text-gray-800 text-base">"Une expérience unique qui rassemble toute la communauté."</blockquote>
          <span class="text-xs text-gray-500 mt-2">— Afi, Atakpamé</span>
        </div>
      </div>
    `);
  };
  document.getElementById('open-sponsor-modal').onclick = function() {
    showSliderModal(`
      <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-yellow-600">Sponsors</h2>
      <div class="space-y-4 text-base sm:text-lg text-gray-800">
        <div class="flex flex-col items-center gap-2">
          <img src="images/sponsor1.png" alt="Sponsor 1" class="h-12 sm:h-16 mb-2" />
          <span class="font-semibold">Banque du Togo</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <img src="images/sponsor2.png" alt="Sponsor 2" class="h-12 sm:h-16 mb-2" />
          <span class="font-semibold">Togo Telecom</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <img src="images/sponsor3.png" alt="Sponsor 3" class="h-12 sm:h-16 mb-2" />
          <span class="font-semibold">Kara Drinks</span>
        </div>
      </div>
    `);
  };
  document.getElementById('open-program-modal').onclick = function() {
    showSliderModal(`
      <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-green-700">Programme</h2>
      <ul class="text-left mx-auto max-w-md space-y-2 text-base sm:text-lg">
        <li><span class="font-semibold">Jour 1:</span> Cérémonie d'ouverture et défilé</li>
        <li><span class="font-semibold">Jour 2:</span> Lutte traditionnelle et animations</li>
        <li><span class="font-semibold">Jour 3:</span> Concerts et remise de prix</li>
      </ul>
    `);
  };
  document.getElementById('open-contact-modal').onclick = function() {
    showSliderModal(`
      <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-blue-700">Contact</h2>
      <form class="w-full max-w-sm mx-auto space-y-4">
        <input type="text" placeholder="Votre nom" class="w-full border rounded px-3 py-2" />
        <input type="email" placeholder="Votre email" class="w-full border rounded px-3 py-2" />
        <textarea placeholder="Votre message" class="w-full border rounded px-3 py-2"></textarea>
        <button type="submit" class="w-full bg-green-600 text-white font-bold py-2 rounded hover:bg-green-700 transition">Envoyer</button>
      </form>
      <div class="mt-4 text-sm text-gray-500">Ou contactez-nous à <a href="mailto:info@evala.tg" class="underline text-blue-700">info@evala.tg</a></div>
    `);
  };
  // ...existing code...
