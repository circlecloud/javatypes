declare namespace java {
    namespace util {
        namespace stream {
            /**
             * Implementations of {@link Collector} that implement various useful reduction
             * operations, such as accumulating elements into collections, summarizing
             * elements according to various criteria, etc.
             * <p>The following are examples of using the predefined collectors to perform
             * common mutable reduction tasks:
             * <pre>{@code
             * // Accumulate names into a List
             * List<String> list = people.stream().map(Person::getName).collect(Collectors.toList());
             * // Accumulate names into a TreeSet
             * Set<String> set = people.stream().map(Person::getName).collect(Collectors.toCollection(TreeSet::new));
             * // Convert elements to strings and concatenate them, separated by commas
             * String joined = things.stream()
             * .map(Object::toString)
             * .collect(Collectors.joining(", "));
             * // Compute sum of salaries of employee
             * int total = employees.stream()
             * .collect(Collectors.summingInt(Employee::getSalary)));
             * // Group employees by department
             * Map<Department, List<Employee>> byDept
             * = employees.stream()
             * .collect(Collectors.groupingBy(Employee::getDepartment));
             * // Compute sum of salaries by department
             * Map<Department, Integer> totalByDept
             * = employees.stream()
             * .collect(Collectors.groupingBy(Employee::getDepartment,
             * Collectors.summingInt(Employee::getSalary)));
             * // Partition students into passing and failing
             * Map<Boolean, List<Student>> passingFailing =
             * students.stream()
             * .collect(Collectors.partitioningBy(s -> s.getGrade() >= PASS_THRESHOLD));
             * }</pre>
             * @since 1.8
             */
            // @ts-ignore
            class Collectors extends java.lang.Object {
                /**
                 * Returns a {@code Collector} that accumulates the input elements into a
                 * new {@code Collection}, in encounter order.  The {@code Collection} is
                 * created by the provided factory.
                 * @param <T> the type of the input elements
                 * @param <C> the type of the resulting {#code Collection}
                 * @param collectionFactory a {#code Supplier} which returns a new, empty
                 *  {@code Collection} of the appropriate type
                 * @return a {#code Collector} which collects all the input elements into a
                 *  {@code Collection}, in encounter order
                 */
                // @ts-ignore
                toCollection<T, C extends java.util.Collection<T>>(collectionFactory: java.util.function.Supplier<C> | java.util.function$.Supplier<C>): java.util.stream.Collector<T, ?, C>
                /**
                 * Returns a {@code Collector} that accumulates the input elements into a
                 * new {@code List}. There are no guarantees on the type, mutability,
                 * serializability, or thread-safety of the {@code List} returned; if more
                 * control over the returned {@code List} is required, use {@link #toCollection(Supplier)}.
                 * @param <T> the type of the input elements
                 * @return a {#code Collector} which collects all the input elements into a
                 *  {@code List}, in encounter order
                 */
                // @ts-ignore
                toList<T>(): java.util.stream.Collector<T, ?, java.util.List<T>>
                /**
                 * Returns a {@code Collector} that accumulates the input elements into a
                 * new {@code Set}. There are no guarantees on the type, mutability,
                 * serializability, or thread-safety of the {@code Set} returned; if more
                 * control over the returned {@code Set} is required, use
                 * {@link #toCollection(Supplier)}.
                 * <p>This is an {@link Collector.Characteristics#UNORDERED unordered}
                 * Collector.
                 * @param <T> the type of the input elements
                 * @return a {#code Collector} which collects all the input elements into a
                 *  {@code Set}
                 */
                // @ts-ignore
                toSet<T>(): java.util.stream.Collector<T, ?, java.util.Set<T>>
                /**
                 * Returns a {@code Collector} that concatenates the input elements into a
                 * {@code String}, in encounter order.
                 * @return a {#code Collector} that concatenates the input elements into a
                 *  {@code String}, in encounter order
                 */
                // @ts-ignore
                joining(): java.util.stream.Collector<java.lang.CharSequence, ?, java.lang.String>
                /**
                 * Returns a {@code Collector} that concatenates the input elements,
                 * separated by the specified delimiter, in encounter order.
                 * @param delimiter the delimiter to be used between each element
                 * @return A {#code Collector} which concatenates CharSequence elements,
                 *  separated by the specified delimiter, in encounter order
                 */
                // @ts-ignore
                joining(delimiter: java.lang.CharSequence): java.util.stream.Collector<java.lang.CharSequence, ?, java.lang.String>
                /**
                 * Returns a {@code Collector} that concatenates the input elements,
                 * separated by the specified delimiter, with the specified prefix and
                 * suffix, in encounter order.
                 * @param delimiter the delimiter to be used between each element
                 * @param prefix the sequence of characters to be used at the beginning
                 *                 of the joined result
                 * @param suffix the sequence of characters to be used at the end
                 *                 of the joined result
                 * @return A {#code Collector} which concatenates CharSequence elements,
                 *  separated by the specified delimiter, in encounter order
                 */
                // @ts-ignore
                joining(delimiter: java.lang.CharSequence, prefix: java.lang.CharSequence, suffix: java.lang.CharSequence): java.util.stream.Collector<java.lang.CharSequence, ?, java.lang.String>
                /**
                 * Adapts a {@code Collector} accepting elements of type {@code U} to one
                 * accepting elements of type {@code T} by applying a mapping function to
                 * each input element before accumulation.
                 * @apiNote The {#code mapping()} collectors are most useful when used in a
                 *  multi-level reduction, such as downstream of a {@code groupingBy} or
                 *  {@code partitioningBy}.  For example, given a stream of
                 *  {@code Person}, to accumulate the set of last names in each city:
                 *  <pre>{@code
                 *      Map<City, Set<String>> lastNamesByCity
                 *          = people.stream().collect(groupingBy(Person::getCity,
                 *                                               mapping(Person::getLastName, toSet())));
                 *  }</pre>
                 * @param <T> the type of the input elements
                 * @param <U> type of elements accepted by downstream collector
                 * @param <A> intermediate accumulation type of the downstream collector
                 * @param <R> result type of collector
                 * @param mapper a function to be applied to the input elements
                 * @param downstream a collector which will accept mapped values
                 * @return a collector which applies the mapping function to the input
                 *  elements and provides the mapped results to the downstream collector
                 */
                // @ts-ignore
                mapping<T, U, A, R>(mapper: java.util.function.Function<any super T, U> | java.util.function$.Function<? super T, U>, downstream: java.util.stream.Collector<any super U, A, R>): java.util.stream.Collector<T, ?, R>
                /**
                 * Adapts a {@code Collector} to perform an additional finishing
                 * transformation.  For example, one could adapt the {@link #toList()}
                 * collector to always produce an immutable list with:
                 * <pre>{@code
                 * List<String> people
                 * = people.stream().collect(collectingAndThen(toList(), Collections::unmodifiableList));
                 * }</pre>
                 * @param <T> the type of the input elements
                 * @param <A> intermediate accumulation type of the downstream collector
                 * @param <R> result type of the downstream collector
                 * @param <RR> result type of the resulting collector
                 * @param downstream a collector
                 * @param finisher a function to be applied to the final result of the downstream collector
                 * @return a collector which performs the action of the downstream collector,
                 *  followed by an additional finishing step
                 */
                // @ts-ignore
                collectingAndThen<T, A, R, RR>(downstream: java.util.stream.Collector<T, A, R>, finisher: java.util.function.Function<R, RR> | java.util.function$.Function<R, RR>): java.util.stream.Collector<T, A, RR>
                /**
                 * Returns a {@code Collector} accepting elements of type {@code T} that
                 * counts the number of input elements.  If no elements are present, the
                 * result is 0.
                 * @implSpec This produces a result equivalent to:
                 *  <pre>{#code
                 *      reducing(0L, e -> 1L, Long::sum)
                 *  }</pre>
                 * @param <T> the type of the input elements
                 * @return a {#code Collector} that counts the input elements
                 */
                // @ts-ignore
                counting<T>(): java.util.stream.Collector<T, ?, java.lang.Long>
                /**
                 * Returns a {@code Collector} that produces the minimal element according
                 * to a given {@code Comparator}, described as an {@code Optional<T>}.
                 * @implSpec This produces a result equivalent to:
                 *  <pre>{#code
                 *      reducing(BinaryOperator.minBy(comparator))
                 *  }</pre>
                 * @param <T> the type of the input elements
                 * @param comparator a {#code Comparator} for comparing elements
                 * @return a {#code Collector} that produces the minimal value
                 */
                // @ts-ignore
                minBy<T>(comparator: java.util.Comparator<any super T>): java.util.stream.Collector<T, ?, java.util.Optional<T>>
                /**
                 * Returns a {@code Collector} that produces the maximal element according
                 * to a given {@code Comparator}, described as an {@code Optional<T>}.
                 * @implSpec This produces a result equivalent to:
                 *  <pre>{#code
                 *      reducing(BinaryOperator.maxBy(comparator))
                 *  }</pre>
                 * @param <T> the type of the input elements
                 * @param comparator a {#code Comparator} for comparing elements
                 * @return a {#code Collector} that produces the maximal value
                 */
                // @ts-ignore
                maxBy<T>(comparator: java.util.Comparator<any super T>): java.util.stream.Collector<T, ?, java.util.Optional<T>>
                /**
                 * Returns a {@code Collector} that produces the sum of a integer-valued
                 * function applied to the input elements.  If no elements are present,
                 * the result is 0.
                 * @param <T> the type of the input elements
                 * @param mapper a function extracting the property to be summed
                 * @return a {#code Collector} that produces the sum of a derived property
                 */
                // @ts-ignore
                summingInt<T>(mapper: java.util.function.ToIntFunction<any super T> | java.util.function$.ToIntFunction<? super T>): java.util.stream.Collector<T, ?, java.lang.Integer>
                /**
                 * Returns a {@code Collector} that produces the sum of a long-valued
                 * function applied to the input elements.  If no elements are present,
                 * the result is 0.
                 * @param <T> the type of the input elements
                 * @param mapper a function extracting the property to be summed
                 * @return a {#code Collector} that produces the sum of a derived property
                 */
                // @ts-ignore
                summingLong<T>(mapper: java.util.function.ToLongFunction<any super T> | java.util.function$.ToLongFunction<? super T>): java.util.stream.Collector<T, ?, java.lang.Long>
                /**
                 * Returns a {@code Collector} that produces the sum of a double-valued
                 * function applied to the input elements.  If no elements are present,
                 * the result is 0.
                 * <p>The sum returned can vary depending upon the order in which
                 * values are recorded, due to accumulated rounding error in
                 * addition of values of differing magnitudes. Values sorted by increasing
                 * absolute magnitude tend to yield more accurate results.  If any recorded
                 * value is a {@code NaN} or the sum is at any point a {@code NaN} then the
                 * sum will be {@code NaN}.
                 * @param <T> the type of the input elements
                 * @param mapper a function extracting the property to be summed
                 * @return a {#code Collector} that produces the sum of a derived property
                 */
                // @ts-ignore
                summingDouble<T>(mapper: java.util.function.ToDoubleFunction<any super T> | java.util.function$.ToDoubleFunction<? super T>): java.util.stream.Collector<T, ?, java.lang.Double>
                /**
                 * Returns a {@code Collector} that produces the arithmetic mean of an integer-valued
                 * function applied to the input elements.  If no elements are present,
                 * the result is 0.
                 * @param <T> the type of the input elements
                 * @param mapper a function extracting the property to be summed
                 * @return a {#code Collector} that produces the sum of a derived property
                 */
                // @ts-ignore
                averagingInt<T>(mapper: java.util.function.ToIntFunction<any super T> | java.util.function$.ToIntFunction<? super T>): java.util.stream.Collector<T, ?, java.lang.Double>
                /**
                 * Returns a {@code Collector} that produces the arithmetic mean of a long-valued
                 * function applied to the input elements.  If no elements are present,
                 * the result is 0.
                 * @param <T> the type of the input elements
                 * @param mapper a function extracting the property to be summed
                 * @return a {#code Collector} that produces the sum of a derived property
                 */
                // @ts-ignore
                averagingLong<T>(mapper: java.util.function.ToLongFunction<any super T> | java.util.function$.ToLongFunction<? super T>): java.util.stream.Collector<T, ?, java.lang.Double>
                /**
                 * Returns a {@code Collector} that produces the arithmetic mean of a double-valued
                 * function applied to the input elements.  If no elements are present,
                 * the result is 0.
                 * <p>The average returned can vary depending upon the order in which
                 * values are recorded, due to accumulated rounding error in
                 * addition of values of differing magnitudes. Values sorted by increasing
                 * absolute magnitude tend to yield more accurate results.  If any recorded
                 * value is a {@code NaN} or the sum is at any point a {@code NaN} then the
                 * average will be {@code NaN}.
                 * @implNote The {#code double} format can represent all
                 *  consecutive integers in the range -2<sup>53</sup> to
                 *  2<sup>53</sup>. If the pipeline has more than 2<sup>53</sup>
                 *  values, the divisor in the average computation will saturate at
                 *  2<sup>53</sup>, leading to additional numerical errors.
                 * @param <T> the type of the input elements
                 * @param mapper a function extracting the property to be summed
                 * @return a {#code Collector} that produces the sum of a derived property
                 */
                // @ts-ignore
                averagingDouble<T>(mapper: java.util.function.ToDoubleFunction<any super T> | java.util.function$.ToDoubleFunction<? super T>): java.util.stream.Collector<T, ?, java.lang.Double>
                /**
                 * Returns a {@code Collector} which performs a reduction of its
                 * input elements under a specified {@code BinaryOperator} using the
                 * provided identity.
                 * @apiNote The {#code reducing()} collectors are most useful when used in a
                 *  multi-level reduction, downstream of {@code groupingBy} or
                 *  {@code partitioningBy}.  To perform a simple reduction on a stream,
                 *  use {@link Stream#reduce(Object, BinaryOperator)}} instead.
                 * @param <T> element type for the input and output of the reduction
                 * @param identity the identity value for the reduction (also, the value
                 *                  that is returned when there are no input elements)
                 * @param op a {#code BinaryOperator<T>} used to reduce the input elements
                 * @return a {#code Collector} which implements the reduction operation
                 * @see #reducing(BinaryOperator)
                 * @see #reducing(Object, Function, BinaryOperator)
                 */
                // @ts-ignore
                reducing<T>(identity: T, op: java.util.function.BinaryOperator<T> | java.util.function$.BinaryOperator<T>): java.util.stream.Collector<T, ?, T>
                /**
                 * Returns a {@code Collector} which performs a reduction of its
                 * input elements under a specified {@code BinaryOperator}.  The result
                 * is described as an {@code Optional<T>}.
                 * @apiNote The {#code reducing()} collectors are most useful when used in a
                 *  multi-level reduction, downstream of {@code groupingBy} or
                 *  {@code partitioningBy}.  To perform a simple reduction on a stream,
                 *  use {@link Stream#reduce(BinaryOperator)} instead.
                 * 
                 *  <p>For example, given a stream of {@code Person}, to calculate tallest
                 *  person in each city:
                 *  <pre>{@code
                 *      Comparator<Person> byHeight = Comparator.comparing(Person::getHeight);
                 *      Map<City, Person> tallestByCity
                 *          = people.stream().collect(groupingBy(Person::getCity, reducing(BinaryOperator.maxBy(byHeight))));
                 *  }</pre>
                 * @param <T> element type for the input and output of the reduction
                 * @param op a {#code BinaryOperator<T>} used to reduce the input elements
                 * @return a {#code Collector} which implements the reduction operation
                 * @see #reducing(Object, BinaryOperator)
                 * @see #reducing(Object, Function, BinaryOperator)
                 */
                // @ts-ignore
                reducing<T>(op: java.util.function.BinaryOperator<T> | java.util.function$.BinaryOperator<T>): java.util.stream.Collector<T, ?, java.util.Optional<T>>
                /**
                 * Returns a {@code Collector} which performs a reduction of its
                 * input elements under a specified mapping function and
                 * {@code BinaryOperator}. This is a generalization of
                 * {@link #reducing(Object, BinaryOperator)} which allows a transformation
                 * of the elements before reduction.
                 * @apiNote The {#code reducing()} collectors are most useful when used in a
                 *  multi-level reduction, downstream of {@code groupingBy} or
                 *  {@code partitioningBy}.  To perform a simple map-reduce on a stream,
                 *  use {@link Stream#map(Function)} and {@link Stream#reduce(Object, BinaryOperator)}
                 *  instead.
                 * 
                 *  <p>For example, given a stream of {@code Person}, to calculate the longest
                 *  last name of residents in each city:
                 *  <pre>{@code
                 *      Comparator<String> byLength = Comparator.comparing(String::length);
                 *      Map<City, String> longestLastNameByCity
                 *          = people.stream().collect(groupingBy(Person::getCity,
                 *                                               reducing(Person::getLastName, BinaryOperator.maxBy(byLength))));
                 *  }</pre>
                 * @param <T> the type of the input elements
                 * @param <U> the type of the mapped values
                 * @param identity the identity value for the reduction (also, the value
                 *                  that is returned when there are no input elements)
                 * @param mapper a mapping function to apply to each input value
                 * @param op a {#code BinaryOperator<U>} used to reduce the mapped values
                 * @return a {#code Collector} implementing the map-reduce operation
                 * @see #reducing(Object, BinaryOperator)
                 * @see #reducing(BinaryOperator)
                 */
                // @ts-ignore
                reducing<T, U>(identity: U, mapper: java.util.function.Function<any super T, U> | java.util.function$.Function<? super T, U>, op: java.util.function.BinaryOperator<U> | java.util.function$.BinaryOperator<U>): java.util.stream.Collector<T, ?, U>
                /**
                 * Returns a {@code Collector} implementing a "group by" operation on
                 * input elements of type {@code T}, grouping elements according to a
                 * classification function, and returning the results in a {@code Map}.
                 * <p>The classification function maps elements to some key type {@code K}.
                 * The collector produces a {@code Map<K, List<T>>} whose keys are the
                 * values resulting from applying the classification function to the input
                 * elements, and whose corresponding values are {@code List}s containing the
                 * input elements which map to the associated key under the classification
                 * function.
                 * <p>There are no guarantees on the type, mutability, serializability, or
                 * thread-safety of the {@code Map} or {@code List} objects returned.
                 * @implSpec This produces a result similar to:
                 *  <pre>{#code
                 *      groupingBy(classifier, toList());
                 *  }</pre>
                 * @implNote The returned {#code Collector} is not concurrent.  For parallel stream
                 *  pipelines, the {@code combiner} function operates by merging the keys
                 *  from one map into another, which can be an expensive operation.  If
                 *  preservation of the order in which elements appear in the resulting {@code Map}
                 *  collector is not required, using {@link #groupingByConcurrent(Function)}
                 *  may offer better parallel performance.
                 * @param <T> the type of the input elements
                 * @param <K> the type of the keys
                 * @param classifier the classifier function mapping input elements to keys
                 * @return a {#code Collector} implementing the group-by operation
                 * @see #groupingBy(Function, Collector)
                 * @see #groupingBy(Function, Supplier, Collector)
                 * @see #groupingByConcurrent(Function)
                 */
                // @ts-ignore
                groupingBy<T, K>(classifier: java.util.function.Function<any super T, K> | java.util.function$.Function<? super T, K>): java.util.stream.Collector<T, ?, java.util.Map<K, java.util.List<T>>>
                /**
                 * Returns a {@code Collector} implementing a cascaded "group by" operation
                 * on input elements of type {@code T}, grouping elements according to a
                 * classification function, and then performing a reduction operation on
                 * the values associated with a given key using the specified downstream
                 * {@code Collector}.
                 * <p>The classification function maps elements to some key type {@code K}.
                 * The downstream collector operates on elements of type {@code T} and
                 * produces a result of type {@code D}. The resulting collector produces a
                 * {@code Map<K, D>}.
                 * <p>There are no guarantees on the type, mutability,
                 * serializability, or thread-safety of the {@code Map} returned.
                 * <p>For example, to compute the set of last names of people in each city:
                 * <pre>{@code
                 * Map<City, Set<String>> namesByCity
                 * = people.stream().collect(groupingBy(Person::getCity,
                 * mapping(Person::getLastName, toSet())));
                 * }</pre>
                 * @implNote The returned {#code Collector} is not concurrent.  For parallel stream
                 *  pipelines, the {@code combiner} function operates by merging the keys
                 *  from one map into another, which can be an expensive operation.  If
                 *  preservation of the order in which elements are presented to the downstream
                 *  collector is not required, using {@link #groupingByConcurrent(Function, Collector)}
                 *  may offer better parallel performance.
                 * @param <T> the type of the input elements
                 * @param <K> the type of the keys
                 * @param <A> the intermediate accumulation type of the downstream collector
                 * @param <D> the result type of the downstream reduction
                 * @param classifier a classifier function mapping input elements to keys
                 * @param downstream a {#code Collector} implementing the downstream reduction
                 * @return a {#code Collector} implementing the cascaded group-by operation
                 * @see #groupingBy(Function)
                 * @see #groupingBy(Function, Supplier, Collector)
                 * @see #groupingByConcurrent(Function, Collector)
                 */
                // @ts-ignore
                groupingBy<T, K, A, D>(classifier: java.util.function.Function<any super T, K> | java.util.function$.Function<? super T, K>, downstream: java.util.stream.Collector<any super T, A, D>): java.util.stream.Collector<T, ?, java.util.Map<K, D>>
                /**
                 * Returns a {@code Collector} implementing a cascaded "group by" operation
                 * on input elements of type {@code T}, grouping elements according to a
                 * classification function, and then performing a reduction operation on
                 * the values associated with a given key using the specified downstream
                 * {@code Collector}.  The {@code Map} produced by the Collector is created
                 * with the supplied factory function.
                 * <p>The classification function maps elements to some key type {@code K}.
                 * The downstream collector operates on elements of type {@code T} and
                 * produces a result of type {@code D}. The resulting collector produces a
                 * {@code Map<K, D>}.
                 * <p>For example, to compute the set of last names of people in each city,
                 * where the city names are sorted:
                 * <pre>{@code
                 * Map<City, Set<String>> namesByCity
                 * = people.stream().collect(groupingBy(Person::getCity, TreeMap::new,
                 * mapping(Person::getLastName, toSet())));
                 * }</pre>
                 * @implNote The returned {#code Collector} is not concurrent.  For parallel stream
                 *  pipelines, the {@code combiner} function operates by merging the keys
                 *  from one map into another, which can be an expensive operation.  If
                 *  preservation of the order in which elements are presented to the downstream
                 *  collector is not required, using {@link #groupingByConcurrent(Function, Supplier, Collector)}
                 *  may offer better parallel performance.
                 * @param <T> the type of the input elements
                 * @param <K> the type of the keys
                 * @param <A> the intermediate accumulation type of the downstream collector
                 * @param <D> the result type of the downstream reduction
                 * @param <M> the type of the resulting {#code Map}
                 * @param classifier a classifier function mapping input elements to keys
                 * @param downstream a {#code Collector} implementing the downstream reduction
                 * @param mapFactory a function which, when called, produces a new empty
                 *                    {#code Map} of the desired type
                 * @return a {#code Collector} implementing the cascaded group-by operation
                 * @see #groupingBy(Function, Collector)
                 * @see #groupingBy(Function)
                 * @see #groupingByConcurrent(Function, Supplier, Collector)
                 */
                // @ts-ignore
                groupingBy<T, K, D, A, M extends java.util.Map<K, D>>(classifier: java.util.function.Function<any super T, K> | java.util.function$.Function<? super T, K>, mapFactory: java.util.function.Supplier<M> | java.util.function$.Supplier<M>, downstream: java.util.stream.Collector<any super T, A, D>): java.util.stream.Collector<T, ?, M>
                /**
                 * Returns a concurrent {@code Collector} implementing a "group by"
                 * operation on input elements of type {@code T}, grouping elements
                 * according to a classification function.
                 * <p>This is a {@link Collector.Characteristics#CONCURRENT concurrent} and
                 * {@link Collector.Characteristics#UNORDERED unordered} Collector.
                 * <p>The classification function maps elements to some key type {@code K}.
                 * The collector produces a {@code ConcurrentMap<K, List<T>>} whose keys are the
                 * values resulting from applying the classification function to the input
                 * elements, and whose corresponding values are {@code List}s containing the
                 * input elements which map to the associated key under the classification
                 * function.
                 * <p>There are no guarantees on the type, mutability, or serializability
                 * of the {@code Map} or {@code List} objects returned, or of the
                 * thread-safety of the {@code List} objects returned.
                 * @implSpec This produces a result similar to:
                 *  <pre>{#code
                 *      groupingByConcurrent(classifier, toList());
                 *  }</pre>
                 * @param <T> the type of the input elements
                 * @param <K> the type of the keys
                 * @param classifier a classifier function mapping input elements to keys
                 * @return a concurrent, unordered {#code Collector} implementing the group-by operation
                 * @see #groupingBy(Function)
                 * @see #groupingByConcurrent(Function, Collector)
                 * @see #groupingByConcurrent(Function, Supplier, Collector)
                 */
                // @ts-ignore
                groupingByConcurrent<T, K>(classifier: java.util.function.Function<any super T, K> | java.util.function$.Function<? super T, K>): java.util.stream.Collector<T, ?, java.util.concurrent.ConcurrentMap<K, java.util.List<T>>>
                /**
                 * Returns a concurrent {@code Collector} implementing a cascaded "group by"
                 * operation on input elements of type {@code T}, grouping elements
                 * according to a classification function, and then performing a reduction
                 * operation on the values associated with a given key using the specified
                 * downstream {@code Collector}.
                 * <p>This is a {@link Collector.Characteristics#CONCURRENT concurrent} and
                 * {@link Collector.Characteristics#UNORDERED unordered} Collector.
                 * <p>The classification function maps elements to some key type {@code K}.
                 * The downstream collector operates on elements of type {@code T} and
                 * produces a result of type {@code D}. The resulting collector produces a
                 * {@code Map<K, D>}.
                 * <p>For example, to compute the set of last names of people in each city,
                 * where the city names are sorted:
                 * <pre>{@code
                 * ConcurrentMap<City, Set<String>> namesByCity
                 * = people.stream().collect(groupingByConcurrent(Person::getCity,
                 * mapping(Person::getLastName, toSet())));
                 * }</pre>
                 * @param <T> the type of the input elements
                 * @param <K> the type of the keys
                 * @param <A> the intermediate accumulation type of the downstream collector
                 * @param <D> the result type of the downstream reduction
                 * @param classifier a classifier function mapping input elements to keys
                 * @param downstream a {#code Collector} implementing the downstream reduction
                 * @return a concurrent, unordered {#code Collector} implementing the cascaded group-by operation
                 * @see #groupingBy(Function, Collector)
                 * @see #groupingByConcurrent(Function)
                 * @see #groupingByConcurrent(Function, Supplier, Collector)
                 */
                // @ts-ignore
                groupingByConcurrent<T, K, A, D>(classifier: java.util.function.Function<any super T, K> | java.util.function$.Function<? super T, K>, downstream: java.util.stream.Collector<any super T, A, D>): java.util.stream.Collector<T, ?, java.util.concurrent.ConcurrentMap<K, D>>
                /**
                 * Returns a concurrent {@code Collector} implementing a cascaded "group by"
                 * operation on input elements of type {@code T}, grouping elements
                 * according to a classification function, and then performing a reduction
                 * operation on the values associated with a given key using the specified
                 * downstream {@code Collector}.  The {@code ConcurrentMap} produced by the
                 * Collector is created with the supplied factory function.
                 * <p>This is a {@link Collector.Characteristics#CONCURRENT concurrent} and
                 * {@link Collector.Characteristics#UNORDERED unordered} Collector.
                 * <p>The classification function maps elements to some key type {@code K}.
                 * The downstream collector operates on elements of type {@code T} and
                 * produces a result of type {@code D}. The resulting collector produces a
                 * {@code Map<K, D>}.
                 * <p>For example, to compute the set of last names of people in each city,
                 * where the city names are sorted:
                 * <pre>{@code
                 * ConcurrentMap<City, Set<String>> namesByCity
                 * = people.stream().collect(groupingBy(Person::getCity, ConcurrentSkipListMap::new,
                 * mapping(Person::getLastName, toSet())));
                 * }</pre>
                 * @param <T> the type of the input elements
                 * @param <K> the type of the keys
                 * @param <A> the intermediate accumulation type of the downstream collector
                 * @param <D> the result type of the downstream reduction
                 * @param <M> the type of the resulting {#code ConcurrentMap}
                 * @param classifier a classifier function mapping input elements to keys
                 * @param downstream a {#code Collector} implementing the downstream reduction
                 * @param mapFactory a function which, when called, produces a new empty
                 *                    {#code ConcurrentMap} of the desired type
                 * @return a concurrent, unordered {#code Collector} implementing the cascaded group-by operation
                 * @see #groupingByConcurrent(Function)
                 * @see #groupingByConcurrent(Function, Collector)
                 * @see #groupingBy(Function, Supplier, Collector)
                 */
                // @ts-ignore
                groupingByConcurrent<T, K, A, D, M extends java.util.concurrent.ConcurrentMap<K, D>>(classifier: java.util.function.Function<any super T, K> | java.util.function$.Function<? super T, K>, mapFactory: java.util.function.Supplier<M> | java.util.function$.Supplier<M>, downstream: java.util.stream.Collector<any super T, A, D>): java.util.stream.Collector<T, ?, M>
                /**
                 * Returns a {@code Collector} which partitions the input elements according
                 * to a {@code Predicate}, and organizes them into a
                 * {@code Map<Boolean, List<T>>}.
                 * There are no guarantees on the type, mutability,
                 * serializability, or thread-safety of the {@code Map} returned.
                 * @param <T> the type of the input elements
                 * @param predicate a predicate used for classifying input elements
                 * @return a {#code Collector} implementing the partitioning operation
                 * @see #partitioningBy(Predicate, Collector)
                 */
                // @ts-ignore
                partitioningBy<T>(predicate: java.util.function.Predicate<any super T> | java.util.function$.Predicate<? super T>): java.util.stream.Collector<T, ?, java.util.Map<java.lang.Boolean, java.util.List<T>>>
                /**
                 * Returns a {@code Collector} which partitions the input elements according
                 * to a {@code Predicate}, reduces the values in each partition according to
                 * another {@code Collector}, and organizes them into a
                 * {@code Map<Boolean, D>} whose values are the result of the downstream
                 * reduction.
                 * <p>There are no guarantees on the type, mutability,
                 * serializability, or thread-safety of the {@code Map} returned.
                 * @param <T> the type of the input elements
                 * @param <A> the intermediate accumulation type of the downstream collector
                 * @param <D> the result type of the downstream reduction
                 * @param predicate a predicate used for classifying input elements
                 * @param downstream a {#code Collector} implementing the downstream
                 *                    reduction
                 * @return a {#code Collector} implementing the cascaded partitioning
                 *          operation
                 * @see #partitioningBy(Predicate)
                 */
                // @ts-ignore
                partitioningBy<T, D, A>(predicate: java.util.function.Predicate<any super T> | java.util.function$.Predicate<? super T>, downstream: java.util.stream.Collector<any super T, A, D>): java.util.stream.Collector<T, ?, java.util.Map<java.lang.Boolean, D>>
                /**
                 * Returns a {@code Collector} that accumulates elements into a
                 * {@code Map} whose keys and values are the result of applying the provided
                 * mapping functions to the input elements.
                 * <p>If the mapped keys contains duplicates (according to
                 * {@link Object#equals(Object)}), an {@code IllegalStateException} is
                 * thrown when the collection operation is performed.  If the mapped keys
                 * may have duplicates, use {@link #toMap(Function, Function, BinaryOperator)}
                 * instead.
                 * @apiNote It is common for either the key or the value to be the input elements.
                 *  In this case, the utility method
                 *  {#link java.util.function.Function#identity()} may be helpful.
                 *  For example, the following produces a {@code Map} mapping
                 *  students to their grade point average:
                 *  <pre>{@code
                 *      Map<Student, Double> studentToGPA
                 *          students.stream().collect(toMap(Functions.identity(),
                 *                                          student -> computeGPA(student)));
                 *  }</pre>
                 *  And the following produces a {@code Map} mapping a unique identifier to
                 *  students:
                 *  <pre>{@code
                 *      Map<String, Student> studentIdToStudent
                 *          students.stream().collect(toMap(Student::getId,
                 *                                          Functions.identity());
                 *  }</pre>
                 * @implNote The returned {#code Collector} is not concurrent.  For parallel stream
                 *  pipelines, the {@code combiner} function operates by merging the keys
                 *  from one map into another, which can be an expensive operation.  If it is
                 *  not required that results are inserted into the {@code Map} in encounter
                 *  order, using {@link #toConcurrentMap(Function, Function)}
                 *  may offer better parallel performance.
                 * @param <T> the type of the input elements
                 * @param <K> the output type of the key mapping function
                 * @param <U> the output type of the value mapping function
                 * @param keyMapper a mapping function to produce keys
                 * @param valueMapper a mapping function to produce values
                 * @return a {#code Collector} which collects elements into a {@code Map}
                 *  whose keys and values are the result of applying mapping functions to
                 *  the input elements
                 * @see #toMap(Function, Function, BinaryOperator)
                 * @see #toMap(Function, Function, BinaryOperator, Supplier)
                 * @see #toConcurrentMap(Function, Function)
                 */
                // @ts-ignore
                toMap<T, K, U>(keyMapper: java.util.function.Function<any super T, K> | java.util.function$.Function<? super T, K>, valueMapper: java.util.function.Function<any super T, U> | java.util.function$.Function<? super T, U>): java.util.stream.Collector<T, ?, java.util.Map<K, U>>
                /**
                 * Returns a {@code Collector} that accumulates elements into a
                 * {@code Map} whose keys and values are the result of applying the provided
                 * mapping functions to the input elements.
                 * <p>If the mapped
                 * keys contains duplicates (according to {@link Object#equals(Object)}),
                 * the value mapping function is applied to each equal element, and the
                 * results are merged using the provided merging function.
                 * @apiNote There are multiple ways to deal with collisions between multiple elements
                 *  mapping to the same key.  The other forms of {#code toMap} simply use
                 *  a merge function that throws unconditionally, but you can easily write
                 *  more flexible merge policies.  For example, if you have a stream
                 *  of {@code Person}, and you want to produce a "phone book" mapping name to
                 *  address, but it is possible that two persons have the same name, you can
                 *  do as follows to gracefully deals with these collisions, and produce a
                 *  {@code Map} mapping names to a concatenated list of addresses:
                 *  <pre>{@code
                 *      Map<String, String> phoneBook
                 *          people.stream().collect(toMap(Person::getName,
                 *                                        Person::getAddress,
                 *                                        (s, a) -> s + ", " + a));
                 *  }</pre>
                 * @implNote The returned {#code Collector} is not concurrent.  For parallel stream
                 *  pipelines, the {@code combiner} function operates by merging the keys
                 *  from one map into another, which can be an expensive operation.  If it is
                 *  not required that results are merged into the {@code Map} in encounter
                 *  order, using {@link #toConcurrentMap(Function, Function, BinaryOperator)}
                 *  may offer better parallel performance.
                 * @param <T> the type of the input elements
                 * @param <K> the output type of the key mapping function
                 * @param <U> the output type of the value mapping function
                 * @param keyMapper a mapping function to produce keys
                 * @param valueMapper a mapping function to produce values
                 * @param mergeFunction a merge function, used to resolve collisions between
                 *                       values associated with the same key, as supplied
                 *                       to {#link Map#merge(Object, Object, BiFunction)}
                 * @return a {#code Collector} which collects elements into a {@code Map}
                 *  whose keys are the result of applying a key mapping function to the input
                 *  elements, and whose values are the result of applying a value mapping
                 *  function to all input elements equal to the key and combining them
                 *  using the merge function
                 * @see #toMap(Function, Function)
                 * @see #toMap(Function, Function, BinaryOperator, Supplier)
                 * @see #toConcurrentMap(Function, Function, BinaryOperator)
                 */
                // @ts-ignore
                toMap<T, K, U>(keyMapper: java.util.function.Function<any super T, K> | java.util.function$.Function<? super T, K>, valueMapper: java.util.function.Function<any super T, U> | java.util.function$.Function<? super T, U>, mergeFunction: java.util.function.BinaryOperator<U> | java.util.function$.BinaryOperator<U>): java.util.stream.Collector<T, ?, java.util.Map<K, U>>
                /**
                 * Returns a {@code Collector} that accumulates elements into a
                 * {@code Map} whose keys and values are the result of applying the provided
                 * mapping functions to the input elements.
                 * <p>If the mapped
                 * keys contains duplicates (according to {@link Object#equals(Object)}),
                 * the value mapping function is applied to each equal element, and the
                 * results are merged using the provided merging function.  The {@code Map}
                 * is created by a provided supplier function.
                 * @implNote The returned {#code Collector} is not concurrent.  For parallel stream
                 *  pipelines, the {@code combiner} function operates by merging the keys
                 *  from one map into another, which can be an expensive operation.  If it is
                 *  not required that results are merged into the {@code Map} in encounter
                 *  order, using {@link #toConcurrentMap(Function, Function, BinaryOperator, Supplier)}
                 *  may offer better parallel performance.
                 * @param <T> the type of the input elements
                 * @param <K> the output type of the key mapping function
                 * @param <U> the output type of the value mapping function
                 * @param <M> the type of the resulting {#code Map}
                 * @param keyMapper a mapping function to produce keys
                 * @param valueMapper a mapping function to produce values
                 * @param mergeFunction a merge function, used to resolve collisions between
                 *                       values associated with the same key, as supplied
                 *                       to {#link Map#merge(Object, Object, BiFunction)}
                 * @param mapSupplier a function which returns a new, empty {#code Map} into
                 *                     which the results will be inserted
                 * @return a {#code Collector} which collects elements into a {@code Map}
                 *  whose keys are the result of applying a key mapping function to the input
                 *  elements, and whose values are the result of applying a value mapping
                 *  function to all input elements equal to the key and combining them
                 *  using the merge function
                 * @see #toMap(Function, Function)
                 * @see #toMap(Function, Function, BinaryOperator)
                 * @see #toConcurrentMap(Function, Function, BinaryOperator, Supplier)
                 */
                // @ts-ignore
                toMap<T, K, U, M extends java.util.Map<K, U>>(keyMapper: java.util.function.Function<any super T, K> | java.util.function$.Function<? super T, K>, valueMapper: java.util.function.Function<any super T, U> | java.util.function$.Function<? super T, U>, mergeFunction: java.util.function.BinaryOperator<U> | java.util.function$.BinaryOperator<U>, mapSupplier: java.util.function.Supplier<M> | java.util.function$.Supplier<M>): java.util.stream.Collector<T, ?, M>
                /**
                 * Returns a concurrent {@code Collector} that accumulates elements into a
                 * {@code ConcurrentMap} whose keys and values are the result of applying
                 * the provided mapping functions to the input elements.
                 * <p>If the mapped keys contains duplicates (according to
                 * {@link Object#equals(Object)}), an {@code IllegalStateException} is
                 * thrown when the collection operation is performed.  If the mapped keys
                 * may have duplicates, use
                 * {@link #toConcurrentMap(Function, Function, BinaryOperator)} instead.
                 * @apiNote It is common for either the key or the value to be the input elements.
                 *  In this case, the utility method
                 *  {#link java.util.function.Function#identity()} may be helpful.
                 *  For example, the following produces a {@code Map} mapping
                 *  students to their grade point average:
                 *  <pre>{@code
                 *      Map<Student, Double> studentToGPA
                 *          students.stream().collect(toMap(Functions.identity(),
                 *                                          student -> computeGPA(student)));
                 *  }</pre>
                 *  And the following produces a {@code Map} mapping a unique identifier to
                 *  students:
                 *  <pre>{@code
                 *      Map<String, Student> studentIdToStudent
                 *          students.stream().collect(toConcurrentMap(Student::getId,
                 *                                                    Functions.identity());
                 *  }</pre>
                 * 
                 *  <p>This is a {@link Collector.Characteristics#CONCURRENT concurrent} and
                 *  {@link Collector.Characteristics#UNORDERED unordered} Collector.
                 * @param <T> the type of the input elements
                 * @param <K> the output type of the key mapping function
                 * @param <U> the output type of the value mapping function
                 * @param keyMapper the mapping function to produce keys
                 * @param valueMapper the mapping function to produce values
                 * @return a concurrent, unordered {#code Collector} which collects elements into a
                 *  {@code ConcurrentMap} whose keys are the result of applying a key mapping
                 *  function to the input elements, and whose values are the result of
                 *  applying a value mapping function to the input elements
                 * @see #toMap(Function, Function)
                 * @see #toConcurrentMap(Function, Function, BinaryOperator)
                 * @see #toConcurrentMap(Function, Function, BinaryOperator, Supplier)
                 */
                // @ts-ignore
                toConcurrentMap<T, K, U>(keyMapper: java.util.function.Function<any super T, K> | java.util.function$.Function<? super T, K>, valueMapper: java.util.function.Function<any super T, U> | java.util.function$.Function<? super T, U>): java.util.stream.Collector<T, ?, java.util.concurrent.ConcurrentMap<K, U>>
                /**
                 * Returns a concurrent {@code Collector} that accumulates elements into a
                 * {@code ConcurrentMap} whose keys and values are the result of applying
                 * the provided mapping functions to the input elements.
                 * <p>If the mapped keys contains duplicates (according to {@link Object#equals(Object)}),
                 * the value mapping function is applied to each equal element, and the
                 * results are merged using the provided merging function.
                 * @apiNote There are multiple ways to deal with collisions between multiple elements
                 *  mapping to the same key.  The other forms of {#code toConcurrentMap} simply use
                 *  a merge function that throws unconditionally, but you can easily write
                 *  more flexible merge policies.  For example, if you have a stream
                 *  of {@code Person}, and you want to produce a "phone book" mapping name to
                 *  address, but it is possible that two persons have the same name, you can
                 *  do as follows to gracefully deals with these collisions, and produce a
                 *  {@code Map} mapping names to a concatenated list of addresses:
                 *  <pre>{@code
                 *      Map<String, String> phoneBook
                 *          people.stream().collect(toConcurrentMap(Person::getName,
                 *                                                  Person::getAddress,
                 *                                                  (s, a) -> s + ", " + a));
                 *  }</pre>
                 * 
                 *  <p>This is a {@link Collector.Characteristics#CONCURRENT concurrent} and
                 *  {@link Collector.Characteristics#UNORDERED unordered} Collector.
                 * @param <T> the type of the input elements
                 * @param <K> the output type of the key mapping function
                 * @param <U> the output type of the value mapping function
                 * @param keyMapper a mapping function to produce keys
                 * @param valueMapper a mapping function to produce values
                 * @param mergeFunction a merge function, used to resolve collisions between
                 *                       values associated with the same key, as supplied
                 *                       to {#link Map#merge(Object, Object, BiFunction)}
                 * @return a concurrent, unordered {#code Collector} which collects elements into a
                 *  {@code ConcurrentMap} whose keys are the result of applying a key mapping
                 *  function to the input elements, and whose values are the result of
                 *  applying a value mapping function to all input elements equal to the key
                 *  and combining them using the merge function
                 * @see #toConcurrentMap(Function, Function)
                 * @see #toConcurrentMap(Function, Function, BinaryOperator, Supplier)
                 * @see #toMap(Function, Function, BinaryOperator)
                 */
                // @ts-ignore
                toConcurrentMap<T, K, U>(keyMapper: java.util.function.Function<any super T, K> | java.util.function$.Function<? super T, K>, valueMapper: java.util.function.Function<any super T, U> | java.util.function$.Function<? super T, U>, mergeFunction: java.util.function.BinaryOperator<U> | java.util.function$.BinaryOperator<U>): java.util.stream.Collector<T, ?, java.util.concurrent.ConcurrentMap<K, U>>
                /**
                 * Returns a concurrent {@code Collector} that accumulates elements into a
                 * {@code ConcurrentMap} whose keys and values are the result of applying
                 * the provided mapping functions to the input elements.
                 * <p>If the mapped keys contains duplicates (according to {@link Object#equals(Object)}),
                 * the value mapping function is applied to each equal element, and the
                 * results are merged using the provided merging function.  The
                 * {@code ConcurrentMap} is created by a provided supplier function.
                 * <p>This is a {@link Collector.Characteristics#CONCURRENT concurrent} and
                 * {@link Collector.Characteristics#UNORDERED unordered} Collector.
                 * @param <T> the type of the input elements
                 * @param <K> the output type of the key mapping function
                 * @param <U> the output type of the value mapping function
                 * @param <M> the type of the resulting {#code ConcurrentMap}
                 * @param keyMapper a mapping function to produce keys
                 * @param valueMapper a mapping function to produce values
                 * @param mergeFunction a merge function, used to resolve collisions between
                 *                       values associated with the same key, as supplied
                 *                       to {#link Map#merge(Object, Object, BiFunction)}
                 * @param mapSupplier a function which returns a new, empty {#code Map} into
                 *                     which the results will be inserted
                 * @return a concurrent, unordered {#code Collector} which collects elements into a
                 *  {@code ConcurrentMap} whose keys are the result of applying a key mapping
                 *  function to the input elements, and whose values are the result of
                 *  applying a value mapping function to all input elements equal to the key
                 *  and combining them using the merge function
                 * @see #toConcurrentMap(Function, Function)
                 * @see #toConcurrentMap(Function, Function, BinaryOperator)
                 * @see #toMap(Function, Function, BinaryOperator, Supplier)
                 */
                // @ts-ignore
                toConcurrentMap<T, K, U, M extends java.util.concurrent.ConcurrentMap<K, U>>(keyMapper: java.util.function.Function<any super T, K> | java.util.function$.Function<? super T, K>, valueMapper: java.util.function.Function<any super T, U> | java.util.function$.Function<? super T, U>, mergeFunction: java.util.function.BinaryOperator<U> | java.util.function$.BinaryOperator<U>, mapSupplier: java.util.function.Supplier<M> | java.util.function$.Supplier<M>): java.util.stream.Collector<T, ?, M>
                /**
                 * Returns a {@code Collector} which applies an {@code int}-producing
                 * mapping function to each input element, and returns summary statistics
                 * for the resulting values.
                 * @param <T> the type of the input elements
                 * @param mapper a mapping function to apply to each element
                 * @return a {#code Collector} implementing the summary-statistics reduction
                 * @see #summarizingDouble(ToDoubleFunction)
                 * @see #summarizingLong(ToLongFunction)
                 */
                // @ts-ignore
                summarizingInt<T>(mapper: java.util.function.ToIntFunction<any super T> | java.util.function$.ToIntFunction<? super T>): java.util.stream.Collector<T, ?, java.util.IntSummaryStatistics>
                /**
                 * Returns a {@code Collector} which applies an {@code long}-producing
                 * mapping function to each input element, and returns summary statistics
                 * for the resulting values.
                 * @param <T> the type of the input elements
                 * @param mapper the mapping function to apply to each element
                 * @return a {#code Collector} implementing the summary-statistics reduction
                 * @see #summarizingDouble(ToDoubleFunction)
                 * @see #summarizingInt(ToIntFunction)
                 */
                // @ts-ignore
                summarizingLong<T>(mapper: java.util.function.ToLongFunction<any super T> | java.util.function$.ToLongFunction<? super T>): java.util.stream.Collector<T, ?, java.util.LongSummaryStatistics>
                /**
                 * Returns a {@code Collector} which applies an {@code double}-producing
                 * mapping function to each input element, and returns summary statistics
                 * for the resulting values.
                 * @param <T> the type of the input elements
                 * @param mapper a mapping function to apply to each element
                 * @return a {#code Collector} implementing the summary-statistics reduction
                 * @see #summarizingLong(ToLongFunction)
                 * @see #summarizingInt(ToIntFunction)
                 */
                // @ts-ignore
                summarizingDouble<T>(mapper: java.util.function.ToDoubleFunction<any super T> | java.util.function$.ToDoubleFunction<? super T>): java.util.stream.Collector<T, ?, java.util.DoubleSummaryStatistics>
            }
        }
    }
}
