declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace web {
                        /**
                         * Representation of an EJB resource reference for a web application, as
                         * represented in a <code>&lt;ejb-ref&gt;</code> element in the
                         * deployment descriptor.
                         * @author Craig R. McClanahan
                         * @author Peter Rossbach (pero#apache.org)
                         */
                        // @ts-ignore
                        class ContextEjb extends org.apache.tomcat.util.descriptor.web.ResourceBase {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getHome(): string
                            // @ts-ignore
                            public setHome(home: java.lang.String | string): void
                            // @ts-ignore
                            public getLink(): string
                            // @ts-ignore
                            public setLink(link: java.lang.String | string): void
                            // @ts-ignore
                            public getRemote(): string
                            // @ts-ignore
                            public setRemote(remote: java.lang.String | string): void
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
