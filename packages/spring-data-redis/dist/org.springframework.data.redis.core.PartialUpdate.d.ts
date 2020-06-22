declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * {@link PartialUpdate} allows to issue individual property updates without the need of rewriting the whole entity. It
                     * allows to define {@literal set}, {@literal delete} actions on existing objects while taking care of updating
                     * potential expiration times of the entity itself as well as index structures.
                     * @author Christoph Strobl
                     * @param <T>
                     * @since 1.8
                     */
                    // @ts-ignore
                    class PartialUpdate<T> extends java.lang.Object {
                        /**
                         * Create new {@link PartialUpdate} for given id and type.
                         * @param id must not be {#literal null}.
                         * @param targetType must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(id: java.lang.Object | any, targetType: java.lang.Class<T>)
                        /**
                         * Create new {@link PartialUpdate} for given id and object.
                         * @param id must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(id: java.lang.Object | any, value: T)
                        /**
                         * Create new {@link PartialUpdate} for given id and type.
                         * @param id must not be {#literal null}.
                         * @param targetType must not be {#literal null}.
                         */
                        // @ts-ignore
                        public static newPartialUpdate<S>(id: java.lang.Object | any, targetType: java.lang.Class<S>): org.springframework.data.redis.core.PartialUpdate<S>
                        /**
                         * @return can be {#literal null}.
                         */
                        // @ts-ignore
                        public getValue(): T
                        /**
                         * Set the value of a simple or complex {@literal value} reachable via given {@literal path}.
                         * @param path must not be {#literal null}.
                         * @param value must not be {#literal null}. If you want to remove a value use {@link #del(String)}.
                         * @return a new {#link PartialUpdate}.
                         */
                        // @ts-ignore
                        public set(path: java.lang.String | string, value: java.lang.Object | any): org.springframework.data.redis.core.PartialUpdate<T>
                        /**
                         * Remove the value reachable via given {@literal path}.
                         * @param path path must not be {#literal null}.
                         * @return a new {#link PartialUpdate}.
                         */
                        // @ts-ignore
                        public del(path: java.lang.String | string): org.springframework.data.redis.core.PartialUpdate<T>
                        /**
                         * Get the target type.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        public getTarget(): java.lang.Class<T>
                        /**
                         * Get the id of the element to update.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        public getId(): any
                        /**
                         * Get the list of individual property updates.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        public getPropertyUpdates(): Array<org.springframework.data.redis.core.PartialUpdate.PropertyUpdate>
                        /**
                         * @return true if expiration time of target should be updated.
                         */
                        // @ts-ignore
                        public isRefreshTtl(): boolean
                        /**
                         * Set indicator for updating expiration time of target.
                         * @param refreshTtl
                         * @return a new {#link PartialUpdate}.
                         */
                        // @ts-ignore
                        public refreshTtl(refreshTtl: boolean): org.springframework.data.redis.core.PartialUpdate<T>
                    }
                }
            }
        }
    }
}
