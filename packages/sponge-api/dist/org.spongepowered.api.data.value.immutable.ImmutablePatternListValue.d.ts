declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace immutable {
                        // @ts-ignore
                        interface ImmutablePatternListValue extends org.spongepowered.api.data.value.immutable.ImmutableListValue<org.spongepowered.api.data.meta.PatternLayer> {
                            /**
                             * Creates and adds a {@link PatternLayer} based on the
                             * {@link BannerPatternShape} and {@link DyeColor} at the desired index
                             * such that the element at the provided index is shifted to the left. This
                             * returns a new {@link ImmutablePatternListValue}.
                             * @param patternShape The pattern shape
                             * @param color The color of the pattern
                             * @return The new value, for chaining
                             */
                            // @ts-ignore
                            with(patternShape: org.spongepowered.api.data.type.BannerPatternShape, color: org.spongepowered.api.data.type.DyeColor): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue
                            // @ts-ignore
                            with(index: number /*int*/, value: org.spongepowered.api.data.meta.PatternLayer): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue
                            // @ts-ignore
                            with(index: number /*int*/, values: java.lang.Iterable<org.spongepowered.api.data.meta.PatternLayer>): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue
                            /**
                             * Creates and adds a {@link PatternLayer} based on the
                             * {@link BannerPatternShape} and {@link DyeColor} at the desired index
                             * such that the element at the provided index is shifted to the left.
                             * @param index The index to add the element at
                             * @param patternShape The pattern shape
                             * @param color The color of the pattern
                             * @return The new value, for chaining
                             */
                            // @ts-ignore
                            with(index: number /*int*/, patternShape: org.spongepowered.api.data.type.BannerPatternShape, color: org.spongepowered.api.data.type.DyeColor): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue
                            // @ts-ignore
                            with(collection: java.util.List<org.spongepowered.api.data.meta.PatternLayer> | Array<org.spongepowered.api.data.meta.PatternLayer>): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue
                            // @ts-ignore
                            withElement(elements: org.spongepowered.api.data.meta.PatternLayer): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue
                            // @ts-ignore
                            withAll(elements: java.lang.Iterable<org.spongepowered.api.data.meta.PatternLayer>): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue
                            /**
                             * Creates and adds a {@link PatternLayer} based on the
                             * {@link BannerPatternShape} and {@link DyeColor} at the desired index
                             * such that the element at the provided index is shifted to the left.
                             * @param index The index to add the element at
                             * @param patternShape The pattern shape
                             * @param color The color of the pattern
                             * @return The new value, for chaining
                             */
                            // @ts-ignore
                            set(index: number /*int*/, patternShape: org.spongepowered.api.data.type.BannerPatternShape, color: org.spongepowered.api.data.type.DyeColor): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue
                            // @ts-ignore
                            set(index: number /*int*/, element: org.spongepowered.api.data.meta.PatternLayer): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue
                            // @ts-ignore
                            without(element: org.spongepowered.api.data.meta.PatternLayer): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue
                            // @ts-ignore
                            without(index: number /*int*/): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue
                            // @ts-ignore
                            withoutAll(elements: java.lang.Iterable<org.spongepowered.api.data.meta.PatternLayer>): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue
                            // @ts-ignore
                            withoutAll(predicate: java.util.function$.Predicate<org.spongepowered.api.data.meta.PatternLayer>): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue
                            // @ts-ignore
                            asMutable(): org.spongepowered.api.data.value.mutable.PatternListValue
                        }
                    }
                }
            }
        }
    }
}
