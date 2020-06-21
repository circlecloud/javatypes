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
                        public static readonly WEB_APPLICATION_CONTEXT_VARIABLE_NAME: java.lang.String | string
                        /**
                         * Logger available to subclasses.
                         */
                        // @ts-ignore
                        readonly logger: Log
                        // @ts-ignore
                        public getValue(elContext: ELContext, base: java.lang.Object | any, property: java.lang.Object | any): any
                        // @ts-ignore
                        public getType(elContext: ELContext, base: java.lang.Object | any, property: java.lang.Object | any): java.lang.Class<any>
                        // @ts-ignore
                        public setValue(elContext: ELContext, base: java.lang.Object | any, property: java.lang.Object | any, value: java.lang.Object | any): void
                        // @ts-ignore
                        public isReadOnly(elContext: ELContext, base: java.lang.Object | any, property: java.lang.Object | any): boolean
                        // @ts-ignore
                        public getFeatureDescriptors(elContext: ELContext, base: java.lang.Object | any): java.util.Iterator<java.beans.FeatureDescriptor>
                        // @ts-ignore
                        public getCommonPropertyType(elContext: ELContext, base: java.lang.Object | any): java.lang.Class<any>
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
