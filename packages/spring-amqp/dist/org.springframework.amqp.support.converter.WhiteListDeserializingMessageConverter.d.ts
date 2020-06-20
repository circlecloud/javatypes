declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                namespace converter {
                    /**
                     * MessageConverters that potentially use Java deserialization.
                     * @author Gary Russell
                     * @since 1.5.5
                     */
                    // @ts-ignore
                    class WhiteListDeserializingMessageConverter extends org.springframework.amqp.support.converter.AbstractMessageConverter {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set simple patterns for allowable packages/classes for deserialization.
                         * The patterns will be applied in order until a match is found.
                         * A class can be fully qualified or a wildcard '*' is allowed at the
                         * beginning or end of the class name.
                         * Examples: {@code com.foo.*}, {@code *.MyClass}.
                         * @param whiteListPatterns the patterns.
                         */
                        // @ts-ignore
                        setWhiteListPatterns(whiteListPatterns: Array<java.lang.String>): void
                        /**
                         * Add package/class patterns to the white list.
                         * @param patterns the patterns to add.
                         * @since 1.5.7
                         * @see #setWhiteListPatterns(List)
                         */
                        // @ts-ignore
                        addWhiteListPatterns(...patterns: string[]): void
                        // @ts-ignore
                        checkWhiteList(clazz: java.lang.Class<any>): void
                    }
                }
            }
        }
    }
}
