declare namespace org {
    namespace springframework {
        namespace ui {
            /**
             * Subclass of {@link ModelMap} that implements the {@link Model} interface.
             * Java 5 specific like the {@code Model} interface itself.
             * <p>This is an implementation class exposed to handler methods by Spring MVC, typically via
             * a declaration of the {@link org.springframework.ui.Model} interface. There is no need to
             * build it within user code; a plain {@link org.springframework.ui.ModelMap} or even a just
             * a regular {@link Map} with String keys will be good enough to return a user model.
             * @author Juergen Hoeller
             * @since 2.5.1
             */
            // @ts-ignore
            class ExtendedModelMap extends org.springframework.ui.ModelMap implements org.springframework.ui.Model {
                // @ts-ignore
                constructor()
                // @ts-ignore
                addAttribute(attributeName: string, attributeValue: any): org.springframework.ui.ExtendedModelMap
                // @ts-ignore
                addAttribute(attributeValue: any): org.springframework.ui.ExtendedModelMap
                // @ts-ignore
                addAllAttributes(attributeValues: Array<any>): org.springframework.ui.ExtendedModelMap
                // @ts-ignore
                addAllAttributes(attributes: java.util.Map<java.lang.String, any>): org.springframework.ui.ExtendedModelMap
                // @ts-ignore
                mergeAttributes(attributes: java.util.Map<java.lang.String, any>): org.springframework.ui.ExtendedModelMap
                // @ts-ignore
                asMap(): java.util.Map<java.lang.String, java.lang.Object>
            }
        }
    }
}
