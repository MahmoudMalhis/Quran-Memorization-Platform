import { ShieldAlert, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import IslamicPattern from "../components/IslamicPattern";

export default function Unauthorized() {
  const navigate = useNavigate();

  return (
    <>
      <IslamicPattern />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-pink-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-md w-full z-20">
          <div className="bg-purple-50 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-purple-100/50 text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-500 to-orange-600 rounded-full mb-6 shadow-lg">
              <ShieldAlert className="w-12 h-12 text-white" strokeWidth={2} />
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              غير مصرح لك
            </h1>

            <p className="text-lg text-gray-600 mb-2">Access Denied</p>

            <p className="text-gray-500 mb-8 leading-relaxed">
              عذراً، ليس لديك الصلاحية للوصول إلى هذه الصفحة.
              <br />
              يرجى التواصل مع المشرف إذا كنت تعتقد أن هذا خطأ.
            </p>

            <div className="flex flex-col gap-3">
              <button
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => navigate("/")}
              >
                <Home className="w-5 h-5" />
                <span>الذهاب للرئيسية</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
