declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                /**
                 * The default implementation of {@link DataContainer} that can be instantiated
                 * for any use. This is the primary implementation of any {@link DataView} that
                 * is used throughout both SpongeAPI and Sponge implementation.
                 * @deprecated To be removed in future releases to avoid implementation bugs
                 *      being part of the API.
                 */
                // @ts-ignore
                class MemoryDataContainer extends org.spongepowered.api.data.MemoryDataView implements org.spongepowered.api.data.DataContainer {
                    /**
                     * Creates a new {@link MemoryDataContainer} with a default
                     * {@link org.spongepowered.api.data.DataView.SafetyMode} of
                     * {@link org.spongepowered.api.data.DataView.SafetyMode#ALL_DATA_CLONED}.
                     * @deprecated Use {#link DataContainer#createNew()}
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a new {@link MemoryDataContainer} with the provided
                     * {@link org.spongepowered.api.data.DataView.SafetyMode}.
                     * @param safety The safety mode to use
                     * @see org.spongepowered.api.data.DataView.SafetyMode
                     * @deprecated Use {#link DataContainer#createNew(org.spongepowered.api.data.DataView.SafetyMode)}
                     */
                    // @ts-ignore
                    constructor(safety: org.spongepowered.api.data.DataView.SafetyMode)
                    // @ts-ignore
                    getParent(): java.util.Optional<org.spongepowered.api.data.DataView>
                    // @ts-ignore
                    getContainer(): org.spongepowered.api.data.DataContainer
                    // @ts-ignore
                    set(path: org.spongepowered.api.data.DataQuery, value: any): org.spongepowered.api.data.DataContainer
                    // @ts-ignore
                    set<E>(key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<E>>, value: E): org.spongepowered.api.data.DataContainer
                    // @ts-ignore
                    remove(path: org.spongepowered.api.data.DataQuery): org.spongepowered.api.data.DataContainer
                }
            }
        }
    }
}
