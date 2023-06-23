"use client";
import React, { PropsWithChildren, useRef } from "react";
import { useRouter } from "next/navigation";

function Modal(props: PropsWithChildren) {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const router = useRouter();

	return (
		<div
			onClick={(e) => e.target == wrapperRef.current && router.back()}
			ref={wrapperRef}
			className="fixed inset-0 flex justify-center items-center w-screen h-screen bg-black/50 z-50"
		>
			<div className="bg-white w-1/2 h-1/2">{props.children}</div>
		</div>
	);
}

export default Modal;
