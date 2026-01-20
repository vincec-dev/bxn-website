import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import dynamic from "next/dynamic";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "./assets/css/animate.min.css";
import "./assets/css/font-awesome-pro.min.css";
import "./assets/css/glightbox.min.css";
import "./assets/css/meanmenu.css";
import "./assets/css/nice-select2.css";
import "./assets/css/odometer-theme-default.css";

import About1 from "@/components/sections/about/About1";
import Brands1 from "@/components/sections/brands/Brands1";
import Features from "@/components/sections/features/Features";
import Hero from "@/components/sections/hero/Hero";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";

const Blogs1 = dynamic(() => import("@/components/sections/blogs/Blogs1"));
const Contact2 = dynamic(() => import("@/components/sections/contacts/Contact2"));
const Cta = dynamic(() => import("@/components/sections/cta/Cta"));
const Faq2 = dynamic(() => import("@/components/sections/faq/Faq2"));
const Funfact1 = dynamic(() => import("@/components/sections/funfacts/Funfact1"));
const Portfolios1 = dynamic(() => import("@/components/sections/portfolios/Portfolios1"));
const Services1 = dynamic(() => import("@/components/sections/services/Services1"));
const Testimonials1 = dynamic(() => import("@/components/sections/testimonials/Testimonials1"));

const ClientWrapper = dynamic(() =>
	import("@/components/shared/wrappers/ClientWrapper")
);

export default function Home() {
	return (
		<div>
			<BackToTop />
			<Header isStickyHeader={true} />
			{/* <Header isStickyHeader={true} /> */}
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<Hero />
						<Features />
						<Brands1 />
						<About1 />
						<Services1 />
						<Portfolios1 />
						<Funfact1 />
						<Testimonials1 />
						<Faq2 type={1} />
						<Contact2 />
						<Blogs1 />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
