declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace action {
                    namespace HoverAction {
                        namespace ShowEntity {
                            /**
                             * Represents a reference to an entity, used in the underlying JSON of
                             * the show entity action.
                             */
                            // @ts-ignore
                            class Ref extends java.lang.Object implements org.spongepowered.api.util.Identifiable {
                                /**
                                 * Constructs a Ref to an entity.
                                 * @param uuid The UUID of the entity
                                 * @param name The name of the entity
                                 * @param type The type of the entity
                                 */
                                // @ts-ignore
                                constructor(uuid: java.util.UUID, name: string, type: org.spongepowered.api.entity.EntityType)
                                /**
                                 * Constructs a Ref to an entity.
                                 * @param uuid The UUID of the entity
                                 * @param name The name of the entity
                                 */
                                // @ts-ignore
                                constructor(uuid: java.util.UUID, name: string)
                                /**
                                 * Constructs a Ref, given an {@link Entity}.
                                 * @param entity The entity
                                 * @param name The name of the entity
                                 */
                                // @ts-ignore
                                constructor(entity: org.spongepowered.api.entity.Entity, name: string)
                                /**
                                 * Constructs a Ref directly.
                                 * @param uuid The UUID
                                 * @param name The name
                                 * @param type The type
                                 */
                                // @ts-ignore
                                constructor(uuid: java.util.UUID, name: string, type: java.util.Optional<org.spongepowered.api.entity.EntityType>)
                                /**
                                 * Retrieves the UUID that this {@link Ref} refers to.
                                 * @return The UUID
                                 */
                                // @ts-ignore
                                getUniqueId(): java.util.UUID
                                /**
                                 * Retrieves the name that this {@link Ref} refers to.
                                 * @return The name
                                 */
                                // @ts-ignore
                                getName(): java.lang.String
                                /**
                                 * Retrieves the type that this {@link Ref} refers to, if it exists.
                                 * @return The type, or {#link Optional#empty()}
                                 */
                                // @ts-ignore
                                getType(): java.util.Optional<org.spongepowered.api.entity.EntityType>
                                // @ts-ignore
                                equals(obj: any): boolean
                                // @ts-ignore
                                hashCode(): int
                                // @ts-ignore
                                toString(): java.lang.String
                            }
                        }
                    }
                }
            }
        }
    }
}
