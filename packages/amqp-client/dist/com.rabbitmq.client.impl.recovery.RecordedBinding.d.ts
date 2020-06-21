declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace recovery {
                    /**
                     * @since 3.3.0
                     */
                    // @ts-ignore
                    abstract class RecordedBinding extends com.rabbitmq.client.impl.recovery.RecordedEntity {
                        // @ts-ignore
                        constructor(channel: com.rabbitmq.client.impl.recovery.AutorecoveringChannel)

                        // @ts-ignore
                        public source(value: java.lang.String | string): com.rabbitmq.client.impl.recovery.RecordedBinding
                        // @ts-ignore
                        public destination(value: java.lang.String | string): com.rabbitmq.client.impl.recovery.RecordedBinding
                        // @ts-ignore
                        public routingKey(value: java.lang.String | string): com.rabbitmq.client.impl.recovery.RecordedBinding
                        // @ts-ignore
                        public arguments(value: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.impl.recovery.RecordedBinding
                        // @ts-ignore
                        public getSource(): string
                        // @ts-ignore
                        public getDestination(): string
                        // @ts-ignore
                        public getRoutingKey(): string
                        // @ts-ignore
                        public getArguments(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        // @ts-ignore
                        public setDestination(destination: java.lang.String | string): void
                        // @ts-ignore
                        public abstract recover(): void
                        // @ts-ignore
                        public equals(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                    }
                }
            }
        }
    }
}
