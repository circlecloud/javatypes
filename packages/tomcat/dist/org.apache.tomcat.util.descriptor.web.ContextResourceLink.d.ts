declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace web {
                        /**
                         * Representation of a resource link for a web application, as
                         * represented in a <code>&lt;ResourceLink&gt;</code> element in the
                         * server configuration file.
                         * @author Remy Maucherat
                         * @author Peter Rossbach (Peter Rossbach (pero#apache.org))
                         */
                        // @ts-ignore
                        class ContextResourceLink extends org.apache.tomcat.util.descriptor.web.ResourceBase {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getGlobal(): string
                            // @ts-ignore
                            public setGlobal(global: java.lang.String | string): void
                            // @ts-ignore
                            public getFactory(): string
                            // @ts-ignore
                            public setFactory(factory: java.lang.String | string): void
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
