declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace repository {
                    namespace configuration {
                        /**
                         * Annotation to activate Redis repositories. If no base package is configured through either {@link #value()},
                         * {@link #basePackages()} or {@link #basePackageClasses()} it will trigger scanning of the package of annotated class.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.7
                         */
                        // @ts-ignore
                        abstract class EnableRedisRepositories implements java.lang.annotation.Annotation {
                        }
                    }
                }
            }
        }
    }
}
