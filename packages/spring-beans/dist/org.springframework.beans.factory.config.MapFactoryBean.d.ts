declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Simple factory for shared Map instances. Allows for central setup
                     * of Maps via the "map" element in XML bean definitions.
                     * @author Juergen Hoeller
                     * @since 09.12.2003
                     * @see SetFactoryBean
                     * @see ListFactoryBean
                     */
                    // @ts-ignore
                    class MapFactoryBean extends org.springframework.beans.factory.config.AbstractFactoryBean<java.util.Map<java.lang.Object | any, java.lang.Object | any>> {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the source Map, typically populated via XML "map" elements.
                         */
                        // @ts-ignore
                        public setSourceMap(sourceMap: java.util.Map<any, any>): void
                        /**
                         * Set the class to use for the target Map. Can be populated with a fully
                         * qualified class name when defined in a Spring application context.
                         * <p>Default is a linked HashMap, keeping the registration order.
                         * @see java.util.LinkedHashMap
                         */
                        // @ts-ignore
                        public setTargetMapClass(targetMapClass: java.lang.Class<any>): void
                        // @ts-ignore
                        public getObjectType(): java.lang.Class<java.util.Map<any>>
                        // @ts-ignore
                        createInstance(): java.util.Map<java.lang.Object | any, java.lang.Object | any>
                    }
                }
            }
        }
    }
}
