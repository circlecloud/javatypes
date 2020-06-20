declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                namespace converter {
                    /**
                     * Maps to/from JSON using type information in the {@link MessageProperties}; the default
                     * name of the message property containing the type is
                     * {@value #DEFAULT_CLASSID_FIELD_NAME}. An optional property
                     * {@link #setDefaultType(Class)} is provided that allows mapping to a statically defined
                     * type, if no message property is found in the message properties.
                     * {@link #setIdClassMapping(Map)} can be used to map tokens in the
                     * {@value #DEFAULT_CLASSID_FIELD_NAME} header to classes. If this class is not a
                     * Spring-managed bean, call {@link #afterPropertiesSet()} to set up the class to id
                     * mapping.
                     * @author Mark Pollack
                     * @author Gary Russell
                     * @author Artem Bilan
                     */
                    // @ts-ignore
                    class DefaultClassMapper extends java.lang.Object implements org.springframework.amqp.support.converter.ClassMapper {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        readonly DEFAULT_CLASSID_FIELD_NAME: string
                        /**
                         * The type returned by {@link #toClass(MessageProperties)} if no type information
                         * is found in the message properties.
                         * @param defaultType the defaultType to set.
                         */
                        // @ts-ignore
                        setDefaultType(defaultType: java.lang.Class<any>): void
                        /**
                         * Set the type of {@link Map} to use. For outbound messages, set the
                         * {@value #DEFAULT_CLASSID_FIELD_NAME} header to {@code HashTable}. For inbound messages,
                         * if the {@value #DEFAULT_CLASSID_FIELD_NAME} header is {@code Hashtable} convert to this
                         * class.
                         * @param defaultMapClass the map class.
                         * @since 2.0
                         * @see #DEFAULT_CLASSID_FIELD_NAME
                         */
                        // @ts-ignore
                        setDefaultMapClass(defaultMapClass: java.lang.Class<any>): void
                        /**
                         * The name of the header that contains the type id.
                         * @return {#value #DEFAULT_CLASSID_FIELD_NAME}
                         * @see #DEFAULT_CLASSID_FIELD_NAME
                         */
                        // @ts-ignore
                        getClassIdFieldName(): java.lang.String
                        /**
                         * Set a map of type Ids (in the {@value #DEFAULT_CLASSID_FIELD_NAME} header) to
                         * classes. For outbound messages, if the class is not in this map, the
                         * {@value #DEFAULT_CLASSID_FIELD_NAME} header is set to the fully qualified
                         * class name.
                         * @param idClassMapping the map of IDs to classes.
                         */
                        // @ts-ignore
                        setIdClassMapping(idClassMapping: java.util.Map<java.lang.String, java.lang.Class<any>>): void
                        /**
                         * Specify a set of packages to trust during deserialization.
                         * The asterisk ({@code *}) means trust all.
                         * @param trustedPackages the trusted Java packages for deserialization
                         * @since 1.6.11
                         */
                        // @ts-ignore
                        setTrustedPackages(...trustedPackages: string[]): void
                        /**
                         * {@inheritDoc}
                         * <p>Creates the reverse mapping from class to type id.
                         */
                        // @ts-ignore
                        afterPropertiesSet(): void
                        // @ts-ignore
                        fromClass(clazz: java.lang.Class<any>, properties: org.springframework.amqp.core.MessageProperties): void
                        // @ts-ignore
                        toClass(properties: org.springframework.amqp.core.MessageProperties): java.lang.Class<?>
                    }
                }
            }
        }
    }
}
