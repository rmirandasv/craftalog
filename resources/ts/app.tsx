import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { ComponentType } from "react";

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob<{ default: ComponentType }>(
      "./pages/**/*.tsx",
      { eager: true }
    );
    return pages[`./pages/${name}.tsx`];
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
