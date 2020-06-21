declare namespace org {
    namespace apache {
        namespace naming {
            /**
             * Represents a reference handler for a web service.
             * @author Fabien Carrion
             */
            // @ts-ignore
            class HandlerRef extends org.apache.naming.AbstractRef {
                // @ts-ignore
                constructor(refname: java.lang.String | string, handlerClass: java.lang.String | string)
                // @ts-ignore
                constructor(refname: java.lang.String | string, handlerClass: java.lang.String | string, factory: java.lang.String | string, factoryLocation: java.lang.String | string)
                /**
                 * Default factory for this reference.
                 */
                // @ts-ignore
                public static readonly DEFAULT_FACTORY: java.lang.String | string
                /**
                 * HandlerName address type.
                 */
                // @ts-ignore
                public static readonly HANDLER_NAME: java.lang.String | string
                /**
                 * Handler Classname address type.
                 */
                // @ts-ignore
                public static readonly HANDLER_CLASS: java.lang.String | string
                /**
                 * Handler Classname address type.
                 */
                // @ts-ignore
                public static readonly HANDLER_LOCALPART: java.lang.String | string
                /**
                 * Handler Classname address type.
                 */
                // @ts-ignore
                public static readonly HANDLER_NAMESPACE: java.lang.String | string
                /**
                 * Handler Classname address type.
                 */
                // @ts-ignore
                public static readonly HANDLER_PARAMNAME: java.lang.String | string
                /**
                 * Handler Classname address type.
                 */
                // @ts-ignore
                public static readonly HANDLER_PARAMVALUE: java.lang.String | string
                /**
                 * Handler SoapRole address type.
                 */
                // @ts-ignore
                public static readonly HANDLER_SOAPROLE: java.lang.String | string
                /**
                 * Handler PortName address type.
                 */
                // @ts-ignore
                public static readonly HANDLER_PORTNAME: java.lang.String | string
                // @ts-ignore
                getDefaultFactoryClassName(): string
            }
        }
    }
}
