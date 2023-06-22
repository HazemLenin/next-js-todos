"use client";
import React, { PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Modal({ show, children }) {
	if (show) {
		return (
			<div className="fixed inset-0 flex justify-center items-center w-screen h-screen bg-blac/50 z-50">
				<div className="bg-white w-1/2 h-1/2">{children}</div>
			</div>
		);
	}
}

export default Modal;
