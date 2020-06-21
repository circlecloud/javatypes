declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    namespace EntityUniverse {
                        /**
                         * The result of an intersection between a ray and an entity.
                         */
                        // @ts-ignore
                        class EntityHit extends java.lang.Object {
                            /**
                             * Creates a new entity hit from the entity, the intersection point and
                             * the normal.
                             * @param entity The intersected entity
                             * @param intersection The intersection point
                             * @param normal The intersection normal
                             * @param distance The distance from the start to the intersection
                             */
                            // @ts-ignore
                            constructor(entity: org.spongepowered.api.entity.Entity, intersection: Vector3d, normal: Vector3d, distance: number /*double*/)
                            /**
                             * Gets the intersected entity.
                             * @return The intersected entity
                             */
                            // @ts-ignore
                            public getEntity(): org.spongepowered.api.entity.Entity
                            /**
                             * Gets the intersection point.
                             * @return The point of intersection
                             */
                            // @ts-ignore
                            public getIntersection(): Vector3d
                            /**
                             * Gets the intersection normal.
                             * @return The normal of intersection
                             */
                            // @ts-ignore
                            public getNormal(): Vector3d
                            /**
                             * Gets the distance from the start to the intersection.
                             * @return The distance from the start to the intersection
                             */
                            // @ts-ignore
                            public getDistance(): number /*double*/
                            // @ts-ignore
                            public equals(other: java.lang.Object | any): boolean
                            // @ts-ignore
                            public hashCode(): number /*int*/
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
