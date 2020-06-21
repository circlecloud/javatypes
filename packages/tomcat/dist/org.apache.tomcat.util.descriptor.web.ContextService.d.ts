declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace web {
                        /**
                         * Representation of a web service reference for a web application, as
                         * represented in a <code>&lt;service-ref&gt;</code> element in the
                         * deployment descriptor.
                         * @author Fabien Carrion
                         */
                        // @ts-ignore
                        class ContextService extends org.apache.tomcat.util.descriptor.web.ResourceBase {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getDisplayname(): string
                            // @ts-ignore
                            public setDisplayname(displayname: java.lang.String | string): void
                            // @ts-ignore
                            public getLargeIcon(): string
                            // @ts-ignore
                            public setLargeIcon(largeIcon: java.lang.String | string): void
                            // @ts-ignore
                            public getSmallIcon(): string
                            // @ts-ignore
                            public setSmallIcon(smallIcon: java.lang.String | string): void
                            // @ts-ignore
                            public getInterface(): string
                            // @ts-ignore
                            public setInterface(serviceInterface: java.lang.String | string): void
                            // @ts-ignore
                            public getWsdlfile(): string
                            // @ts-ignore
                            public setWsdlfile(wsdlfile: java.lang.String | string): void
                            // @ts-ignore
                            public getJaxrpcmappingfile(): string
                            // @ts-ignore
                            public setJaxrpcmappingfile(jaxrpcmappingfile: java.lang.String | string): void
                            // @ts-ignore
                            public getServiceqname(): string[]
                            // @ts-ignore
                            public getServiceqname(i: number /*int*/): string
                            // @ts-ignore
                            public getServiceqnameNamespaceURI(): string
                            // @ts-ignore
                            public getServiceqnameLocalpart(): string
                            // @ts-ignore
                            public setServiceqname(serviceqname: java.lang.String[] | string[]): void
                            // @ts-ignore
                            public setServiceqname(serviceqname: java.lang.String | string, i: number /*int*/): void
                            // @ts-ignore
                            public setServiceqnameNamespaceURI(namespaceuri: java.lang.String | string): void
                            // @ts-ignore
                            public setServiceqnameLocalpart(localpart: java.lang.String | string): void
                            /**
                             * Declares a client dependency on the container to resolving a Service Endpoint Interface
                             * to a WSDL port. It optionally associates the Service Endpoint Interface with a
                             * particular port-component.
                             * @return the endpoint names
                             */
                            // @ts-ignore
                            public getServiceendpoints(): java.util.Iterator<java.lang.String | string>
                            // @ts-ignore
                            public getPortlink(serviceendpoint: java.lang.String | string): string
                            // @ts-ignore
                            public addPortcomponent(serviceendpoint: java.lang.String | string, portlink: java.lang.String | string): void
                            // @ts-ignore
                            public getHandlers(): java.util.Iterator<java.lang.String | string>
                            // @ts-ignore
                            public getHandler(handlername: java.lang.String | string): org.apache.tomcat.util.descriptor.web.ContextHandler
                            // @ts-ignore
                            public addHandler(handler: org.apache.tomcat.util.descriptor.web.ContextHandler): void
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
