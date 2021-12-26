declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                namespace tags {
                    /**
                     * This interface represents the context in which the {@link ItemTagType} can
                     * serialize and deserialize the passed values.
                     * @deprecated this API part has been replaced by {#link PersistentDataHolder}.
                     *  Please use {@link PersistentDataAdapterContext} instead of this.
                     */
                    // @ts-ignore
                    interface ItemTagAdapterContext {
                        /**
                         * Creates a new and empty tag container instance.
                         * @return the fresh container instance
                         */
                        // @ts-ignore
                        newTagContainer(): org.bukkit.inventory.meta.tags.CustomItemTagContainer
                    }
                }
            }
        }
    }
}
