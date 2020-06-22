declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        /**
                         * Wrapper around a {@link Shape} to allow appropriate query rendering.
                         * @author Thomas Darimont
                         * @author Christoph Strobl
                         * @since 1.5
                         */
                        // @ts-ignore
                        class GeoCommand extends java.lang.Object {
                            /**
                             * Creates a new {@link GeoCommand}.
                             * @param shape must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(shape: Shape)
                            /**
                             * @return the shape
                             */
                            // @ts-ignore
                            public getShape(): Shape
                            /**
                             * @return the command
                             */
                            // @ts-ignore
                            public getCommand(): string
                            // @ts-ignore
                            public hashCode(): number /*int*/
                            // @ts-ignore
                            public equals(obj: java.lang.Object | any): boolean
                        }
                    }
                }
            }
        }
    }
}
