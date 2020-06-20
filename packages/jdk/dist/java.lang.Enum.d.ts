declare namespace java {
    namespace lang {
        /**
         * This is the common base class of all Java language enumeration types.
         * More information about enums, including descriptions of the
         * implicitly declared methods synthesized by the compiler, can be
         * found in section 8.9 of
         * <cite>The Java&trade; Language Specification</cite>.
         * <p> Note that when using an enumeration type as the type of a set
         * or as the type of the keys in a map, specialized and efficient
         * {@linkplain java.util.EnumSet set} and {@linkplain
         * java.util.EnumMap map} implementations are available.
         * @param <E> The enum type subclass
         * @author Josh Bloch
         * @author Neal Gafter
         * @see Class#getEnumConstants()
         * @see java.util.EnumSet
         * @see java.util.EnumMap
         * @since 1.5
         */
        // @ts-ignore
        class Enum<E extends java.lang.Enum<E>> extends java.lang.Object implements java.lang.Comparable<E>, java.io.Serializable {
            /**
             * Sole constructor.  Programmers cannot invoke this constructor.
             * It is for use by code emitted by the compiler in response to
             * enum type declarations.
             * @param name - The name of this enum constant, which is the identifier
             *                used to declare it.
             * @param ordinal - The ordinal of this enumeration constant (its position
             *          in the enum declaration, where the initial constant is assigned
             *          an ordinal of zero).
             */
            // @ts-ignore
            constructor(name: string, ordinal: number /*int*/)
            /**
             * Returns the name of this enum constant, exactly as declared in its
             * enum declaration.
             * <b>Most programmers should use the {@link #toString} method in
             * preference to this one, as the toString method may return
             * a more user-friendly name.</b>  This method is designed primarily for
             * use in specialized situations where correctness depends on getting the
             * exact name, which will not vary from release to release.
             * @return the name of this enum constant
             */
            // @ts-ignore
            name(): java.lang.String
            /**
             * Returns the ordinal of this enumeration constant (its position
             * in its enum declaration, where the initial constant is assigned
             * an ordinal of zero).
             * Most programmers will have no use for this method.  It is
             * designed for use by sophisticated enum-based data structures, such
             * as {@link java.util.EnumSet} and {@link java.util.EnumMap}.
             * @return the ordinal of this enumeration constant
             */
            // @ts-ignore
            ordinal(): int
            /**
             * Returns the name of this enum constant, as contained in the
             * declaration.  This method may be overridden, though it typically
             * isn't necessary or desirable.  An enum type should override this
             * method when a more "programmer-friendly" string form exists.
             * @return the name of this enum constant
             */
            // @ts-ignore
            toString(): java.lang.String
            /**
             * Returns true if the specified object is equal to this
             * enum constant.
             * @param other the object to be compared for equality with this object.
             * @return true if the specified object is equal to this
             *           enum constant.
             */
            // @ts-ignore
            equals(other: any): boolean
            /**
             * Returns a hash code for this enum constant.
             * @return a hash code for this enum constant.
             */
            // @ts-ignore
            hashCode(): int
            /**
             * Throws CloneNotSupportedException.  This guarantees that enums
             * are never cloned, which is necessary to preserve their "singleton"
             * status.
             * @return (never returns)
             */
            // @ts-ignore
            clone(): java.lang.Object
            /**
             * Compares this enum with the specified object for order.  Returns a
             * negative integer, zero, or a positive integer as this object is less
             * than, equal to, or greater than the specified object.
             * Enum constants are only comparable to other enum constants of the
             * same enum type.  The natural order implemented by this
             * method is the order in which the constants are declared.
             */
            // @ts-ignore
            compareTo(o: E extends java.lang.Enum<E>): int
            /**
             * Returns the Class object corresponding to this enum constant's
             * enum type.  Two enum constants e1 and  e2 are of the
             * same enum type if and only if
             * e1.getDeclaringClass() == e2.getDeclaringClass().
             * (The value returned by this method may differ from the one returned
             * by the {@link Object#getClass} method for enum constants with
             * constant-specific class bodies.)
             * @return the Class object corresponding to this enum constant's
             *      enum type
             */
            // @ts-ignore
            getDeclaringClass(): java.lang.Class<E>
            /**
             * Returns the enum constant of the specified enum type with the
             * specified name.  The name must match exactly an identifier used
             * to declare an enum constant in this type.  (Extraneous whitespace
             * characters are not permitted.)
             * <p>Note that for a particular enum type {@code T}, the
             * implicitly declared {@code public static T valueOf(String)}
             * method on that enum may be used instead of this method to map
             * from a name to the corresponding enum constant.  All the
             * constants of an enum type can be obtained by calling the
             * implicit {@code public static T[] values()} method of that
             * type.
             * @param <T> The enum type whose constant is to be returned
             * @param enumType the {#code Class} object of the enum type from which
             *       to return a constant
             * @param name the name of the constant to return
             * @return the enum constant of the specified enum type with the
             *       specified name
             * @throws IllegalArgumentException if the specified enum type has
             *          no constant with the specified name, or the specified
             *          class object does not represent an enum type
             * @throws NullPointerException if {#code enumType} or {@code name}
             *          is null
             * @since 1.5
             */
            // @ts-ignore
            valueOf<T extends java.lang.Enum<T>>(enumType: java.lang.Class<T>, name: string): T
            /**
             * enum classes cannot have finalize methods.
             */
            // @ts-ignore
            finalize(): void
        }
    }
}
