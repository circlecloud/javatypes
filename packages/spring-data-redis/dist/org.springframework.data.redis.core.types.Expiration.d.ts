declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace types {
                        /**
                         * Expiration holds a value with its associated {@link TimeUnit}.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.7
                         */
                        // @ts-ignore
                        class Expiration extends java.lang.Object {
                            /**
                             * Creates new {@link Expiration}.
                             * @param expirationTime can be {#literal null}. Defaulted to {@link TimeUnit#SECONDS}
                             * @param timeUnit
                             */
                            // @ts-ignore
                            constructor(expirationTime: number /*long*/, timeUnit: java.util.concurrent.TimeUnit)
                            /**
                             * Get the expiration time converted into {@link TimeUnit#MILLISECONDS}.
                             * @return 
                             */
                            // @ts-ignore
                            public getExpirationTimeInMilliseconds(): number /*long*/
                            /**
                             * Get the expiration time converted into {@link TimeUnit#SECONDS}.
                             * @return 
                             */
                            // @ts-ignore
                            public getExpirationTimeInSeconds(): number /*long*/
                            /**
                             * Get the expiration time.
                             * @return 
                             */
                            // @ts-ignore
                            public getExpirationTime(): number /*long*/
                            /**
                             * Get the time unit for the expiration time.
                             * @return 
                             */
                            // @ts-ignore
                            public getTimeUnit(): java.util.concurrent.TimeUnit
                            /**
                             * Get the expiration time converted into the desired {@code targetTimeUnit}.
                             * @param targetTimeUnit must not {#literal null}.
                             * @return 
                             * @throws IllegalArgumentException
                             */
                            // @ts-ignore
                            public getConverted(targetTimeUnit: java.util.concurrent.TimeUnit): number /*long*/
                            /**
                             * Creates new {@link Expiration} with {@link TimeUnit#SECONDS}.
                             * @param expirationTime
                             * @return 
                             */
                            // @ts-ignore
                            public static seconds(expirationTime: number /*long*/): org.springframework.data.redis.core.types.Expiration
                            /**
                             * Creates new {@link Expiration} with {@link TimeUnit#MILLISECONDS}.
                             * @param expirationTime
                             * @return 
                             */
                            // @ts-ignore
                            public static milliseconds(expirationTime: number /*long*/): org.springframework.data.redis.core.types.Expiration
                            /**
                             * Creates new {@link Expiration} with the provided {@link TimeUnit}. Greater units than {@link TimeUnit#SECONDS} are
                             * converted to {@link TimeUnit#SECONDS}. Units smaller than {@link TimeUnit#MILLISECONDS} are converted to
                             * {@link TimeUnit#MILLISECONDS} and can lose precision since {@link TimeUnit#MILLISECONDS} is the smallest
                             * granularity supported by Redis.
                             * @param expirationTime
                             * @param timeUnit can be {#literal null}. Defaulted to {@link TimeUnit#SECONDS}
                             * @return 
                             */
                            // @ts-ignore
                            public static from(expirationTime: number /*long*/, timeUnit: java.util.concurrent.TimeUnit): org.springframework.data.redis.core.types.Expiration
                            /**
                             * Creates new {@link Expiration} with the provided {@link java.time.Duration}. Durations with at least
                             * {@link TimeUnit#SECONDS} resolution use seconds, durations using milliseconds use {@link TimeUnit#MILLISECONDS}
                             * resolution.
                             * @param duration must not be {#literal null}.
                             * @return 
                             * @since 2.0
                             */
                            // @ts-ignore
                            public static from(duration: java.time.Duration): org.springframework.data.redis.core.types.Expiration
                            /**
                             * Creates new persistent {@link Expiration}.
                             * @return 
                             */
                            // @ts-ignore
                            public static persistent(): org.springframework.data.redis.core.types.Expiration
                            /**
                             * @return {#literal true} if {@link Expiration} is set to persistent.
                             */
                            // @ts-ignore
                            public isPersistent(): boolean
                        }
                    }
                }
            }
        }
    }
}
