declare namespace org {
    namespace springframework {
        namespace ui {
            /**
             * Java-5-specific interface that defines a holder for model attributes.
             * Primarily designed for adding attributes to the model.
             * Allows for accessing the overall model as a {@code java.util.Map}.
             * @author Juergen Hoeller
             * @since 2.5.1
             */
            // @ts-ignore
            interface Model {
                /**
                 * Add the supplied attribute under the supplied name.
                 * @param attributeName the name of the model attribute (never {#code null})
                 * @param attributeValue the model attribute value (can be {#code null})
                 */
                // @ts-ignore
                addAttribute(attributeName: java.lang.String | string, attributeValue: java.lang.Object | any): org.springframework.ui.Model
                /**
                 * Add the supplied attribute to this {@code Map} using a
                 * {@link org.springframework.core.Conventions#getVariableName generated name}.
                 * <p><i>Note: Empty {@link java.util.Collection Collections} are not added to
                 * the model when using this method because we cannot correctly determine
                 * the true convention name. View code should check for {@code null} rather
                 * than for empty collections as is already done by JSTL tags.</i>
                 * @param attributeValue the model attribute value (never {#code null})
                 */
                // @ts-ignore
                addAttribute(attributeValue: java.lang.Object | any): org.springframework.ui.Model
                /**
                 * Copy all attributes in the supplied {@code Collection} into this
                 * {@code Map}, using attribute name generation for each element.
                 * @see #addAttribute(Object)
                 */
                // @ts-ignore
                addAllAttributes(attributeValues: java.util.Collection<any> | Array<any>): org.springframework.ui.Model
                /**
                 * Copy all attributes in the supplied {@code Map} into this {@code Map}.
                 * @see #addAttribute(String, Object)
                 */
                // @ts-ignore
                addAllAttributes(attributes: java.util.Map<java.lang.String | string, any>): org.springframework.ui.Model
                /**
                 * Copy all attributes in the supplied {@code Map} into this {@code Map},
                 * with existing objects of the same name taking precedence (i.e. not getting
                 * replaced).
                 */
                // @ts-ignore
                mergeAttributes(attributes: java.util.Map<java.lang.String | string, any>): org.springframework.ui.Model
                /**
                 * Does this model contain an attribute of the given name?
                 * @param attributeName the name of the model attribute (never {#code null})
                 * @return whether this model contains a corresponding attribute
                 */
                // @ts-ignore
                containsAttribute(attributeName: java.lang.String | string): boolean
                /**
                 * Return the attribute value for the given name, if any.
                 * @param attributeName the name of the model attribute (never {#code null})
                 * @return the corresponding attribute value, or {#code null} if none
                 * @since 5.2
                 */
                // @ts-ignore
                getAttribute(attributeName: java.lang.String | string): any
                /**
                 * Return the current set of model attributes as a Map.
                 */
                // @ts-ignore
                asMap(): java.util.Map<java.lang.String | string, java.lang.Object | any>
            }
        }
    }
}
