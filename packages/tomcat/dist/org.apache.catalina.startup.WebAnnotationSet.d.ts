declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                /**
                 * <strong>AnnotationSet</strong> for processing the annotations of the web
                 * application classes (<code>/WEB-INF/classes</code> and
                 * <code>/WEB-INF/lib</code>).
                 */
                // @ts-ignore
                class WebAnnotationSet extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * The string resources for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * Process the annotations on a context.
                     * @param context The context which will have its annotations processed
                     */
                    // @ts-ignore
                    public static loadApplicationAnnotations(context: org.apache.catalina.Context): void
                    /**
                     * Process the annotations for the listeners.
                     * @param context The context which will have its annotations processed
                     */
                    // @ts-ignore
                    static loadApplicationListenerAnnotations(context: org.apache.catalina.Context): void
                    /**
                     * Process the annotations for the filters.
                     * @param context The context which will have its annotations processed
                     */
                    // @ts-ignore
                    static loadApplicationFilterAnnotations(context: org.apache.catalina.Context): void
                    /**
                     * Process the annotations for the servlets.
                     * @param context The context which will have its annotations processed
                     */
                    // @ts-ignore
                    static loadApplicationServletAnnotations(context: org.apache.catalina.Context): void
                    /**
                     * Process the annotations on a context for a given className.
                     * @param context The context which will have its annotations processed
                     * @param clazz The class to examine for Servlet annotations
                     */
                    // @ts-ignore
                    static loadClassAnnotation(context: org.apache.catalina.Context, clazz: java.lang.Class<any>): void
                    // @ts-ignore
                    static loadFieldsAnnotation(context: org.apache.catalina.Context, clazz: java.lang.Class<any>): void
                    // @ts-ignore
                    static loadMethodsAnnotation(context: org.apache.catalina.Context, clazz: java.lang.Class<any>): void
                    /**
                     * Process a Resource annotation to set up a Resource.
                     * Ref JSR 250, equivalent to the resource-ref,
                     * message-destination-ref, env-ref, resource-env-ref
                     * or service-ref element in the deployment descriptor.
                     * @param context The context which will have its annotations processed
                     * @param annotation The annotation that was found
                     */
                    // @ts-ignore
                    static addResource(context: org.apache.catalina.Context, annotation: javax.annotation.Resource): void
                    // @ts-ignore
                    static addResource(context: org.apache.catalina.Context, annotation: javax.annotation.Resource, defaultName: java.lang.String | string, defaultType: java.lang.Class<any>): void
                }
            }
        }
    }
}
