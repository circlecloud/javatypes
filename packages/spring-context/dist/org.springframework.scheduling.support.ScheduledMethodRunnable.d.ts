declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace support {
                /**
                 * Variant of {@link MethodInvokingRunnable} meant to be used for processing
                 * of no-arg scheduled methods. Propagates user exceptions to the caller,
                 * assuming that an error strategy for Runnables is in place.
                 * @author Juergen Hoeller
                 * @since 3.0.6
                 * @see org.springframework.scheduling.annotation.ScheduledAnnotationBeanPostProcessor
                 */
                // @ts-ignore
                class ScheduledMethodRunnable extends java.lang.Object implements java.lang.Runnable {
                    /**
                     * Create a {@code ScheduledMethodRunnable} for the given target instance,
                     * calling the specified method.
                     * @param target the target instance to call the method on
                     * @param method the target method to call
                     */
                    // @ts-ignore
                    constructor(target: any, method: java.lang.reflect.Method)
                    /**
                     * Create a {@code ScheduledMethodRunnable} for the given target instance,
                     * calling the specified method by name.
                     * @param target the target instance to call the method on
                     * @param methodName the name of the target method
                     * @throws NoSuchMethodException if the specified method does not exist
                     */
                    // @ts-ignore
                    constructor(target: any, methodName: string)
                    /**
                     * Return the target instance to call the method on.
                     */
                    // @ts-ignore
                    getTarget(): java.lang.Object
                    /**
                     * Return the target method to call.
                     */
                    // @ts-ignore
                    getMethod(): java.lang.reflect.Method
                    // @ts-ignore
                    run(): void
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
