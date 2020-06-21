declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                namespace converter {
                    /**
                     * An extended {@link MessageConverter} SPI with conversion hint support.
                     * <p>In case of a conversion hint being provided, the framework will call
                     * these extended methods if a converter implements this interface, instead
                     * of calling the regular {@code fromMessage} / {@code toMessage} variants.
                     * @author Gary Russell
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface SmartMessageConverter extends org.springframework.amqp.support.converter.MessageConverter {
                        /**
                         * A variant of {@link #fromMessage(Message)} which takes an extra
                         * conversion context as an argument.
                         * @param message the input message.
                         * @param conversionHint an extra object passed to the {#link MessageConverter}.
                         * @return the result of the conversion, or {#code null} if the converter cannot
                         *  perform the conversion.
                         * @throws MessageConversionException if the conversion fails.
                         * @see #fromMessage(Message)
                         */
                        // @ts-ignore
                        fromMessage(message: org.springframework.amqp.core.Message, conversionHint: java.lang.Object | any): any
                    }
                }
            }
        }
    }
}
