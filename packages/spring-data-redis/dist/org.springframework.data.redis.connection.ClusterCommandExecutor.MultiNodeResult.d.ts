declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ClusterCommandExecutor {
                        /**
                         * {@link MultiNodeResult} holds all {@link NodeResult} of a command executed on multiple {@link RedisClusterNode}.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @param <T>
                         * @since 1.7
                         */
                        // @ts-ignore
                        class MultiNodeResult<T> extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getResults(): Array<org.springframework.data.redis.connection.ClusterCommandExecutor.NodeResult<T>>
                            /**
                             * Get {@link List} of all individual {@link NodeResult#value}. <br />
                             * The resulting {@link List} may contain {@literal null} values.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public resultsAsList(): Array<T>
                            /**
                             * Get {@link List} of all individual {@link NodeResult#value}. <br />
                             * The resulting {@link List} may contain {@literal null} values.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public resultsAsListSortBy(...keys: number /*byte*/[][]): Array<T>
                            /**
                             * @param returnValue can be {#literal null}.
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            public getFirstNonNullNotEmptyOrDefault(returnValue: T): T
                        }
                    }
                }
            }
        }
    }
}
