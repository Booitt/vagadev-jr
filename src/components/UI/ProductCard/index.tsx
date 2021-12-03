import { FC, useState } from "react"
import SuperMario from "../SVGs/SuperMario"
import ProductBoughtModal from "../ProductBoughtModal"
import classes from "./styles.module.css"

type Props = {
	src: string
	alt: string
	title: string
	price: string
	onClick: () => void
	show: boolean
}

const ProductCard: FC<Props> = ({ src, alt, title, price, onClick, show }) => {
	const [bought, setBought] = useState(false)
	const [showModal, setShowModal] = useState(false)

	const handleClick = () => {
		if (!bought) {
			onClick()
			setBought(true)
			setShowModal(true)
		}
	}

	const conditionalClasses = `${!show ? ` ${classes.hidden}` : ""}${bought ? ` ${classes.bought}` : ""}`

	return (
		<>
			<ProductBoughtModal
				show={showModal}
				onClose={() => setShowModal(false)}
			/>
			<div
				className={classes.container + conditionalClasses}
			>
				<img src={src} alt={alt} />
				<div>
					<h3>{title}</h3>
					<p>{price}</p>
					<div className={classes.buttonWrapper}>
						<button onClick={handleClick}>
							{bought ? "Comprado" : "Comprar"}
						</button>
						<SuperMario />
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductCard
