declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace common {
                            /**
                             * An abstracted {@link ImmutableDataManipulator} that focuses solely on an
                             * {@link ImmutableBoundedValue} as it's {@link Value} return type.
                             * @param <T> The type of comparable element
                             * @param <I> The immutable data manipulator type
                             * @param <M> The mutable data manipulator type
                             */
                            // @ts-ignore
                            abstract class AbstractImmutableBoundedComparableData<T extends java.lang.Comparable<T>, I extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<I, M>, M extends org.spongepowered.api.data.manipulator.DataManipulator<M, I>> extends org.spongepowered.api.data.manipulator.immutable.common.AbstractImmutableSingleData<T, I, M> {
                                /**
                                 * @deprecated Use {#link #AbstractImmutableBoundedComparableData(Key, Comparable, Comparable, Comparable, Comparable, Comparator)} instead.
                                 */
                                // @ts-ignore
                                constructor(value: T, usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<T>>, comparator: java.util.Comparator<T>, lowerBound: T, upperBound: T, defaultValue: T)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<T>>, value: T, lowerBound: T, upperBound: T, comparator: java.util.Comparator<T>)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<T>>, value: T, defaultValue: T, lowerBound: T, upperBound: T, comparator: java.util.Comparator<T>)
                                // @ts-ignore
                                readonly comparator: java.util.Comparator<T>
                                // @ts-ignore
                                readonly lowerBound: T
                                // @ts-ignore
                                readonly upperBound: T
                                // @ts-ignore
                                readonly defaultValue: T
                                // @ts-ignore
                                getValueGetter(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<T>
                                // @ts-ignore
                                public hashCode(): number /*int*/
                                // @ts-ignore
                                public equals(obj: java.lang.Object | any): boolean
                            }
                        }
                    }
                }
            }
        }
    }
}
