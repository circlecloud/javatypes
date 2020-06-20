declare namespace org {
    namespace springframework {
        namespace web {
            namespace jsf {
                namespace el {
                    /**
                     * Special JSF {@code ELResolver} that exposes the Spring {@code WebApplicationContext}
                     * instance under a variable named "webApplicationContext".
                     * <p>In contrast to {@link SpringBeanFacesELResolver}, this ELResolver variant
                     * does <i>not</i> resolve JSF variable names as Spring bean names. It rather
                     * exposes Spring's root WebApplicationContext <i>itself</i> under a special name,
                     * and is able to resolve "webApplicationContext.mySpringManagedBusinessObject"
                     * dereferences to Spring-defined beans in that application context.
                     * <p>Configure this resolver in your {@code faces-config.xml} file as follows:
                     * <pre class="code">
                     * &lt;application>
                     * ...
                     * &lt;el-resolver>org.springframework.web.jsf.el.WebApplicationContextFacesELResolver&lt;/el-resolver>
                     * &lt;/application></pre>
                     * @author Juergen Hoeller
                     * @since 2.5
                     * @see SpringBeanFacesELResolver
                     * @see org.springframework.web.jsf.FacesContextUtils#getWebApplicationContext
                     */
                    // @ts-ignore
                    class WebApplicationContextFacesELResolver extends ELResolver {
                        // @ts-ignore
                        constructor()
                        /**
                         * Name of the exposed WebApplicationContext variable: "webApplicationContext".
                         */
                        // @ts-ignore
                        readonly WEB_APPLICATION_CONTEXT_VARIABLE_NAME: string
                        /**
                         * Logger available to subclasses.
                         */
                        // @ts-ignore
                        readonly logger: Log
                        // @ts-ignore
                        getValue(elContext: ELContext, base: any, property: any): java.lang.Object
                        // @ts-ignore
                        getType(elContext: ELContext, base: any, property: any): java.lang.Class<?>
                        // @ts-ignore
                        setValue(elContext: ELContext, base: any, property: any, value: any): void
                        // @ts-ignore
                        isReadOnly(elContext: ELContext, base: any, property: any): boolean
                        // @ts-ignore
                        getFeatureDescriptors(elContext: ELContext, base: any): java.util.Iterator<java.beans.FeatureDescriptor>
                        // @ts-ignore
                        getCommonPropertyType(elContext: ELContext, base: any): java.lang.Class<?>
                        /**
                         * Retrieve the {@link WebApplicationContext} reference to expose.
                         * <p>The default implementation delegates to {@link FacesContextUtils},
                         * returning {@code null} if no {@code WebApplicationContext} found.
                         * @param elContext the current JSF ELContext
                         * @return the Spring web application context
                         * @see org.springframework.web.jsf.FacesContextUtils#getWebApplicationContext
                         */
                        // @ts-ignore
                        getWebApplicationContext(elContext: ELContext): org.springframework.web.context.WebApplicationContext
                    }
                }
            }
        }
    }
}
