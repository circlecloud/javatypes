declare namespace org {
    namespace apache {
        namespace naming {
            /**
             * Represents a reference address to a resource.
             * @author Remy Maucherat
             */
            // @ts-ignore
            class ResourceLinkRef extends org.apache.naming.AbstractRef {
                /**
                 * ResourceLink Reference.
                 * @param resourceClass Resource class
                 * @param globalName Global name
                 * @param factory The possibly null class name of the object's factory.
                 * @param factoryLocation The possibly null location from which to load the
                 *                         factory (e.g. URL)
                 */
                // @ts-ignore
                constructor(resourceClass: java.lang.String | string, globalName: java.lang.String | string, factory: java.lang.String | string, factoryLocation: java.lang.String | string)
                /**
                 * Default factory for this reference.
                 */
                // @ts-ignore
                public static readonly DEFAULT_FACTORY: java.lang.String | string
                /**
                 * Description address type.
                 */
                // @ts-ignore
                public static readonly GLOBALNAME: java.lang.String | string
                // @ts-ignore
                getDefaultFactoryClassName(): string
            }
        }
    }
}
