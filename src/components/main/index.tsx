import classes from "./styles.module.css"

import {
	SLIDER_BANNERS as sliderBanners,
	MIDDLE_BANNERS as middleBanners,
	PRODUCTS as products,
} from "../../utils/constants"
import { useContext, useEffect, useState } from "react"
import PreTitle from "../UI/SVGs/PreTitle"
import ProductCard from "../UI/ProductCard"
import CartContext from "../../store/cart-context"
import LeftArrow from "../UI/SVGs/LeftArrow"
import RightArrow from "../UI/SVGs/RightArrow"
import useWindowDimensions from "../../hooks/useWindowDimensions"

const Main = () => {
	const ctx = useContext(CartContext)
	const { width } = useWindowDimensions()

	const [bannerPage, setBannerPage] = useState(0)
	const [productPage, setProductPage] = useState<number | undefined>()

	useEffect(() => {
		if (width < 1088 && productPage === undefined) setProductPage(0)
		if (width > 1088 && productPage !== undefined) setProductPage(undefined)
	}, [width, productPage])

	const handleBannerPage = (direction: "left" | "right") => {
		setBannerPage((currPage) => {
			if (direction === "right")
				return currPage + 1 > sliderBanners.length - 1 ? 0 : currPage + 1
			else return currPage - 1 < 0 ? sliderBanners.length - 1 : currPage - 1
		})
	}

	const handleProductPage = (direction: "left" | "right") => {
		setProductPage((currPage) => {
			if (direction === "right")
				return (currPage || 0) + 1 > products.length - 1
					? 0
					: (currPage || 0) + 1
			else
				return (currPage || 0) - 1 < 0
					? products.length - 1
					: (currPage || 0) - 1
		})
	}

	const currentSliderBanner = sliderBanners[bannerPage]
	const [reais, centavos] = currentSliderBanner.price.split(",")

	const [middleBanner1, middleBanner2] = middleBanners

	return (
		<main>
			<section className={classes.sectionHero}>
				<div className={classes.imgContainer}>
					<picture>
						<source
							srcSet={currentSliderBanner.srcMobile}
							media="(max-width: 375px)"
						/>
						<source srcSet={currentSliderBanner.srcDesktop} />
						<img
							src={currentSliderBanner.srcDesktop}
							alt={currentSliderBanner.alt}
						/>
					</picture>
					<div className={classes.sliderNav}>
						<div className={classes.sliderInfos}>
							<p>{currentSliderBanner.title}</p>
						</div>
						<div className={classes.sliderButtons}>
							<div className={classes.pagination}>
								{bannerPage + 1}/{sliderBanners.length}
							</div>
							<div className={classes.buttons}>
								<div
									className={classes.btnLeft}
									onClick={() => handleBannerPage("left")}
								></div>
								<div
									className={classes.btnRight}
									onClick={() => handleBannerPage("right")}
								></div>
							</div>
						</div>
					</div>
				</div>
				<div className={classes.content}>
					<h1 className={classes.title}>{currentSliderBanner.title}</h1>
					<p className={classes.price}>
						{reais}
						<span>,{centavos}</span>
					</p>
					<p className={classes.description}>
						{currentSliderBanner.description}
					</p>
				</div>
			</section>
			<section className={classes.sectionMiddleBanner}>
				<div className={classes.middleBannerContainer1}>
					<img src={middleBanner1.src} alt={middleBanner1.alt} />
					<div>
						<p>{middleBanner1.title}</p>
					</div>
				</div>
				<div className={classes.middleBannerContainer2}>
					<img src={middleBanner2.src} alt={middleBanner2.alt} />
					<div>
						<p>{middleBanner2.title}</p>
					</div>
				</div>
			</section>
			<section className={classes.sectionProducts}>
				<h2>
					<PreTitle />
					Produtos em destaque
				</h2>
				<div className={classes.productList}>
					{products?.map((product, index) => (
						<ProductCard
							key={product.title} // Should be product.id
							src={product.src}
							alt={product.alt}
							title={product.title}
							price={product.price}
							onClick={() => {
								ctx.setCartItems(ctx.cartItems + 1)
							}}
							show={productPage === undefined || productPage === index}
						/>
					))}
					<div
						className={classes.productsSliderLeftBtn}
						onClick={() => handleProductPage("left")}
					>
						<LeftArrow />
					</div>
					<div
						className={classes.productsSliderRightBtn}
						onClick={() => handleProductPage("right")}
					>
						<RightArrow />
					</div>
				</div>
			</section>
		</main>
	)
}

export default Main
