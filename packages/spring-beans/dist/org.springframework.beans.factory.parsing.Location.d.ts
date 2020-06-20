declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace parsing {
                    /**
                     * Class that models an arbitrary location in a {@link Resource resource}.
                     * <p>Typically used to track the location of problematic or erroneous
                     * metadata in XML configuration files. For example, a
                     * {@link #getSource() source} location might be 'The bean defined on
                     * line 76 of beans.properties has an invalid Class'; another source might
                     * be the actual DOM Element from a parsed XML {@link org.w3c.dom.Document};
                     * or the source object might simply be {@code null}.
                     * @author Rob Harrop
                     * @since 2.0
                     */
                    // @ts-ignore
                    class Location extends java.lang.Object {
                        /**
                         * Create a new instance of the {@link Location} class.
                         * @param resource the resource with which this location is associated
                         */
                        // @ts-ignore
                        constructor(resource: Resource)
                        /**
                         * Create a new instance of the {@link Location} class.
                         * @param resource the resource with which this location is associated
                         * @param source the actual location within the associated resource
                         *  (may be {#code null})
                         */
                        // @ts-ignore
                        constructor(resource: Resource, source: any)
                        /**
                         * Get the resource with which this location is associated.
                         */
                        // @ts-ignore
                        getResource(): Resource
                        /**
                         * Get the actual location within the associated {@link #getResource() resource}
                         * (may be {@code null}).
                         * <p>See the {@link Location class level javadoc for this class} for examples
                         * of what the actual type of the returned object may be.
                         */
                        // @ts-ignore
                        getSource(): java.lang.Object
                    }
                }
            }
        }
    }
}
