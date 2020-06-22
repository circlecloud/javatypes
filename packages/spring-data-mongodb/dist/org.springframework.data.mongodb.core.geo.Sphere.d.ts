declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace geo {
                        /**
                         * Represents a geospatial sphere value.
                         * @author Thomas Darimont
                         * @author Mark Paluch
                         * @since 1.5
                         */
                        // @ts-ignore
                        class Sphere extends java.lang.Object {
                            /**
                             * Creates a Sphere around the given center {@link Point} with the given radius.
                             * @param center must not be {#literal null}.
                             * @param radius must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(center: Point, radius: Distance)
                            /**
                             * Creates a Sphere around the given center {@link Point} with the given radius.
                             * @param center
                             * @param radius
                             */
                            // @ts-ignore
                            constructor(center: Point, radius: number /*double*/)
                            /**
                             * Creates a Sphere from the given {@link Circle}.
                             * @param circle
                             */
                            // @ts-ignore
                            constructor(circle: Circle)
                            // @ts-ignore
                            public static readonly COMMAND: java.lang.String | string
                            /**
                             * Returns the center of the {@link Circle}.
                             * @return will never be {#literal null}.
                             */
                            // @ts-ignore
                            public getCenter(): Point
                            /**
                             * Returns the radius of the {@link Circle}.
                             * @return 
                             */
                            // @ts-ignore
                            public getRadius(): Distance
                            // @ts-ignore
                            public toString(): string
                            // @ts-ignore
                            public equals(obj: java.lang.Object | any): boolean
                            // @ts-ignore
                            public hashCode(): number /*int*/
                            /**
                             * Returns the {@link Shape} as a list of usually {@link Double} or {@link List}s of {@link Double}s. Wildcard bound
                             * to allow implementations to return a more concrete element type.
                             * @return 
                             */
                            // @ts-ignore
                            public asList(): Array<any>
                            /**
                             * Returns the command to be used to create the {@literal $within} criterion.
                             * @return 
                             */
                            // @ts-ignore
                            public getCommand(): string
                        }
                    }
                }
            }
        }
    }
}
