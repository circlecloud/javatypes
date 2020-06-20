declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                namespace json {
                    /**
                     * A {@link FactoryBean} for creating a Google Gson 2.x {@link Gson} instance.
                     * @author Roy Clarkson
                     * @author Juergen Hoeller
                     * @since 4.1
                     */
                    // @ts-ignore
                    class GsonFactoryBean extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Whether to Base64-encode {@code byte[]} properties when reading and
                         * writing JSON.
                         * <p>When set to {@code true}, a custom {@link com.google.gson.TypeAdapter} will be
                         * registered via {@link GsonBuilder#registerTypeHierarchyAdapter(Class, Object)}
                         * which serializes a {@code byte[]} property to and from a Base64-encoded String
                         * instead of a JSON array.
                         * @see GsonBuilderUtils#gsonBuilderWithBase64EncodedByteArrays()
                         */
                        // @ts-ignore
                        setBase64EncodeByteArrays(base64EncodeByteArrays: boolean): void
                        /**
                         * Whether to use the {@link GsonBuilder#serializeNulls()} option when writing
                         * JSON. This is a shortcut for setting up a {@code Gson} as follows:
                         * <pre class="code">
                         * new GsonBuilder().serializeNulls().create();
                         * </pre>
                         */
                        // @ts-ignore
                        setSerializeNulls(serializeNulls: boolean): void
                        /**
                         * Whether to use the {@link GsonBuilder#setPrettyPrinting()} when writing
                         * JSON. This is a shortcut for setting up a {@code Gson} as follows:
                         * <pre class="code">
                         * new GsonBuilder().setPrettyPrinting().create();
                         * </pre>
                         */
                        // @ts-ignore
                        setPrettyPrinting(prettyPrinting: boolean): void
                        /**
                         * Whether to use the {@link GsonBuilder#disableHtmlEscaping()} when writing
                         * JSON. Set to {@code true} to disable HTML escaping in JSON. This is a
                         * shortcut for setting up a {@code Gson} as follows:
                         * <pre class="code">
                         * new GsonBuilder().disableHtmlEscaping().create();
                         * </pre>
                         */
                        // @ts-ignore
                        setDisableHtmlEscaping(disableHtmlEscaping: boolean): void
                        /**
                         * Define the date/time format with a {@link SimpleDateFormat}-style pattern.
                         * This is a shortcut for setting up a {@code Gson} as follows:
                         * <pre class="code">
                         * new GsonBuilder().setDateFormat(dateFormatPattern).create();
                         * </pre>
                         */
                        // @ts-ignore
                        setDateFormatPattern(dateFormatPattern: string): void
                        // @ts-ignore
                        afterPropertiesSet(): void
                        /**
                         * Return the created Gson instance.
                         */
                        // @ts-ignore
                        getObject(): Gson
                        // @ts-ignore
                        getObjectType(): java.lang.Class<?>
                        // @ts-ignore
                        isSingleton(): boolean
                    }
                }
            }
        }
    }
}
