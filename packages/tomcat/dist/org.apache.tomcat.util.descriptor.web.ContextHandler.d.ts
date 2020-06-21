declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace web {
                        /**
                         * Representation of a handler reference for a web service, as
                         * represented in a <code>&lt;handler&gt;</code> element in the
                         * deployment descriptor.
                         * @author Fabien Carrion
                         */
                        // @ts-ignore
                        class ContextHandler extends org.apache.tomcat.util.descriptor.web.ResourceBase {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getHandlerclass(): string
                            // @ts-ignore
                            public setHandlerclass(handlerclass: java.lang.String | string): void
                            // @ts-ignore
                            public getLocalparts(): java.util.Iterator<java.lang.String | string>
                            // @ts-ignore
                            public getNamespaceuri(localpart: java.lang.String | string): string
                            // @ts-ignore
                            public addSoapHeaders(localpart: java.lang.String | string, namespaceuri: java.lang.String | string): void
                            /**
                             * Set a configured property.
                             * @param name The property name
                             * @param value The property value
                             */
                            // @ts-ignore
                            public setProperty(name: java.lang.String | string, value: java.lang.String | string): void
                            // @ts-ignore
                            public getSoapRole(i: number /*int*/): string
                            // @ts-ignore
                            public getSoapRolesSize(): number /*int*/
                            // @ts-ignore
                            public addSoapRole(soapRole: java.lang.String | string): void
                            // @ts-ignore
                            public getPortName(i: number /*int*/): string
                            // @ts-ignore
                            public getPortNamesSize(): number /*int*/
                            // @ts-ignore
                            public addPortName(portName: java.lang.String | string): void
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
