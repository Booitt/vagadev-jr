import Header from "./components/header"
import Main from "./components/main"
import Footer from "./components/footer"
import CartContext from "./store/cart-context"
import { useState } from "react"

const App = () => {
	const [cartItems, setCartItems] = useState(0)
	return (
		<>
			<CartContext.Provider
				value={{
					cartItems,
					setCartItems
				}}
			>
				<Header />
				<Main />
			</CartContext.Provider>
			<Footer />
		</>
	)
}

export default App
