"use client";
import React, { PropsWithChildren } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Modal({ show, children }) {
	if (show) {
		return (
			// <AnimatePresence>
			// 	{show && (
			// 		<motion.div
			// 			initial={{ opacity: 0 }}
			// 			animate={{ opacity: 1 }}
			// 			exit={{ opacity: 0 }}
			// 			className="fixed inset-0 flex justify-center items-center w-screen h-screen bg-black/50"
			// 		>
			// 			<div className="bg-white w-1/2 h-1/2 rounded-md z-50">{children}</div>
			// 		</motion.div>
			// 	)}
			// </AnimatePresence>
			<div className="fixed inset-0 flex justify-center items-center w-screen h-screen bg-blac/50 z-50">
				<div className="bg-white w-1/2 h-1/2">{children}</div>
			</div>
		);
	}
}

export default Modal;
