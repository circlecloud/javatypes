declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    /**
                     * Base interface for Inventory Properties. It is recommended that implementors
                     * subclass {@link AbstractInventoryProperty} instead of implementing this
                     * interface directly.
                     */
                    // @ts-ignore
                    interface InventoryProperty<K, V> extends org.spongepowered.api.data.Property<K, V> {
                    }
                }
            }
        }
    }
}
