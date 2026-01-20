"use client";
import { useGSAP } from "@/libs/gsap.config";
import initSmoothScroller from "@/libs/initSmoothScroller";
import onePageNavAnim from "@/libs/onePageNavAnim";
import progressBar from "@/libs/progressBar";
import sidebarSticky from "@/libs/sidebarSticky";
import smoothScrollToTop from "@/libs/smoothScrollToTop";
import tjProgressAnimation from "@/libs/tjProgressAnimation";
import tjScrollSlider from "@/libs/tjScrollSlider";
import { useEffect } from "react";
const ClientWrapper = () => {
	useEffect(() => {
		// import("wow.js").then(({ default: WOW }) => {
		// 	new WOW().init();
		// });
		smoothScrollToTop();
		const cleanup = tjMagicCursorAnimation();
		return () => {
			if (cleanup) cleanup();
		};
	}, []);
	useGSAP((context, contextSafe) => {
		initSmoothScroller();
		// tjRightSwipeAnimation();
		// tjLeftSwipeAnimation();
		// titleAnim();
		// titleAnim2();
		// titleAnim3();
		// textReavealAnim();
		sidebarSticky();
		// arrangeAnim();
		// arrangeAnim2();
		// animateInvertText();
		// fadeInRightOnScrollAnim();
		onePageNavAnim(contextSafe);
		progressBar();
		// tjStackAnimation();
		tjScrollSlider();
		// tjStackAnimation2();
		// tjImageParallex();
		tjProgressAnimation();
		// tjZoomInScroll();
		// tjStackAnimation3();
	});
	return null;
};

export default ClientWrapper;
