declare namespace com {
    namespace rabbitmq {
        namespace tools {
            namespace json {
                /**
                 * Utility methods for working with JSON objects in Java.
                 */
                // @ts-ignore
                class JSONUtil extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Uses reflection to fill public fields and Bean properties of
                     * the target object from the source Map.
                     */
                    // @ts-ignore
                    public static fill(target: java.lang.Object | any, source: java.util.Map<java.lang.String | string, java.lang.Object | any>): any
                    /**
                     * Uses reflection to fill public fields and optionally Bean
                     * properties of the target object from the source Map.
                     */
                    // @ts-ignore
                    public static fill(target: java.lang.Object | any, source: java.util.Map<java.lang.String | string, java.lang.Object | any>, useProperties: boolean): any
                    /**
                     * Ignores reflection exceptions while using reflection to fill
                     * public fields and Bean properties of the target object from the
                     * source Map.
                     */
                    // @ts-ignore
                    public static tryFill(target: java.lang.Object | any, source: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                }
            }
        }
    }
}
