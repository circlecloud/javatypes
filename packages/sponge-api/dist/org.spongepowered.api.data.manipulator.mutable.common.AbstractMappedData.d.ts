declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace common {
                            /**
                             * A common implementation for {@link ListData}s provided by the API.
                             * @param <K> The type of key in the map
                             * @param <V> The type of value in the map
                             * @param <M> The type of {#link DataManipulator}
                             * @param <I> The type of {#link ImmutableDataManipulator}
                             */
                            // @ts-ignore
                            class AbstractMappedData<K, V, M extends org.spongepowered.api.data.manipulator.mutable.MappedData<K, V, M, I>, I extends org.spongepowered.api.data.manipulator.immutable.ImmutableMappedData<K, V, I, M>> extends org.spongepowered.api.data.manipulator.mutable.common.AbstractSingleData<java.util.Map<K, V>, M, I> implements org.spongepowered.api.data.manipulator.mutable.MappedData<K, V, M, I> {
                                /**
                                 * @deprecated Use {#link #AbstractMappedData(Key, Map)} instead.
                                 */
                                // @ts-ignore
                                constructor(value: java.util.Map<K, V>, usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<java.util.Map<K, V>>>)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MapValue<K, V>>, value: java.util.Map<K, V>)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MapValue<K, V>>, value: java.util.Map<K, V>, defaultValue: java.util.Map<K, V>)
                                // @ts-ignore
                                getValueGetter(): org.spongepowered.api.data.value.mutable.MapValue<K, V>
                                // @ts-ignore
                                getValue(): java.util.Map<K, V>
                                // @ts-ignore
                                setValue(value: java.util.Map<K, V>): M
                                // @ts-ignore
                                hashCode(): int
                                // @ts-ignore
                                equals(obj: any): boolean
                                // @ts-ignore
                                getMapValue(): org.spongepowered.api.data.value.mutable.MapValue<K, V>
                                // @ts-ignore
                                asMap(): java.util.Map<K, V>
                            }
                        }
                    }
                }
            }
        }
    }
}
