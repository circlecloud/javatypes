declare namespace org {
    namespace springframework {
        namespace beans {
            namespace annotation {
                /**
                 * General utility methods for working with annotations in JavaBeans style.
                 * @author Rob Harrop
                 * @author Juergen Hoeller
                 * @since 2.0
                 * @deprecated as of 5.2, in favor of custom annotation attribute processing
                 */
                // @ts-ignore
                class AnnotationBeanUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Copy the properties of the supplied {@link Annotation} to the supplied target bean.
                     * Any properties defined in {@code excludedProperties} will not be copied.
                     * @param ann the annotation to copy from
                     * @param bean the bean instance to copy to
                     * @param excludedProperties the names of excluded properties, if any
                     * @see org.springframework.beans.BeanWrapper
                     */
                    // @ts-ignore
                    copyPropertiesToBean(ann: java.lang.annotation.Annotation, bean: any, ...excludedProperties: string[]): void
                    /**
                     * Copy the properties of the supplied {@link Annotation} to the supplied target bean.
                     * Any properties defined in {@code excludedProperties} will not be copied.
                     * <p>A specified value resolver may resolve placeholders in property values, for example.
                     * @param ann the annotation to copy from
                     * @param bean the bean instance to copy to
                     * @param valueResolver a resolve to post-process String property values (may be {#code null})
                     * @param excludedProperties the names of excluded properties, if any
                     * @see org.springframework.beans.BeanWrapper
                     */
                    // @ts-ignore
                    copyPropertiesToBean(ann: java.lang.annotation.Annotation, bean: any, valueResolver: StringValueResolver, ...excludedProperties: string[]): void
                }
            }
        }
    }
}
