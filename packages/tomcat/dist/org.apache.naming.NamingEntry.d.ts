declare namespace org {
    namespace apache {
        namespace naming {
            /**
             * Represents a binding in a NamingContext.
             * @author Remy Maucherat
             */
            // @ts-ignore
            class NamingEntry extends java.lang.Object {
                // @ts-ignore
                constructor(name: java.lang.String | string, value: java.lang.Object | any, type: number /*int*/)
                // @ts-ignore
                public static readonly ENTRY: number /*int*/
                // @ts-ignore
                public static readonly LINK_REF: number /*int*/
                // @ts-ignore
                public static readonly REFERENCE: number /*int*/
                // @ts-ignore
                public static readonly CONTEXT: number /*int*/
                /**
                 * The type instance variable is used to avoid using RTTI when doing
                 * lookups.
                 */
                // @ts-ignore
                public type: number /*int*/
                // @ts-ignore
                public readonly name: java.lang.String | string
                // @ts-ignore
                public value: java.lang.Object | any
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
            }
        }
    }
}
