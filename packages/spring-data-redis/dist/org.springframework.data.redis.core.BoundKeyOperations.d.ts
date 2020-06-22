declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Operations over a Redis key. Useful for executing common key-'bound' operations to all implementations.
                     * <p>
                     * As the rest of the APIs, if the underlying connection is pipelined or queued/in multi mode, all methods will return
                     * {@literal null}.
                     * <p>
                     * @author Costin Leau
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    interface BoundKeyOperations<K> {
                        /**
                         * Returns the key associated with this entity.
                         * @return key associated with the implementing entity
                         */
                        // @ts-ignore
                        getKey(): K
                        /**
                         * Returns the associated Redis type.
                         * @return key type. {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        getType(): org.springframework.data.redis.connection.DataType
                        /**
                         * Returns the expiration of this key.
                         * @return expiration value (in seconds). {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        getExpire(): number
                        /**
                         * Sets the key time-to-live/expiration.
                         * @param timeout expiration value
                         * @param unit expiration unit
                         * @return true if expiration was set, false otherwise. {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        expire(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): java.lang.Boolean
                        /**
                         * Sets the key time-to-live/expiration.
                         * @param date expiration date
                         * @return true if expiration was set, false otherwise. {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        expireAt(date: java.util.Date): java.lang.Boolean
                        /**
                         * Removes the expiration (if any) of the key.
                         * @return true if expiration was removed, false otherwise. {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        persist(): java.lang.Boolean
                        /**
                         * Renames the key. <br>
                         * <b>Note:</b> The new name for empty collections will be propagated on add of first element.
                         * @param newKey new key. Must not be {#literal null}.
                         */
                        // @ts-ignore
                        rename(newKey: K): void
                    }
                }
            }
        }
    }
}
