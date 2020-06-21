declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace retry {
                    /**
                     * @author Dave Syer
                     * @author Gary Russell
                     */
                    // @ts-ignore
                    interface MessageKeyGenerator {
                        /**
                         * Generate a unique key for the message that is repeatable on redelivery. Implementations should be very careful
                         * about assuming uniqueness of any element of the message, especially considering the requirement that it be
                         * repeatable. A message id is ideal, but may not be present (AMQP does not mandate it), and the message body is a
                         * byte array whose contents might be repeatable, but its object value is not.
                         * @param message the message to generate a key for
                         * @return a unique key for this message
                         */
                        // @ts-ignore
                        getKey(message: Message): any
                    }
                }
            }
        }
    }
}
