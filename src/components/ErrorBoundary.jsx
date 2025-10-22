import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { useLocation } from "react-router-dom";
import { AlertCircle, RefreshCcw, Home, Bug } from "lucide-react";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-pink-50 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-2xl w-full">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-purple-100/50 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600 p-8 relative">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>

            <div className="relative flex justify-center mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                <div className="relative bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg">
                  <AlertCircle
                    className="w-16 h-16 text-purple-600 animate-bounce"
                    strokeWidth={2}
                  />
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
              عذراً! حدث خطأ ما
            </h1>
            <p className="text-purple-100 text-center text-lg">
              Something went wrong
            </p>
          </div>

          <div className="p-8 space-y-6">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-400 rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Bug className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-red-900 mb-2 text-lg">
                    تفاصيل الخطأ:
                  </h3>
                  <div className="bg-white/60 rounded-lg p-4 border border-red-200/50">
                    <pre className="text-sm text-red-800 whitespace-pre-wrap break-words font-mono">
                      {error.message}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {import.meta.env.DEV && (
              <details className="group">
                <summary className="cursor-pointer bg-gradient-to-r from-purple-50 to-violet-50 hover:from-purple-100 hover:to-violet-100 transition-all duration-300 rounded-xl p-4 border border-purple-200/50 shadow-sm">
                  <span className="font-bold text-purple-900 select-none">
                    📋 Stack Trace (للمطورين فقط)
                  </span>
                </summary>
                <div className="mt-3 bg-gray-900 rounded-xl p-6 shadow-inner border border-gray-700">
                  <pre className="text-xs text-green-400 overflow-auto max-h-64 font-mono">
                    {error.stack}
                  </pre>
                </div>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={resetErrorBoundary}
                className="flex-1 group relative overflow-hidden bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 hover:from-purple-700 hover:via-violet-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                <span className="relative flex items-center justify-center gap-3">
                  <RefreshCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                  <span>حاول مرة أخرى</span>
                </span>
              </button>

              <button
                onClick={() => (window.location.href = "/")}
                className="flex-1 group bg-white hover:bg-gray-50 text-purple-700 font-bold py-4 px-6 rounded-xl border-2 border-purple-200 hover:border-purple-300 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span className="flex items-center justify-center gap-3">
                  <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>العودة للرئيسية</span>
                </span>
              </button>
            </div>

            <div className="pt-4 border-t border-purple-100">
              <p className="text-center text-sm text-gray-600">
                <span className="inline-block mr-2">💡</span>
                إذا استمرت المشكلة، يرجى{" "}
                <button className="text-purple-600 hover:text-purple-800 font-semibold underline decoration-wavy decoration-purple-300 hover:decoration-purple-500 transition-colors">
                  التواصل مع الدعم الفني
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 text-sm text-purple-600/70 font-medium">
          خطأ في التطبيق • نعتذر عن الإزعاج
        </div>
      </div>
    </div>
  );
}

export default function ErrorBoundary({ children }) {
  const location = useLocation();

  const handleError = (error, errorInfo) => {
    console.group("🔥 Error Boundary Caught Error");
    console.error("Error:", error);
    console.error("Component Stack:", errorInfo.componentStack);
    console.error("Location:", location.pathname);
    console.error("Timestamp:", new Date().toISOString());
    console.groupEnd();
  };

  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={handleError}
      resetKeys={[location.pathname]}
    >
      {children}
    </ReactErrorBoundary>
  );
}
