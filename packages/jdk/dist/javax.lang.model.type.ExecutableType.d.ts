declare namespace javax {
    namespace lang {
        namespace model {
            namespace type {
                /**
                 * Represents the type of an executable.  An <i>executable</i>
                 * is a method, constructor, or initializer.
                 * <p> The executable is
                 * represented as when viewed as a method (or constructor or
                 * initializer) of some reference type.
                 * If that reference type is parameterized, then its actual
                 * type arguments are substituted into any types returned by the methods of
                 * this interface.
                 * @author Joseph D. Darcy
                 * @author Scott Seligman
                 * @author Peter von der Ah&eacute;
                 * @see ExecutableElement
                 * @since 1.6
                 */
                // @ts-ignore
                interface ExecutableType extends javax.lang.model.type.TypeMirror {
                    /**
                     * Returns the type variables declared by the formal type parameters
                     * of this executable.
                     * @return the type variables declared by the formal type parameters,
                     *           or an empty list if there are none
                     */
                    // @ts-ignore
                    getTypeVariables(): java.util.List<? extends javax.lang.model.type.TypeVariable>
                    /**
                     * Returns the return type of this executable.
                     * Returns a {@link NoType} with kind {@link TypeKind#VOID VOID}
                     * if this executable is not a method, or is a method that does not
                     * return a value.
                     * @return the return type of this executable
                     */
                    // @ts-ignore
                    getReturnType(): javax.lang.model.type.TypeMirror
                    /**
                     * Returns the types of this executable's formal parameters.
                     * @return the types of this executable's formal parameters,
                     *           or an empty list if there are none
                     */
                    // @ts-ignore
                    getParameterTypes(): java.util.List<? extends javax.lang.model.type.TypeMirror>
                    /**
                     * Returns the receiver type of this executable,
                     * or {@link javax.lang.model.type.NoType NoType} with
                     * kind {@link javax.lang.model.type.TypeKind#NONE NONE}
                     * if the executable has no receiver type.
                     * An executable which is an instance method, or a constructor of an
                     * inner class, has a receiver type derived from the {@linkplain
                     * ExecutableElement#getEnclosingElement declaring type}.
                     * An executable which is a static method, or a constructor of a
                     * non-inner class, or an initializer (static or instance), has no
                     * receiver type.
                     * @return the receiver type of this executable
                     * @since 1.8
                     */
                    // @ts-ignore
                    getReceiverType(): javax.lang.model.type.TypeMirror
                    /**
                     * Returns the exceptions and other throwables listed in this
                     * executable's {@code throws} clause.
                     * @return the exceptions and other throwables listed in this
                     *           executable's {#code throws} clause,
                     *           or an empty list if there are none.
                     */
                    // @ts-ignore
                    getThrownTypes(): java.util.List<? extends javax.lang.model.type.TypeMirror>
                }
            }
        }
    }
}
