declare namespace org {
    namespace apache {
        namespace naming {
            /**
             * Naming enumeration implementation.
             * @author Remy Maucherat
             */
            // @ts-ignore
            class NamingContextEnumeration extends java.lang.Object implements javax.naming.NamingEnumeration<javax.naming.NameClassPair> {
                // @ts-ignore
                constructor(entries: java.util.Iterator<org.apache.naming.NamingEntry>)
                /**
                 * Underlying enumeration.
                 */
                // @ts-ignore
                readonly iterator: java.util.Iterator<org.apache.naming.NamingEntry>
                /**
                 * Retrieves the next element in the enumeration.
                 */
                // @ts-ignore
                public next(): javax.naming.NameClassPair
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
                public nextElement(): javax.naming.NameClassPair
            }
        }
    }
}
