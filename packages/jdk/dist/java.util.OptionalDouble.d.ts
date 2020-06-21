declare namespace java {
    namespace util {
        /**
         * A container object which may or may not contain a {@code double} value.
         * If a value is present, {@code isPresent()} will return {@code true} and
         * {@code getAsDouble()} will return the value.
         * <p>Additional methods that depend on the presence or absence of a contained
         * value are provided, such as {@link #orElse(double) orElse()}
         * (return a default value if value not present) and
         * {@link #ifPresent(java.util.function.DoubleConsumer) ifPresent()} (execute a block
         * of code if the value is present).
         * <p>This is a <a href="../lang/doc-files/ValueBased.html">value-based</a>
         * class; use of identity-sensitive operations (including reference equality
         * ({@code ==}), identity hash code, or synchronization) on instances of
         * {@code OptionalDouble} may have unpredictable results and should be avoided.
         * @since 1.8
         */
        // @ts-ignore
        class OptionalDouble extends java.lang.Object {
            /**
             * Returns an empty {@code OptionalDouble} instance.  No value is present for this
             * OptionalDouble.
             * @apiNote Though it may be tempting to do so, avoid testing if an object
             *  is empty by comparing with {#code ==} against instances returned by
             *  {@code Option.empty()}. There is no guarantee that it is a singleton.
             *  Instead, use {@link #isPresent()}.
             * @return an empty {#code OptionalDouble}.
             */
            // @ts-ignore
            public static empty(): java.util.OptionalDouble
            /**
             * Return an {@code OptionalDouble} with the specified value present.
             * @param value the value to be present
             * @return an {#code OptionalDouble} with the value present
             */
            // @ts-ignore
            public static of(value: number /*double*/): java.util.OptionalDouble
            /**
             * If a value is present in this {@code OptionalDouble}, returns the value,
             * otherwise throws {@code NoSuchElementException}.
             * @return the value held by this {#code OptionalDouble}
             * @throws NoSuchElementException if there is no value present
             * @see OptionalDouble#isPresent()
             */
            // @ts-ignore
            public getAsDouble(): number /*double*/
            /**
             * Return {@code true} if there is a value present, otherwise {@code false}.
             * @return {#code true} if there is a value present, otherwise {@code false}
             */
            // @ts-ignore
            public isPresent(): boolean
            /**
             * Have the specified consumer accept the value if a value is present,
             * otherwise do nothing.
             * @param consumer block to be executed if a value is present
             * @throws NullPointerException if value is present and {#code consumer} is
             *  null
             */
            // @ts-ignore
            public ifPresent(consumer: java.util.function$.DoubleConsumer): void
            /**
             * Return the value if present, otherwise return {@code other}.
             * @param other the value to be returned if there is no value present
             * @return the value, if present, otherwise {#code other}
             */
            // @ts-ignore
            public orElse(other: number /*double*/): number /*double*/
            /**
             * Return the value if present, otherwise invoke {@code other} and return
             * the result of that invocation.
             * @param other a {#code DoubleSupplier} whose result is returned if no value
             *  is present
             * @return the value if present otherwise the result of {#code other.getAsDouble()}
             * @throws NullPointerException if value is not present and {#code other} is
             *  null
             */
            // @ts-ignore
            public orElseGet(other: java.util.function$.DoubleSupplier): number /*double*/
            /**
             * Return the contained value, if present, otherwise throw an exception
             * to be created by the provided supplier.
             * @apiNote A method reference to the exception constructor with an empty
             *  argument list can be used as the supplier. For example,
             *  {#code IllegalStateException::new}
             * @param <X> Type of the exception to be thrown
             * @param exceptionSupplier The supplier which will return the exception to
             *  be thrown
             * @return the present value
             * @throws X if there is no value present
             * @throws NullPointerException if no value is present and
             *  {#code exceptionSupplier} is null
             */
            // @ts-ignore
            public orElseThrow<X extends java.lang.Throwable>(exceptionSupplier: java.util.function$.Supplier<X>): number /*double*/
            /**
             * Indicates whether some other object is "equal to" this OptionalDouble. The
             * other object is considered equal if:
             * <ul>
             * <li>it is also an {@code OptionalDouble} and;
             * <li>both instances have no value present or;
             * <li>the present values are "equal to" each other via {@code Double.compare() == 0}.
             * </ul>
             * @param obj an object to be tested for equality
             * @return {code true} if the other object is "equal to" this object
             *  otherwise {#code false}
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Returns the hash code value of the present value, if any, or 0 (zero) if
             * no value is present.
             * @return hash code value of the present value or 0 if no value is present
             */
            // @ts-ignore
            public hashCode(): number /*int*/
            /**
             * {@inheritDoc}
             * Returns a non-empty string representation of this object suitable for
             * debugging. The exact presentation format is unspecified and may vary
             * between implementations and versions.
             * @implSpec If a value is present the result must include its string
             *  representation in the result. Empty and present instances must be
             *  unambiguously differentiable.
             * @return the string representation of this instance
             */
            // @ts-ignore
            public toString(): string
        }
    }
}
