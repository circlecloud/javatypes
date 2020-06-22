declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace listener {
                    /**
                     * Topic for a Redis message. Acts a high-level abstraction on top of Redis low-level channels or patterns.
                     * @author Costin Leau
                     */
                    // @ts-ignore
                    interface Topic {
                        /**
                         * Returns the topic (as a String).
                         * @return the topic
                         */
                        // @ts-ignore
                        getTopic(): string
                    }
                }
            }
        }
    }
}
