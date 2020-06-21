declare namespace org {
    namespace apache {
        namespace naming {
            /**
             * Naming enumeration implementation.
             * @author Remy Maucherat
             */
            // @ts-ignore
            class NamingContextBindingsEnumeration extends java.lang.Object implements javax.naming.NamingEnumeration<javax.naming.Binding> {
                // @ts-ignore
                constructor(entries: java.util.Iterator<org.apache.naming.NamingEntry>, ctx: javax.naming.Context)
                /**
                 * Underlying enumeration.
                 */
                // @ts-ignore
                readonly iterator: java.util.Iterator<org.apache.naming.NamingEntry>
                /**
                 * Retrieves the next element in the enumeration.
                 */
                // @ts-ignore
                public next(): javax.naming.Binding
                /**
                 * Determines whether there are any more elements in the enumeration.
                 */
                // @ts-ignore
                public hasMore(): boolean
                /**
                 * Closes this enumeration.
                 */
                // @ts-ignore
                public close(): void
                // @ts-ignore
                public hasMoreElements(): boolean
                // @ts-ignore
                public nextElement(): javax.naming.Binding
            }
        }
    }
}
