import { AuthProvider } from "./context/AuthContext";
import Layout from "./router/Layout";

export default function App() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}
