declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace config {
                        /**
                         * Annotation to activate reactive MongoDB repositories. If no base package is configured through either
                         * {@link #value()}, {@link #basePackages()} or {@link #basePackageClasses()} it will trigger scanning of the package of
                         * annotated class.
                         * @author Mark Paluch
                         * @since 2.0
                         */
                        // @ts-ignore
                        abstract class EnableReactiveMongoRepositories implements java.lang.annotation.Annotation {
                        }
                    }
                }
            }
        }
    }
}
