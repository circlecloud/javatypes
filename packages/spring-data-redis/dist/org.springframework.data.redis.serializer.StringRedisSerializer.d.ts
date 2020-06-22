declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace serializer {
                    /**
                     * Simple {@link java.lang.String} to {@literal byte[]} (and back) serializer. Converts {@link java.lang.String Strings}
                     * into bytes and vice-versa using the specified charset (by default {@literal UTF-8}).
                     * <p>
                     * Useful when the interaction with the Redis happens mainly through Strings.
                     * <p>
                     * Does not perform any {@literal null} conversion since empty strings are valid keys/values.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    class StringRedisSerializer extends java.lang.Object implements org.springframework.data.redis.serializer.RedisSerializer<java.lang.String | string> {
                        /**
                         * Creates a new {@link StringRedisSerializer} using {@link StandardCharsets#UTF_8 UTF-8}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Creates a new {@link StringRedisSerializer} using the given {@link Charset} to encode and decode strings.
                         * @param charset must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(charset: java.nio.charset.Charset)
                        /**
                         * {@link StringRedisSerializer} to use 7 bit ASCII, a.k.a. ISO646-US, a.k.a. the Basic Latin block of the Unicode
                         * character set.
                         * @see StandardCharsets#US_ASCII
                         * @since 2.1
                         */
                        // @ts-ignore
                        public static readonly US_ASCII: org.springframework.data.redis.serializer.StringRedisSerializer
                        /**
                         * {@link StringRedisSerializer} to use ISO Latin Alphabet No. 1, a.k.a. ISO-LATIN-1.
                         * @see StandardCharsets#ISO_8859_1
                         * @since 2.1
                         */
                        // @ts-ignore
                        public static readonly ISO_8859_1: org.springframework.data.redis.serializer.StringRedisSerializer
                        /**
                         * {@link StringRedisSerializer} to use 8 bit UCS Transformation Format.
                         * @see StandardCharsets#UTF_8
                         * @since 2.1
                         */
                        // @ts-ignore
                        public static readonly UTF_8: org.springframework.data.redis.serializer.StringRedisSerializer
                        // @ts-ignore
                        public deserialize(bytes: number /*byte*/[]): string
                        // @ts-ignore
                        public serialize(string: java.lang.String | string): number /*byte*/[]
                    }
                }
            }
        }
    }
}
