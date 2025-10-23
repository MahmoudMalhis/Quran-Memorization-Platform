import { SearchX, Home, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="relative max-w-md w-full">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-blue-100/50 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6 shadow-lg">
            <SearchX className="w-12 h-12 text-white" strokeWidth={2} />
          </div>
          <h1 className="text-6xl font-bold text-gray-800 mb-3">404</h1>
          <h2 className="text-2xl font-bold text-gray-700 mb-3">
            الصفحة غير موجودة
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            عذراً، لم نتمكن من إيجاد الصفحة التي تبحث عنها.
            <br />
            تحقق من العنوان أو عد إلى الصفحة الرئيسية.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => navigate(-1)}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5" />
              <span>العودة للصفحة السابقة</span>
            </button>
            <button
              onClick={() => navigate("/")}
              className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-blue-700 font-bold py-3 px-6 rounded-xl border-2 border-blue-200 hover:border-blue-300 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              <span>الذهاب للرئيسية</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
