declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace parsing {
                    /**
                     * {@link ComponentDefinition} implementation that holds one or more nested
                     * {@link ComponentDefinition} instances, aggregating them into a named group
                     * of components.
                     * @author Juergen Hoeller
                     * @since 2.0.1
                     * @see #getNestedComponents()
                     */
                    // @ts-ignore
                    class CompositeComponentDefinition extends org.springframework.beans.factory.parsing.AbstractComponentDefinition {
                        /**
                         * Create a new CompositeComponentDefinition.
                         * @param name the name of the composite component
                         * @param source the source element that defines the root of the composite component
                         */
                        // @ts-ignore
                        constructor(name: string, source: any)
                        // @ts-ignore
                        getName(): java.lang.String
                        // @ts-ignore
                        getSource(): java.lang.Object
                        /**
                         * Add the given component as nested element of this composite component.
                         * @param component the nested component to add
                         */
                        // @ts-ignore
                        addNestedComponent(component: org.springframework.beans.factory.parsing.ComponentDefinition): void
                        /**
                         * Return the nested components that this composite component holds.
                         * @return the array of nested components, or an empty array if none
                         */
                        // @ts-ignore
                        getNestedComponents(): org.springframework.beans.factory.parsing.ComponentDefinition[]
                    }
                }
            }
        }
    }
}
