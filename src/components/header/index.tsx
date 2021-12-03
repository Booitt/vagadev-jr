import { useContext, useState } from "react"
import CartContext from "../../store/cart-context"
import useWindowDimensions from "../../hooks/useWindowDimensions"
import classes from "./styles.module.css"

import PaperPlane from "../UI/SVGs/PaperPlane"
import SearchSolid from "../UI/SVGs/SearchSolid"
import ShoppingBagSolid from "../UI/SVGs/ShoppingBagSolid"
import Hamburger from "../UI/SVGs/Hamburger"
import HoverMenu from "../UI/HoverMenu"
import CloseMenuIcon from "../UI/SVGs/CloseMenuIcon"

const Header = () => {
	const ctx = useContext(CartContext)
	const { width } = useWindowDimensions()

	const [showMenu, setShowMenu] = useState(false)
	const [menuClicked, setMenuClicked] = useState(false)

	const handleMenuShow = (action: "enter" | "leave" | "click") => {
		if (action === "enter") setShowMenu(true)
		else if (action === "leave" && !menuClicked) setShowMenu(false)
		else {
			setMenuClicked((state) => {
				setShowMenu(!state)
				return !state
			})
		}
	}

	return (
		<header className="container">
			<div className={classes.container}>
				<div className={classes.menuLogoContainer}>
					<div className={classes.menu}>
						<div
							onMouseEnter={() => handleMenuShow("enter")}
							onClick={() => handleMenuShow("click")}
						>
							{width > 1088 ? <Hamburger /> : ""}
							{width <= 1088 &&
								(showMenu ? <CloseMenuIcon /> : <Hamburger />)}
						</div>
						<HoverMenu
							show={showMenu || menuClicked}
							handleMenuShow={handleMenuShow}
						/>
					</div>
					<a href="#home">
						<img
							src="logo.png"
							alt="Logo da Agência N1"
							className={classes.logo}
						/>
					</a>
				</div>

				<nav className={classes.nav}>
					<ul className="list">
						<li className="list-item">
							<a href="#contato" className={classes.linkContainer}>
								<span className={`list-icon ${classes.navIcon}`}>
									<PaperPlane />
								</span>
								<span className={classes.navText}>Contato</span>
							</a>
						</li>
						<li className="list-item">
							<a href="#buscar" className={classes.linkContainer}>
								<span className={`list-icon ${classes.navIcon}`}>
									<SearchSolid />
								</span>
								<span className={classes.navText}>Buscar</span>
							</a>
						</li>
						<li className="list-item">
							<a href="#carrinho" className={classes.linkContainer}>
								<span className={`list-icon ${classes.navIcon}`}>
									<ShoppingBagSolid />
								</span>
								<span className={classes.badge}>{ctx.cartItems}</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
