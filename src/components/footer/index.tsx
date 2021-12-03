import classes from "./styles.module.css"

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className={classes.logoContainer}>
                <img src="logo_footer.png" alt="Logo da Agência N1" />
            </div>
			<div className={classes.rightsContainer}>
                <p>Agência N1 - Todos os direitos reservados</p>
            </div>
		</footer>
	)
}

export default Footer
