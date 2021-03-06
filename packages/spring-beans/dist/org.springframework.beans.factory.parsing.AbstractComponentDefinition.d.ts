declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace parsing {
                    /**
                     * Base implementation of {@link ComponentDefinition} that provides a basic implementation of
                     * {@link #getDescription} which delegates to {@link #getName}. Also provides a base implementation
                     * of {@link #toString} which delegates to {@link #getDescription} in keeping with the recommended
                     * implementation strategy. Also provides default implementations of {@link #getInnerBeanDefinitions}
                     * and {@link #getBeanReferences} that return an empty array.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @since 2.0
                     */
                    // @ts-ignore
                    abstract class AbstractComponentDefinition extends java.lang.Object implements org.springframework.beans.factory.parsing.ComponentDefinition {
                        // @ts-ignore
                        constructor()
                        /**
                         * Delegates to {@link #getName}.
                         */
                        // @ts-ignore
                        public getDescription(): string
                        /**
                         * Returns an empty array.
                         */
                        // @ts-ignore
                        public getBeanDefinitions(): org.springframework.beans.factory.config.BeanDefinition[]
                        /**
                         * Returns an empty array.
                         */
                        // @ts-ignore
                        public getInnerBeanDefinitions(): org.springframework.beans.factory.config.BeanDefinition[]
                        /**
                         * Returns an empty array.
                         */
                        // @ts-ignore
                        public getBeanReferences(): org.springframework.beans.factory.config.BeanReference[]
                        /**
                         * Delegates to {@link #getDescription}.
                         */
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
