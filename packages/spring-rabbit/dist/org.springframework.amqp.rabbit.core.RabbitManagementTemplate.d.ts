declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace core {
                    /**
                     * A convenience wrapper for the RabbitMQ {@link Client} providing convenient access to
                     * the REST methods using the familiar Spring AMQP domain objects for {@link Queue},
                     * {@link Exchange} and {@link Binding}. For more complete access, including access to
                     * properties not available in the Spring AMQP domain classes, use the {@link Client}
                     * directly.
                     * @author Gary Russell
                     * @author Artem Bilan
                     * @since 1.5
                     * @deprecated since 2.1 in favor of direct {#link Client} usage.
                     */
                    // @ts-ignore
                    class RabbitManagementTemplate extends java.lang.Object {
                        /**
                         * Construct a template using uri "localhost:15672/api/" and user guest/guest.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Construct a template using the supplied client.
                         * @param rabbitClient the client.
                         */
                        // @ts-ignore
                        constructor(rabbitClient: Client)
                        /**
                         * Construct a template using the supplied uri.
                         * @param uri the uri.
                         * @param username the user.
                         * @param password the password.
                         */
                        // @ts-ignore
                        constructor(uri: java.lang.String | string, username: java.lang.String | string, password: java.lang.String | string)
                        /**
                         * @return the rabbitClient
                         */
                        // @ts-ignore
                        public getClient(): Client
                        // @ts-ignore
                        public addExchange(exchange: Exchange): void
                        // @ts-ignore
                        public addExchange(vhost: java.lang.String | string, exchange: Exchange): void
                        // @ts-ignore
                        public purgeQueue(queue: Queue): void
                        // @ts-ignore
                        public purgeQueue(vhost: java.lang.String | string, queue: Queue): void
                        // @ts-ignore
                        public deleteQueue(queue: Queue): void
                        // @ts-ignore
                        public deleteQueue(vhost: java.lang.String | string, queue: Queue): void
                        // @ts-ignore
                        public getQueue(name: java.lang.String | string): Queue
                        // @ts-ignore
                        public getQueue(vhost: java.lang.String | string, name: java.lang.String | string): Queue
                        // @ts-ignore
                        public getQueues(): Array<Queue>
                        // @ts-ignore
                        public getQueues(vhost: java.lang.String | string): Array<Queue>
                        // @ts-ignore
                        public addQueue(queue: Queue): void
                        // @ts-ignore
                        public addQueue(vhost: java.lang.String | string, queue: Queue): void
                        // @ts-ignore
                        public deleteExchange(exchange: Exchange): void
                        // @ts-ignore
                        public deleteExchange(vhost: java.lang.String | string, exchange: Exchange): void
                        // @ts-ignore
                        public getExchange(name: java.lang.String | string): Exchange
                        // @ts-ignore
                        public getExchange(vhost: java.lang.String | string, name: java.lang.String | string): Exchange
                        // @ts-ignore
                        public getExchanges(): Array<Exchange>
                        // @ts-ignore
                        public getExchanges(vhost: java.lang.String | string): Array<Exchange>
                        // @ts-ignore
                        public getBindings(): Array<Binding>
                        // @ts-ignore
                        public getBindings(vhost: java.lang.String | string): Array<Binding>
                        // @ts-ignore
                        public getBindingsForExchange(vhost: java.lang.String | string, exchange: java.lang.String | string): Array<Binding>
                    }
                }
            }
        }
    }
}
