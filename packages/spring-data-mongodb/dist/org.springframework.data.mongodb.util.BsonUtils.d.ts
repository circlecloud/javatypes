declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace util {
                    /**
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 2.0
                     */
                    // @ts-ignore
                    class BsonUtils extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static get<T>(bson: Bson, key: java.lang.String | string): T
                        // @ts-ignore
                        public static asMap(bson: Bson): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        // @ts-ignore
                        public static addToMap(bson: Bson, key: java.lang.String | string, value: java.lang.Object | any): void
                        /**
                         * Extract the corresponding plain value from {@link BsonValue}. Eg. plain {@link String} from
                         * {@link org.bson.BsonString}.
                         * @param value must not be {#literal null}.
                         * @return 
                         * @since 2.1
                         */
                        // @ts-ignore
                        public static toJavaType(value: BsonValue): any
                        /**
                         * Serialize the given {@link Document} as Json applying default codecs if necessary.
                         * @param source
                         * @return 
                         * @since 2.1.12
                         */
                        // @ts-ignore
                        public static toJson(source: Document): string
                    }
                }
            }
        }
    }
}
