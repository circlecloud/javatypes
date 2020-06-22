declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Default message implementation.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     */
                    // @ts-ignore
                    class DefaultMessage extends java.lang.Object implements org.springframework.data.redis.connection.Message {
                        // @ts-ignore
                        constructor(channel: number /*byte*/[], body: number /*byte*/[])
                        /**
                         * @return 
                         */
                        // @ts-ignore
                        public getChannel(): number /*byte*/[]
                        // @ts-ignore
                        public getBody(): number /*byte*/[]
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
