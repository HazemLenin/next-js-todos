import React from "react";
import { useRouter } from "next/navigation";

function TodoDetails() {
	const router = useRouter();

	return (
		<div>
			TodoDetails
			<button className="btn btn-primary" onClick={() => router.back()}>
				close
			</button>
		</div>
	);
}

export default TodoDetails;
