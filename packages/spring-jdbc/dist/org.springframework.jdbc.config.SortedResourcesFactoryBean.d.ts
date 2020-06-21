declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace config {
                /**
                 * {@link FactoryBean} implementation that takes a list of location Strings
                 * and creates a sorted array of {@link Resource} instances.
                 * @author Dave Syer
                 * @author Juergen Hoeller
                 * @author Christian Dupuis
                 * @since 3.0
                 */
                // @ts-ignore
                class SortedResourcesFactoryBean extends java.lang.Object {
                    // @ts-ignore
                    constructor(locations: java.util.List<java.lang.String | string> | Array<java.lang.String | string>)
                    // @ts-ignore
                    constructor(resourceLoader: ResourceLoader, locations: java.util.List<java.lang.String | string> | Array<java.lang.String | string>)
                    // @ts-ignore
                    public setResourceLoader(resourceLoader: ResourceLoader): void
                    // @ts-ignore
                    public getObjectType(): java.lang.Class<any>
                    // @ts-ignore
                    createInstance(): Resource[]
                }
            }
        }
    }
}
