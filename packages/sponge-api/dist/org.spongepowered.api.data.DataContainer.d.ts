declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                /**
                 * Represents a data structure that contains data. A DataContainer is
                 * an object that can be considered a root {@link DataView}.
                 */
                // @ts-ignore
                interface DataContainer extends org.spongepowered.api.data.DataView {
                    /**
                     * Creates a new {@link DataContainer} with a default
                     * {@link org.spongepowered.api.data.DataView.SafetyMode} of
                     * {@link org.spongepowered.api.data.DataView.SafetyMode#ALL_DATA_CLONED}.
                     * @return A new data container
                     */
                    // @ts-ignore
                    createNew(): org.spongepowered.api.data.DataContainer
                    /**
                     * Creates a new {@link DataContainer} with the provided
                     * {@link org.spongepowered.api.data.DataView.SafetyMode}.
                     * @param safety The safety mode to use
                     * @see org.spongepowered.api.data.DataView.SafetyMode
                     * @return A new data container with the provided safety mode
                     */
                    // @ts-ignore
                    createNew(safety: org.spongepowered.api.data.DataView.SafetyMode): org.spongepowered.api.data.DataContainer
                    // @ts-ignore
                    set(path: org.spongepowered.api.data.DataQuery, value: java.lang.Object | any): org.spongepowered.api.data.DataContainer
                    // @ts-ignore
                    set<E>(key: org.spongepowered.api.data.key.Key<any>, value: E): org.spongepowered.api.data.DataContainer
                    // @ts-ignore
                    remove(path: org.spongepowered.api.data.DataQuery): org.spongepowered.api.data.DataContainer
                }
            }
        }
    }
}
