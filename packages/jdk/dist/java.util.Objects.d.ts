declare namespace java {
    namespace util {
        /**
         * This class consists of {@code static} utility methods for operating
         * on objects.  These utilities include {@code null}-safe or {@code
         * null}-tolerant methods for computing the hash code of an object,
         * returning a string for an object, and comparing two objects.
         * @since 1.7
         */
        // @ts-ignore
        class Objects extends java.lang.Object {
            /**
             * Returns {@code true} if the arguments are equal to each other
             * and {@code false} otherwise.
             * Consequently, if both arguments are {@code null}, {@code true}
             * is returned and if exactly one argument is {@code null}, {@code
             * false} is returned.  Otherwise, equality is determined by using
             * the {@link Object#equals equals} method of the first
             * argument.
             * @param a an object
             * @param b an object to be compared with {#code a} for equality
             * @return {#code true} if the arguments are equal to each other
             *  and {@code false} otherwise
             * @see Object#equals(Object)
             */
            // @ts-ignore
            equals(a: any, b: any): boolean
            /**
             * Returns {@code true} if the arguments are deeply equal to each other
             * and {@code false} otherwise.
             * Two {@code null} values are deeply equal.  If both arguments are
             * arrays, the algorithm in {@link Arrays#deepEquals(Object[],
             * Object[]) Arrays.deepEquals} is used to determine equality.
             * Otherwise, equality is determined by using the {@link
             * Object#equals equals} method of the first argument.
             * @param a an object
             * @param b an object to be compared with {#code a} for deep equality
             * @return {#code true} if the arguments are deeply equal to each other
             *  and {@code false} otherwise
             * @see Arrays#deepEquals(Object[], Object[])
             * @see Objects#equals(Object, Object)
             */
            // @ts-ignore
            deepEquals(a: any, b: any): boolean
            /**
             * Returns the hash code of a non-{@code null} argument and 0 for
             * a {@code null} argument.
             * @param o an object
             * @return the hash code of a non-{#code null} argument and 0 for
             *  a {@code null} argument
             * @see Object#hashCode
             */
            // @ts-ignore
            hashCode(o: any): int
            /**
             * Generates a hash code for a sequence of input values. The hash
             * code is generated as if all the input values were placed into an
             * array, and that array were hashed by calling {@link
             * Arrays#hashCode(Object[])}.
             * <p>This method is useful for implementing {@link
             * Object#hashCode()} on objects containing multiple fields. For
             * example, if an object that has three fields, {@code x}, {@code
             * y}, and {@code z}, one could write:
             * <blockquote><pre>
             * &#064;Override public int hashCode() {
             * return Objects.hash(x, y, z);
             * }
             * </pre></blockquote>
             * <b>Warning: When a single object reference is supplied, the returned
             * value does not equal the hash code of that object reference.</b> This
             * value can be computed by calling {@link #hashCode(Object)}.
             * @param values the values to be hashed
             * @return a hash value of the sequence of input values
             * @see Arrays#hashCode(Object[])
             * @see List#hashCode
             */
            // @ts-ignore
            hash(...values: any[]): int
            /**
             * Returns the result of calling {@code toString} for a non-{@code
             * null} argument and {@code "null"} for a {@code null} argument.
             * @param o an object
             * @return the result of calling {#code toString} for a non-{@code
             *  null} argument and {@code "null"} for a {@code null} argument
             * @see Object#toString
             * @see String#valueOf(Object)
             */
            // @ts-ignore
            toString(o: any): java.lang.String
            /**
             * Returns the result of calling {@code toString} on the first
             * argument if the first argument is not {@code null} and returns
             * the second argument otherwise.
             * @param o an object
             * @param nullDefault string to return if the first argument is
             *         {#code null}
             * @return the result of calling {#code toString} on the first
             *  argument if it is not {@code null} and the second argument
             *  otherwise.
             * @see Objects#toString(Object)
             */
            // @ts-ignore
            toString(o: any, nullDefault: string): java.lang.String
            /**
             * Returns 0 if the arguments are identical and {@code
             * c.compare(a, b)} otherwise.
             * Consequently, if both arguments are {@code null} 0
             * is returned.
             * <p>Note that if one of the arguments is {@code null}, a {@code
             * NullPointerException} may or may not be thrown depending on
             * what ordering policy, if any, the {@link Comparator Comparator}
             * chooses to have for {@code null} values.
             * @param <T> the type of the objects being compared
             * @param a an object
             * @param b an object to be compared with {#code a}
             * @param c the {#code Comparator} to compare the first two arguments
             * @return 0 if the arguments are identical and {#code
             *  c.compare(a, b)} otherwise.
             * @see Comparable
             * @see Comparator
             */
            // @ts-ignore
            compare<T>(a: T, b: T, c: java.util.Comparator<any super T>): int
            /**
             * Checks that the specified object reference is not {@code null}. This
             * method is designed primarily for doing parameter validation in methods
             * and constructors, as demonstrated below:
             * <blockquote><pre>
             * public Foo(Bar bar) {
             * this.bar = Objects.requireNonNull(bar);
             * }
             * </pre></blockquote>
             * @param obj the object reference to check for nullity
             * @param <T> the type of the reference
             * @return {#code obj} if not {@code null}
             * @throws NullPointerException if {#code obj} is {@code null}
             */
            // @ts-ignore
            requireNonNull<T>(obj: T): T
            /**
             * Checks that the specified object reference is not {@code null} and
             * throws a customized {@link NullPointerException} if it is. This method
             * is designed primarily for doing parameter validation in methods and
             * constructors with multiple parameters, as demonstrated below:
             * <blockquote><pre>
             * public Foo(Bar bar, Baz baz) {
             * this.bar = Objects.requireNonNull(bar, "bar must not be null");
             * this.baz = Objects.requireNonNull(baz, "baz must not be null");
             * }
             * </pre></blockquote>
             * @param obj     the object reference to check for nullity
             * @param message detail message to be used in the event that a {#code
             *                 NullPointerException} is thrown
             * @param <T> the type of the reference
             * @return {#code obj} if not {@code null}
             * @throws NullPointerException if {#code obj} is {@code null}
             */
            // @ts-ignore
            requireNonNull<T>(obj: T, message: string): T
            /**
             * Returns {@code true} if the provided reference is {@code null} otherwise
             * returns {@code false}.
             * @apiNote This method exists to be used as a
             *  {#link java.util.function.Predicate}, {@code filter(Objects::isNull)}
             * @param obj a reference to be checked against {#code null}
             * @return {#code true} if the provided reference is {@code null} otherwise
             *  {@code false}
             * @see java.util.function.Predicate
             * @since 1.8
             */
            // @ts-ignore
            isNull(obj: any): boolean
            /**
             * Returns {@code true} if the provided reference is non-{@code null}
             * otherwise returns {@code false}.
             * @apiNote This method exists to be used as a
             *  {#link java.util.function.Predicate}, {@code filter(Objects::nonNull)}
             * @param obj a reference to be checked against {#code null}
             * @return {#code true} if the provided reference is non-{@code null}
             *  otherwise {@code false}
             * @see java.util.function.Predicate
             * @since 1.8
             */
            // @ts-ignore
            nonNull(obj: any): boolean
            /**
             * Checks that the specified object reference is not {@code null} and
             * throws a customized {@link NullPointerException} if it is.
             * <p>Unlike the method {@link #requireNonNull(Object, String)},
             * this method allows creation of the message to be deferred until
             * after the null check is made. While this may confer a
             * performance advantage in the non-null case, when deciding to
             * call this method care should be taken that the costs of
             * creating the message supplier are less than the cost of just
             * creating the string message directly.
             * @param obj     the object reference to check for nullity
             * @param messageSupplier supplier of the detail message to be
             *  used in the event that a {#code NullPointerException} is thrown
             * @param <T> the type of the reference
             * @return {#code obj} if not {@code null}
             * @throws NullPointerException if {#code obj} is {@code null}
             * @since 1.8
             */
            // @ts-ignore
            requireNonNull<T>(obj: T, messageSupplier: java.util.function.Supplier<java.lang.String> | java.util.function$.Supplier<java.lang.String>): T
        }
    }
}
