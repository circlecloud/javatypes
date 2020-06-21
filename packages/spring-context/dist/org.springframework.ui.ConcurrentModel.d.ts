declare namespace org {
    namespace springframework {
        namespace ui {
            /**
             * Implementation of the {@link Model} interface based on a {@link ConcurrentHashMap}
             * for use in concurrent scenarios.
             * <p>Exposed to handler methods by Spring WebFlux, typically via a declaration of the
             * {@link Model} interface. There is typically no need to create it within user code.
             * If necessary a handler method can return a regular {@code java.util.Map},
             * likely a {@code java.util.ConcurrentMap}, for a pre-determined model.
             * @author Rossen Stoyanchev
             * @since 5.0
             */
            // @ts-ignore
            class ConcurrentModel extends java.util.concurrent.ConcurrentHashMap<java.lang.String | string, java.lang.Object | any> implements org.springframework.ui.Model {
                /**
                 * Construct a new, empty {@code ConcurrentModel}.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Construct a new {@code ModelMap} containing the supplied attribute
                 * under the supplied name.
                 * @see #addAttribute(String, Object)
                 */
                // @ts-ignore
                constructor(attributeName: java.lang.String | string, attributeValue: java.lang.Object | any)
                /**
                 * Construct a new {@code ModelMap} containing the supplied attribute.
                 * Uses attribute name generation to generate the key for the supplied model
                 * object.
                 * @see #addAttribute(Object)
                 */
                // @ts-ignore
                constructor(attributeValue: java.lang.Object | any)
                // @ts-ignore
                public put(key: java.lang.String | string, value: java.lang.Object | any): any
                // @ts-ignore
                public putAll(map: java.util.Map<any, any>): void
                /**
                 * Add the supplied attribute under the supplied name.
                 * @param attributeName the name of the model attribute (never {#code null})
                 * @param attributeValue the model attribute value (ignored if {#code null},
                 *  just removing an existing entry if any)
                 */
                // @ts-ignore
                public addAttribute(attributeName: java.lang.String | string, attributeValue: java.lang.Object | any): org.springframework.ui.ConcurrentModel
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
                public addAttribute(attributeValue: java.lang.Object | any): org.springframework.ui.ConcurrentModel
                /**
                 * Copy all attributes in the supplied {@code Collection} into this
                 * {@code Map}, using attribute name generation for each element.
                 * @see #addAttribute(Object)
                 */
                // @ts-ignore
                public addAllAttributes(attributeValues: java.util.Collection<any> | Array<any>): org.springframework.ui.ConcurrentModel
                /**
                 * Copy all attributes in the supplied {@code Map} into this {@code Map}.
                 * @see #addAttribute(String, Object)
                 */
                // @ts-ignore
                public addAllAttributes(attributes: java.util.Map<java.lang.String | string, any>): org.springframework.ui.ConcurrentModel
                /**
                 * Copy all attributes in the supplied {@code Map} into this {@code Map},
                 * with existing objects of the same name taking precedence (i.e. not getting
                 * replaced).
                 */
                // @ts-ignore
                public mergeAttributes(attributes: java.util.Map<java.lang.String | string, any>): org.springframework.ui.ConcurrentModel
                /**
                 * Does this model contain an attribute of the given name?
                 * @param attributeName the name of the model attribute (never {#code null})
                 * @return whether this model contains a corresponding attribute
                 */
                // @ts-ignore
                public containsAttribute(attributeName: java.lang.String | string): boolean
                // @ts-ignore
                public getAttribute(attributeName: java.lang.String | string): any
                // @ts-ignore
                public asMap(): java.util.Map<java.lang.String | string, java.lang.Object | any>
            }
        }
    }
}
