<header class="bg-white fixed top-0 w-full shadow-lg z-50">
    <div class="container mx-auto flex justify-between items-center py-4 px-6 h-16 relative">
        <div class="logo">
            <a href="#banner">
                <img src="assets/images/logo.png" alt="Apricorn Solutions Logo" class="h-12">
            </a>
        </div>
        <nav class="hidden md:flex space-x-12 text-gray-700 font-normal relative">
            <img src="assets/images/navitem_marker.png" id="nav-item-marker" class="nav-item-marker hidden absolute" alt="Nav Item Marker">
            <a href="#portfolio" class="hover:text-secondary nav-item" data-index="0">Portfolio</a>
            <a href="#pricing" class="hover:text-secondary nav-item" data-index="1">Pricing</a>
            <a href="#services" class="hover:text-secondary nav-item" data-index="2">Services</a>
            <a href="#contact" class="hover:text-secondary nav-item" data-index="3">Contact Us</a>
        </nav>
        <a href="#" class="hidden md:inline-block bg-secondary hover:bg-secondaryLight text-white font-semibold py-2 px-4 btn-custom text-base">GET STARTED NOW</a>
        <div class="md:hidden">
            <button id="menu-button" class="text-gray-700 focus:outline-none">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>
    </div>
    <nav id="mobile-menu" class="md:hidden hidden bg-white shadow-lg">
        <ul class="space-y-2 py-4 px-6">
            <li><a href="#portfolio" class="block text-gray-700 font-normal hover:text-secondary">Portfolio</a></li>
            <li><a href="#pricing" class="block text-gray-700 font-normal hover:text-secondary">Pricing</a></li>
            <li><a href="#services" class="block text-gray-700 font-normal hover:text-secondary">Services</a></li>
            <li><a href="#contact" class="block text-gray-700 font-normal hover:text-secondary">Contact Us</a></li>
            <li><a href="#" class="block bg-secondary text-white font-semibold py-4 px-6 rounded hover:bg-secondaryLight text-center text-base">GET STARTED NOW</a></li>
        </ul>
    </nav>
</header>