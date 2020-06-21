declare namespace org {
    namespace apache {
        namespace naming {
            /**
             * Represents a reference web service.
             * @author Fabien Carrion
             */
            // @ts-ignore
            class ServiceRef extends org.apache.naming.AbstractRef {
                // @ts-ignore
                constructor(refname: java.lang.String | string, serviceInterface: java.lang.String | string, serviceQname: java.lang.String[] | string[], wsdl: java.lang.String | string, jaxrpcmapping: java.lang.String | string)
                // @ts-ignore
                constructor(refname: java.lang.String | string, serviceInterface: java.lang.String | string, serviceQname: java.lang.String[] | string[], wsdl: java.lang.String | string, jaxrpcmapping: java.lang.String | string, factory: java.lang.String | string, factoryLocation: java.lang.String | string)
                /**
                 * Default factory for this reference.
                 */
                // @ts-ignore
                public static readonly DEFAULT_FACTORY: java.lang.String | string
                /**
                 * Service Classname address type.
                 */
                // @ts-ignore
                public static readonly SERVICE_INTERFACE: java.lang.String | string
                /**
                 * ServiceQname address type.
                 */
                // @ts-ignore
                public static readonly SERVICE_NAMESPACE: java.lang.String | string
                // @ts-ignore
                public static readonly SERVICE_LOCAL_PART: java.lang.String | string
                /**
                 * Wsdl Location address type.
                 */
                // @ts-ignore
                public static readonly WSDL: java.lang.String | string
                /**
                 * Jaxrpcmapping address type.
                 */
                // @ts-ignore
                public static readonly JAXRPCMAPPING: java.lang.String | string
                /**
                 * port-component-ref/port-component-link address type.
                 */
                // @ts-ignore
                public static readonly PORTCOMPONENTLINK: java.lang.String | string
                /**
                 * port-component-ref/service-endpoint-interface address type.
                 */
                // @ts-ignore
                public static readonly SERVICEENDPOINTINTERFACE: java.lang.String | string
                /**
                 * Add and Get Handlers classes.
                 * @return the handler
                 */
                // @ts-ignore
                public getHandler(): org.apache.naming.HandlerRef
                // @ts-ignore
                public getHandlersSize(): number /*int*/
                // @ts-ignore
                public addHandler(handler: org.apache.naming.HandlerRef): void
                // @ts-ignore
                getDefaultFactoryClassName(): string
            }
        }
    }
}
