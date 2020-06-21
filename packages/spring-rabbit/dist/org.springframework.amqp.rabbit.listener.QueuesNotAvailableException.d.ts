declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    /**
                     * This exception indicates that a consumer could not be started because none of
                     * its queues are available for listening.
                     * @author Gary Russell
                     * @since 1.3.5
                     */
                    // @ts-ignore
                    class QueuesNotAvailableException extends org.springframework.amqp.rabbit.listener.exception.FatalListenerStartupException {
                        // @ts-ignore
                        constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                    }
                }
            }
        }
    }
}
