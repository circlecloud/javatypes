declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace context {
                    /**
                     * Encapsulates a single attribute about the state or circumstances of a
                     * {@link Contextual}.
                     * <p>A {@link Contextual}'s overall "context" is made up multiple
                     * {@link Context} instances, usually stored together in a
                     * {@link java.util.Set}.</p>
                     * <p>Any single {@link Context} attribute is made up of a <b>key</b> and a
                     * <b>value</b>. The key represents the type of context, and the value is just
                     * that, the value associated with the key. Some common/shared keys are
                     * expressed as static fields on this class for convenience.</p>
                     * <p>For example, a context encapsulating a {@link Contextual}s circumstance
                     * within a given world would have key of "world" and a value equal to the name
                     * of the world.</p>
                     * <p>{@link Context} is immutable. The {@link #setValue(String)} inherited from
                     * {@link java.util.Map.Entry} is not supported.</p>
                     */
                    // @ts-ignore
                    class Context extends java.lang.Object implements java.util.Map.Entry<java.lang.String | string, java.lang.String | string> {
                        /**
                         * Create a new context instance.
                         * @param key Context key. Must not be null.
                         * @param value Context value. Must not be null.
                         */
                        // @ts-ignore
                        constructor(key: java.lang.String | string, value: java.lang.String | string)
                        // @ts-ignore
                        public static readonly USER_KEY: java.lang.String | string
                        // @ts-ignore
                        public static readonly WORLD_KEY: java.lang.String | string
                        // @ts-ignore
                        public static readonly DIMENSION_KEY: java.lang.String | string
                        // @ts-ignore
                        public static readonly REMOTE_IP_KEY: java.lang.String | string
                        // @ts-ignore
                        public static readonly LOCAL_HOST_KEY: java.lang.String | string
                        // @ts-ignore
                        public static readonly LOCAL_IP_KEY: java.lang.String | string
                        // @ts-ignore
                        public static readonly LOCAL_PORT_KEY: java.lang.String | string
                        /**
                         * Gets the context key.
                         * @return The key
                         */
                        // @ts-ignore
                        public getKey(): string
                        /**
                         * Gets the context value.
                         * @return The value
                         */
                        // @ts-ignore
                        public getValue(): string
                        /**
                         * Alias method for {@link #getKey()}.
                         * @return The type of the context
                         * @deprecated The presence of this method is misleading - the context
                         *              "type" is the same value as the "key". They are not separate
                         *              attributes, as the presence of two distinct methods would
                         *              otherwise suggest.
                         */
                        // @ts-ignore
                        public getType(): string
                        /**
                         * Alias method for {@link #getValue()}.
                         * @return The specific name of the item involved in this context
                         * @deprecated This method name is misleading - contexts only have a "key"
                         *              and "value". It is not immediately clear what "name" relates
                         *              to. (it could reasonably be either key or value)
                         */
                        // @ts-ignore
                        public getName(): string
                        // @ts-ignore
                        public setValue(value: java.lang.String | string): string
                        // @ts-ignore
                        public equals(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
