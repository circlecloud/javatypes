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
                    class Context extends java.lang.Object implements java.util.Map.Entry<java.lang.String, java.lang.String> {
                        /**
                         * Create a new context instance.
                         * @param key Context key. Must not be null.
                         * @param value Context value. Must not be null.
                         */
                        // @ts-ignore
                        constructor(key: string, value: string)
                        // @ts-ignore
                        readonly USER_KEY: string
                        // @ts-ignore
                        readonly WORLD_KEY: string
                        // @ts-ignore
                        readonly DIMENSION_KEY: string
                        // @ts-ignore
                        readonly REMOTE_IP_KEY: string
                        // @ts-ignore
                        readonly LOCAL_HOST_KEY: string
                        // @ts-ignore
                        readonly LOCAL_IP_KEY: string
                        // @ts-ignore
                        readonly LOCAL_PORT_KEY: string
                        /**
                         * Gets the context key.
                         * @return The key
                         */
                        // @ts-ignore
                        getKey(): java.lang.String
                        /**
                         * Gets the context value.
                         * @return The value
                         */
                        // @ts-ignore
                        getValue(): java.lang.String
                        /**
                         * Alias method for {@link #getKey()}.
                         * @return The type of the context
                         * @deprecated The presence of this method is misleading - the context
                         *              "type" is the same value as the "key". They are not separate
                         *              attributes, as the presence of two distinct methods would
                         *              otherwise suggest.
                         */
                        // @ts-ignore
                        getType(): java.lang.String
                        /**
                         * Alias method for {@link #getValue()}.
                         * @return The specific name of the item involved in this context
                         * @deprecated This method name is misleading - contexts only have a "key"
                         *              and "value". It is not immediately clear what "name" relates
                         *              to. (it could reasonably be either key or value)
                         */
                        // @ts-ignore
                        getName(): java.lang.String
                        // @ts-ignore
                        setValue(value: string): java.lang.String
                        // @ts-ignore
                        equals(o: any): boolean
                        // @ts-ignore
                        hashCode(): int
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
