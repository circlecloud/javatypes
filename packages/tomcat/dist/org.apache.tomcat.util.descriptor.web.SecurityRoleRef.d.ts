declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace web {
                        /**
                         * <p>Representation of a security role reference for a web application, as
                         * represented in a <code>&lt;security-role-ref&gt;</code> element
                         * in the deployment descriptor.</p>
                         * @since Tomcat 5.5
                         */
                        // @ts-ignore
                        class SecurityRoleRef extends java.lang.Object implements java.io.Serializable {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getName(): string
                            // @ts-ignore
                            public setName(name: java.lang.String | string): void
                            // @ts-ignore
                            public getLink(): string
                            // @ts-ignore
                            public setLink(link: java.lang.String | string): void
                            /**
                             * Return a String representation of this object.
                             */
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
