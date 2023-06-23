"use client";
import React from "react";

function Error({ error, reset }: { error: Error; reset: () => void }) {
	console.log(error);
	return <h1 className="text-4xl">Something went wrong!</h1>;
}

export default Error;
