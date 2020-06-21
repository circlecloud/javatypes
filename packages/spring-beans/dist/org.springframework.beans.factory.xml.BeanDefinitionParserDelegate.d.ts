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
                        public static readonly BEANS_NAMESPACE_URI: java.lang.String | string
                        // @ts-ignore
                        public static readonly MULTI_VALUE_ATTRIBUTE_DELIMITERS: java.lang.String | string
                        /**
                         * Value of a T/F attribute that represents true.
                         * Anything else represents false.
                         */
                        // @ts-ignore
                        public static readonly TRUE_VALUE: java.lang.String | string
                        // @ts-ignore
                        public static readonly FALSE_VALUE: java.lang.String | string
                        // @ts-ignore
                        public static readonly DEFAULT_VALUE: java.lang.String | string
                        // @ts-ignore
                        public static readonly DESCRIPTION_ELEMENT: java.lang.String | string
                        // @ts-ignore
                        public static readonly AUTOWIRE_NO_VALUE: java.lang.String | string
                        // @ts-ignore
                        public static readonly AUTOWIRE_BY_NAME_VALUE: java.lang.String | string
                        // @ts-ignore
                        public static readonly AUTOWIRE_BY_TYPE_VALUE: java.lang.String | string
                        // @ts-ignore
                        public static readonly AUTOWIRE_CONSTRUCTOR_VALUE: java.lang.String | string
                        // @ts-ignore
                        public static readonly AUTOWIRE_AUTODETECT_VALUE: java.lang.String | string
                        // @ts-ignore
                        public static readonly NAME_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly BEAN_ELEMENT: java.lang.String | string
                        // @ts-ignore
                        public static readonly META_ELEMENT: java.lang.String | string
                        // @ts-ignore
                        public static readonly ID_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly PARENT_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly CLASS_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly ABSTRACT_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly SCOPE_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly LAZY_INIT_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly AUTOWIRE_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly AUTOWIRE_CANDIDATE_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly PRIMARY_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly DEPENDS_ON_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly INIT_METHOD_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly DESTROY_METHOD_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly FACTORY_METHOD_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly FACTORY_BEAN_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly CONSTRUCTOR_ARG_ELEMENT: java.lang.String | string
                        // @ts-ignore
                        public static readonly INDEX_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly TYPE_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly VALUE_TYPE_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly KEY_TYPE_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly PROPERTY_ELEMENT: java.lang.String | string
                        // @ts-ignore
                        public static readonly REF_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly VALUE_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly LOOKUP_METHOD_ELEMENT: java.lang.String | string
                        // @ts-ignore
                        public static readonly REPLACED_METHOD_ELEMENT: java.lang.String | string
                        // @ts-ignore
                        public static readonly REPLACER_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly ARG_TYPE_ELEMENT: java.lang.String | string
                        // @ts-ignore
                        public static readonly ARG_TYPE_MATCH_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly REF_ELEMENT: java.lang.String | string
                        // @ts-ignore
                        public static readonly IDREF_ELEMENT: java.lang.String | string
                        // @ts-ignore
                        public static readonly BEAN_REF_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly PARENT_REF_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly VALUE_ELEMENT: java.lang.String | string
                        // @ts-ignore
                        public static readonly NULL_ELEMENT: java.lang.String | string
                        // @ts-ignore
                        public static readonly ARRAY_ELEMENT: java.lang.String | string
                        // @ts-ignore
                        public static readonly LIST_ELEMENT: java.lang.String | string
                        // @ts-ignore
                        public static readonly SET_ELEMENT: java.lang.String | string
                        // @ts-ignore
                        public static readonly MAP_ELEMENT: java.lang.String | string
                        // @ts-ignore
                        public static readonly ENTRY_ELEMENT: java.lang.String | string
                        // @ts-ignore
                        public static readonly KEY_ELEMENT: java.lang.String | string
                        // @ts-ignore
                        public static readonly KEY_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly KEY_REF_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly VALUE_REF_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly PROPS_ELEMENT: java.lang.String | string
                        // @ts-ignore
                        public static readonly PROP_ELEMENT: java.lang.String | string
                        // @ts-ignore
                        public static readonly MERGE_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly QUALIFIER_ELEMENT: java.lang.String | string
                        // @ts-ignore
                        public static readonly QUALIFIER_ATTRIBUTE_ELEMENT: java.lang.String | string
                        // @ts-ignore
                        public static readonly DEFAULT_LAZY_INIT_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly DEFAULT_MERGE_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly DEFAULT_AUTOWIRE_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly DEFAULT_AUTOWIRE_CANDIDATES_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly DEFAULT_INIT_METHOD_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly DEFAULT_DESTROY_METHOD_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        readonly logger: Log
                        /**
                         * Get the {@link XmlReaderContext} associated with this helper instance.
                         */
                        // @ts-ignore
                        public getReaderContext(): org.springframework.beans.factory.xml.XmlReaderContext
                        /**
                         * Invoke the {@link org.springframework.beans.factory.parsing.SourceExtractor}
                         * to pull the source metadata from the supplied {@link Element}.
                         */
                        // @ts-ignore
                        extractSource(ele: org.w3c.dom.Element): any
                        /**
                         * Report an error with the given message for the given source element.
                         */
                        // @ts-ignore
                        error(message: java.lang.String | string, source: org.w3c.dom.Node): void
                        /**
                         * Report an error with the given message for the given source element.
                         */
                        // @ts-ignore
                        error(message: java.lang.String | string, source: org.w3c.dom.Element): void
                        /**
                         * Report an error with the given message for the given source element.
                         */
                        // @ts-ignore
                        error(message: java.lang.String | string, source: org.w3c.dom.Element, cause: java.lang.Throwable | Error): void
                        /**
                         * Initialize the default settings assuming a {@code null} parent delegate.
                         */
                        // @ts-ignore
                        public initDefaults(root: org.w3c.dom.Element): void
                        /**
                         * Initialize the default lazy-init, autowire, dependency check settings,
                         * init-method, destroy-method and merge settings. Support nested 'beans'
                         * element use cases by falling back to the given parent in case the
                         * defaults are not explicitly set locally.
                         * @see #populateDefaults(DocumentDefaultsDefinition, DocumentDefaultsDefinition, org.w3c.dom.Element)
                         * @see #getDefaults()
                         */
                        // @ts-ignore
                        public initDefaults(root: org.w3c.dom.Element, parent: org.springframework.beans.factory.xml.BeanDefinitionParserDelegate): void
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
                        public getDefaults(): org.springframework.beans.factory.xml.DocumentDefaultsDefinition
                        /**
                         * Return the default settings for bean definitions as indicated within
                         * the attributes of the top-level {@code <beans/>} element.
                         */
                        // @ts-ignore
                        public getBeanDefinitionDefaults(): org.springframework.beans.factory.support.BeanDefinitionDefaults
                        /**
                         * Return any patterns provided in the 'default-autowire-candidates'
                         * attribute of the top-level {@code <beans/>} element.
                         */
                        // @ts-ignore
                        public getAutowireCandidatePatterns(): string[]
                        /**
                         * Parses the supplied {@code <bean>} element. May return {@code null}
                         * if there were errors during parse. Errors are reported to the
                         * {@link org.springframework.beans.factory.parsing.ProblemReporter}.
                         */
                        // @ts-ignore
                        public parseBeanDefinitionElement(ele: org.w3c.dom.Element): org.springframework.beans.factory.config.BeanDefinitionHolder
                        /**
                         * Parses the supplied {@code <bean>} element. May return {@code null}
                         * if there were errors during parse. Errors are reported to the
                         * {@link org.springframework.beans.factory.parsing.ProblemReporter}.
                         */
                        // @ts-ignore
                        public parseBeanDefinitionElement(ele: org.w3c.dom.Element, containingBean: org.springframework.beans.factory.config.BeanDefinition): org.springframework.beans.factory.config.BeanDefinitionHolder
                        /**
                         * Validate that the specified bean name and aliases have not been used already
                         * within the current level of beans element nesting.
                         */
                        // @ts-ignore
                        checkNameUniqueness(beanName: java.lang.String | string, aliases: java.util.List<java.lang.String | string> | Array<java.lang.String | string>, beanElement: org.w3c.dom.Element): void
                        /**
                         * Parse the bean definition itself, without regard to name or aliases. May return
                         * {@code null} if problems occurred during the parsing of the bean definition.
                         */
                        // @ts-ignore
                        public parseBeanDefinitionElement(ele: org.w3c.dom.Element, beanName: java.lang.String | string, containingBean: org.springframework.beans.factory.config.BeanDefinition): org.springframework.beans.factory.support.AbstractBeanDefinition
                        /**
                         * Apply the attributes of the given bean element to the given bean * definition.
                         * @param ele bean declaration element
                         * @param beanName bean name
                         * @param containingBean containing bean definition
                         * @return a bean definition initialized according to the bean element attributes
                         */
                        // @ts-ignore
                        public parseBeanDefinitionAttributes(ele: org.w3c.dom.Element, beanName: java.lang.String | string, containingBean: org.springframework.beans.factory.config.BeanDefinition, bd: org.springframework.beans.factory.support.AbstractBeanDefinition): org.springframework.beans.factory.support.AbstractBeanDefinition
                        /**
                         * Create a bean definition for the given class name and parent name.
                         * @param className the name of the bean class
                         * @param parentName the name of the bean's parent bean
                         * @return the newly created bean definition
                         * @throws ClassNotFoundException if bean class resolution was attempted but failed
                         */
                        // @ts-ignore
                        createBeanDefinition(className: java.lang.String | string, parentName: java.lang.String | string): org.springframework.beans.factory.support.AbstractBeanDefinition
                        /**
                         * Parse the meta elements underneath the given element, if any.
                         */
                        // @ts-ignore
                        public parseMetaElements(ele: org.w3c.dom.Element, attributeAccessor: org.springframework.beans.BeanMetadataAttributeAccessor): void
                        /**
                         * Parse the given autowire attribute value into
                         * {@link AbstractBeanDefinition} autowire constants.
                         */
                        // @ts-ignore
                        public getAutowireMode(attrValue: java.lang.String | string): number /*int*/
                        /**
                         * Parse constructor-arg sub-elements of the given bean element.
                         */
                        // @ts-ignore
                        public parseConstructorArgElements(beanEle: org.w3c.dom.Element, bd: org.springframework.beans.factory.config.BeanDefinition): void
                        /**
                         * Parse property sub-elements of the given bean element.
                         */
                        // @ts-ignore
                        public parsePropertyElements(beanEle: org.w3c.dom.Element, bd: org.springframework.beans.factory.config.BeanDefinition): void
                        /**
                         * Parse qualifier sub-elements of the given bean element.
                         */
                        // @ts-ignore
                        public parseQualifierElements(beanEle: org.w3c.dom.Element, bd: org.springframework.beans.factory.support.AbstractBeanDefinition): void
                        /**
                         * Parse lookup-override sub-elements of the given bean element.
                         */
                        // @ts-ignore
                        public parseLookupOverrideSubElements(beanEle: org.w3c.dom.Element, overrides: org.springframework.beans.factory.support.MethodOverrides): void
                        /**
                         * Parse replaced-method sub-elements of the given bean element.
                         */
                        // @ts-ignore
                        public parseReplacedMethodSubElements(beanEle: org.w3c.dom.Element, overrides: org.springframework.beans.factory.support.MethodOverrides): void
                        /**
                         * Parse a constructor-arg element.
                         */
                        // @ts-ignore
                        public parseConstructorArgElement(ele: org.w3c.dom.Element, bd: org.springframework.beans.factory.config.BeanDefinition): void
                        /**
                         * Parse a property element.
                         */
                        // @ts-ignore
                        public parsePropertyElement(ele: org.w3c.dom.Element, bd: org.springframework.beans.factory.config.BeanDefinition): void
                        /**
                         * Parse a qualifier element.
                         */
                        // @ts-ignore
                        public parseQualifierElement(ele: org.w3c.dom.Element, bd: org.springframework.beans.factory.support.AbstractBeanDefinition): void
                        /**
                         * Get the value of a property element. May be a list etc.
                         * Also used for constructor arguments, "propertyName" being null in this case.
                         */
                        // @ts-ignore
                        public parsePropertyValue(ele: org.w3c.dom.Element, bd: org.springframework.beans.factory.config.BeanDefinition, propertyName: java.lang.String | string): any
                        /**
                         * Parse a value, ref or collection sub-element of a property or
                         * constructor-arg element.
                         * @param ele subelement of property element; we don't know which yet
                         * @param bd the current bean definition (if any)
                         */
                        // @ts-ignore
                        public parsePropertySubElement(ele: org.w3c.dom.Element, bd: org.springframework.beans.factory.config.BeanDefinition): any
                        /**
                         * Parse a value, ref or collection sub-element of a property or
                         * constructor-arg element.
                         * @param ele subelement of property element; we don't know which yet
                         * @param bd the current bean definition (if any)
                         * @param defaultValueType the default type (class name) for any
                         *  {#code <value>} tag that might be created
                         */
                        // @ts-ignore
                        public parsePropertySubElement(ele: org.w3c.dom.Element, bd: org.springframework.beans.factory.config.BeanDefinition, defaultValueType: java.lang.String | string): any
                        /**
                         * Return a typed String value Object for the given 'idref' element.
                         */
                        // @ts-ignore
                        public parseIdRefElement(ele: org.w3c.dom.Element): any
                        /**
                         * Return a typed String value Object for the given value element.
                         */
                        // @ts-ignore
                        public parseValueElement(ele: org.w3c.dom.Element, defaultTypeName: java.lang.String | string): any
                        /**
                         * Build a typed String value Object for the given raw value.
                         * @see org.springframework.beans.factory.config.TypedStringValue
                         */
                        // @ts-ignore
                        buildTypedStringValue(value: java.lang.String | string, targetTypeName: java.lang.String | string): org.springframework.beans.factory.config.TypedStringValue
                        /**
                         * Parse an array element.
                         */
                        // @ts-ignore
                        public parseArrayElement(arrayEle: org.w3c.dom.Element, bd: org.springframework.beans.factory.config.BeanDefinition): any
                        /**
                         * Parse a list element.
                         */
                        // @ts-ignore
                        public parseListElement(collectionEle: org.w3c.dom.Element, bd: org.springframework.beans.factory.config.BeanDefinition): Array<java.lang.Object | any>
                        /**
                         * Parse a set element.
                         */
                        // @ts-ignore
                        public parseSetElement(collectionEle: org.w3c.dom.Element, bd: org.springframework.beans.factory.config.BeanDefinition): Array<java.lang.Object | any>
                        // @ts-ignore
                        parseCollectionElements(elementNodes: org.w3c.dom.NodeList, target: java.util.Collection<java.lang.Object | any> | Array<java.lang.Object | any>, bd: org.springframework.beans.factory.config.BeanDefinition, defaultElementType: java.lang.String | string): void
                        /**
                         * Parse a map element.
                         */
                        // @ts-ignore
                        public parseMapElement(mapEle: org.w3c.dom.Element, bd: org.springframework.beans.factory.config.BeanDefinition): java.util.Map<java.lang.Object | any, java.lang.Object | any>
                        /**
                         * Build a typed String value Object for the given raw value.
                         * @see org.springframework.beans.factory.config.TypedStringValue
                         */
                        // @ts-ignore
                        buildTypedStringValueForMap(value: java.lang.String | string, defaultTypeName: java.lang.String | string, entryEle: org.w3c.dom.Element): any
                        /**
                         * Parse a key sub-element of a map element.
                         */
                        // @ts-ignore
                        parseKeyElement(keyEle: org.w3c.dom.Element, bd: org.springframework.beans.factory.config.BeanDefinition, defaultKeyTypeName: java.lang.String | string): any
                        /**
                         * Parse a props element.
                         */
                        // @ts-ignore
                        public parsePropsElement(propsEle: org.w3c.dom.Element): java.util.Properties
                        /**
                         * Parse the merge attribute of a collection element, if any.
                         */
                        // @ts-ignore
                        public parseMergeAttribute(collectionElement: org.w3c.dom.Element): boolean
                        /**
                         * Parse a custom element (outside of the default namespace).
                         * @param ele the element to parse
                         * @return the resulting bean definition
                         */
                        // @ts-ignore
                        public parseCustomElement(ele: org.w3c.dom.Element): org.springframework.beans.factory.config.BeanDefinition
                        /**
                         * Parse a custom element (outside of the default namespace).
                         * @param ele the element to parse
                         * @param containingBd the containing bean definition (if any)
                         * @return the resulting bean definition
                         */
                        // @ts-ignore
                        public parseCustomElement(ele: org.w3c.dom.Element, containingBd: org.springframework.beans.factory.config.BeanDefinition): org.springframework.beans.factory.config.BeanDefinition
                        /**
                         * Decorate the given bean definition through a namespace handler, if applicable.
                         * @param ele the current element
                         * @param originalDef the current bean definition
                         * @return the decorated bean definition
                         */
                        // @ts-ignore
                        public decorateBeanDefinitionIfRequired(ele: org.w3c.dom.Element, originalDef: org.springframework.beans.factory.config.BeanDefinitionHolder): org.springframework.beans.factory.config.BeanDefinitionHolder
                        /**
                         * Decorate the given bean definition through a namespace handler, if applicable.
                         * @param ele the current element
                         * @param originalDef the current bean definition
                         * @param containingBd the containing bean definition (if any)
                         * @return the decorated bean definition
                         */
                        // @ts-ignore
                        public decorateBeanDefinitionIfRequired(ele: org.w3c.dom.Element, originalDef: org.springframework.beans.factory.config.BeanDefinitionHolder, containingBd: org.springframework.beans.factory.config.BeanDefinition): org.springframework.beans.factory.config.BeanDefinitionHolder
                        /**
                         * Decorate the given bean definition through a namespace handler,
                         * if applicable.
                         * @param node the current child node
                         * @param originalDef the current bean definition
                         * @param containingBd the containing bean definition (if any)
                         * @return the decorated bean definition
                         */
                        // @ts-ignore
                        public decorateIfRequired(node: org.w3c.dom.Node, originalDef: org.springframework.beans.factory.config.BeanDefinitionHolder, containingBd: org.springframework.beans.factory.config.BeanDefinition): org.springframework.beans.factory.config.BeanDefinitionHolder
                        /**
                         * Get the namespace URI for the supplied node.
                         * <p>The default implementation uses {@link Node#getNamespaceURI}.
                         * Subclasses may override the default implementation to provide a
                         * different namespace identification mechanism.
                         * @param node the node
                         */
                        // @ts-ignore
                        public getNamespaceURI(node: org.w3c.dom.Node): string
                        /**
                         * Get the local name for the supplied {@link Node}.
                         * <p>The default implementation calls {@link Node#getLocalName}.
                         * Subclasses may override the default implementation to provide a
                         * different mechanism for getting the local name.
                         * @param node the {#code Node}
                         */
                        // @ts-ignore
                        public getLocalName(node: org.w3c.dom.Node): string
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
                        public nodeNameEquals(node: org.w3c.dom.Node, desiredName: java.lang.String | string): boolean
                        /**
                         * Determine whether the given URI indicates the default namespace.
                         */
                        // @ts-ignore
                        public isDefaultNamespace(namespaceUri: java.lang.String | string): boolean
                        /**
                         * Determine whether the given node indicates the default namespace.
                         */
                        // @ts-ignore
                        public isDefaultNamespace(node: org.w3c.dom.Node): boolean
                    }
                }
            }
        }
    }
}
