import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "@/app/routes";
import { SiteLayout } from "@/shared/components/layout/SiteLayout";

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <AppRoutes />
      </SiteLayout>
    </BrowserRouter>
  );
}
