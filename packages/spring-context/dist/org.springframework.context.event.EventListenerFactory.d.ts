declare namespace org {
    namespace springframework {
        namespace context {
            namespace event {
                /**
                 * Strategy interface for creating {@link ApplicationListener} for methods
                 * annotated with {@link EventListener}.
                 * @author Stephane Nicoll
                 * @since 4.2
                 */
                // @ts-ignore
                interface EventListenerFactory {
                    /**
                     * Specify if this factory supports the specified {@link Method}.
                     * @param method an {#link EventListener} annotated method
                     * @return {#code true} if this factory supports the specified method
                     */
                    // @ts-ignore
                    supportsMethod(method: java.lang.reflect.Method): boolean
                    /**
                     * Create an {@link ApplicationListener} for the specified method.
                     * @param beanName the name of the bean
                     * @param type the target type of the instance
                     * @param method the {#link EventListener} annotated method
                     * @return an application listener, suitable to invoke the specified method
                     */
                    // @ts-ignore
                    createApplicationListener(beanName: java.lang.String | string, type: java.lang.Class<any>, method: java.lang.reflect.Method): org.springframework.context.ApplicationListener<any>
                }
            }
        }
    }
}
