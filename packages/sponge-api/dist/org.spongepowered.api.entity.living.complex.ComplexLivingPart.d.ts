declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace complex {
                        /**
                         * Represents a part of a {@link ComplexLiving}.
                         * <p>Parts are usually created to have multiple bounding boxes associated
                         * with a larger entity.</p>
                         */
                        // @ts-ignore
                        interface ComplexLivingPart extends org.spongepowered.api.entity.Entity {
                            /**
                             * Gets the associated parent of this part.
                             * @return The associated parent
                             */
                            // @ts-ignore
                            getParent(): org.spongepowered.api.entity.living.complex.ComplexLiving
                        }
                    }
                }
            }
        }
    }
}
