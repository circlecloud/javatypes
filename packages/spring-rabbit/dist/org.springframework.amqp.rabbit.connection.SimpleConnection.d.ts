declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * Simply a Connection.
                     * @author Dave Syer
                     * @author Gary Russell
                     * @author Artem Bilan
                     * @since 1.0
                     */
                    // @ts-ignore
                    class SimpleConnection extends java.lang.Object implements org.springframework.amqp.rabbit.connection.Connection {
                        // @ts-ignore
                        constructor(delegate: com.rabbitmq.client.Connection, closeTimeout: number /*int*/)
                        // @ts-ignore
                        public createChannel(transactional: boolean): Channel
                        // @ts-ignore
                        public close(): void
                        /**
                         * True if the connection is open.
                         * @return true if the connection is open
                         * @throws AutoRecoverConnectionNotCurrentlyOpenException if the connection is an
                         *  {#link AutorecoveringConnection} and is currently closed; this is required to
                         *  prevent the {@link CachingConnectionFactory} from discarding this connection
                         *  and opening a new one, in which case the "old" connection would eventually be recovered
                         *  and orphaned - also any consumers belonging to it might be recovered too
                         *  and the broker will deliver messages to them when there is no code actually running
                         *  to deal with those messages (when using the {@code SimpleMessageListenerContainer}).
                         *  If we have actually closed the connection
                         *  (e.g. via {@link CachingConnectionFactory#resetConnection()}) this will return false.
                         */
                        // @ts-ignore
                        public isOpen(): boolean
                        // @ts-ignore
                        public getLocalPort(): number /*int*/
                        // @ts-ignore
                        public addBlockedListener(listener: BlockedListener): void
                        // @ts-ignore
                        public removeBlockedListener(listener: BlockedListener): boolean
                        // @ts-ignore
                        public getLocalAddress(): java.net.InetAddress
                        // @ts-ignore
                        public getAddress(): java.net.InetAddress
                        // @ts-ignore
                        public getPort(): number /*int*/
                        // @ts-ignore
                        public getDelegate(): com.rabbitmq.client.Connection
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
