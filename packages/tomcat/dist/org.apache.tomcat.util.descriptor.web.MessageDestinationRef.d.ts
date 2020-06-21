declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace web {
                        /**
                         * <p>Representation of a message destination reference for a web application,
                         * as represented in a <code>&lt;message-destination-ref&gt;</code> element
                         * in the deployment descriptor.</p>
                         * @author Craig R. McClanahan
                         * @since Tomcat 5.0
                         */
                        // @ts-ignore
                        class MessageDestinationRef extends org.apache.tomcat.util.descriptor.web.ResourceBase {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getLink(): string
                            // @ts-ignore
                            public setLink(link: java.lang.String | string): void
                            // @ts-ignore
                            public getUsage(): string
                            // @ts-ignore
                            public setUsage(usage: java.lang.String | string): void
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
