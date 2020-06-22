declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Value object which may or may not contain a Redis password.
                     * <p/>
                     * If a password is present, {@code isPresent()} will return {@code true} and {@code get()} will return the value.
                     * <p/>
                     * The password is stored as character array.
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.0
                     */
                    // @ts-ignore
                    class RedisPassword extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a {@link RedisPassword} from a {@link String}.
                         * @param passwordAsString the password as string.
                         * @return the {#link RedisPassword} for {@code passwordAsString}.
                         */
                        // @ts-ignore
                        public static of(passwordAsString: java.lang.String | string): org.springframework.data.redis.connection.RedisPassword
                        /**
                         * Create a {@link RedisPassword} from a {@code char} array.
                         * @param passwordAsChars the password as char array.
                         * @return the {#link RedisPassword} for {@code passwordAsChars}.
                         */
                        // @ts-ignore
                        public static of(passwordAsChars: string[]): org.springframework.data.redis.connection.RedisPassword
                        /**
                         * Create an absent {@link RedisPassword}.
                         * @return the absent {#link RedisPassword}.
                         */
                        // @ts-ignore
                        public static none(): org.springframework.data.redis.connection.RedisPassword
                        /**
                         * Return {@code true} if there is a password present, otherwise {@code false}.
                         * @return {#code true} if there is a password present, otherwise {@code false}
                         */
                        // @ts-ignore
                        public isPresent(): boolean
                        /**
                         * Return the password value if present. Throws {@link NoSuchElementException} if the password is absent.
                         * @return the password.
                         * @throws NoSuchElementException if the password is absent.
                         */
                        // @ts-ignore
                        public get(): string[]
                        /**
                         * Map the password using a {@link Function} and return a {@link Optional} containing the mapped value.
                         * <p/>
                         * Absent passwords return a {@link Optional#empty()}.
                         * @param mapper must not be {#literal null}.
                         * @return the mapped result.
                         */
                        // @ts-ignore
                        public map<R>(mapper: java.util.function$.Function<string[], R>): java.util.Optional<R>
                        /**
                         * Adopt the password to {@link Optional} containing the password value.
                         * <p/>
                         * Absent passwords return a {@link Optional#empty()}.
                         * @return the {#link Optional} containing the password value.
                         */
                        // @ts-ignore
                        public toOptional(): java.util.Optional<string[]>
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
