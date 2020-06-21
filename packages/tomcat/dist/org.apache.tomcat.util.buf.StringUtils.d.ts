declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace buf {
                    /**
                     * Utility methods to build a separated list from a given set (not
                     * java.util.Set) of inputs and return that list as a string or append it to an
                     * existing StringBuilder. If the given set is null or empty, an empty string
                     * will be returned.
                     */
                    // @ts-ignore
                    class StringUtils extends java.lang.Object {
                        // @ts-ignore
                        public static join(array: java.lang.String[] | string[]): string
                        // @ts-ignore
                        public static join(array: java.lang.String[] | string[], separator: string, sb: java.lang.StringBuilder): void
                        // @ts-ignore
                        public static join(collection: java.util.Collection<java.lang.String | string> | Array<java.lang.String | string>): string
                        // @ts-ignore
                        public static join(collection: java.util.Collection<java.lang.String | string> | Array<java.lang.String | string>, separator: string): string
                        // @ts-ignore
                        public static join(iterable: java.lang.Iterable<java.lang.String | string>, separator: string, sb: java.lang.StringBuilder): void
                        // @ts-ignore
                        public static join<T>(array: T[], separator: string, func: java.util.function$.Function<T, java.lang.String | string>, sb: java.lang.StringBuilder): void
                        // @ts-ignore
                        public static join<T>(iterable: java.lang.Iterable<T>, separator: string, func: java.util.function$.Function<T, java.lang.String | string>, sb: java.lang.StringBuilder): void
                    }
                }
            }
        }
    }
}
