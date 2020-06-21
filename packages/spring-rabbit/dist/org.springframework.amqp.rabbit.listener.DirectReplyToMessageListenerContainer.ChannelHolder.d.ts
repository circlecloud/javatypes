declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    namespace DirectReplyToMessageListenerContainer {
                        /**
                         * Holder for a channel; contains a consumer epoch used to prevent inappropriate release
                         * of the consumer after it has been allocated for reuse.
                         */
                        // @ts-ignore
                        class ChannelHolder extends java.lang.Object {
                            // @ts-ignore
                            public getChannel(): Channel
                            // @ts-ignore
                            public getConsumerEpoch(): number /*int*/
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
