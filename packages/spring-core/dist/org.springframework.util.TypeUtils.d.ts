declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Utility to work with Java 5 generic type parameters.
             * Mainly for internal use within the framework.
             * @author Ramnivas Laddad
             * @author Juergen Hoeller
             * @author Chris Beams
             * @since 2.0.7
             */
            // @ts-ignore
            abstract class TypeUtils extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Check if the right-hand side type may be assigned to the left-hand side
                 * type following the Java generics rules.
                 * @param lhsType the target type
                 * @param rhsType the value type that should be assigned to the target type
                 * @return true if rhs is assignable to lhs
                 */
                // @ts-ignore
                public static isAssignable(lhsType: java.lang.reflect.Type, rhsType: java.lang.reflect.Type): boolean
                // @ts-ignore
                public static isAssignableBound(lhsType: java.lang.reflect.Type, rhsType: java.lang.reflect.Type): boolean
            }
        }
    }
}
