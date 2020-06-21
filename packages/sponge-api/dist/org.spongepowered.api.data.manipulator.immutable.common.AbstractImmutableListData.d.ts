declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace common {
                            // @ts-ignore
                            abstract class AbstractImmutableListData<E, I extends org.spongepowered.api.data.manipulator.immutable.ImmutableListData<E, I, M>, M extends org.spongepowered.api.data.manipulator.mutable.ListData<E, M, I>> extends org.spongepowered.api.data.manipulator.immutable.common.AbstractImmutableSingleData<java.util.List<E> | Array<E>, I, M> implements org.spongepowered.api.data.manipulator.immutable.ImmutableListData<E, I, M> {
                                /**
                                 * @deprecated Use {#link #AbstractImmutableListData(Key, List)} instead.
                                 */
                                // @ts-ignore
                                constructor(value: java.util.List<E> | Array<E>, usedKey: org.spongepowered.api.data.key.Key<any>)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.ListValue<E>>, value: java.util.List<E> | Array<E>)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.ListValue<E>>, value: java.util.List<E> | Array<E>, defaultValue: java.util.List<E> | Array<E>)
                                // @ts-ignore
                                getValueGetter(): org.spongepowered.api.data.value.immutable.ImmutableListValue<E>
                                // @ts-ignore
                                public getListValue(): org.spongepowered.api.data.value.immutable.ImmutableListValue<E>
                                // @ts-ignore
                                public asList(): Array<E>
                            }
                        }
                    }
                }
            }
        }
    }
}
