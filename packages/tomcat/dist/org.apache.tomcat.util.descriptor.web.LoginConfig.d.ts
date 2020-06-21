declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace web {
                        /**
                         * Representation of a login configuration element for a web application,
                         * as represented in a <code>&lt;login-config&gt;</code> element in the
                         * deployment descriptor.
                         * @author Craig R. McClanahan
                         */
                        // @ts-ignore
                        class LoginConfig extends java.lang.Object implements java.io.Serializable {
                            /**
                             * Construct a new LoginConfig with default properties.
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Construct a new LoginConfig with the specified properties.
                             * @param authMethod The authentication method
                             * @param realmName The realm name
                             * @param loginPage The login page URI
                             * @param errorPage The error page URI
                             */
                            // @ts-ignore
                            constructor(authMethod: java.lang.String | string, realmName: java.lang.String | string, loginPage: java.lang.String | string, errorPage: java.lang.String | string)
                            // @ts-ignore
                            public getAuthMethod(): string
                            // @ts-ignore
                            public setAuthMethod(authMethod: java.lang.String | string): void
                            // @ts-ignore
                            public getErrorPage(): string
                            // @ts-ignore
                            public setErrorPage(errorPage: java.lang.String | string): void
                            // @ts-ignore
                            public getLoginPage(): string
                            // @ts-ignore
                            public setLoginPage(loginPage: java.lang.String | string): void
                            // @ts-ignore
                            public getRealmName(): string
                            // @ts-ignore
                            public setRealmName(realmName: java.lang.String | string): void
                            /**
                             * Return a String representation of this object.
                             */
                            // @ts-ignore
                            public toString(): string
                            // @ts-ignore
                            public hashCode(): number /*int*/
                            // @ts-ignore
                            public equals(obj: java.lang.Object | any): boolean
                        }
                    }
                }
            }
        }
    }
}
