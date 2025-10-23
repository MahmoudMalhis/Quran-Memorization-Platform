import { useAuth } from "../context/AuthContext";
import { BookOpen, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SupervisorDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-pink-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl p-8 mb-6 border border-purple-100/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  لوحة المحفظ
                </h1>
                <p className="text-gray-600">مرحباً، {user.fullName}</p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl transition"
            >
              <LogOut className="w-5 h-5" />
              <span>تسجيل الخروج</span>
            </button>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-purple-100/50">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            معلومات المحفظ
          </h2>

          <div className="space-y-3">
            <div className="flex gap-2">
              <span className="font-bold text-purple-700">الاسم:</span>
              <span className="text-gray-700">{user.fullName}</span>
            </div>

            <div className="flex gap-2">
              <span className="font-bold text-purple-700">الدور:</span>
              <span className="text-gray-700">محفظ</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
            <p className="text-green-800 font-semibold">
              ✅ ProtectedRoute يعمل!
            </p>
            <p className="text-green-700 text-sm mt-1">
              هذه صفحة محمية - Supervisor (role=2) يمكنه رؤيتها
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
