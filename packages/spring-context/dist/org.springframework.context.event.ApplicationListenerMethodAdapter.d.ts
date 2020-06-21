declare namespace org {
    namespace springframework {
        namespace context {
            namespace event {
                /**
                 * {@link GenericApplicationListener} adapter that delegates the processing of
                 * an event to an {@link EventListener} annotated method.
                 * <p>Delegates to {@link #processEvent(ApplicationEvent)} to give subclasses
                 * a chance to deviate from the default. Unwraps the content of a
                 * {@link PayloadApplicationEvent} if necessary to allow a method declaration
                 * to define any arbitrary event type. If a condition is defined, it is
                 * evaluated prior to invoking the underlying method.
                 * @author Stephane Nicoll
                 * @author Juergen Hoeller
                 * @author Sam Brannen
                 * @since 4.2
                 */
                // @ts-ignore
                class ApplicationListenerMethodAdapter extends java.lang.Object implements org.springframework.context.event.GenericApplicationListener {
                    // @ts-ignore
                    constructor(beanName: java.lang.String | string, targetClass: java.lang.Class<any>, method: java.lang.reflect.Method)
                    // @ts-ignore
                    readonly logger: Log
                    // @ts-ignore
                    public onApplicationEvent(event: org.springframework.context.ApplicationEvent): void
                    // @ts-ignore
                    public supportsEventType(eventType: ResolvableType): boolean
                    // @ts-ignore
                    public supportsSourceType(sourceType: java.lang.Class<any>): boolean
                    // @ts-ignore
                    public getOrder(): number /*int*/
                    /**
                     * Process the specified {@link ApplicationEvent}, checking if the condition
                     * matches and handling a non-null result, if any.
                     */
                    // @ts-ignore
                    public processEvent(event: org.springframework.context.ApplicationEvent): void
                    /**
                     * Resolve the method arguments to use for the specified {@link ApplicationEvent}.
                     * <p>These arguments will be used to invoke the method handled by this instance.
                     * Can return {@code null} to indicate that no suitable arguments could be resolved
                     * and therefore the method should not be invoked at all for the specified event.
                     */
                    // @ts-ignore
                    resolveArguments(event: org.springframework.context.ApplicationEvent): any[]
                    // @ts-ignore
                    handleResult(result: java.lang.Object | any): void
                    // @ts-ignore
                    handleAsyncError(t: java.lang.Throwable | Error): void
                    /**
                     * Invoke the event listener method with the given argument values.
                     */
                    // @ts-ignore
                    doInvoke(...args: java.lang.Object[] | any[]): any
                    /**
                     * Return the target bean instance to use.
                     */
                    // @ts-ignore
                    getTargetBean(): any
                    /**
                     * Return the condition to use.
                     * <p>Matches the {@code condition} attribute of the {@link EventListener}
                     * annotation or any matching attribute on a composed annotation that
                     * is meta-annotated with {@code @EventListener}.
                     */
                    // @ts-ignore
                    getCondition(): string
                    /**
                     * Add additional details such as the bean type and method signature to
                     * the given error message.
                     * @param message error message to append the HandlerMethod details to
                     */
                    // @ts-ignore
                    getDetailedErrorMessage(bean: java.lang.Object | any, message: java.lang.String | string): string
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
