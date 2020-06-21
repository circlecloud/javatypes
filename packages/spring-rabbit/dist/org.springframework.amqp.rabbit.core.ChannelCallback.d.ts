declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace core {
                    /**
                     * Basic callback for use in RabbitTemplate.
                     * @param <T> the type the callback returns.
                     * @author Mark Fisher
                     * @author Gary Russell
                     */
                    // @ts-ignore
                    interface ChannelCallback<T> {
                        /**
                         * Execute any number of operations against the supplied RabbitMQ
                         * {@link Channel}, possibly returning a result.
                         * @param channel The channel.
                         * @return The result.
                         * @throws Exception Not sure what else Rabbit Throws
                         */
                        // @ts-ignore
                        doInRabbit(channel: Channel): T
                    }
                }
            }
        }
    }
}
