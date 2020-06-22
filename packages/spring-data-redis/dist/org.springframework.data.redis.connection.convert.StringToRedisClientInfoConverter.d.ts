declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace convert {
                        /**
                         * {@link Converter} implementation to create one {@link RedisClientInfo} per line entry in given {@link String} array.
                         * <pre>
                         * ## sample of single line
                         * addr=127.0.0.1:60311 fd=6 name= age=4059 idle=0 flags=N db=0 sub=0 psub=0 multi=-1 qbuf=0 qbuf-free=32768 obl=0 oll=0 omem=0 events=r cmd=client
                         * </pre>
                         * @author Christoph Strobl
                         * @since 1.3
                         */
                        // @ts-ignore
                        class StringToRedisClientInfoConverter extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public convert(lines: java.lang.String[] | string[]): Array<org.springframework.data.redis.core.types.RedisClientInfo>
                        }
                    }
                }
            }
        }
    }
}
