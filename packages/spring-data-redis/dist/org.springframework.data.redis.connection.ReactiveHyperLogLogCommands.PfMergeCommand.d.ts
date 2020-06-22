declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveHyperLogLogCommands {
                        /**
                         * {@code PFMERGE} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/pfmerge">Redis Documentation: PFMERGE</a>
                         */
                        // @ts-ignore
                        class PfMergeCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link PfMergeCommand} given a {@link Collection} of {@literal sourceKeys}.
                             * @param sourceKeys must not be {#literal null}.
                             * @return a new {#link PfMergeCommand} for {@literal sourceKeys}.
                             */
                            // @ts-ignore
                            public static valuesIn(sourceKeys: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): org.springframework.data.redis.connection.ReactiveHyperLogLogCommands.PfMergeCommand
                            /**
                             * Applies the {@literal destinationKey}. Constructs a new command instance with all previously configured
                             * properties.
                             * @param destinationKey must not be {#literal null}.
                             * @return a new {#link PfMergeCommand} with {@literal destinationKey} applied.
                             */
                            // @ts-ignore
                            public into(destinationKey: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveHyperLogLogCommands.PfMergeCommand
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getSourceKeys(): Array<java.nio.ByteBuffer>
                        }
                    }
                }
            }
        }
    }
}
