declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace complex {
                        /**
                         * Represents a complex living entity that requires multiple bounding
                         * boxes, example: {@link EnderDragon}.
                         */
                        // @ts-ignore
                        interface ComplexLiving extends org.spongepowered.api.entity.living.Living {
                            /**
                             * Gets the set of parts belonging to this complex entity.
                             * @return The parts belonging to this entity
                             */
                            // @ts-ignore
                            getParts(): Array<any>
                        }
                    }
                }
            }
        }
    }
}
