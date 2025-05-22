import React from 'react'

export default function Footer() {
  return (
    <footer class="bg-gray-800 text-white">
  <div class="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0">
      
      <div>
        <h1 class="text-2xl font-bold">MyWebsite</h1>
        <p class="text-gray-400 text-sm">© 2025 MyWebsite. All rights reserved.</p>
      </div>

     
      <div class="flex space-x-6 justify-center">
        <a href="#" class="hover:text-gray-300 text-sm">Home</a>
        <a href="#" class="hover:text-gray-300 text-sm">About</a>
        <a href="#" class="hover:text-gray-300 text-sm">Services</a>
        <a href="#" class="hover:text-gray-300 text-sm">Contact</a>
      </div>

      <div class="flex space-x-4 justify-center">
        <a href="#" class="hover:text-blue-400" aria-label="Twitter">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.26 4.26 0 001.88-2.36 8.45 8.45 0 01-2.7 1.03 4.24 4.24 0 00-7.23 3.86A12.04 12.04 0 013 5.1a4.24 4.24 0 001.31 5.65 4.19 4.19 0 01-1.92-.53v.05a4.24 4.24 0 003.4 4.16 4.28 4.28 0 01-1.91.07 4.25 4.25 0 003.97 2.95A8.51 8.51 0 012 19.54 12 12 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.36 8.36 0 0022.46 6z"/></svg>
        </a>
        <a href="#" class="hover:text-blue-600" aria-label="Facebook">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.5 9.95v-7.05H8v-2.9h2.5V9.8c0-2.48 1.48-3.85 3.76-3.85 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22A10 10 0 0022 12z"/></svg>
        </a>
        <a href="#" class="hover:text-pink-500" aria-label="Instagram">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.88a1.12 1.12 0 110 2.24 1.12 1.12 0 010-2.24z"/></svg>
        </a>
      </div>

    </div>
  </div>
</footer>

  )
}
