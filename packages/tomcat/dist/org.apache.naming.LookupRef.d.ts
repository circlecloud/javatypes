declare namespace org {
    namespace apache {
        namespace naming {
            /**
             * Represents a reference to lookup.
             */
            // @ts-ignore
            class LookupRef extends org.apache.naming.AbstractRef {
                // @ts-ignore
                constructor(resourceType: java.lang.String | string, lookupName: java.lang.String | string)
                // @ts-ignore
                constructor(resourceType: java.lang.String | string, factory: java.lang.String | string, factoryLocation: java.lang.String | string, lookupName: java.lang.String | string)
                /**
                 * JNDI name for the lookup
                 */
                // @ts-ignore
                public static readonly LOOKUP_NAME: java.lang.String | string
                // @ts-ignore
                getDefaultFactoryClassName(): string
            }
        }
    }
}
