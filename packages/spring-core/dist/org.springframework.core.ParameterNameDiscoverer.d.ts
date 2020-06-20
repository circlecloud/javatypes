declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * Interface to discover parameter names for methods and constructors.
             * <p>Parameter name discovery is not always possible, but various strategies are
             * available to try, such as looking for debug information that may have been
             * emitted at compile time, and looking for argname annotation values optionally
             * accompanying AspectJ annotated methods.
             * @author Rod Johnson
             * @author Adrian Colyer
             * @since 2.0
             */
            // @ts-ignore
            interface ParameterNameDiscoverer {
                /**
                 * Return parameter names for a method, or {@code null} if they cannot be determined.
                 * <p>Individual entries in the array may be {@code null} if parameter names are only
                 * available for some parameters of the given method but not for others. However,
                 * it is recommended to use stub parameter names instead wherever feasible.
                 * @param method the method to find parameter names for
                 * @return an array of parameter names if the names can be resolved,
                 *  or {#code null} if they cannot
                 */
                // @ts-ignore
                getParameterNames(method: java.lang.reflect.Method): java.lang.String[]
                /**
                 * Return parameter names for a constructor, or {@code null} if they cannot be determined.
                 * <p>Individual entries in the array may be {@code null} if parameter names are only
                 * available for some parameters of the given constructor but not for others. However,
                 * it is recommended to use stub parameter names instead wherever feasible.
                 * @param ctor the constructor to find parameter names for
                 * @return an array of parameter names if the names can be resolved,
                 *  or {#code null} if they cannot
                 */
                // @ts-ignore
                getParameterNames(ctor: java.lang.reflect.Constructor<any>): java.lang.String[]
            }
        }
    }
}
