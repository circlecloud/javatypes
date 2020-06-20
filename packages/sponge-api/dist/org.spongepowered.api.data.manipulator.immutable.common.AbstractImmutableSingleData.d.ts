declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace common {
                            /**
                             * An abstract implementation of an {@link ImmutableDataManipulator} that
                             * specifically deals with a single value.
                             * @param <T> The type of value
                             * @param <I> The type of immutable manipulator
                             * @param <M> The type of mutable manipulator
                             */
                            // @ts-ignore
                            class AbstractImmutableSingleData<T, I extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<I, M>, M extends org.spongepowered.api.data.manipulator.DataManipulator<M, I>> extends org.spongepowered.api.data.manipulator.immutable.common.AbstractImmutableData<I, M> {
                                /**
                                 * @deprecated Use {#link #AbstractImmutableSingleData(Key, Object)} instead.
                                 */
                                // @ts-ignore
                                constructor(value: T, usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<T>>)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<T>>, value: T)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<T>>, value: T, defaultValue: T)
                                // @ts-ignore
                                readonly usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<T>>
                                // @ts-ignore
                                readonly value: T
                                // @ts-ignore
                                readonly defaultValue: T
                                // @ts-ignore
                                abstract getValueGetter(): org.spongepowered.api.data.value.immutable.ImmutableValue<?>
                                // @ts-ignore
                                getValue(): T
                                // @ts-ignore
                                abstract asMutable(): M
                                // @ts-ignore
                                registerGetters(): void
                                // @ts-ignore
                                get<E>(key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<E>>): java.util.Optional<E>
                                // @ts-ignore
                                supports(key: org.spongepowered.api.data.key.Key<any>): boolean
                                // @ts-ignore
                                getKeys(): java.util.Set<org.spongepowered.api.data.key.Key<?>>
                                // @ts-ignore
                                hashCode(): int
                                // @ts-ignore
                                equals(obj: any): boolean
                            }
                        }
                    }
                }
            }
        }
    }
}
