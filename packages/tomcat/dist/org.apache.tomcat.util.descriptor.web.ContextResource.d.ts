declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace web {
                        /**
                         * Representation of a resource reference for a web application, as
                         * represented in a <code>&lt;resource-ref&gt;</code> element in the
                         * deployment descriptor.
                         * @author Craig R. McClanahan
                         * @author Peter Rossbach (pero#apache.org)
                         */
                        // @ts-ignore
                        class ContextResource extends org.apache.tomcat.util.descriptor.web.ResourceBase {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getAuth(): string
                            // @ts-ignore
                            public setAuth(auth: java.lang.String | string): void
                            // @ts-ignore
                            public getScope(): string
                            // @ts-ignore
                            public setScope(scope: java.lang.String | string): void
                            // @ts-ignore
                            public getSingleton(): boolean
                            // @ts-ignore
                            public setSingleton(singleton: boolean): void
                            // @ts-ignore
                            public getCloseMethod(): string
                            // @ts-ignore
                            public setCloseMethod(closeMethod: java.lang.String | string): void
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
