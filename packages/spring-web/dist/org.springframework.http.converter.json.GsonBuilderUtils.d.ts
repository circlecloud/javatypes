declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                namespace json {
                    /**
                     * A simple utility class for obtaining a Google Gson 2.x {@link GsonBuilder}
                     * which Base64-encodes {@code byte[]} properties when reading and writing JSON.
                     * @author Juergen Hoeller
                     * @author Roy Clarkson
                     * @since 4.1
                     * @see GsonFactoryBean#setBase64EncodeByteArrays
                     * @see org.springframework.util.Base64Utils
                     */
                    // @ts-ignore
                    abstract class GsonBuilderUtils extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Obtain a {@link GsonBuilder} which Base64-encodes {@code byte[]}
                         * properties when reading and writing JSON.
                         * <p>A custom {@link com.google.gson.TypeAdapter} will be registered via
                         * {@link GsonBuilder#registerTypeHierarchyAdapter(Class, Object)} which
                         * serializes a {@code byte[]} property to and from a Base64-encoded String
                         * instead of a JSON array.
                         */
                        // @ts-ignore
                        public static gsonBuilderWithBase64EncodedByteArrays(): GsonBuilder
                    }
                }
            }
        }
    }
}
