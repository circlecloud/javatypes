declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                /**
                 * A {@code Predicate} to match request handling component types if
                 * <strong>any</strong> of the following selectors match:
                 * <ul>
                 * <li>Base packages -- for selecting handlers by their package.
                 * <li>Assignable types -- for selecting handlers by super type.
                 * <li>Annotations -- for selecting handlers annotated in a specific way.
                 * </ul>
                 * <p>Composability methods on {@link Predicate} can be used :
                 * <pre class="code">
                 * Predicate&lt;Class&lt;?&gt;&gt; predicate =
                 * HandlerTypePredicate.forAnnotation(RestController.class)
                 * .and(HandlerTypePredicate.forBasePackage("org.example"));
                 * </pre>
                 * @author Rossen Stoyanchev
                 * @since 5.1
                 */
                // @ts-ignore
                class HandlerTypePredicate extends java.lang.Object implements java.util.function.Predicate<java.lang.Class<any>> {
                    // @ts-ignore
                    public test(controllerType: java.lang.Class<any>): boolean
                    /**
                     * {@code Predicate} that applies to any handlers.
                     */
                    // @ts-ignore
                    public static forAnyHandlerType(): org.springframework.web.method.HandlerTypePredicate
                    /**
                     * Match handlers declared under a base package, e.g. "org.example".
                     * @param packages one or more base package names
                     */
                    // @ts-ignore
                    public static forBasePackage(...packages: java.lang.String[] | string[]): org.springframework.web.method.HandlerTypePredicate
                    /**
                     * Type-safe alternative to {@link #forBasePackage(String...)} to specify a
                     * base package through a class.
                     * @param packageClasses one or more base package classes
                     */
                    // @ts-ignore
                    public static forBasePackageClass(...packageClasses: java.lang.Class<any>[]): org.springframework.web.method.HandlerTypePredicate
                    /**
                     * Match handlers that are assignable to a given type.
                     * @param types one or more handler super types
                     */
                    // @ts-ignore
                    public static forAssignableType(...types: java.lang.Class<any>[]): org.springframework.web.method.HandlerTypePredicate
                    /**
                     * Match handlers annotated with a specific annotation.
                     * @param annotations one or more annotations to check for
                     */
                    // @ts-ignore
                    public static forAnnotation(...annotations: java.lang.Class<any>[]): org.springframework.web.method.HandlerTypePredicate
                    /**
                     * Return a builder for a {@code HandlerTypePredicate}.
                     */
                    // @ts-ignore
                    public static builder(): org.springframework.web.method.HandlerTypePredicate.Builder
                }
            }
        }
    }
}
