import { FC } from "react"
import { createPortal } from "react-dom"
import classes from "./styles.module.css"
import SuperMario from "../SVGs/SuperMario"
import CloseButton from "../SVGs/CloseButton"

type BackdropProps = {
	onClick: () => void
}

type ModalProps = {
	show: boolean
	onClose: () => void
}

const Backdrop: FC<BackdropProps> = ({ onClick }) => {
	return <div className={classes.backdrop} onClick={onClick}></div>
}

const ProductBoughtModal: FC<ModalProps> = ({ show, onClose }) => {
	return show ? (
		<>
			{createPortal(
				<Backdrop onClick={onClose} />,
				document.getElementById("backdrop-root")!
			)}
			{createPortal(
				<div className={classes.modal}>
					<div className={classes.closeButton} onClick={onClose}>
						<CloseButton />
					</div>
					<div className={classes.text}>
						<div />
						<h4>Pedido realizado com sucesso!</h4>
						<div />
					</div>
					<div className={classes.superMario}>
						<SuperMario />
					</div>
				</div>,
				document.getElementById("modal-root")!
			)}
		</>
	) : (
		<></>
	)
}

export default ProductBoughtModal
