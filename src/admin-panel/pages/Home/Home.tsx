import React, { FC } from "react";
import Wrapper from "../../components/ui/wrapper/Wrapper";
import styles from './Home.module.scss';

const AdminHome: FC = () => {
	return (
		<Wrapper title="">
			<div className={styles.container}>Home admin </div>
		</Wrapper>
	);
};

export default AdminHome;
