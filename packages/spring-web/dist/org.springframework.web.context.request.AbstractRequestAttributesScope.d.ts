declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace request {
                    /**
                     * Abstract {@link Scope} implementation that reads from a particular scope
                     * in the current thread-bound {@link RequestAttributes} object.
                     * <p>Subclasses simply need to implement {@link #getScope()} to instruct
                     * this class which {@link RequestAttributes} scope to read attributes from.
                     * <p>Subclasses may wish to override the {@link #get} and {@link #remove}
                     * methods to add synchronization around the call back into this super class.
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @author Rob Harrop
                     * @since 2.0
                     */
                    // @ts-ignore
                    abstract class AbstractRequestAttributesScope extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public get(name: java.lang.String | string, objectFactory: object): any
                        // @ts-ignore
                        public remove(name: java.lang.String | string): any
                        // @ts-ignore
                        public registerDestructionCallback(name: java.lang.String | string, callback: java.lang.Runnable): void
                        // @ts-ignore
                        public resolveContextualObject(key: java.lang.String | string): any
                        /**
                         * Template method that determines the actual target scope.
                         * @return the target scope, in the form of an appropriate
                         *  {#link RequestAttributes} constant
                         * @see RequestAttributes#SCOPE_REQUEST
                         * @see RequestAttributes#SCOPE_SESSION
                         */
                        // @ts-ignore
                        abstract getScope(): number /*int*/
                    }
                }
            }
        }
    }
}
