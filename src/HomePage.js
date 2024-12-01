import React from "react";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
	return (
		<div>
			<Helmet>
				<title>你的網站標題</title>
				<meta property="og:title" content="你的網站標題" />
				<meta property="og:description" content="網站的描述文字" />
				<meta property="og:image" content="https://example.com/your-image.jpg" />
				<meta property="og:url" content="https://example.com" />
				<meta property="og:type" content="website" />
			</Helmet>
		</div>
	);
};

export default HomePage;
