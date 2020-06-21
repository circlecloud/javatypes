declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                namespace converter {
                    /**
                     * <p>
                     * Exception to be thrown by message converters if they encounter a problem with converting a message or object.
                     * </p>
                     * <p>
                     * N.B. this is <em>not</em> an {@link AmqpException} because it is a a client exception, not a protocol or broker
                     * problem.
                     * </p>
                     * @author Mark Fisher
                     * @author Dave Syer
                     * @author Gary Russell
                     */
                    // @ts-ignore
                    class MessageConversionException extends org.springframework.amqp.AmqpException {
                        // @ts-ignore
                        constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error)
                        // @ts-ignore
                        constructor(message: java.lang.String | string)
                    }
                }
            }
        }
    }
}
