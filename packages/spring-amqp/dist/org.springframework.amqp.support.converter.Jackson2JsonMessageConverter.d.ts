declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                namespace converter {
                    /**
                     * JSON converter that uses the Jackson 2 Json library.
                     * @author Mark Pollack
                     * @author James Carr
                     * @author Dave Syer
                     * @author Sam Nelson
                     * @author Andreas Asplund
                     * @author Gary Russell
                     * @author Artem Bilan
                     * @author Arlo Louis O'Keeffe
                     * @author Mohammad Hewedy
                     */
                    // @ts-ignore
                    class Jackson2JsonMessageConverter extends org.springframework.amqp.support.converter.AbstractJackson2MessageConverter {
                        /**
                         * Construct with an internal {@link ObjectMapper} instance
                         * and trusted packed to all ({@code *}).
                         * @since 1.6.11
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Construct with an internal {@link ObjectMapper} instance.
                         * The {@link DeserializationFeature#FAIL_ON_UNKNOWN_PROPERTIES} is set to false on
                         * the {@link ObjectMapper}.
                         * @param trustedPackages the trusted Java packages for deserialization
                         * @since 1.6.11
                         * @see DefaultJackson2JavaTypeMapper#setTrustedPackages(String...)
                         */
                        // @ts-ignore
                        constructor(...trustedPackages: java.lang.String[] | string[])
                        /**
                         * Construct with the provided {@link ObjectMapper} instance
                         * and trusted packed to all ({@code *}).
                         * @param jsonObjectMapper the {#link ObjectMapper} to use.
                         * @since 1.6.12
                         */
                        // @ts-ignore
                        constructor(jsonObjectMapper: ObjectMapper)
                        /**
                         * Construct with the provided {@link ObjectMapper} instance.
                         * @param jsonObjectMapper the {#link ObjectMapper} to use.
                         * @param trustedPackages the trusted Java packages for deserialization
                         * @since 1.6.11
                         * @see DefaultJackson2JavaTypeMapper#setTrustedPackages(String...)
                         */
                        // @ts-ignore
                        constructor(jsonObjectMapper: ObjectMapper, ...trustedPackages: java.lang.String[] | string[])
                    }
                }
            }
        }
    }
}
