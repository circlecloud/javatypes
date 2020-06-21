declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace notification {
                    /**
                     * Thrown when a JMX {@link javax.management.Notification} is unable to be sent.
                     * <p>The root cause of just why a particular notification could not be sent
                     * will <i>typically</i> be available via the {@link #getCause()} property.
                     * @author Rob Harrop
                     * @since 2.0
                     * @see NotificationPublisher
                     */
                    // @ts-ignore
                    class UnableToSendNotificationException extends org.springframework.jmx.JmxException {
                        /**
                         * Create a new instance of the {@link UnableToSendNotificationException}
                         * class with the specified error message.
                         * @param msg the detail message
                         */
                        // @ts-ignore
                        constructor(msg: java.lang.String | string)
                        /**
                         * Create a new instance of the {@link UnableToSendNotificationException}
                         * with the specified error message and root cause.
                         * @param msg the detail message
                         * @param cause the root cause
                         */
                        // @ts-ignore
                        constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                    }
                }
            }
        }
    }
}
