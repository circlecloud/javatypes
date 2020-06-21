declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                namespace converter {
                    /**
                     * XML converter that uses the Jackson 2 Xml library.
                     * @author Mohammad Hewedy
                     * @since 2.1
                     */
                    // @ts-ignore
                    class Jackson2XmlMessageConverter extends org.springframework.amqp.support.converter.AbstractJackson2MessageConverter {
                        /**
                         * Construct with an internal {@link XmlMapper} instance
                         * and trusted packed to all ({@code *}).
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Construct with an internal {@link XmlMapper} instance.
                         * The {@link DeserializationFeature#FAIL_ON_UNKNOWN_PROPERTIES} is set to false on
                         * the {@link XmlMapper}.
                         * @param trustedPackages the trusted Java packages for deserialization
                         * @see DefaultJackson2JavaTypeMapper#setTrustedPackages(String...)
                         */
                        // @ts-ignore
                        constructor(...trustedPackages: java.lang.String[] | string[])
                        /**
                         * Construct with the provided {@link XmlMapper} instance
                         * and trusted packed to all ({@code *}).
                         * @param xmlMapper the {#link XmlMapper} to use.
                         */
                        // @ts-ignore
                        constructor(xmlMapper: XmlMapper)
                        /**
                         * Construct with the provided {@link XmlMapper} instance.
                         * @param xmlMapper the {#link XmlMapper} to use.
                         * @param trustedPackages the trusted Java packages for deserialization
                         * @see DefaultJackson2JavaTypeMapper#setTrustedPackages(String...)
                         */
                        // @ts-ignore
                        constructor(xmlMapper: XmlMapper, ...trustedPackages: java.lang.String[] | string[])
                    }
                }
            }
        }
    }
}
