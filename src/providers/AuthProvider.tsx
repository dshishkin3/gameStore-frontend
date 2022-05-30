import { FC, useState, useMemo, createContext, ReactNode } from "react";
import axios from "axios";

import { IAuthContext } from "./types";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

interface IAuthProviderProps {
	children: ReactNode;
}

export const AuthProvider: FC<IAuthProviderProps> = ({ children }) => {
	const [auth, setAuth] = useState(true);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<null | string>(null);

	const login = async () => {
		setIsLoading(true);
		try {
			const res = await axios.post(
				`http://game-store12.herokuapp.com/api/auth/login`,
				{
					email,
					password,
				}
			);

			if (res.status === 200) {
				setAuth(!auth);
				setIsError(null);
			}
		} catch (err: any) {
			setIsError(err.response.data.error);
			console.log(err.response.data.error);
		} finally {
			setIsLoading(false);
		}
	};

	const value = useMemo(
		() => ({
			email,
			setEmail,
			password,
			setPassword,
			isLoading,
			setIsLoading,
			login,
			auth,
			isError,
			setIsError,
		}),
		[auth, isLoading, email, password, isError]
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
