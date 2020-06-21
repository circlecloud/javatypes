declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace parsing {
                    /**
                     * Interface that describes the logical view of a set of {@link BeanDefinition BeanDefinitions}
                     * and {@link BeanReference BeanReferences} as presented in some configuration context.
                     * <p>With the introduction of {@link org.springframework.beans.factory.xml.NamespaceHandler pluggable custom XML tags},
                     * it is now possible for a single logical configuration entity, in this case an XML tag, to
                     * create multiple {@link BeanDefinition BeanDefinitions} and {@link BeanReference RuntimeBeanReferences}
                     * in order to provide more succinct configuration and greater convenience to end users. As such, it can
                     * no longer be assumed that each configuration entity (e.g. XML tag) maps to one {@link BeanDefinition}.
                     * For tool vendors and other users who wish to present visualization or support for configuring Spring
                     * applications it is important that there is some mechanism in place to tie the {@link BeanDefinition BeanDefinitions}
                     * in the {@link org.springframework.beans.factory.BeanFactory} back to the configuration data in a way
                     * that has concrete meaning to the end user. As such, {@link org.springframework.beans.factory.xml.NamespaceHandler}
                     * implementations are able to publish events in the form of a {@code ComponentDefinition} for each
                     * logical entity being configured. Third parties can then {@link ReaderEventListener subscribe to these events},
                     * allowing for a user-centric view of the bean metadata.
                     * <p>Each {@code ComponentDefinition} has a {@link #getSource source object} which is configuration-specific.
                     * In the case of XML-based configuration this is typically the {@link org.w3c.dom.Node} which contains the user
                     * supplied configuration information. In addition to this, each {@link BeanDefinition} enclosed in a
                     * {@code ComponentDefinition} has its own {@link BeanDefinition#getSource() source object} which may point
                     * to a different, more specific, set of configuration data. Beyond this, individual pieces of bean metadata such
                     * as the {@link org.springframework.beans.PropertyValue PropertyValues} may also have a source object giving an
                     * even greater level of detail. Source object extraction is handled through the
                     * {@link SourceExtractor} which can be customized as required.
                     * <p>Whilst direct access to important {@link BeanReference BeanReferences} is provided through
                     * {@link #getBeanReferences}, tools may wish to inspect all {@link BeanDefinition BeanDefinitions} to gather
                     * the full set of {@link BeanReference BeanReferences}. Implementations are required to provide
                     * all {@link BeanReference BeanReferences} that are required to validate the configuration of the
                     * overall logical entity as well as those required to provide full user visualisation of the configuration.
                     * It is expected that certain {@link BeanReference BeanReferences} will not be important to
                     * validation or to the user view of the configuration and as such these may be omitted. A tool may wish to
                     * display any additional {@link BeanReference BeanReferences} sourced through the supplied
                     * {@link BeanDefinition BeanDefinitions} but this is not considered to be a typical case.
                     * <p>Tools can determine the important of contained {@link BeanDefinition BeanDefinitions} by checking the
                     * {@link BeanDefinition#getRole role identifier}. The role is essentially a hint to the tool as to how
                     * important the configuration provider believes a {@link BeanDefinition} is to the end user. It is expected
                     * that tools will <strong>not</strong> display all {@link BeanDefinition BeanDefinitions} for a given
                     * {@code ComponentDefinition} choosing instead to filter based on the role. Tools may choose to make
                     * this filtering user configurable. Particular notice should be given to the
                     * {@link BeanDefinition#ROLE_INFRASTRUCTURE INFRASTRUCTURE role identifier}. {@link BeanDefinition BeanDefinitions}
                     * classified with this role are completely unimportant to the end user and are required only for
                     * internal implementation reasons.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see AbstractComponentDefinition
                     * @see CompositeComponentDefinition
                     * @see BeanComponentDefinition
                     * @see ReaderEventListener#componentRegistered(ComponentDefinition)
                     */
                    // @ts-ignore
                    interface ComponentDefinition extends org.springframework.beans.BeanMetadataElement {
                        /**
                         * Get the user-visible name of this {@code ComponentDefinition}.
                         * <p>This should link back directly to the corresponding configuration data
                         * for this component in a given context.
                         */
                        // @ts-ignore
                        getName(): string
                        /**
                         * Return a friendly description of the described component.
                         * <p>Implementations are encouraged to return the same value from
                         * {@code toString()}.
                         */
                        // @ts-ignore
                        getDescription(): string
                        /**
                         * Return the {@link BeanDefinition BeanDefinitions} that were registered
                         * to form this {@code ComponentDefinition}.
                         * <p>It should be noted that a {@code ComponentDefinition} may well be related with
                         * other {@link BeanDefinition BeanDefinitions} via {@link BeanReference references},
                         * however these are <strong>not</strong> included as they may be not available immediately.
                         * Important {@link BeanReference BeanReferences} are available from {@link #getBeanReferences()}.
                         * @return the array of BeanDefinitions, or an empty array if none
                         */
                        // @ts-ignore
                        getBeanDefinitions(): org.springframework.beans.factory.config.BeanDefinition[]
                        /**
                         * Return the {@link BeanDefinition BeanDefinitions} that represent all relevant
                         * inner beans within this component.
                         * <p>Other inner beans may exist within the associated {@link BeanDefinition BeanDefinitions},
                         * however these are not considered to be needed for validation or for user visualization.
                         * @return the array of BeanDefinitions, or an empty array if none
                         */
                        // @ts-ignore
                        getInnerBeanDefinitions(): org.springframework.beans.factory.config.BeanDefinition[]
                        /**
                         * Return the set of {@link BeanReference BeanReferences} that are considered
                         * to be important to this {@code ComponentDefinition}.
                         * <p>Other {@link BeanReference BeanReferences} may exist within the associated
                         * {@link BeanDefinition BeanDefinitions}, however these are not considered
                         * to be needed for validation or for user visualization.
                         * @return the array of BeanReferences, or an empty array if none
                         */
                        // @ts-ignore
                        getBeanReferences(): org.springframework.beans.factory.config.BeanReference[]
                    }
                }
            }
        }
    }
}
