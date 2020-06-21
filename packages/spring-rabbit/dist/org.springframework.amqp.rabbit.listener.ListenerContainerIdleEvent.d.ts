declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    /**
                     * An event that is emitted when a container is idle if the container
                     * is configured to do so.
                     * @author Gary Russell
                     * @since 1.6
                     */
                    // @ts-ignore
                    class ListenerContainerIdleEvent extends AmqpEvent {
                        // @ts-ignore
                        constructor(source: java.lang.Object | any, idleTime: number /*long*/, id: java.lang.String | string, ...queueNames: java.lang.String[] | string[])
                        /**
                         * How long the container has been idle.
                         * @return the time in milliseconds.
                         */
                        // @ts-ignore
                        public getIdleTime(): number /*long*/
                        /**
                         * The queues the container is listening to.
                         * @return the queue names.
                         */
                        // @ts-ignore
                        public getQueueNames(): string[]
                        /**
                         * The id of the listener (if {@code @RabbitListener}) or the container bean name.
                         * @return the id.
                         */
                        // @ts-ignore
                        public getListenerId(): string
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
