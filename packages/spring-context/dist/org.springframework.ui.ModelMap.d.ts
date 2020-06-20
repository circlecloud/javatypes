declare namespace org {
    namespace springframework {
        namespace ui {
            /**
             * Implementation of {@link java.util.Map} for use when building model data for use
             * with UI tools. Supports chained calls and generation of model attribute names.
             * <p>This class serves as generic model holder for Servlet MVC but is not tied to it.
             * Check out the {@link Model} interface for an interface variant.
             * @author Rob Harrop
             * @author Juergen Hoeller
             * @since 2.0
             * @see Conventions#getVariableName
             * @see org.springframework.web.servlet.ModelAndView
             */
            // @ts-ignore
            class ModelMap extends java.util.LinkedHashMap<java.lang.String, java.lang.Object> {
                /**
                 * Construct a new, empty {@code ModelMap}.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Construct a new {@code ModelMap} containing the supplied attribute
                 * under the supplied name.
                 * @see #addAttribute(String, Object)
                 */
                // @ts-ignore
                constructor(attributeName: string, attributeValue: any)
                /**
                 * Construct a new {@code ModelMap} containing the supplied attribute.
                 * Uses attribute name generation to generate the key for the supplied model
                 * object.
                 * @see #addAttribute(Object)
                 */
                // @ts-ignore
                constructor(attributeValue: any)
                /**
                 * Add the supplied attribute under the supplied name.
                 * @param attributeName the name of the model attribute (never {#code null})
                 * @param attributeValue the model attribute value (can be {#code null})
                 */
                // @ts-ignore
                addAttribute(attributeName: string, attributeValue: any): org.springframework.ui.ModelMap
                /**
                 * Add the supplied attribute to this {@code Map} using a
                 * {@link org.springframework.core.Conventions#getVariableName generated name}.
                 * <p><i>Note: Empty {@link Collection Collections} are not added to
                 * the model when using this method because we cannot correctly determine
                 * the true convention name. View code should check for {@code null} rather
                 * than for empty collections as is already done by JSTL tags.</i>
                 * @param attributeValue the model attribute value (never {#code null})
                 */
                // @ts-ignore
                addAttribute(attributeValue: any): org.springframework.ui.ModelMap
                /**
                 * Copy all attributes in the supplied {@code Collection} into this
                 * {@code Map}, using attribute name generation for each element.
                 * @see #addAttribute(Object)
                 */
                // @ts-ignore
                addAllAttributes(attributeValues: Array<any>): org.springframework.ui.ModelMap
                /**
                 * Copy all attributes in the supplied {@code Map} into this {@code Map}.
                 * @see #addAttribute(String, Object)
                 */
                // @ts-ignore
                addAllAttributes(attributes: java.util.Map<java.lang.String, any>): org.springframework.ui.ModelMap
                /**
                 * Copy all attributes in the supplied {@code Map} into this {@code Map},
                 * with existing objects of the same name taking precedence (i.e. not getting
                 * replaced).
                 */
                // @ts-ignore
                mergeAttributes(attributes: java.util.Map<java.lang.String, any>): org.springframework.ui.ModelMap
                /**
                 * Does this model contain an attribute of the given name?
                 * @param attributeName the name of the model attribute (never {#code null})
                 * @return whether this model contains a corresponding attribute
                 */
                // @ts-ignore
                containsAttribute(attributeName: string): boolean
                /**
                 * Return the attribute value for the given name, if any.
                 * @param attributeName the name of the model attribute (never {#code null})
                 * @return the corresponding attribute value, or {#code null} if none
                 * @since 5.2
                 */
                // @ts-ignore
                getAttribute(attributeName: string): java.lang.Object
            }
        }
    }
}
