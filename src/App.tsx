import { Router } from "react-router-dom";

import Pages from "./pages";
import history from "./services/history";
import { AuthProvider } from "./hooks/auth.context";
import { ProductProvider } from "./hooks/products.context";

function App(): JSX.Element {
  return (
    <AuthProvider>
      <ProductProvider>
        <Router history={history}>
          <Pages />
        </Router>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
