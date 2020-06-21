declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace common {
                            /**
                             * An abstract implementation of a {@link DataManipulator} that deals
                             * specifically with a {@link MutableBoundedValue}. Similar to
                             * {@link AbstractSingleData} in that it focuses on a single value,
                             * it adds the certainty that the value can only accept values of which
                             * the bounds are met.
                             * @param <T> The type of comparable
                             * @param <M> The API data manipulator
                             * @param <I> The API immutable data manipulator
                             */
                            // @ts-ignore
                            abstract class AbstractBoundedComparableData<T extends java.lang.Comparable<T>, M extends org.spongepowered.api.data.manipulator.DataManipulator<M, I>, I extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<I, M>> extends org.spongepowered.api.data.manipulator.mutable.common.AbstractSingleData<T, M, I> {
                                /**
                                 * @deprecated Use {#link #AbstractBoundedComparableData(Key, Comparable, Comparable, Comparable, Comparable, Comparator)} instead.
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
                                getValueGetter(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<T>
                                // @ts-ignore
                                public setValue(value: T): M
                                // @ts-ignore
                                public toContainer(): org.spongepowered.api.data.DataContainer
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
