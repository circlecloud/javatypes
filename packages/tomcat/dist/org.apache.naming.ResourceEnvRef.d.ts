declare namespace org {
    namespace apache {
        namespace naming {
            /**
             * Represents a reference address to a resource environment.
             * @author Remy Maucherat
             */
            // @ts-ignore
            class ResourceEnvRef extends org.apache.naming.AbstractRef {
                /**
                 * Resource env reference.
                 * @param resourceType Type
                 */
                // @ts-ignore
                constructor(resourceType: java.lang.String | string)
                /**
                 * Default factory for this reference.
                 */
                // @ts-ignore
                public static readonly DEFAULT_FACTORY: java.lang.String | string
                // @ts-ignore
                getDefaultFactoryClassName(): string
            }
        }
    }
}
