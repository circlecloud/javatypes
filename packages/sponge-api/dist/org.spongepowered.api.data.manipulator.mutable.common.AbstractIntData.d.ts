declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace common {
                            /**
                             * An abstract {@link DataManipulator} specifically dealing with {@code int}
                             * values.
                             * @param <M> The manipulator type
                             * @param <I> The immutable manipulator type
                             * @deprecated Useless without its immutable counterpart, use {#link AbstractSingleData} instead.
                             */
                            // @ts-ignore
                            abstract class AbstractIntData<M extends org.spongepowered.api.data.manipulator.DataManipulator<M, I>, I extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<I, M>> extends org.spongepowered.api.data.manipulator.mutable.common.AbstractSingleData<java.lang.Integer | number, M, I> {
                                // @ts-ignore
                                constructor(value: number /*int*/, usedKey: org.spongepowered.api.data.key.Key<any>)
                            }
                        }
                    }
                }
            }
        }
    }
}
