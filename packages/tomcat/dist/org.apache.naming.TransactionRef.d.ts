declare namespace org {
    namespace apache {
        namespace naming {
            /**
             * Represents a reference address to a transaction.
             * @author Remy Maucherat
             */
            // @ts-ignore
            class TransactionRef extends org.apache.naming.AbstractRef {
                /**
                 * Resource Reference.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Resource Reference.
                 * @param factory The factory class
                 * @param factoryLocation The factory location
                 */
                // @ts-ignore
                constructor(factory: java.lang.String | string, factoryLocation: java.lang.String | string)
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
