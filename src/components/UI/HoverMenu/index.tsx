import { FC } from "react"
import classes from "./styles.module.css"

const list = [
	["Luta", "Mortal Kombat", "Smash Bros", "Killer Instinct", "DBZ Kakarot"],
	["Ação / Aventura", "GTA V", "Tomb Raider", "Halo", "Call of Duty"],
	["Corrida", "Need for Speed", "Forza Horizon"],
]

type Props = {
	show: boolean
	handleMenuShow: (action: "enter" | "leave" | "click") => void
}

const HoverMenu: FC<Props> = ({ show, handleMenuShow }) => {
	return (
		<div
			className={`${classes.container}${show ? "" : ` ${classes.hidden}`}`}
			onMouseLeave={() => handleMenuShow("leave")}
		>
			<div className={`${classes.triangle}${show ? "" : ` ${classes.hidden}`}`} />
			<div className={classes.content}>
				{list?.map((items, i) => (
					<ul key={i}>
						{items.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
				))}
			</div>
		</div>
	)
}

export default HoverMenu
