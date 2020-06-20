declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace xml {
                    /**
                     * Stateful delegate class used to parse XML bean definitions.
                     * Intended for use by both the main parser and any extension
                     * {@link BeanDefinitionParser BeanDefinitionParsers} or
                     * {@link BeanDefinitionDecorator BeanDefinitionDecorators}.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @author Rod Johnson
                     * @author Mark Fisher
                     * @author Gary Russell
                     * @since 2.0
                     * @see ParserContext
                     * @see DefaultBeanDefinitionDocumentReader
                     */
                    // @ts-ignore
                    class BeanDefinitionParserDelegate extends java.lang.Object {
                        /**
                         * Create a new BeanDefinitionParserDelegate associated with the supplied
                         * {@link XmlReaderContext}.
                         */
                        // @ts-ignore
                        constructor(readerContext: org.springframework.beans.factory.xml.XmlReaderContext)
                        // @ts-ignore
                        readonly BEANS_NAMESPACE_URI: string
                        // @ts-ignore
                        readonly MULTI_VALUE_ATTRIBUTE_DELIMITERS: string
                        /**
                         * Value of a T/F attribute that represents true.
                         * Anything else represents false.
                         */
                        // @ts-ignore
                        readonly TRUE_VALUE: string
                        // @ts-ignore
                        readonly FALSE_VALUE: string
                        // @ts-ignore
                        readonly DEFAULT_VALUE: string
                        // @ts-ignore
                        readonly DESCRIPTION_ELEMENT: string
                        // @ts-ignore
                        readonly AUTOWIRE_NO_VALUE: string
                        // @ts-ignore
                        readonly AUTOWIRE_BY_NAME_VALUE: string
                        // @ts-ignore
                        readonly AUTOWIRE_BY_TYPE_VALUE: string
                        // @ts-ignore
                        readonly AUTOWIRE_CONSTRUCTOR_VALUE: string
                        // @ts-ignore
                        readonly AUTOWIRE_AUTODETECT_VALUE: string
                        // @ts-ignore
                        readonly NAME_ATTRIBUTE: string
                        // @ts-ignore
                        readonly BEAN_ELEMENT: string
                        // @ts-ignore
                        readonly META_ELEMENT: string
                        // @ts-ignore
                        readonly ID_ATTRIBUTE: string
                        // @ts-ignore
                        readonly PARENT_ATTRIBUTE: string
                        // @ts-ignore
                        readonly CLASS_ATTRIBUTE: string
                        // @ts-ignore
                        readonly ABSTRACT_ATTRIBUTE: string
                        // @ts-ignore
                        readonly SCOPE_ATTRIBUTE: string
                        // @ts-ignore
                        readonly LAZY_INIT_ATTRIBUTE: string
                        // @ts-ignore
                        readonly AUTOWIRE_ATTRIBUTE: string
                        // @ts-ignore
                        readonly AUTOWIRE_CANDIDATE_ATTRIBUTE: string
                        // @ts-ignore
                        readonly PRIMARY_ATTRIBUTE: string
                        // @ts-ignore
                        readonly DEPENDS_ON_ATTRIBUTE: string
                        // @ts-ignore
                        readonly INIT_METHOD_ATTRIBUTE: string
                        // @ts-ignore
                        readonly DESTROY_METHOD_ATTRIBUTE: string
                        // @ts-ignore
                        readonly FACTORY_METHOD_ATTRIBUTE: string
                        // @ts-ignore
                        readonly FACTORY_BEAN_ATTRIBUTE: string
                        // @ts-ignore
                        readonly CONSTRUCTOR_ARG_ELEMENT: string
                        // @ts-ignore
                        readonly INDEX_ATTRIBUTE: string
                        // @ts-ignore
                        readonly TYPE_ATTRIBUTE: string
                        // @ts-ignore
                        readonly VALUE_TYPE_ATTRIBUTE: string
                        // @ts-ignore
                        readonly KEY_TYPE_ATTRIBUTE: string
                        // @ts-ignore
                        readonly PROPERTY_ELEMENT: string
                        // @ts-ignore
                        readonly REF_ATTRIBUTE: string
                        // @ts-ignore
                        readonly VALUE_ATTRIBUTE: string
                        // @ts-ignore
                        readonly LOOKUP_METHOD_ELEMENT: string
                        // @ts-ignore
                        readonly REPLACED_METHOD_ELEMENT: string
                        // @ts-ignore
                        readonly REPLACER_ATTRIBUTE: string
                        // @ts-ignore
                        readonly ARG_TYPE_ELEMENT: string
                        // @ts-ignore
                        readonly ARG_TYPE_MATCH_ATTRIBUTE: string
                        // @ts-ignore
                        readonly REF_ELEMENT: string
                        // @ts-ignore
                        readonly IDREF_ELEMENT: string
                        // @ts-ignore
                        readonly BEAN_REF_ATTRIBUTE: string
                        // @ts-ignore
                        readonly PARENT_REF_ATTRIBUTE: string
                        // @ts-ignore
                        readonly VALUE_ELEMENT: string
                        // @ts-ignore
                        readonly NULL_ELEMENT: string
                        // @ts-ignore
                        readonly ARRAY_ELEMENT: string
                        // @ts-ignore
                        readonly LIST_ELEMENT: string
                        // @ts-ignore
                        readonly SET_ELEMENT: string
                        // @ts-ignore
                        readonly MAP_ELEMENT: string
                        // @ts-ignore
                        readonly ENTRY_ELEMENT: string
                        // @ts-ignore
                        readonly KEY_ELEMENT: string
                        // @ts-ignore
                        readonly KEY_ATTRIBUTE: string
                        // @ts-ignore
                        readonly KEY_REF_ATTRIBUTE: string
                        // @ts-ignore
                        readonly VALUE_REF_ATTRIBUTE: string
                        // @ts-ignore
                        readonly PROPS_ELEMENT: string
                        // @ts-ignore
                        readonly PROP_ELEMENT: string
                        // @ts-ignore
                        readonly MERGE_ATTRIBUTE: string
                        // @ts-ignore
                        readonly QUALIFIER_ELEMENT: string
                        // @ts-ignore
                        readonly QUALIFIER_ATTRIBUTE_ELEMENT: string
                        // @ts-ignore
                        readonly DEFAULT_LAZY_INIT_ATTRIBUTE: string
                        // @ts-ignore
                        readonly DEFAULT_MERGE_ATTRIBUTE: string
                        // @ts-ignore
                        readonly DEFAULT_AUTOWIRE_ATTRIBUTE: string
                        // @ts-ignore
                        readonly DEFAULT_AUTOWIRE_CANDIDATES_ATTRIBUTE: string
                        // @ts-ignore
                        readonly DEFAULT_INIT_METHOD_ATTRIBUTE: string
                        // @ts-ignore
                        readonly DEFAULT_DESTROY_METHOD_ATTRIBUTE: string
                        // @ts-ignore
                        readonly logger: Log
                        /**
                         * Get the {@link XmlReaderContext} associated with this helper instance.
                         */
                        // @ts-ignore
                        getReaderContext(): org.springframework.beans.factory.xml.XmlReaderContext
                        /**
                         * Invoke the {@link org.springframework.beans.factory.parsing.SourceExtractor}
                         * to pull the source metadata from the supplied {@link Element}.
                         */
                        // @ts-ignore
                        extractSource(ele: org.w3c.dom.Element): java.lang.Object
                        /**
                         * Report an error with the given message for the given source element.
                         */
                        // @ts-ignore
                        error(message: string, source: org.w3c.dom.Node): void
                        /**
                         * Report an error with the given message for the given source element.
                         */
                        // @ts-ignore
                        error(message: string, source: org.w3c.dom.Element): void
                        /**
                         * Report an error with the given message for the given source element.
                         */
                        // @ts-ignore
                        error(message: string, source: org.w3c.dom.Element, cause: Error): void
                        /**
                         * Initialize the default settings assuming a {@code null} parent delegate.
                         */
                        // @ts-ignore
                        initDefaults(root: org.w3c.dom.Element): void
                        /**
                         * Initialize the default lazy-init, autowire, dependency check settings,
                         * init-method, destroy-method and merge settings. Support nested 'beans'
                         * element use cases by falling back to the given parent in case the
                         * defaults are not explicitly set locally.
                         * @see #populateDefaults(DocumentDefaultsDefinition, DocumentDefaultsDefinition, org.w3c.dom.Element)
                         * @see #getDefaults()
                         */
                        // @ts-ignore
                        initDefaults(root: org.w3c.dom.Element, parent: org.springframework.beans.factory.xml.BeanDefinitionParserDelegate): void
                        /**
                         * Populate the given DocumentDefaultsDefinition instance with the default lazy-init,
                         * autowire, dependency check settings, init-method, destroy-method and merge settings.
                         * Support nested 'beans' element use cases by falling back to {@code parentDefaults}
                         * in case the defaults are not explicitly set locally.
                         * @param defaults the defaults to populate
                         * @param parentDefaults the parent BeanDefinitionParserDelegate (if any) defaults to fall back to
                         * @param root the root element of the current bean definition document (or nested beans element)
                         */
                        // @ts-ignore
                        populateDefaults(defaults: org.springframework.beans.factory.xml.DocumentDefaultsDefinition, parentDefaults: org.springframework.beans.factory.xml.DocumentDefaultsDefinition, root: org.w3c.dom.Element): void
                        /**
                         * Return the defaults definition object.
                         */
                        // @ts-ignore
                        getDefaults(): org.springframework.beans.factory.xml.DocumentDefaultsDefinition
                        /**
                         * Return the default settings for bean definitions as indicated within
                         * the attributes of the top-level {@code <beans/>} element.
                         */
                        // @ts-ignore
                        getBeanDefinitionDefaults(): org.springframework.beans.factory.support.BeanDefinitionDefaults
                        /**
                         * Return any patterns provided in the 'default-autowire-candidates'
                         * attribute of the top-level {@code <beans/>} element.
                         */
                        // @ts-ignore
                        getAutowireCandidatePatterns(): java.lang.String[]
                        /**
                         * Parses the supplied {@code <bean>} element. May return {@code null}
                         * if there were errors during parse. Errors are reported to the
                         * {@link org.springframework.beans.factory.parsing.ProblemReporter}.
                         */
                        // @ts-ignore
                        parseBeanDefinitionElement(ele: org.w3c.dom.Element): org.springframework.beans.factory.config.BeanDefinitionHolder
                        /**
                         * Parses the supplied {@code <bean>} element. May return {@code null}
                         * if there were errors during parse. Errors are reported to the
                         * {@link org.springframework.beans.factory.parsing.ProblemReporter}.
                         */
                        // @ts-ignore
                        parseBeanDefinitionElement(ele: org.w3c.dom.Element, containingBean: org.springframework.beans.factory.config.BeanDefinition): org.springframework.beans.factory.config.BeanDefinitionHolder
                        /**
                         * Validate that the specified bean name and aliases have not been used already
                         * within the current level of beans element nesting.
                         */
                        // @ts-ignore
                        checkNameUniqueness(beanName: string, aliases: Array<java.lang.String>, beanElement: org.w3c.dom.Element): void
                        /**
                         * Parse the bean definition itself, without regard to name or aliases. May return
                         * {@code null} if problems occurred during the parsing of the bean definition.
                         */
                        // @ts-ignore
                        parseBeanDefinitionElement(ele: org.w3c.dom.Element, beanName: string, containingBean: org.springframework.beans.factory.config.BeanDefinition): org.springframework.beans.factory.support.AbstractBeanDefinition
                        /**
                         * Apply the attributes of the given bean element to the given bean * definition.
                         * @param ele bean declaration element
                         * @param beanName bean name
                         * @param containingBean containing bean definition
                         * @return a bean definition initialized according to the bean element attributes
                         */
                        // @ts-ignore
                        parseBeanDefinitionAttributes(ele: org.w3c.dom.Element, beanName: string, containingBean: org.springframework.beans.factory.config.BeanDefinition, bd: org.springframework.beans.factory.support.AbstractBeanDefinition): org.springframework.beans.factory.support.AbstractBeanDefinition
                        /**
                         * Create a bean definition for the given class name and parent name.
                         * @param className the name of the bean class
                         * @param parentName the name of the bean's parent bean
                         * @return the newly created bean definition
                         * @throws ClassNotFoundException if bean class resolution was attempted but failed
                         */
                        // @ts-ignore
                        createBeanDefinition(className: string, parentName: string): org.springframework.beans.factory.support.AbstractBeanDefinition
                        /**
                         * Parse the meta elements underneath the given element, if any.
                         */
                        // @ts-ignore
                        parseMetaElements(ele: org.w3c.dom.Element, attributeAccessor: org.springframework.beans.BeanMetadataAttributeAccessor): void
                        /**
                         * Parse the given autowire attribute value into
                         * {@link AbstractBeanDefinition} autowire constants.
                         */
                        // @ts-ignore
                        getAutowireMode(attrValue: string): int
                        /**
                         * Parse constructor-arg sub-elements of the given bean element.
                         */
                        // @ts-ignore
                        parseConstructorArgElements(beanEle: org.w3c.dom.Element, bd: org.springframework.beans.factory.config.BeanDefinition): void
                        /**
                         * Parse property sub-elements of the given bean element.
                         */
                        // @ts-ignore
                        parsePropertyElements(beanEle: org.w3c.dom.Element, bd: org.springframework.beans.factory.config.BeanDefinition): void
                        /**
                         * Parse qualifier sub-elements of the given bean element.
                         */
                        // @ts-ignore
                        parseQualifierElements(beanEle: org.w3c.dom.Element, bd: org.springframework.beans.factory.support.AbstractBeanDefinition): void
                        /**
                         * Parse lookup-override sub-elements of the given bean element.
                         */
                        // @ts-ignore
                        parseLookupOverrideSubElements(beanEle: org.w3c.dom.Element, overrides: org.springframework.beans.factory.support.MethodOverrides): void
                        /**
                         * Parse replaced-method sub-elements of the given bean element.
                         */
                        // @ts-ignore
                        parseReplacedMethodSubElements(beanEle: org.w3c.dom.Element, overrides: org.springframework.beans.factory.support.MethodOverrides): void
                        /**
                         * Parse a constructor-arg element.
                         */
                        // @ts-ignore
                        parseConstructorArgElement(ele: org.w3c.dom.Element, bd: org.springframework.beans.factory.config.BeanDefinition): void
                        /**
                         * Parse a property element.
                         */
                        // @ts-ignore
                        parsePropertyElement(ele: org.w3c.dom.Element, bd: org.springframework.beans.factory.config.BeanDefinition): void
                        /**
                         * Parse a qualifier element.
                         */
                        // @ts-ignore
                        parseQualifierElement(ele: org.w3c.dom.Element, bd: org.springframework.beans.factory.support.AbstractBeanDefinition): void
                        /**
                         * Get the value of a property element. May be a list etc.
                         * Also used for constructor arguments, "propertyName" being null in this case.
                         */
                        // @ts-ignore
                        parsePropertyValue(ele: org.w3c.dom.Element, bd: org.springframework.beans.factory.config.BeanDefinition, propertyName: string): java.lang.Object
                        /**
                         * Parse a value, ref or collection sub-element of a property or
                         * constructor-arg element.
                         * @param ele subelement of property element; we don't know which yet
                         * @param bd the current bean definition (if any)
                         */
                        // @ts-ignore
                        parsePropertySubElement(ele: org.w3c.dom.Element, bd: org.springframework.beans.factory.config.BeanDefinition): java.lang.Object
                        /**
                         * Parse a value, ref or collection sub-element of a property or
                         * constructor-arg element.
                         * @param ele subelement of property element; we don't know which yet
                         * @param bd the current bean definition (if any)
                         * @param defaultValueType the default type (class name) for any
                         *  {#code <value>} tag that might be created
                         */
                        // @ts-ignore
                        parsePropertySubElement(ele: org.w3c.dom.Element, bd: org.springframework.beans.factory.config.BeanDefinition, defaultValueType: string): java.lang.Object
                        /**
                         * Return a typed String value Object for the given 'idref' element.
                         */
                        // @ts-ignore
                        parseIdRefElement(ele: org.w3c.dom.Element): java.lang.Object
                        /**
                         * Return a typed String value Object for the given value element.
                         */
                        // @ts-ignore
                        parseValueElement(ele: org.w3c.dom.Element, defaultTypeName: string): java.lang.Object
                        /**
                         * Build a typed String value Object for the given raw value.
                         * @see org.springframework.beans.factory.config.TypedStringValue
                         */
                        // @ts-ignore
                        buildTypedStringValue(value: string, targetTypeName: string): org.springframework.beans.factory.config.TypedStringValue
                        /**
                         * Parse an array element.
                         */
                        // @ts-ignore
                        parseArrayElement(arrayEle: org.w3c.dom.Element, bd: org.springframework.beans.factory.config.BeanDefinition): java.lang.Object
                        /**
                         * Parse a list element.
                         */
                        // @ts-ignore
                        parseListElement(collectionEle: org.w3c.dom.Element, bd: org.springframework.beans.factory.config.BeanDefinition): java.util.List<java.lang.Object>
                        /**
                         * Parse a set element.
                         */
                        // @ts-ignore
                        parseSetElement(collectionEle: org.w3c.dom.Element, bd: org.springframework.beans.factory.config.BeanDefinition): java.util.Set<java.lang.Object>
                        // @ts-ignore
                        parseCollectionElements(elementNodes: org.w3c.dom.NodeList, target: Array<java.lang.Object>, bd: org.springframework.beans.factory.config.BeanDefinition, defaultElementType: string): void
                        /**
                         * Parse a map element.
                         */
                        // @ts-ignore
                        parseMapElement(mapEle: org.w3c.dom.Element, bd: org.springframework.beans.factory.config.BeanDefinition): java.util.Map<java.lang.Object, java.lang.Object>
                        /**
                         * Build a typed String value Object for the given raw value.
                         * @see org.springframework.beans.factory.config.TypedStringValue
                         */
                        // @ts-ignore
                        buildTypedStringValueForMap(value: string, defaultTypeName: string, entryEle: org.w3c.dom.Element): java.lang.Object
                        /**
                         * Parse a key sub-element of a map element.
                         */
                        // @ts-ignore
                        parseKeyElement(keyEle: org.w3c.dom.Element, bd: org.springframework.beans.factory.config.BeanDefinition, defaultKeyTypeName: string): java.lang.Object
                        /**
                         * Parse a props element.
                         */
                        // @ts-ignore
                        parsePropsElement(propsEle: org.w3c.dom.Element): java.util.Properties
                        /**
                         * Parse the merge attribute of a collection element, if any.
                         */
                        // @ts-ignore
                        parseMergeAttribute(collectionElement: org.w3c.dom.Element): boolean
                        /**
                         * Parse a custom element (outside of the default namespace).
                         * @param ele the element to parse
                         * @return the resulting bean definition
                         */
                        // @ts-ignore
                        parseCustomElement(ele: org.w3c.dom.Element): org.springframework.beans.factory.config.BeanDefinition
                        /**
                         * Parse a custom element (outside of the default namespace).
                         * @param ele the element to parse
                         * @param containingBd the containing bean definition (if any)
                         * @return the resulting bean definition
                         */
                        // @ts-ignore
                        parseCustomElement(ele: org.w3c.dom.Element, containingBd: org.springframework.beans.factory.config.BeanDefinition): org.springframework.beans.factory.config.BeanDefinition
                        /**
                         * Decorate the given bean definition through a namespace handler, if applicable.
                         * @param ele the current element
                         * @param originalDef the current bean definition
                         * @return the decorated bean definition
                         */
                        // @ts-ignore
                        decorateBeanDefinitionIfRequired(ele: org.w3c.dom.Element, originalDef: org.springframework.beans.factory.config.BeanDefinitionHolder): org.springframework.beans.factory.config.BeanDefinitionHolder
                        /**
                         * Decorate the given bean definition through a namespace handler, if applicable.
                         * @param ele the current element
                         * @param originalDef the current bean definition
                         * @param containingBd the containing bean definition (if any)
                         * @return the decorated bean definition
                         */
                        // @ts-ignore
                        decorateBeanDefinitionIfRequired(ele: org.w3c.dom.Element, originalDef: org.springframework.beans.factory.config.BeanDefinitionHolder, containingBd: org.springframework.beans.factory.config.BeanDefinition): org.springframework.beans.factory.config.BeanDefinitionHolder
                        /**
                         * Decorate the given bean definition through a namespace handler,
                         * if applicable.
                         * @param node the current child node
                         * @param originalDef the current bean definition
                         * @param containingBd the containing bean definition (if any)
                         * @return the decorated bean definition
                         */
                        // @ts-ignore
                        decorateIfRequired(node: org.w3c.dom.Node, originalDef: org.springframework.beans.factory.config.BeanDefinitionHolder, containingBd: org.springframework.beans.factory.config.BeanDefinition): org.springframework.beans.factory.config.BeanDefinitionHolder
                        /**
                         * Get the namespace URI for the supplied node.
                         * <p>The default implementation uses {@link Node#getNamespaceURI}.
                         * Subclasses may override the default implementation to provide a
                         * different namespace identification mechanism.
                         * @param node the node
                         */
                        // @ts-ignore
                        getNamespaceURI(node: org.w3c.dom.Node): java.lang.String
                        /**
                         * Get the local name for the supplied {@link Node}.
                         * <p>The default implementation calls {@link Node#getLocalName}.
                         * Subclasses may override the default implementation to provide a
                         * different mechanism for getting the local name.
                         * @param node the {#code Node}
                         */
                        // @ts-ignore
                        getLocalName(node: org.w3c.dom.Node): java.lang.String
                        /**
                         * Determine whether the name of the supplied node is equal to the supplied name.
                         * <p>The default implementation checks the supplied desired name against both
                         * {@link Node#getNodeName()} and {@link Node#getLocalName()}.
                         * <p>Subclasses may override the default implementation to provide a different
                         * mechanism for comparing node names.
                         * @param node the node to compare
                         * @param desiredName the name to check for
                         */
                        // @ts-ignore
                        nodeNameEquals(node: org.w3c.dom.Node, desiredName: string): boolean
                        /**
                         * Determine whether the given URI indicates the default namespace.
                         */
                        // @ts-ignore
                        isDefaultNamespace(namespaceUri: string): boolean
                        /**
                         * Determine whether the given node indicates the default namespace.
                         */
                        // @ts-ignore
                        isDefaultNamespace(node: org.w3c.dom.Node): boolean
                    }
                }
            }
        }
    }
}
