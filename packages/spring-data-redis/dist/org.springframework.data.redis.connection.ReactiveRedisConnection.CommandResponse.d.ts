declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveRedisConnection {
                        /**
                         * Base class for command responses.
                         * @param <I> command input type.
                         * @param <O> command output type.
                         */
                        // @ts-ignore
                        class CommandResponse<I, O> extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * @return {#literal true} if the response is present. An absent {@link CommandResponse} maps to Redis
                             *          {@literal (nil)}.
                             */
                            // @ts-ignore
                            public isPresent(): boolean
                        }
                    }
                }
            }
        }
    }
}
