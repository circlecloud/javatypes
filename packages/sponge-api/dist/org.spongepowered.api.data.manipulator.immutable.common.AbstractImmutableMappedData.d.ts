declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace common {
                            // @ts-ignore
                            class AbstractImmutableMappedData<K, V, I extends org.spongepowered.api.data.manipulator.immutable.ImmutableMappedData<K, V, I, M>, M extends org.spongepowered.api.data.manipulator.mutable.MappedData<K, V, M, I>> extends org.spongepowered.api.data.manipulator.immutable.common.AbstractImmutableSingleData<java.util.Map<K, V>, I, M> implements org.spongepowered.api.data.manipulator.immutable.ImmutableMappedData<K, V, I, M> {
                                /**
                                 * @deprecated Use {#link #AbstractImmutableMappedData(Key, Map, Map)} instead.
                                 */
                                // @ts-ignore
                                constructor(value: java.util.Map<K, V>, usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<java.util.Map<K, V>>>)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MapValue<K, V>>, value: java.util.Map<K, V>)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MapValue<K, V>>, value: java.util.Map<K, V>, defaultValue: java.util.Map<K, V>)
                                // @ts-ignore
                                getValueGetter(): org.spongepowered.api.data.value.immutable.ImmutableMapValue<K, V>
                                // @ts-ignore
                                get(key: K): java.util.Optional<V>
                                // @ts-ignore
                                getMapKeys(): java.util.Set<K>
                                // @ts-ignore
                                getMapValue(): org.spongepowered.api.data.value.immutable.ImmutableMapValue<K, V>
                            }
                        }
                    }
                }
            }
        }
    }
}
