declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace mutable {
                        /**
                         * Represents a particular type of {@link CollectionValue} that is backed by
                         * a {@link WeightedTable}.
                         * @param <E> The type of weighted object
                         */
                        // @ts-ignore
                        interface WeightedCollectionValue<E> extends org.spongepowered.api.data.value.mutable.CollectionValue<org.spongepowered.api.util.weighted.TableEntry<E>, org.spongepowered.api.util.weighted.WeightedTable<E>, org.spongepowered.api.data.value.mutable.WeightedCollectionValue<E>, org.spongepowered.api.data.value.immutable.ImmutableWeightedCollectionValue<E>> {
                            /**
                             * Selects a random value from this list based on their weight.
                             * <p>If the list is empty then null will be returned.</p>
                             * @param random The random object to use for selection
                             * @return The selected value
                             */
                            // @ts-ignore
                            get(random: java.util.Random): Array<E>
                        }
                    }
                }
            }
        }
    }
}
