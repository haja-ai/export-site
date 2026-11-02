export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4">
      <div className="max-w-[100rem] mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 text-left">
          <div>
            <div className="mb-3">
              <img src="/logo-white.png" alt="MiniElephant" style={{ height: '3.75rem', width: 'auto' }} />
              <h3 className="sr-only">MiniElephant</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Manufacturer of MiniRedone folding electric wheelchairs for distributors, importers, and OEM/ODM buyers.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Electric Wheelchair Models</h3>
            <div className="grid grid-cols-2 gap-x-4">
              <ul className="space-y-2 text-sm">
                <li><a href="/products/miniredone-i" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-I</a></li>
                <li><a href="/products/miniredone-i-w" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-I-W</a></li>
                <li><a href="/products/miniredone-i-br" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-I-B&R</a></li>
                <li><a href="/products/miniredone-i-r" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-I-R</a></li>
                <li><a href="/products/miniredone-i-plus" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-I-Plus</a></li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li><a href="/products/miniredone-ii" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-II</a></li>
                <li><a href="/products/miniredone-ii-plus" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-II-Plus</a></li>
                <li><a href="/products/miniredone-iii" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-III</a></li>
                <li><a href="/products/miniredone-iv" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-IV</a></li>
                <li><a href="/products/miniredone-v" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-V</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-400 hover:text-teal transition-colors">Home</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-teal transition-colors">All Products</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-teal transition-colors">About Us</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-teal transition-colors">FAQ</a></li>
              <li><a href="/news" className="text-gray-400 hover:text-teal transition-colors">News & Insights</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-teal transition-colors">Contact & Quotation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Email: <a href="mailto:johnson@semwheelchair.com" className="text-teal hover:underline">johnson@semwheelchair.com</a></li>
              <li className="text-gray-400">Phone: <a href="tel:+8613819098967" className="text-teal hover:underline">+86 13819098967</a></li>
              <li className="text-gray-400">WhatsApp: <a href="https://wa.me/8613819098967" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">Chat on WhatsApp</a></li>
              <li className="text-gray-400 text-xs mt-2">Social: <a href="https://www.tiktok.com/@electricwheelchairuae" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">TikTok UAE</a> · <a href="https://www.tiktok.com/@electricwheelchairsa" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">TikTok Saudi</a> · <a href="https://www.tiktok.com/@electricwheelchai8" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">TikTok</a></li>
              <li className="text-gray-400 text-xs">Video: <a href="https://www.youtube.com/@xiaoxianhuang-z4t" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">YouTube</a> · <a href="https://www.youtube.com/@xiaoxiangelectricwheelchairuae" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">YouTube UAE</a></li>
              <li className="text-gray-400 text-xs">LinkedIn: <a href="https://www.linkedin.com/in/electricwheelchair-supplier-045232411" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">Supplier profile</a> · <a href="https://www.linkedin.com/in/electric-wheelchair-uae-48b226411" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">UAE profile</a></li>
              <li className="text-gray-400 text-xs mt-2">See About Us and product pages for verified specifications and documents.</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-3 text-xs">
            <a href="/privacy" className="text-gray-400 hover:text-teal transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-teal transition-colors">Terms of Use</a>
            <a href="/cookie-policy" className="text-gray-400 hover:text-teal transition-colors">Cookie Policy</a>
          </div>
          <p>&copy; 2026 Jiaxing Small Elephant Medical Technology Co., Ltd. All rights reserved.</p>
          <p className="mt-1">MiniElephant MiniRedone folding electric wheelchairs for global B2B export.</p>
        </div>
      </div>
    </footer>
  );
}
