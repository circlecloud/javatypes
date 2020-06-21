declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace common {
                            /**
                             * An abstract implementation of an {@link ImmutableDataManipulator} such that
                             * all fields are declared {@code final} and remain "immutable".
                             * @param <I> The immutable data manipulator type
                             * @param <M> The mutable manipulator type
                             */
                            // @ts-ignore
                            abstract class AbstractImmutableData<I extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<I, M>, M extends org.spongepowered.api.data.manipulator.DataManipulator<M, I>> extends java.lang.Object implements org.spongepowered.api.data.manipulator.ImmutableDataManipulator<I, M> {
                                // @ts-ignore
                                constructor()
                                /**
                                 * Simple registration method for the keys to value return methods.
                                 * <p>Note that this is still usable with Java 8 method references.
                                 * Referencing {@code this::getfoo()} is recommended.</p>
                                 * @param key The key for the value return type
                                 * @param function The function for getting the value
                                 */
                                // @ts-ignore
                                registerKeyValue(key: org.spongepowered.api.data.key.Key<any>, func: java.util.function$.Supplier<org.spongepowered.api.data.value.immutable.ImmutableValue<any>>): void
                                /**
                                 * Simple registration method for the keys to field getter methods.
                                 * <p>Note that this is still usable with Java 8 method references.
                                 * Referencing {@code this::getfoo()} is recommended.</p>
                                 * @param key The key for the value return type
                                 * @param function The function for getting the field
                                 */
                                // @ts-ignore
                                registerFieldGetter(key: org.spongepowered.api.data.key.Key<any>, func: java.util.function$.Supplier<any>): void
                                // @ts-ignore
                                abstract registerGetters(): void
                                // @ts-ignore
                                public copy(): I
                                // @ts-ignore
                                public get<E>(key: org.spongepowered.api.data.key.Key<any>): java.util.Optional<E>
                                // @ts-ignore
                                public getValue<E, V extends org.spongepowered.api.data.value.BaseValue<E>>(key: org.spongepowered.api.data.key.Key<V>): java.util.Optional<V>
                                // @ts-ignore
                                public supports(key: org.spongepowered.api.data.key.Key<any>): boolean
                                // @ts-ignore
                                public getKeys(): Array<org.spongepowered.api.data.key.Key<any>>
                                // @ts-ignore
                                public getValues(): Array<org.spongepowered.api.data.value.immutable.ImmutableValue<any>>
                                // @ts-ignore
                                public hashCode(): number /*int*/
                                // @ts-ignore
                                public equals(obj: java.lang.Object | any): boolean
                                // @ts-ignore
                                public toContainer(): org.spongepowered.api.data.DataContainer
                                /**
                                 * Implement this method to add the data to be persisted.
                                 * @param dataContainer The data container
                                 * @return The filled data container
                                 */
                                // @ts-ignore
                                fillContainer(dataContainer: org.spongepowered.api.data.DataContainer): org.spongepowered.api.data.DataContainer
                            }
                        }
                    }
                }
            }
        }
    }
}
