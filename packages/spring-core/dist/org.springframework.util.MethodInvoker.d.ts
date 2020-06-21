declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Helper class that allows for specifying a method to invoke in a declarative
             * fashion, be it static or non-static.
             * <p>Usage: Specify "targetClass"/"targetMethod" or "targetObject"/"targetMethod",
             * optionally specify arguments, prepare the invoker. Afterwards, you may
             * invoke the method any number of times, obtaining the invocation result.
             * @author Colin Sampaleanu
             * @author Juergen Hoeller
             * @since 19.02.2004
             * @see #prepare
             * @see #invoke
             */
            // @ts-ignore
            class MethodInvoker extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                targetClass: java.lang.Class<any>
                /**
                 * Set the target class on which to call the target method.
                 * Only necessary when the target method is static; else,
                 * a target object needs to be specified anyway.
                 * @see #setTargetObject
                 * @see #setTargetMethod
                 */
                // @ts-ignore
                public setTargetClass(targetClass: java.lang.Class<any>): void
                /**
                 * Return the target class on which to call the target method.
                 */
                // @ts-ignore
                public getTargetClass(): java.lang.Class<any>
                /**
                 * Set the target object on which to call the target method.
                 * Only necessary when the target method is not static;
                 * else, a target class is sufficient.
                 * @see #setTargetClass
                 * @see #setTargetMethod
                 */
                // @ts-ignore
                public setTargetObject(targetObject: java.lang.Object | any): void
                /**
                 * Return the target object on which to call the target method.
                 */
                // @ts-ignore
                public getTargetObject(): any
                /**
                 * Set the name of the method to be invoked.
                 * Refers to either a static method or a non-static method,
                 * depending on a target object being set.
                 * @see #setTargetClass
                 * @see #setTargetObject
                 */
                // @ts-ignore
                public setTargetMethod(targetMethod: java.lang.String | string): void
                /**
                 * Return the name of the method to be invoked.
                 */
                // @ts-ignore
                public getTargetMethod(): string
                /**
                 * Set a fully qualified static method name to invoke,
                 * e.g. "example.MyExampleClass.myExampleMethod".
                 * Convenient alternative to specifying targetClass and targetMethod.
                 * @see #setTargetClass
                 * @see #setTargetMethod
                 */
                // @ts-ignore
                public setStaticMethod(staticMethod: java.lang.String | string): void
                /**
                 * Set arguments for the method invocation. If this property is not set,
                 * or the Object array is of length 0, a method with no arguments is assumed.
                 */
                // @ts-ignore
                public setArguments(...arguments: java.lang.Object[] | any[]): void
                /**
                 * Return the arguments for the method invocation.
                 */
                // @ts-ignore
                public getArguments(): any[]
                /**
                 * Prepare the specified method.
                 * The method can be invoked any number of times afterwards.
                 * @see #getPreparedMethod
                 * @see #invoke
                 */
                // @ts-ignore
                public prepare(): void
                /**
                 * Resolve the given class name into a Class.
                 * <p>The default implementations uses {@code ClassUtils.forName},
                 * using the thread context class loader.
                 * @param className the class name to resolve
                 * @return the resolved Class
                 * @throws ClassNotFoundException if the class name was invalid
                 */
                // @ts-ignore
                resolveClassName(className: java.lang.String | string): java.lang.Class<any>
                /**
                 * Find a matching method with the specified name for the specified arguments.
                 * @return a matching method, or {#code null} if none
                 * @see #getTargetClass()
                 * @see #getTargetMethod()
                 * @see #getArguments()
                 */
                // @ts-ignore
                findMatchingMethod(): java.lang.reflect.Method
                /**
                 * Return the prepared Method object that will be invoked.
                 * <p>Can for example be used to determine the return type.
                 * @return the prepared Method object (never {#code null})
                 * @throws IllegalStateException if the invoker hasn't been prepared yet
                 * @see #prepare
                 * @see #invoke
                 */
                // @ts-ignore
                public getPreparedMethod(): java.lang.reflect.Method
                /**
                 * Return whether this invoker has been prepared already,
                 * i.e. whether it allows access to {@link #getPreparedMethod()} already.
                 */
                // @ts-ignore
                public isPrepared(): boolean
                /**
                 * Invoke the specified method.
                 * <p>The invoker needs to have been prepared before.
                 * @return the object (possibly null) returned by the method invocation,
                 *  or {#code null} if the method has a void return type
                 * @throws InvocationTargetException if the target method threw an exception
                 * @throws IllegalAccessException if the target method couldn't be accessed
                 * @see #prepare
                 */
                // @ts-ignore
                public invoke(): any
                /**
                 * Algorithm that judges the match between the declared parameter types of a candidate method
                 * and a specific list of arguments that this method is supposed to be invoked with.
                 * <p>Determines a weight that represents the class hierarchy difference between types and
                 * arguments. A direct match, i.e. type Integer -> arg of class Integer, does not increase
                 * the result - all direct matches means weight 0. A match between type Object and arg of
                 * class Integer would increase the weight by 2, due to the superclass 2 steps up in the
                 * hierarchy (i.e. Object) being the last one that still matches the required type Object.
                 * Type Number and class Integer would increase the weight by 1 accordingly, due to the
                 * superclass 1 step up the hierarchy (i.e. Number) still matching the required type Number.
                 * Therefore, with an arg of type Integer, a constructor (Integer) would be preferred to a
                 * constructor (Number) which would in turn be preferred to a constructor (Object).
                 * All argument weights get accumulated.
                 * <p>Note: This is the algorithm used by MethodInvoker itself and also the algorithm
                 * used for constructor and factory method selection in Spring's bean container (in case
                 * of lenient constructor resolution which is the default for regular bean definitions).
                 * @param paramTypes the parameter types to match
                 * @param args the arguments to match
                 * @return the accumulated weight for all arguments
                 */
                // @ts-ignore
                public static getTypeDifferenceWeight(paramTypes: java.lang.Class<any>[], args: java.lang.Object[] | any[]): number /*int*/
            }
        }
    }
}
