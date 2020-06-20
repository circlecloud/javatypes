declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace common {
                            /**
                             * A common implementation for {@link ListData}s provided by the API.
                             * @param <E> The type of element within the list
                             * @param <M> The type of {#link DataManipulator}
                             * @param <I> The type of {#link ImmutableDataManipulator}
                             */
                            // @ts-ignore
                            class AbstractListData<E, M extends org.spongepowered.api.data.manipulator.mutable.ListData<E, M, I>, I extends org.spongepowered.api.data.manipulator.immutable.ImmutableListData<E, I, M>> extends org.spongepowered.api.data.manipulator.mutable.common.AbstractSingleData<java.util.List<E>, M, I> implements org.spongepowered.api.data.manipulator.mutable.ListData<E, M, I> {
                                /**
                                 * @deprecated Use {#link #AbstractListData(Key, List)} instead.
                                 */
                                // @ts-ignore
                                constructor(value: Array<E>, usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<java.util.List<E>>>)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.ListValue<E>>, value: Array<E>)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.ListValue<E>>, value: Array<E>, defaultValue: Array<E>)
                                // @ts-ignore
                                getValueGetter(): org.spongepowered.api.data.value.mutable.ListValue<E>
                                // @ts-ignore
                                get<V>(key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<V>>): java.util.Optional<V>
                                // @ts-ignore
                                supports(key: org.spongepowered.api.data.key.Key<any>): boolean
                                // @ts-ignore
                                abstract asImmutable(): I
                                // @ts-ignore
                                getValue(): java.util.List<E>
                                // @ts-ignore
                                setValue(value: Array<E>): M
                                // @ts-ignore
                                hashCode(): int
                                // @ts-ignore
                                equals(obj: any): boolean
                                // @ts-ignore
                                getListValue(): org.spongepowered.api.data.value.mutable.ListValue<E>
                                // @ts-ignore
                                asList(): java.util.List<E>
                            }
                        }
                    }
                }
            }
        }
    }
}
