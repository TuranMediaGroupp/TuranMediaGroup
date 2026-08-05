export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">

      <div className="mx-auto max-w-7xl px-8 py-24">

        <div className="grid gap-16 lg:grid-cols-4">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold">
              Turan Media Group
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Professional music distribution,
              YouTube Official Artist Channel,
              Content ID and Publishing services
              for independent artists worldwide.
            </p>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-semibold">
              Services
            </h3>

            <ul className="mt-8 space-y-4 text-gray-400">

              <li>Music Distribution</li>

              <li>Official Artist Channel</li>

              <li>Content ID</li>

              <li>Music Publishing</li>

              <li>Playlist Promotion</li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-xl font-semibold">
              Company
            </h3>

            <ul className="mt-8 space-y-4 text-gray-400">

              <li>About</li>

              <li>Artists</li>

              <li>Releases</li>

              <li>Contact</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold">
              Contact
            </h3>

            <div className="mt-8 space-y-5 text-gray-400">

              <p>
                info@turanmediagroup.com
              </p>

              <p>
                Baku, Azerbaijan
              </p>

              <p>
                Instagram:
                <br />
                @turanmediagroup
              </p>

            </div>

          </div>

        </div>

        <div className="mt-20 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

            <p className="text-gray-500">
              © 2026 Turan Media Group. All Rights Reserved.
            </p>

            <div className="flex gap-8 text-gray-400">

              <a href="#">
                Privacy Policy
              </a>

              <a href="#">
                Terms of Service
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}