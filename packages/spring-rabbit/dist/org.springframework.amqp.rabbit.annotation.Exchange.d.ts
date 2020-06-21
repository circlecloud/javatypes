declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace annotation {
                    /**
                     * An exchange to which to bind a {@code RabbitListener} queue.
                     * @author Gary Russell
                     * @author Alex Panchenko
                     * @since 1.5
                     */
                    // @ts-ignore
                    abstract class Exchange implements java.lang.annotation.Annotation {
                        // @ts-ignore
                        readonly TRUE: java.lang.String | string
                        // @ts-ignore
                        readonly FALSE: java.lang.String | string
                    }
                }
            }
        }
    }
}
