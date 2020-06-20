declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace monster {
                        /**
                         * Represents a Guardian.
                         */
                        // @ts-ignore
                        interface Guardian extends org.spongepowered.api.entity.living.Aquatic, org.spongepowered.api.entity.living.monster.Monster {
                            /**
                             * Gets the target of the guardian's beam or {@link Optional#empty()} otherwise.
                             * @return An optional containing the target, if any
                             */
                            // @ts-ignore
                            getBeamTarget(): java.util.Optional<org.spongepowered.api.entity.living.Living>
                            /**
                             * Sets the target of the guardian's beam. Setting a null value removes the
                             * target.
                             * @param entity The entity or null to clear it
                             */
                            // @ts-ignore
                            setBeamTarget(entity: org.spongepowered.api.entity.living.Living): void
                        }
                    }
                }
            }
        }
    }
}
