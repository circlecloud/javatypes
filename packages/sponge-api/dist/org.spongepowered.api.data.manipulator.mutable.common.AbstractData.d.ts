declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace common {
                            /**
                             * A base abstract layer for implementing a {@link DataManipulator}. This
                             * provides all the otherwise "redundant" code dealing with various methods
                             * such as {@link #get(Key)} or {@link #supports(Key)} etc. The root of this
                             * implementation relies on a pseudo registration of
                             * {@link #registerFieldGetter(Key, Supplier)},
                             * {@link #registerFieldSetter(Key, Consumer)},
                             * and {@link #registerKeyValue(Key, Supplier)} of which supply and consume
                             * values otherwise accessible by fields.
                             * @param <M> The mutable data manipulator type
                             * @param <I> The immutable data manipulator type
                             */
                            // @ts-ignore
                            abstract class AbstractData<M extends org.spongepowered.api.data.manipulator.DataManipulator<M, I>, I extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<I, M>> extends java.lang.Object implements org.spongepowered.api.data.manipulator.DataManipulator<M, I> {
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
                                registerKeyValue(key: org.spongepowered.api.data.key.Key<any>, func: java.util.function$.Supplier<org.spongepowered.api.data.value.mutable.Value<any>>): void
                                /**
                                 * Simple registration method for the keys to field getter methods.
                                 * <p>Note that this is still usable with Java 8 method references.
                                 * Referencing {@code this::getfoo()} is recommended.</p>
                                 * @param key The key for the value return type
                                 * @param function The function for getting the field
                                 */
                                // @ts-ignore
                                registerFieldGetter(key: org.spongepowered.api.data.key.Key<any>, func: java.util.function$.Supplier<any>): void
                                /**
                                 * Simple registration method for the keys to field setter methods.
                                 * <p>Note that this is still usable with Java 8 method references.
                                 * Referencing {@code this::setFoo(something)} is recommended.</p>
                                 * @param key The key for the value return type
                                 * @param function The function for setting the field
                                 */
                                // @ts-ignore
                                registerFieldSetter<E>(key: org.spongepowered.api.data.key.Key<any>, func: java.util.function$.Consumer<E>): void
                                /**
                                 * A required registration method for registering the various fields and
                                 * value getters. It's suggested that if multiple fields are used, each
                                 * field can be represented as a {@link Value} such that there is an
                                 * associated {@link Key} to "get" that field value.
                                 */
                                // @ts-ignore
                                abstract registerGettersAndSetters(): void
                                // @ts-ignore
                                public set<E>(key: org.spongepowered.api.data.key.Key<any>, value: E): M
                                // @ts-ignore
                                public transform<E>(key: org.spongepowered.api.data.key.Key<any>, func: java.util.function$.Function<E, E>): M
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
