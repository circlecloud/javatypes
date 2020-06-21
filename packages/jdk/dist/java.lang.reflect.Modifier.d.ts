declare namespace java {
    namespace lang {
        namespace reflect {
            /**
             * The Modifier class provides {@code static} methods and
             * constants to decode class and member access modifiers.  The sets of
             * modifiers are represented as integers with distinct bit positions
             * representing different modifiers.  The values for the constants
             * representing the modifiers are taken from the tables in sections 4.1, 4.4, 4.5, and 4.7 of
             * <cite>The Java&trade; Virtual Machine Specification</cite>.
             * @see Class#getModifiers()
             * @see Member#getModifiers()
             * @author Nakul Saraiya
             * @author Kenneth Russell
             */
            // @ts-ignore
            class Modifier extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * The {@code int} value representing the {@code public}
                 * modifier.
                 */
                // @ts-ignore
                public static readonly PUBLIC: number /*int*/
                /**
                 * The {@code int} value representing the {@code private}
                 * modifier.
                 */
                // @ts-ignore
                public static readonly PRIVATE: number /*int*/
                /**
                 * The {@code int} value representing the {@code protected}
                 * modifier.
                 */
                // @ts-ignore
                public static readonly PROTECTED: number /*int*/
                /**
                 * The {@code int} value representing the {@code static}
                 * modifier.
                 */
                // @ts-ignore
                public static readonly STATIC: number /*int*/
                /**
                 * The {@code int} value representing the {@code final}
                 * modifier.
                 */
                // @ts-ignore
                public static readonly FINAL: number /*int*/
                /**
                 * The {@code int} value representing the {@code synchronized}
                 * modifier.
                 */
                // @ts-ignore
                public static readonly SYNCHRONIZED: number /*int*/
                /**
                 * The {@code int} value representing the {@code volatile}
                 * modifier.
                 */
                // @ts-ignore
                public static readonly VOLATILE: number /*int*/
                /**
                 * The {@code int} value representing the {@code transient}
                 * modifier.
                 */
                // @ts-ignore
                public static readonly TRANSIENT: number /*int*/
                /**
                 * The {@code int} value representing the {@code native}
                 * modifier.
                 */
                // @ts-ignore
                public static readonly NATIVE: number /*int*/
                /**
                 * The {@code int} value representing the {@code interface}
                 * modifier.
                 */
                // @ts-ignore
                public static readonly INTERFACE: number /*int*/
                /**
                 * The {@code int} value representing the {@code abstract}
                 * modifier.
                 */
                // @ts-ignore
                public static readonly ABSTRACT: number /*int*/
                /**
                 * The {@code int} value representing the {@code strictfp}
                 * modifier.
                 */
                // @ts-ignore
                public static readonly STRICT: number /*int*/
                /**
                 * Return {@code true} if the integer argument includes the
                 * {@code public} modifier, {@code false} otherwise.
                 * @param mod a set of modifiers
                 * @return {#code true} if {@code mod} includes the
                 *  {@code public} modifier; {@code false} otherwise.
                 */
                // @ts-ignore
                public static isPublic(mod: number /*int*/): boolean
                /**
                 * Return {@code true} if the integer argument includes the
                 * {@code private} modifier, {@code false} otherwise.
                 * @param mod a set of modifiers
                 * @return {#code true} if {@code mod} includes the
                 *  {@code private} modifier; {@code false} otherwise.
                 */
                // @ts-ignore
                public static isPrivate(mod: number /*int*/): boolean
                /**
                 * Return {@code true} if the integer argument includes the
                 * {@code protected} modifier, {@code false} otherwise.
                 * @param mod a set of modifiers
                 * @return {#code true} if {@code mod} includes the
                 *  {@code protected} modifier; {@code false} otherwise.
                 */
                // @ts-ignore
                public static isProtected(mod: number /*int*/): boolean
                /**
                 * Return {@code true} if the integer argument includes the
                 * {@code static} modifier, {@code false} otherwise.
                 * @param mod a set of modifiers
                 * @return {#code true} if {@code mod} includes the
                 *  {@code static} modifier; {@code false} otherwise.
                 */
                // @ts-ignore
                public static isStatic(mod: number /*int*/): boolean
                /**
                 * Return {@code true} if the integer argument includes the
                 * {@code final} modifier, {@code false} otherwise.
                 * @param mod a set of modifiers
                 * @return {#code true} if {@code mod} includes the
                 *  {@code final} modifier; {@code false} otherwise.
                 */
                // @ts-ignore
                public static isFinal(mod: number /*int*/): boolean
                /**
                 * Return {@code true} if the integer argument includes the
                 * {@code synchronized} modifier, {@code false} otherwise.
                 * @param mod a set of modifiers
                 * @return {#code true} if {@code mod} includes the
                 *  {@code synchronized} modifier; {@code false} otherwise.
                 */
                // @ts-ignore
                public static isSynchronized(mod: number /*int*/): boolean
                /**
                 * Return {@code true} if the integer argument includes the
                 * {@code volatile} modifier, {@code false} otherwise.
                 * @param mod a set of modifiers
                 * @return {#code true} if {@code mod} includes the
                 *  {@code volatile} modifier; {@code false} otherwise.
                 */
                // @ts-ignore
                public static isVolatile(mod: number /*int*/): boolean
                /**
                 * Return {@code true} if the integer argument includes the
                 * {@code transient} modifier, {@code false} otherwise.
                 * @param mod a set of modifiers
                 * @return {#code true} if {@code mod} includes the
                 *  {@code transient} modifier; {@code false} otherwise.
                 */
                // @ts-ignore
                public static isTransient(mod: number /*int*/): boolean
                /**
                 * Return {@code true} if the integer argument includes the
                 * {@code native} modifier, {@code false} otherwise.
                 * @param mod a set of modifiers
                 * @return {#code true} if {@code mod} includes the
                 *  {@code native} modifier; {@code false} otherwise.
                 */
                // @ts-ignore
                public static isNative(mod: number /*int*/): boolean
                /**
                 * Return {@code true} if the integer argument includes the
                 * {@code interface} modifier, {@code false} otherwise.
                 * @param mod a set of modifiers
                 * @return {#code true} if {@code mod} includes the
                 *  {@code interface} modifier; {@code false} otherwise.
                 */
                // @ts-ignore
                public static isInterface(mod: number /*int*/): boolean
                /**
                 * Return {@code true} if the integer argument includes the
                 * {@code abstract} modifier, {@code false} otherwise.
                 * @param mod a set of modifiers
                 * @return {#code true} if {@code mod} includes the
                 *  {@code abstract} modifier; {@code false} otherwise.
                 */
                // @ts-ignore
                public static isAbstract(mod: number /*int*/): boolean
                /**
                 * Return {@code true} if the integer argument includes the
                 * {@code strictfp} modifier, {@code false} otherwise.
                 * @param mod a set of modifiers
                 * @return {#code true} if {@code mod} includes the
                 *  {@code strictfp} modifier; {@code false} otherwise.
                 */
                // @ts-ignore
                public static isStrict(mod: number /*int*/): boolean
                /**
                 * Return a string describing the access modifier flags in
                 * the specified modifier. For example:
                 * <blockquote><pre>
                 * public final synchronized strictfp
                 * </pre></blockquote>
                 * The modifier names are returned in an order consistent with the
                 * suggested modifier orderings given in sections 8.1.1, 8.3.1, 8.4.3, 8.8.3, and 9.1.1 of
                 * <cite>The Java&trade; Language Specification</cite>.
                 * The full modifier ordering used by this method is:
                 * <blockquote> {@code
                 * public protected private abstract static final transient
                 * volatile synchronized native strictfp
                 * interface } </blockquote>
                 * The {@code interface} modifier discussed in this class is
                 * not a true modifier in the Java language and it appears after
                 * all other modifiers listed by this method.  This method may
                 * return a string of modifiers that are not valid modifiers of a
                 * Java entity; in other words, no checking is done on the
                 * possible validity of the combination of modifiers represented
                 * by the input.
                 * Note that to perform such checking for a known kind of entity,
                 * such as a constructor or method, first AND the argument of
                 * {@code toString} with the appropriate mask from a method like
                 * {@link #constructorModifiers} or {@link #methodModifiers}.
                 * @param mod a set of modifiers
                 * @return a string representation of the set of modifiers
                 *  represented by {#code mod}
                 */
                // @ts-ignore
                public static toString(mod: number /*int*/): string
                /**
                 * Return an {@code int} value OR-ing together the source language
                 * modifiers that can be applied to a class.
                 * @return an {#code int} value OR-ing together the source language
                 *  modifiers that can be applied to a class.
                 * @jls 8.1.1 Class Modifiers
                 * @since 1.7
                 */
                // @ts-ignore
                public static classModifiers(): number /*int*/
                /**
                 * Return an {@code int} value OR-ing together the source language
                 * modifiers that can be applied to an interface.
                 * @return an {#code int} value OR-ing together the source language
                 *  modifiers that can be applied to an interface.
                 * @jls 9.1.1 Interface Modifiers
                 * @since 1.7
                 */
                // @ts-ignore
                public static interfaceModifiers(): number /*int*/
                /**
                 * Return an {@code int} value OR-ing together the source language
                 * modifiers that can be applied to a constructor.
                 * @return an {#code int} value OR-ing together the source language
                 *  modifiers that can be applied to a constructor.
                 * @jls 8.8.3 Constructor Modifiers
                 * @since 1.7
                 */
                // @ts-ignore
                public static constructorModifiers(): number /*int*/
                /**
                 * Return an {@code int} value OR-ing together the source language
                 * modifiers that can be applied to a method.
                 * @return an {#code int} value OR-ing together the source language
                 *  modifiers that can be applied to a method.
                 * @jls 8.4.3 Method Modifiers
                 * @since 1.7
                 */
                // @ts-ignore
                public static methodModifiers(): number /*int*/
                /**
                 * Return an {@code int} value OR-ing together the source language
                 * modifiers that can be applied to a field.
                 * @return an {#code int} value OR-ing together the source language
                 *  modifiers that can be applied to a field.
                 * @jls 8.3.1 Field Modifiers
                 * @since 1.7
                 */
                // @ts-ignore
                public static fieldModifiers(): number /*int*/
                /**
                 * Return an {@code int} value OR-ing together the source language
                 * modifiers that can be applied to a parameter.
                 * @return an {#code int} value OR-ing together the source language
                 *  modifiers that can be applied to a parameter.
                 * @jls 8.4.1 Formal Parameters
                 * @since 1.8
                 */
                // @ts-ignore
                public static parameterModifiers(): number /*int*/
            }
        }
    }
}
