declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace mutable {
                        /**
                         * Represents a customized {@link ListValue} handling {@link PatternLayer}s.
                         * Virtually, this is the same as a {@link ListValue}; however, the core
                         * difference is the ability to add a {@link BannerPatternShape} and
                         * {@link DyeColor} to create a new {@link PatternLayer}.
                         */
                        // @ts-ignore
                        interface PatternListValue extends org.spongepowered.api.data.value.mutable.ListValue<org.spongepowered.api.data.meta.PatternLayer> {
                            // @ts-ignore
                            add(element: org.spongepowered.api.data.meta.PatternLayer): org.spongepowered.api.data.value.mutable.PatternListValue
                            /**
                             * Creates and adds a new {@link PatternLayer} based on the provided
                             * {@link BannerPatternShape} and {@link DyeColor}.
                             * @param patternShape The pattern shape
                             * @param color The color
                             * @return This value, for chaining
                             */
                            // @ts-ignore
                            add(patternShape: org.spongepowered.api.data.type.BannerPatternShape, color: org.spongepowered.api.data.type.DyeColor): org.spongepowered.api.data.value.mutable.PatternListValue
                            // @ts-ignore
                            add(index: number /*int*/, value: org.spongepowered.api.data.meta.PatternLayer): org.spongepowered.api.data.value.mutable.PatternListValue
                            /**
                             * Creates and adds a {@link PatternLayer} based on the
                             * {@link BannerPatternShape} and {@link DyeColor} at the desired index
                             * such that the element at the provided index is shifted to the left.
                             * @param index The index to add the element at
                             * @param patternShape The pattern shape
                             * @param color The color of the pattern
                             * @return This value, for chaining
                             */
                            // @ts-ignore
                            add(index: number /*int*/, patternShape: org.spongepowered.api.data.type.BannerPatternShape, color: org.spongepowered.api.data.type.DyeColor): org.spongepowered.api.data.value.mutable.PatternListValue
                            // @ts-ignore
                            add(index: number /*int*/, values: java.lang.Iterable<org.spongepowered.api.data.meta.PatternLayer>): org.spongepowered.api.data.value.mutable.PatternListValue
                            // @ts-ignore
                            set(index: number /*int*/, element: org.spongepowered.api.data.meta.PatternLayer): org.spongepowered.api.data.value.mutable.PatternListValue
                            // @ts-ignore
                            set(value: java.util.List<org.spongepowered.api.data.meta.PatternLayer> | Array<org.spongepowered.api.data.meta.PatternLayer>): org.spongepowered.api.data.value.mutable.PatternListValue
                            // @ts-ignore
                            transform(func: java.util.function$.Function<java.util.List<org.spongepowered.api.data.meta.PatternLayer> | Array<org.spongepowered.api.data.meta.PatternLayer>, java.util.List<org.spongepowered.api.data.meta.PatternLayer> | Array<org.spongepowered.api.data.meta.PatternLayer>>): org.spongepowered.api.data.value.mutable.PatternListValue
                            // @ts-ignore
                            addAll(elements: java.lang.Iterable<org.spongepowered.api.data.meta.PatternLayer>): org.spongepowered.api.data.value.mutable.PatternListValue
                            // @ts-ignore
                            remove(index: number /*int*/): org.spongepowered.api.data.value.mutable.PatternListValue
                            // @ts-ignore
                            remove(element: org.spongepowered.api.data.meta.PatternLayer): org.spongepowered.api.data.value.mutable.PatternListValue
                            // @ts-ignore
                            removeAll(elements: java.lang.Iterable<org.spongepowered.api.data.meta.PatternLayer>): org.spongepowered.api.data.value.mutable.PatternListValue
                            // @ts-ignore
                            removeAll(predicate: java.util.function$.Predicate<org.spongepowered.api.data.meta.PatternLayer>): org.spongepowered.api.data.value.mutable.PatternListValue
                            // @ts-ignore
                            filter(predicate: java.util.function$.Predicate<any>): org.spongepowered.api.data.value.mutable.PatternListValue
                            // @ts-ignore
                            asImmutable(): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue
                        }
                    }
                }
            }
        }
    }
}
