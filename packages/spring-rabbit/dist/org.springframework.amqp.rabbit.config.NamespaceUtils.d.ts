declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace config {
                    /**
                     * Shared utility methods for namespace parsers.
                     * @author Mark Pollack
                     * @author Dave Syer
                     * @author Gary Russell
                     */
                    // @ts-ignore
                    abstract class NamespaceUtils extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static readonly BASE_PACKAGE: java.lang.String | string
                        // @ts-ignore
                        public static readonly REF_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly METHOD_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly ORDER: java.lang.String | string
                        /**
                         * Populates the specified bean definition property with the value of the attribute whose name is provided if that
                         * attribute is defined in the given element.
                         * @param builder the bean definition builder to be configured
                         * @param element the XML element where the attribute should be defined
                         * @param attributeName the name of the attribute whose value will be used to populate the property
                         * @param propertyName the name of the property to be populated
                         * @return true if defined.
                         */
                        // @ts-ignore
                        public static setValueIfAttributeDefined(builder: BeanDefinitionBuilder, element: org.w3c.dom.Element, attributeName: java.lang.String | string, propertyName: java.lang.String | string): boolean
                        /**
                         * Populates the bean definition property corresponding to the specified attributeName with the value of that
                         * attribute if it is defined in the given element.
                         * <p>
                         * The property name will be the camel-case equivalent of the lower case hyphen separated attribute (e.g. the
                         * "foo-bar" attribute would match the "fooBar" property).
                         * @param builder the bean definition builder to be configured
                         * @param element the XML element where the attribute should be defined
                         * @param attributeName the name of the attribute whose value will be set on the property
                         * @return true if defined.
                         * @see Conventions#attributeNameToPropertyName(String)
                         */
                        // @ts-ignore
                        public static setValueIfAttributeDefined(builder: BeanDefinitionBuilder, element: org.w3c.dom.Element, attributeName: java.lang.String | string): boolean
                        /**
                         * Checks the attribute to see if it is defined in the given element.
                         * @param element the XML element where the attribute should be defined
                         * @param attributeName the name of the attribute whose value will be used as a constructor argument
                         * @return true if defined.
                         */
                        // @ts-ignore
                        public static isAttributeDefined(element: org.w3c.dom.Element, attributeName: java.lang.String | string): boolean
                        /**
                         * Populates the bean definition constructor argument with the value of that attribute if it is defined in the given
                         * element.
                         * @param builder the bean definition builder to be configured
                         * @param element the XML element where the attribute should be defined
                         * @param attributeName the name of the attribute whose value will be used as a constructor argument
                         * @return true if defined.
                         */
                        // @ts-ignore
                        public static addConstructorArgValueIfAttributeDefined(builder: BeanDefinitionBuilder, element: org.w3c.dom.Element, attributeName: java.lang.String | string): boolean
                        /**
                         * Populates the bean definition constructor argument with the boolean value of that attribute if it is defined in
                         * the given element or else uses the default provided.
                         * @param builder the bean definition builder to be configured
                         * @param element the XML element where the attribute should be defined
                         * @param attributeName the name of the attribute whose value will be used as a constructor argument
                         * @param defaultValue the default value to use if the attirbute is not set
                         */
                        // @ts-ignore
                        public static addConstructorArgBooleanValueIfAttributeDefined(builder: BeanDefinitionBuilder, element: org.w3c.dom.Element, attributeName: java.lang.String | string, defaultValue: boolean): void
                        /**
                         * Populates the bean definition constructor argument with a reference to a bean with id equal to the attribute if
                         * it is defined in the given element.
                         * @param builder the bean definition builder to be configured
                         * @param element the XML element where the attribute should be defined
                         * @param attributeName the name of the attribute whose value will be used to set the reference
                         * @return true if defined.
                         */
                        // @ts-ignore
                        public static addConstructorArgRefIfAttributeDefined(builder: BeanDefinitionBuilder, element: org.w3c.dom.Element, attributeName: java.lang.String | string): boolean
                        /**
                         * Populates the bean definition constructor argument with a reference to a bean with parent id equal to the
                         * attribute if it is defined in the given element.
                         * @param builder the bean definition builder to be configured
                         * @param element the XML element where the attribute should be defined
                         * @param attributeName the name of the attribute whose value will be used to set the reference
                         * @return true if defined.
                         */
                        // @ts-ignore
                        public static addConstructorArgParentRefIfAttributeDefined(builder: BeanDefinitionBuilder, element: org.w3c.dom.Element, attributeName: java.lang.String | string): boolean
                        /**
                         * Populates the specified bean definition property with the reference to a bean. The bean reference is identified
                         * by the value from the attribute whose name is provided if that attribute is defined in the given element.
                         * @param builder the bean definition builder to be configured
                         * @param element the XML element where the attribute should be defined
                         * @param attributeName the name of the attribute whose value will be used as a bean reference to populate the
                         *  property
                         * @param propertyName the name of the property to be populated
                         * @return true if the attribute is present and has text
                         */
                        // @ts-ignore
                        public static setReferenceIfAttributeDefined(builder: BeanDefinitionBuilder, element: org.w3c.dom.Element, attributeName: java.lang.String | string, propertyName: java.lang.String | string): boolean
                        /**
                         * Populates the bean definition property corresponding to the specified attributeName with the reference to a bean
                         * identified by the value of that attribute if the attribute is defined in the given element.
                         * <p>
                         * The property name will be the camel-case equivalent of the lower case hyphen separated attribute (e.g. the
                         * "foo-bar" attribute would match the "fooBar" property).
                         * @param builder the bean definition builder to be configured
                         * @param element the XML element where the attribute should be defined
                         * @param attributeName the name of the attribute whose value will be used as a bean reference to populate the
                         *  property
                         * @return true if defined.
                         * @see Conventions#attributeNameToPropertyName(String)
                         */
                        // @ts-ignore
                        public static setReferenceIfAttributeDefined(builder: BeanDefinitionBuilder, element: org.w3c.dom.Element, attributeName: java.lang.String | string): boolean
                        /**
                         * Provides a user friendly description of an element based on its node name and, if available, its "id" attribute
                         * value. This is useful for creating error messages from within bean definition parsers.
                         * @param element The element.
                         * @return The description.
                         */
                        // @ts-ignore
                        public static createElementDescription(element: org.w3c.dom.Element): string
                        // @ts-ignore
                        public static parseInnerBeanDefinition(element: org.w3c.dom.Element, parserContext: ParserContext): BeanComponentDefinition
                        /**
                         * Parses 'auto-declare' and 'declared-by' attributes.
                         * @param element The element.
                         * @param builder The builder.
                         */
                        // @ts-ignore
                        public static parseDeclarationControls(element: org.w3c.dom.Element, builder: BeanDefinitionBuilder): void
                        // @ts-ignore
                        public static createExpressionDefinitionFromValueOrExpression(valueElementName: java.lang.String | string, expressionElementName: java.lang.String | string, parserContext: ParserContext, element: org.w3c.dom.Element, oneRequired: boolean): BeanDefinition
                        // @ts-ignore
                        public static createExpressionDefIfAttributeDefined(expressionElementName: java.lang.String | string, element: org.w3c.dom.Element): BeanDefinition
                    }
                }
            }
        }
    }
}
