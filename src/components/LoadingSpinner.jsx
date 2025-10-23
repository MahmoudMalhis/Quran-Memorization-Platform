export default function LoadingSpinner({ message = "جاري التحميل..." }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-pink-50 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="islamic-bg"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 15 L 60 35 L 85 35 L 65 50 L 75 70 L 50 57 L 25 70 L 35 50 L 15 35 L 40 35 Z"
                fill="none"
                stroke="#9333ea"
                strokeWidth="1"
                opacity="0.3"
              />
              <circle
                cx="50"
                cy="50"
                r="25"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="1"
                opacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-bg)" />
        </svg>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-violet-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-md">
        <div className="relative inline-flex items-center justify-center mb-8">
          <div className="absolute w-32 h-32">
            <svg
              className="w-full h-full animate-spin-slow"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="0.5"
                opacity="0.6"
                strokeDasharray="4 4"
              />
              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#9333ea" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute w-28 h-28">
            <svg
              className="w-full h-full animate-spin-reverse"
              viewBox="0 0 100 100"
            >
              <path
                d="M 50 10 L 55 30 L 75 30 L 60 42 L 65 60 L 50 48 L 35 60 L 40 42 L 25 30 L 45 30 Z"
                fill="none"
                stroke="#c4b5fd"
                strokeWidth="1"
                opacity="0.5"
              />
            </svg>
          </div>

          <div className="relative w-20 h-20">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <path
                d="M 70 35 L 73 45 L 83 45 L 75 51 L 78 61 L 70 55 L 62 61 L 65 51 L 57 45 L 67 45 Z"
                fill="url(#star-gradient)"
                className="animate-pulse"
                style={{ animationDelay: "0.3s" }}
              />

              <defs>
                <linearGradient
                  id="crescent-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#9333ea" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
                <linearGradient
                  id="star-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-violet-400/20 rounded-full blur-xl animate-pulse"></div>
        </div>

        <div className="mb-6 px-6">
          <div className="relative">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
            </div>

            <p
              className="text-xl font-arabic text-purple-900 leading-loose mb-2"
              dir="rtl"
            >
              ﴿ وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ
              لِّلْمُؤْمِنِينَ ﴾
            </p>

            <p className="text-sm text-purple-600 mb-3">
              سورة الإسراء - آية 82
            </p>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-lg font-semibold text-gray-800 animate-pulse">
            {message}
          </p>

          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-violet-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          نظام إدارة حلقات القرآن الكريم
        </p>
      </div>
    </div>
  );
}
