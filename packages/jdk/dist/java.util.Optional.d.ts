declare namespace java {
    namespace util {
        /**
         * A container object which may or may not contain a non-null value.
         * If a value is present, {@code isPresent()} will return {@code true} and
         * {@code get()} will return the value.
         * <p>Additional methods that depend on the presence or absence of a contained
         * value are provided, such as {@link #orElse(java.lang.Object) orElse()}
         * (return a default value if value not present) and
         * {@link #ifPresent(java.util.function.Consumer) ifPresent()} (execute a block
         * of code if the value is present).
         * <p>This is a <a href="../lang/doc-files/ValueBased.html">value-based</a>
         * class; use of identity-sensitive operations (including reference equality
         * ({@code ==}), identity hash code, or synchronization) on instances of
         * {@code Optional} may have unpredictable results and should be avoided.
         * @since 1.8
         */
        // @ts-ignore
        class Optional<T> extends java.lang.Object {
            /**
             * Returns an empty {@code Optional} instance.  No value is present for this
             * Optional.
             * @apiNote Though it may be tempting to do so, avoid testing if an object
             *  is empty by comparing with {#code ==} against instances returned by
             *  {@code Option.empty()}. There is no guarantee that it is a singleton.
             *  Instead, use {@link #isPresent()}.
             * @param <T> Type of the non-existent value
             * @return an empty {#code Optional}
             */
            // @ts-ignore
            empty<T>(): java.util.Optional<T>
            /**
             * Returns an {@code Optional} with the specified present non-null value.
             * @param <T> the class of the value
             * @param value the value to be present, which must be non-null
             * @return an {#code Optional} with the value present
             * @throws NullPointerException if value is null
             */
            // @ts-ignore
            of<T>(value: T): java.util.Optional<T>
            /**
             * Returns an {@code Optional} describing the specified value, if non-null,
             * otherwise returns an empty {@code Optional}.
             * @param <T> the class of the value
             * @param value the possibly-null value to describe
             * @return an {#code Optional} with a present value if the specified value
             *  is non-null, otherwise an empty {@code Optional}
             */
            // @ts-ignore
            ofNullable<T>(value: T): java.util.Optional<T>
            /**
             * If a value is present in this {@code Optional}, returns the value,
             * otherwise throws {@code NoSuchElementException}.
             * @return the non-null value held by this {#code Optional}
             * @throws NoSuchElementException if there is no value present
             * @see Optional#isPresent()
             */
            // @ts-ignore
            get(): T
            /**
             * Return {@code true} if there is a value present, otherwise {@code false}.
             * @return {#code true} if there is a value present, otherwise {@code false}
             */
            // @ts-ignore
            isPresent(): boolean
            /**
             * If a value is present, invoke the specified consumer with the value,
             * otherwise do nothing.
             * @param consumer block to be executed if a value is present
             * @throws NullPointerException if value is present and {#code consumer} is
             *  null
             */
            // @ts-ignore
            ifPresent(consumer: java.util.function.Consumer<any super T> | java.util.function$.Consumer<? super T>): void
            /**
             * If a value is present, and the value matches the given predicate,
             * return an {@code Optional} describing the value, otherwise return an
             * empty {@code Optional}.
             * @param predicate a predicate to apply to the value, if present
             * @return an {#code Optional} describing the value of this {@code Optional}
             *  if a value is present and the value matches the given predicate,
             *  otherwise an empty {@code Optional}
             * @throws NullPointerException if the predicate is null
             */
            // @ts-ignore
            filter(predicate: java.util.function.Predicate<any super T> | java.util.function$.Predicate<? super T>): java.util.Optional<T>
            /**
             * If a value is present, apply the provided mapping function to it,
             * and if the result is non-null, return an {@code Optional} describing the
             * result.  Otherwise return an empty {@code Optional}.
             * @apiNote This method supports post-processing on optional values, without
             *  the need to explicitly check for a return status.  For example, the
             *  following code traverses a stream of file names, selects one that has
             *  not yet been processed, and then opens that file, returning an
             *  {#code Optional<FileInputStream>}:
             * 
             *  <pre>{@code
             *      Optional<FileInputStream> fis =
             *          names.stream().filter(name -> !isProcessedYet(name))
             *                        .findFirst()
             *                        .map(name -> new FileInputStream(name));
             *  }</pre>
             * 
             *  Here, {@code findFirst} returns an {@code Optional<String>}, and then
             *  {@code map} returns an {@code Optional<FileInputStream>} for the desired
             *  file if one exists.
             * @param <U> The type of the result of the mapping function
             * @param mapper a mapping function to apply to the value, if present
             * @return an {#code Optional} describing the result of applying a mapping
             *  function to the value of this {@code Optional}, if a value is present,
             *  otherwise an empty {@code Optional}
             * @throws NullPointerException if the mapping function is null
             */
            // @ts-ignore
            map<U>(mapper: java.util.function.Function<any super T, U> | java.util.function$.Function<? super T, U>): java.util.Optional<U>
            /**
             * If a value is present, apply the provided {@code Optional}-bearing
             * mapping function to it, return that result, otherwise return an empty
             * {@code Optional}.  This method is similar to {@link #map(Function)},
             * but the provided mapper is one whose result is already an {@code Optional},
             * and if invoked, {@code flatMap} does not wrap it with an additional
             * {@code Optional}.
             * @param <U> The type parameter to the {#code Optional} returned by
             * @param mapper a mapping function to apply to the value, if present
             *            the mapping function
             * @return the result of applying an {#code Optional}-bearing mapping
             *  function to the value of this {@code Optional}, if a value is present,
             *  otherwise an empty {@code Optional}
             * @throws NullPointerException if the mapping function is null or returns
             *  a null result
             */
            // @ts-ignore
            flatMap<U>(mapper: java.util.function.Function<any super T, java.util.Optional<U>> | java.util.function$.Function<? super T, java.util.Optional<U>>): java.util.Optional<U>
            /**
             * Return the value if present, otherwise return {@code other}.
             * @param other the value to be returned if there is no value present, may
             *  be null
             * @return the value, if present, otherwise {#code other}
             */
            // @ts-ignore
            orElse(other: T): T
            /**
             * Return the value if present, otherwise invoke {@code other} and return
             * the result of that invocation.
             * @param other a {#code Supplier} whose result is returned if no value
             *  is present
             * @return the value if present otherwise the result of {#code other.get()}
             * @throws NullPointerException if value is not present and {#code other} is
             *  null
             */
            // @ts-ignore
            orElseGet(other: java.util.function.Supplier<T> | java.util.function$.Supplier<T>): T
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
            orElseThrow<X extends java.lang.Throwable>(exceptionSupplier: java.util.function.Supplier<X> | java.util.function$.Supplier<X>): T
            /**
             * Indicates whether some other object is "equal to" this Optional. The
             * other object is considered equal if:
             * <ul>
             * <li>it is also an {@code Optional} and;
             * <li>both instances have no value present or;
             * <li>the present values are "equal to" each other via {@code equals()}.
             * </ul>
             * @param obj an object to be tested for equality
             * @return {code true} if the other object is "equal to" this object
             *  otherwise {#code false}
             */
            // @ts-ignore
            equals(obj: any): boolean
            /**
             * Returns the hash code value of the present value, if any, or 0 (zero) if
             * no value is present.
             * @return hash code value of the present value or 0 if no value is present
             */
            // @ts-ignore
            hashCode(): int
            /**
             * Returns a non-empty string representation of this Optional suitable for
             * debugging. The exact presentation format is unspecified and may vary
             * between implementations and versions.
             * @implSpec If a value is present the result must include its string
             *  representation in the result. Empty and present Optionals must be
             *  unambiguously differentiable.
             * @return the string representation of this instance
             */
            // @ts-ignore
            toString(): java.lang.String
        }
    }
}
