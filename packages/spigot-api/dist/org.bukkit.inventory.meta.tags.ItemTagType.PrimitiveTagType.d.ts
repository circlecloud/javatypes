declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                namespace tags {
                    namespace ItemTagType {
                        /**
                         * A default implementation that simply exists to pass on the retrieved or
                         * inserted value to the next layer.
                         * This implementation does not add any kind of logic, but is used to
                         * provide default implementations for the primitive types.
                         * @param <T> the generic type of the primitive objects
                         */
                        // @ts-ignore
                        class PrimitiveTagType<T> extends java.lang.Object implements org.bukkit.inventory.meta.tags.ItemTagType<T, T> {
                            // @ts-ignore
                            getPrimitiveType(): java.lang.Class<T>
                            // @ts-ignore
                            getComplexType(): java.lang.Class<T>
                            // @ts-ignore
                            toPrimitive(complex: T, context: org.bukkit.inventory.meta.tags.ItemTagAdapterContext): T
                            // @ts-ignore
                            fromPrimitive(primitive: T, context: org.bukkit.inventory.meta.tags.ItemTagAdapterContext): T
                        }
                    }
                }
            }
        }
    }
}
