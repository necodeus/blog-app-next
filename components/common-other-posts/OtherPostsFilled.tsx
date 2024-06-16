
import Link from "next/link"

import { SectionTitle } from "@components/SectionTitle"

import styles from './OtherPostsFilled.module.css';

export const OtherPostsFilled = ({ posts }: any) => {
	return (
		<div className="component-padding font-jost relative">
			<SectionTitle><b>Inne</b> wpisy</SectionTitle>
			<ul>
				{posts?.map((post: any) => {
					return <li className={styles.list} key={post.id}>
						<Link className="text-[20px] indent-[-20px] ml-[20px] block p-[5px_0]" href={post.path}>{ post.title }</Link>
					</li>
				})}
			</ul>
		</div>
	);
};
