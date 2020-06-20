declare namespace org {
    namespace bukkit {
        namespace persistence {
            namespace PersistentDataType {
                /**
                 * A default implementation that simply exists to pass on the retrieved or
                 * inserted value to the next layer.
                 * <p>
                 * This implementation does not add any kind of logic, but is used to
                 * provide default implementations for the primitive types.
                 * @param <T> the generic type of the primitive objects
                 */
                // @ts-ignore
                class PrimitivePersistentDataType<T> extends java.lang.Object implements org.bukkit.persistence.PersistentDataType<T, T> {
                    // @ts-ignore
                    getPrimitiveType(): java.lang.Class<T>
                    // @ts-ignore
                    getComplexType(): java.lang.Class<T>
                    // @ts-ignore
                    toPrimitive(complex: T, context: org.bukkit.persistence.PersistentDataAdapterContext): T
                    // @ts-ignore
                    fromPrimitive(primitive: T, context: org.bukkit.persistence.PersistentDataAdapterContext): T
                }
            }
        }
    }
}
