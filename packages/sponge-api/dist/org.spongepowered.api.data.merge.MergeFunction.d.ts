declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace merge {
                    /**
                     * Represents a unique form of {@link Function} that attempts to merge
                     * two separate {@link ValueContainer}s into a singular {@link ValueContainer}.
                     * A merge function is similar to a {@link Function} such that it can be reused
                     * for multiple purposes and should be "stateless" on its own.
                     */
                    // @ts-ignore
                    interface MergeFunction {
                        /**
                         * Represents a {@link MergeFunction} that ignores all merges and uses the
                         * replacement, or the original if the replacement is {@code null}.
                         */
                        // @ts-ignore
                        
                        /**
                         * Represents a {@link MergeFunction} that forces no merges and uses the
                         * original, or proposed replacement if the original is {@code null}.
                         */
                        // @ts-ignore
                        
                        /**
                         * Performs a merge of a type of {@link ValueContainer} such that a merge
                         * of the contained {@link BaseValue}s has been performed and the resulting
                         * merged {@link ValueContainer} is returned. It is suffice to say that
                         * only one of the {@link ValueContainer} containers may be {@code null},
                         * such that <pre> {@code
                         * if (original == null) {
                         * return checkNotNull(replacement);
                         * } else if (replacement == null) {
                         * return original;
                         * } else {
                         * // do something merging the necessary values
                         * }
                         * }</pre>
                         * It can be therefor discerned that both values are passed in as copies
                         * and therefor either one can be modified and returned.
                         * <p>Since
                         * {@link CompositeValueStore#copyFrom(CompositeValueStore, MergeFunction)}
                         * accepts only a single {@link MergeFunction}, and a
                         * {@link CompositeValueStore} may have multiple {@link ValueContainer}s,
                         * as provided by {@link CompositeValueStore#getContainers()}, the merge
                         * function may be called for every single number of {@link ValueContainer}.
                         * This way, a {@link MergeFunction} can be fully customized to merge
                         * specific {@link ValueContainer}s of matching types.</p>
                         * @param original The original {#link ValueContainer} from the value store
                         * @param replacement The replacing value container
                         * @param <C> The type of {#link ValueContainer}
                         * @return The "merged" {#link ValueContainer}
                         */
                        // @ts-ignore
                        merge<C extends org.spongepowered.api.data.value.ValueContainer<?>>(original: C extends org.spongepowered.api.data.value.ValueContainer<any>, replacement: C extends org.spongepowered.api.data.value.ValueContainer<any>): C
                        /**
                         * Creates a new {@link MergeFunction} chaining this current merge function
                         * with the provided merge function. The order of the merge is this
                         * performs {@link #merge(ValueContainer, ValueContainer)} then, the
                         * provided {@link MergeFunction} merges the returned merged
                         * {@link ValueContainer} and the {@code replacement}. This can be used to
                         * apply a custom merge strategy after a pre-defined {@link MergeFunction}
                         * is applied.
                         * @param that The {#link MergeFunction} to chain
                         * @return The new {#link MergeFunction}
                         */
                        // @ts-ignore
                        andThen(that: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.merge.MergeFunction
                    }
                }
            }
        }
    }
}
