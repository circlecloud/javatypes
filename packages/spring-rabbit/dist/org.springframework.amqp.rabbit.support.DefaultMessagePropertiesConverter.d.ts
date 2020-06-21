declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace support {
                    /**
                     * Default implementation of the {@link MessagePropertiesConverter} strategy.
                     * @author Mark Fisher
                     * @author Gary Russell
                     * @author Soeren Unruh
                     * @since 1.0
                     */
                    // @ts-ignore
                    class DefaultMessagePropertiesConverter extends java.lang.Object implements org.springframework.amqp.rabbit.support.MessagePropertiesConverter {
                        /**
                         * Construct an instance where {@link LongString}s will be returned
                         * unconverted when longer than 1024 bytes.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Construct an instance where {@link LongString}s will be returned
                         * unconverted when longer than this limit.
                         * @param longStringLimit the limit.
                         * @since 1.4.4
                         */
                        // @ts-ignore
                        constructor(longStringLimit: number /*int*/)
                        /**
                         * Construct an instance where {@link LongString}s will be returned
                         * unconverted or as a {@link java.io.DataInputStream} when longer than this limit.
                         * Use this constructor with 'true' to restore pre-1.6 behavior.
                         * @param longStringLimit the limit.
                         * @param convertLongLongStrings {#link LongString} when false,
                         *  {@link java.io.DataInputStream} when true.
                         * @since 1.6
                         */
                        // @ts-ignore
                        constructor(longStringLimit: number /*int*/, convertLongLongStrings: boolean)
                        // @ts-ignore
                        public toMessageProperties(source: BasicProperties, envelope: Envelope, charset: java.lang.String | string): MessageProperties
                        // @ts-ignore
                        public fromMessageProperties(source: MessageProperties, charset: java.lang.String | string): BasicProperties
                    }
                }
            }
        }
    }
}
