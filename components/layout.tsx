import Header from './Header';

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<div>
				<main>{children}</main>
			</div>
		</>
	);
}
