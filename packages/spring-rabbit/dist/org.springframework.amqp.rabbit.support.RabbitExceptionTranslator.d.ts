declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace support {
                    /**
                     * Translates Rabbit Exceptions to the {@link AmqpException} class
                     * hierarchy.
                     * This functionality was previously in RabbitUtils, but that
                     * caused a package tangle.
                     * @author Gary Russell
                     * @since 1.2
                     */
                    // @ts-ignore
                    class RabbitExceptionTranslator extends java.lang.Object {
                        // @ts-ignore
                        public static convertRabbitAccessException(ex: java.lang.Throwable | Error): java.lang.RuntimeException
                    }
                }
            }
        }
    }
}
