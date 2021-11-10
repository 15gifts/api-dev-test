import { createContext, ReactNode, useContext, useState } from "react";
import { Beer } from "./types";

interface Props {
  children: ReactNode;
}
interface CartProps {
  cart: Beer[];
}
const LocalStateContext = createContext<CartProps>({ cart: [] });
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }: Props) {
  // This is our custom provider! We will store data (state)
  // and functionality (updaters) in here and anyone can access it via the consumer

  const [cart, setCart] = useState<Beer[]>([]);

  return (
    <LocalStateProvider value={ {cart} }>
      {children}
    </LocalStateProvider>
  );
}
// make a custom hook for accessing the cart

function useCart() {
  // we use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}

export { CartStateProvider, useCart };
