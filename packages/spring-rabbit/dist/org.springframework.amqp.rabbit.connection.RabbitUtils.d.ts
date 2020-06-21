declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * @author Mark Fisher
                     * @author Mark Pollack
                     * @author Gary Russell
                     * @author Artem Bilan
                     */
                    // @ts-ignore
                    abstract class RabbitUtils extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * AMQP declare method.
                         */
                        // @ts-ignore
                        public static readonly DECLARE_METHOD_ID_10: number /*int*/
                        /**
                         * AMQP consume method.
                         */
                        // @ts-ignore
                        public static readonly CONSUME_METHOD_ID_20: number /*int*/
                        /**
                         * AMQP exchange class id.
                         */
                        // @ts-ignore
                        public static readonly EXCHANGE_CLASS_ID_40: number /*int*/
                        /**
                         * AMQP queue class id.
                         */
                        // @ts-ignore
                        public static readonly QUEUE_CLASS_ID_50: number /*int*/
                        /**
                         * AMQP basic class id.
                         */
                        // @ts-ignore
                        public static readonly BASIC_CLASS_ID_60: number /*int*/
                        /**
                         * AMQP Connection protocol class id.
                         */
                        // @ts-ignore
                        public static readonly CONNECTION_PROTOCOL_CLASS_ID_10: number /*int*/
                        /**
                         * AMQP Channel protocol class id.
                         */
                        // @ts-ignore
                        public static readonly CHANNEL_PROTOCOL_CLASS_ID_20: number /*int*/
                        /**
                         * Close the given RabbitMQ Connection and ignore any thrown exception. This is useful for typical
                         * <code>finally</code> blocks in manual RabbitMQ code.
                         * @param connection the RabbitMQ Connection to close (may be <code>null</code>)
                         */
                        // @ts-ignore
                        public static closeConnection(connection: org.springframework.amqp.rabbit.connection.Connection): void
                        /**
                         * Close the given RabbitMQ Channel and ignore any thrown exception. This is useful for typical <code>finally</code>
                         * blocks in manual RabbitMQ code.
                         * @param channel the RabbitMQ Channel to close (may be <code>null</code>)
                         */
                        // @ts-ignore
                        public static closeChannel(channel: Channel): void
                        /**
                         * Commit the Channel if not within a JTA transaction.
                         * @param channel the RabbitMQ Channel to commit
                         */
                        // @ts-ignore
                        public static commitIfNecessary(channel: Channel): void
                        // @ts-ignore
                        public static rollbackIfNecessary(channel: Channel): void
                        // @ts-ignore
                        public static closeMessageConsumer(channel: Channel, consumerTags: java.util.Collection<java.lang.String | string> | Array<java.lang.String | string>, transactional: boolean): void
                        // @ts-ignore
                        public static cancel(channel: Channel, consumerTag: java.lang.String | string): void
                        /**
                         * Declare to that broker that a channel is going to be used transactionally, and convert exceptions that arise.
                         * @param channel the channel to use
                         */
                        // @ts-ignore
                        public static declareTransactional(channel: Channel): void
                        /**
                         * Sets a ThreadLocal indicating the channel MUST be physically closed.
                         * @param channel the channel.
                         * @param b true if the channel must be closed (if it's a proxy).
                         */
                        // @ts-ignore
                        public static setPhysicalCloseRequired(channel: Channel, b: boolean): void
                        /**
                         * Gets and removes a ThreadLocal indicating the channel MUST be physically closed.
                         * @return true if the channel must be physically closed
                         */
                        // @ts-ignore
                        public static isPhysicalCloseRequired(): boolean
                        /**
                         * Return true if the {@link ShutdownSignalException} reason is AMQP.Connection.Close and
                         * the reply code was AMQP.REPLY_SUCCESS (200) and the text equals "OK".
                         * @param sig the exception.
                         * @return true for a normal connection close.
                         */
                        // @ts-ignore
                        public static isNormalShutdown(sig: ShutdownSignalException): boolean
                        /**
                         * Return true if the {@link ShutdownSignalException} reason is AMQP.Channel.Close and
                         * the reply code was AMQP.REPLY_SUCCESS (200) and the text equals "OK".
                         * @param sig the exception.
                         * @return true for a normal channel close.
                         */
                        // @ts-ignore
                        public static isNormalChannelClose(sig: ShutdownSignalException): boolean
                        /**
                         * Return true if the {@link ShutdownSignalException} reason is AMQP.Channel.Close
                         * and the operation that failed was exchangeDeclare or queueDeclare.
                         * @param sig the exception.
                         * @return true if the failure meets the conditions.
                         */
                        // @ts-ignore
                        public static isPassiveDeclarationChannelClose(sig: ShutdownSignalException): boolean
                        /**
                         * Return true if the {@link ShutdownSignalException} reason is AMQP.Channel.Close
                         * and the operation that failed was basicConsumer and the failure text contains
                         * "exclusive".
                         * @param sig the exception.
                         * @return true if the declaration failed because of an exclusive queue.
                         */
                        // @ts-ignore
                        public static isExclusiveUseChannelClose(sig: ShutdownSignalException): boolean
                        /**
                         * Return true if there is a {@link ShutdownSignalException} in the cause tree and its
                         * reason is "PRECONDITION_FAILED" and the operation being performed was queueDeclare.
                         * This can happen if a queue has mismatched properties (auto-delete etc) or arguments
                         * (x-message-ttl etc).
                         * @param e the exception.
                         * @return true if the exception was due to queue declaration precondition failed.
                         * @since 1.6
                         */
                        // @ts-ignore
                        public static isMismatchedQueueArgs(e: java.lang.Exception): boolean
                        /**
                         * Return true if there is a {@link ShutdownSignalException} in the cause tree and its
                         * reason is "COMMAND_INVALID" and the operation being performed was exchangeDeclare.
                         * For example attempting to declare an exchange that is not supported by the broker or
                         * its plugins.
                         * @param e the exception.
                         * @return true if the exception was due to exchange declaration failed.
                         * @since 1.6
                         */
                        // @ts-ignore
                        public static isExchangeDeclarationFailure(e: java.lang.Exception): boolean
                        /**
                         * Return the negotiated frame_max.
                         * @param connectionFactory the connection factory.
                         * @return the size or -1 if it cannot be determined.
                         */
                        // @ts-ignore
                        public static getMaxFrame(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory): number /*int*/
                        /**
                         * Convert a String value to a {@link SaslConfig}.
                         * Valid string values:
                         * <ul>
                         * <li>{@code DefaultSaslConfig.PLAIN}</li>
                         * <li>{@code DefaultSaslConfig.EXTERNAL}</li>
                         * <li>{@code JDKSaslConfig}</li>
                         * <li>{@code CRDemoSaslConfig}</li>
                         * </ul>
                         * @param saslConfig the string value.
                         * @param connectionFactory the connection factory to get the name, pw, host.
                         * @return the saslConfig.
                         */
                        // @ts-ignore
                        public static stringToSaslConfig(saslConfig: java.lang.String | string, connectionFactory: com.rabbitmq.client.ConnectionFactory): SaslConfig
                    }
                }
            }
        }
    }
}
