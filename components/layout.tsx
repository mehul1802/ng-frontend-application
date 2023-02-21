import { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';

type Props = {
	children?: ReactNode;
	title?: string;
};

export default function Layout(props: Props) {
	return (
		<>
			<Head>
				<title>{props.title}</title>
				<meta charSet='utf-8' />
			</Head>
			<Header />
			<div>
				<main>{props.children}</main>
			</div>
		</>
	);
}
