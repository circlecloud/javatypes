declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    namespace CorrelationData {
                        /**
                         * Represents a publisher confirmation. When the ack field is
                         * true, the publish was successful; otherwise failed with a possible
                         * reason (may be null, meaning unknown).
                         * @since 2.1
                         */
                        // @ts-ignore
                        class Confirm extends java.lang.Object {
                            // @ts-ignore
                            constructor(ack: boolean, reason: java.lang.String | string)
                            // @ts-ignore
                            public isAck(): boolean
                            // @ts-ignore
                            public getReason(): string
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
