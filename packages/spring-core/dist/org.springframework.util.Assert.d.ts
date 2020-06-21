declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Assertion utility class that assists in validating arguments.
             * <p>Useful for identifying programmer errors early and clearly at runtime.
             * <p>For example, if the contract of a public method states it does not
             * allow {@code null} arguments, {@code Assert} can be used to validate that
             * contract. Doing this clearly indicates a contract violation when it
             * occurs and protects the class's invariants.
             * <p>Typically used to validate method arguments rather than configuration
             * properties, to check for cases that are usually programmer errors rather
             * than configuration errors. In contrast to configuration initialization
             * code, there is usually no point in falling back to defaults in such methods.
             * <p>This class is similar to JUnit's assertion library. If an argument value is
             * deemed invalid, an {@link IllegalArgumentException} is thrown (typically).
             * For example:
             * <pre class="code">
             * Assert.notNull(clazz, "The class must not be null");
             * Assert.isTrue(i > 0, "The value must be greater than zero");</pre>
             * <p>Mainly for internal use within the framework; consider
             * <a href="https://commons.apache.org/proper/commons-lang/">Apache's Commons Lang</a>
             * for a more comprehensive suite of {@code String} utilities.
             * @author Keith Donald
             * @author Juergen Hoeller
             * @author Sam Brannen
             * @author Colin Sampaleanu
             * @author Rob Harrop
             * @since 1.1.2
             */
            // @ts-ignore
            abstract class Assert extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Assert a boolean expression, throwing an {@code IllegalStateException}
                 * if the expression evaluates to {@code false}.
                 * <p>Call {@link #isTrue} if you wish to throw an {@code IllegalArgumentException}
                 * on an assertion failure.
                 * <pre class="code">Assert.state(id == null, "The id property must not already be initialized");</pre>
                 * @param expression a boolean expression
                 * @param message the exception message to use if the assertion fails
                 * @throws IllegalStateException if {#code expression} is {@code false}
                 */
                // @ts-ignore
                public static state(expression: boolean, message: java.lang.String | string): void
                /**
                 * Assert a boolean expression, throwing an {@code IllegalStateException}
                 * if the expression evaluates to {@code false}.
                 * <p>Call {@link #isTrue} if you wish to throw an {@code IllegalArgumentException}
                 * on an assertion failure.
                 * <pre class="code">
                 * Assert.state(id == null,
                 * () -&gt; "ID for " + entity.getName() + " must not already be initialized");
                 * </pre>
                 * @param expression a boolean expression
                 * @param messageSupplier a supplier for the exception message to use if the
                 *  assertion fails
                 * @throws IllegalStateException if {#code expression} is {@code false}
                 * @since 5.0
                 */
                // @ts-ignore
                public static state(expression: boolean, messageSupplier: java.util.function$.Supplier<java.lang.String | string>): void
                /**
                 * Assert a boolean expression, throwing an {@code IllegalStateException}
                 * if the expression evaluates to {@code false}.
                 * @deprecated as of 4.3.7, in favor of {#link #state(boolean, String)}
                 */
                // @ts-ignore
                public static state(expression: boolean): void
                /**
                 * Assert a boolean expression, throwing an {@code IllegalArgumentException}
                 * if the expression evaluates to {@code false}.
                 * <pre class="code">Assert.isTrue(i &gt; 0, "The value must be greater than zero");</pre>
                 * @param expression a boolean expression
                 * @param message the exception message to use if the assertion fails
                 * @throws IllegalArgumentException if {#code expression} is {@code false}
                 */
                // @ts-ignore
                public static isTrue(expression: boolean, message: java.lang.String | string): void
                /**
                 * Assert a boolean expression, throwing an {@code IllegalArgumentException}
                 * if the expression evaluates to {@code false}.
                 * <pre class="code">
                 * Assert.isTrue(i &gt; 0, () -&gt; "The value '" + i + "' must be greater than zero");
                 * </pre>
                 * @param expression a boolean expression
                 * @param messageSupplier a supplier for the exception message to use if the
                 *  assertion fails
                 * @throws IllegalArgumentException if {#code expression} is {@code false}
                 * @since 5.0
                 */
                // @ts-ignore
                public static isTrue(expression: boolean, messageSupplier: java.util.function$.Supplier<java.lang.String | string>): void
                /**
                 * Assert a boolean expression, throwing an {@code IllegalArgumentException}
                 * if the expression evaluates to {@code false}.
                 * @deprecated as of 4.3.7, in favor of {#link #isTrue(boolean, String)}
                 */
                // @ts-ignore
                public static isTrue(expression: boolean): void
                /**
                 * Assert that an object is {@code null}.
                 * <pre class="code">Assert.isNull(value, "The value must be null");</pre>
                 * @param object the object to check
                 * @param message the exception message to use if the assertion fails
                 * @throws IllegalArgumentException if the object is not {#code null}
                 */
                // @ts-ignore
                public static isNull(object: java.lang.Object | any, message: java.lang.String | string): void
                /**
                 * Assert that an object is {@code null}.
                 * <pre class="code">
                 * Assert.isNull(value, () -&gt; "The value '" + value + "' must be null");
                 * </pre>
                 * @param object the object to check
                 * @param messageSupplier a supplier for the exception message to use if the
                 *  assertion fails
                 * @throws IllegalArgumentException if the object is not {#code null}
                 * @since 5.0
                 */
                // @ts-ignore
                public static isNull(object: java.lang.Object | any, messageSupplier: java.util.function$.Supplier<java.lang.String | string>): void
                /**
                 * Assert that an object is {@code null}.
                 * @deprecated as of 4.3.7, in favor of {#link #isNull(Object, String)}
                 */
                // @ts-ignore
                public static isNull(object: java.lang.Object | any): void
                /**
                 * Assert that an object is not {@code null}.
                 * <pre class="code">Assert.notNull(clazz, "The class must not be null");</pre>
                 * @param object the object to check
                 * @param message the exception message to use if the assertion fails
                 * @throws IllegalArgumentException if the object is {#code null}
                 */
                // @ts-ignore
                public static notNull(object: java.lang.Object | any, message: java.lang.String | string): void
                /**
                 * Assert that an object is not {@code null}.
                 * <pre class="code">
                 * Assert.notNull(clazz, () -&gt; "The class '" + clazz.getName() + "' must not be null");
                 * </pre>
                 * @param object the object to check
                 * @param messageSupplier a supplier for the exception message to use if the
                 *  assertion fails
                 * @throws IllegalArgumentException if the object is {#code null}
                 * @since 5.0
                 */
                // @ts-ignore
                public static notNull(object: java.lang.Object | any, messageSupplier: java.util.function$.Supplier<java.lang.String | string>): void
                /**
                 * Assert that an object is not {@code null}.
                 * @deprecated as of 4.3.7, in favor of {#link #notNull(Object, String)}
                 */
                // @ts-ignore
                public static notNull(object: java.lang.Object | any): void
                /**
                 * Assert that the given String is not empty; that is,
                 * it must not be {@code null} and not the empty String.
                 * <pre class="code">Assert.hasLength(name, "Name must not be empty");</pre>
                 * @param text the String to check
                 * @param message the exception message to use if the assertion fails
                 * @throws IllegalArgumentException if the text is empty
                 * @see StringUtils#hasLength
                 */
                // @ts-ignore
                public static hasLength(text: java.lang.String | string, message: java.lang.String | string): void
                /**
                 * Assert that the given String is not empty; that is,
                 * it must not be {@code null} and not the empty String.
                 * <pre class="code">
                 * Assert.hasLength(name, () -&gt; "Name for account '" + account.getId() + "' must not be empty");
                 * </pre>
                 * @param text the String to check
                 * @param messageSupplier a supplier for the exception message to use if the
                 *  assertion fails
                 * @throws IllegalArgumentException if the text is empty
                 * @since 5.0
                 * @see StringUtils#hasLength
                 */
                // @ts-ignore
                public static hasLength(text: java.lang.String | string, messageSupplier: java.util.function$.Supplier<java.lang.String | string>): void
                /**
                 * Assert that the given String is not empty; that is,
                 * it must not be {@code null} and not the empty String.
                 * @deprecated as of 4.3.7, in favor of {#link #hasLength(String, String)}
                 */
                // @ts-ignore
                public static hasLength(text: java.lang.String | string): void
                /**
                 * Assert that the given String contains valid text content; that is, it must not
                 * be {@code null} and must contain at least one non-whitespace character.
                 * <pre class="code">Assert.hasText(name, "'name' must not be empty");</pre>
                 * @param text the String to check
                 * @param message the exception message to use if the assertion fails
                 * @throws IllegalArgumentException if the text does not contain valid text content
                 * @see StringUtils#hasText
                 */
                // @ts-ignore
                public static hasText(text: java.lang.String | string, message: java.lang.String | string): void
                /**
                 * Assert that the given String contains valid text content; that is, it must not
                 * be {@code null} and must contain at least one non-whitespace character.
                 * <pre class="code">
                 * Assert.hasText(name, () -&gt; "Name for account '" + account.getId() + "' must not be empty");
                 * </pre>
                 * @param text the String to check
                 * @param messageSupplier a supplier for the exception message to use if the
                 *  assertion fails
                 * @throws IllegalArgumentException if the text does not contain valid text content
                 * @since 5.0
                 * @see StringUtils#hasText
                 */
                // @ts-ignore
                public static hasText(text: java.lang.String | string, messageSupplier: java.util.function$.Supplier<java.lang.String | string>): void
                /**
                 * Assert that the given String contains valid text content; that is, it must not
                 * be {@code null} and must contain at least one non-whitespace character.
                 * @deprecated as of 4.3.7, in favor of {#link #hasText(String, String)}
                 */
                // @ts-ignore
                public static hasText(text: java.lang.String | string): void
                /**
                 * Assert that the given text does not contain the given substring.
                 * <pre class="code">Assert.doesNotContain(name, "rod", "Name must not contain 'rod'");</pre>
                 * @param textToSearch the text to search
                 * @param substring the substring to find within the text
                 * @param message the exception message to use if the assertion fails
                 * @throws IllegalArgumentException if the text contains the substring
                 */
                // @ts-ignore
                public static doesNotContain(textToSearch: java.lang.String | string, substring: java.lang.String | string, message: java.lang.String | string): void
                /**
                 * Assert that the given text does not contain the given substring.
                 * <pre class="code">
                 * Assert.doesNotContain(name, forbidden, () -&gt; "Name must not contain '" + forbidden + "'");
                 * </pre>
                 * @param textToSearch the text to search
                 * @param substring the substring to find within the text
                 * @param messageSupplier a supplier for the exception message to use if the
                 *  assertion fails
                 * @throws IllegalArgumentException if the text contains the substring
                 * @since 5.0
                 */
                // @ts-ignore
                public static doesNotContain(textToSearch: java.lang.String | string, substring: java.lang.String | string, messageSupplier: java.util.function$.Supplier<java.lang.String | string>): void
                /**
                 * Assert that the given text does not contain the given substring.
                 * @deprecated as of 4.3.7, in favor of {#link #doesNotContain(String, String, String)}
                 */
                // @ts-ignore
                public static doesNotContain(textToSearch: java.lang.String | string, substring: java.lang.String | string): void
                /**
                 * Assert that an array contains elements; that is, it must not be
                 * {@code null} and must contain at least one element.
                 * <pre class="code">Assert.notEmpty(array, "The array must contain elements");</pre>
                 * @param array the array to check
                 * @param message the exception message to use if the assertion fails
                 * @throws IllegalArgumentException if the object array is {#code null} or contains no elements
                 */
                // @ts-ignore
                public static notEmpty(array: java.lang.Object[] | any[], message: java.lang.String | string): void
                /**
                 * Assert that an array contains elements; that is, it must not be
                 * {@code null} and must contain at least one element.
                 * <pre class="code">
                 * Assert.notEmpty(array, () -&gt; "The " + arrayType + " array must contain elements");
                 * </pre>
                 * @param array the array to check
                 * @param messageSupplier a supplier for the exception message to use if the
                 *  assertion fails
                 * @throws IllegalArgumentException if the object array is {#code null} or contains no elements
                 * @since 5.0
                 */
                // @ts-ignore
                public static notEmpty(array: java.lang.Object[] | any[], messageSupplier: java.util.function$.Supplier<java.lang.String | string>): void
                /**
                 * Assert that an array contains elements; that is, it must not be
                 * {@code null} and must contain at least one element.
                 * @deprecated as of 4.3.7, in favor of {#link #notEmpty(Object[], String)}
                 */
                // @ts-ignore
                public static notEmpty(array: java.lang.Object[] | any[]): void
                /**
                 * Assert that an array contains no {@code null} elements.
                 * <p>Note: Does not complain if the array is empty!
                 * <pre class="code">Assert.noNullElements(array, "The array must contain non-null elements");</pre>
                 * @param array the array to check
                 * @param message the exception message to use if the assertion fails
                 * @throws IllegalArgumentException if the object array contains a {#code null} element
                 */
                // @ts-ignore
                public static noNullElements(array: java.lang.Object[] | any[], message: java.lang.String | string): void
                /**
                 * Assert that an array contains no {@code null} elements.
                 * <p>Note: Does not complain if the array is empty!
                 * <pre class="code">
                 * Assert.noNullElements(array, () -&gt; "The " + arrayType + " array must contain non-null elements");
                 * </pre>
                 * @param array the array to check
                 * @param messageSupplier a supplier for the exception message to use if the
                 *  assertion fails
                 * @throws IllegalArgumentException if the object array contains a {#code null} element
                 * @since 5.0
                 */
                // @ts-ignore
                public static noNullElements(array: java.lang.Object[] | any[], messageSupplier: java.util.function$.Supplier<java.lang.String | string>): void
                /**
                 * Assert that an array contains no {@code null} elements.
                 * @deprecated as of 4.3.7, in favor of {#link #noNullElements(Object[], String)}
                 */
                // @ts-ignore
                public static noNullElements(array: java.lang.Object[] | any[]): void
                /**
                 * Assert that a collection contains elements; that is, it must not be
                 * {@code null} and must contain at least one element.
                 * <pre class="code">Assert.notEmpty(collection, "Collection must contain elements");</pre>
                 * @param collection the collection to check
                 * @param message the exception message to use if the assertion fails
                 * @throws IllegalArgumentException if the collection is {#code null} or
                 *  contains no elements
                 */
                // @ts-ignore
                public static notEmpty(collection: java.util.Collection<any> | Array<any>, message: java.lang.String | string): void
                /**
                 * Assert that a collection contains elements; that is, it must not be
                 * {@code null} and must contain at least one element.
                 * <pre class="code">
                 * Assert.notEmpty(collection, () -&gt; "The " + collectionType + " collection must contain elements");
                 * </pre>
                 * @param collection the collection to check
                 * @param messageSupplier a supplier for the exception message to use if the
                 *  assertion fails
                 * @throws IllegalArgumentException if the collection is {#code null} or
                 *  contains no elements
                 * @since 5.0
                 */
                // @ts-ignore
                public static notEmpty(collection: java.util.Collection<any> | Array<any>, messageSupplier: java.util.function$.Supplier<java.lang.String | string>): void
                /**
                 * Assert that a collection contains elements; that is, it must not be
                 * {@code null} and must contain at least one element.
                 * @deprecated as of 4.3.7, in favor of {#link #notEmpty(Collection, String)}
                 */
                // @ts-ignore
                public static notEmpty(collection: java.util.Collection<any> | Array<any>): void
                /**
                 * Assert that a collection contains no {@code null} elements.
                 * <p>Note: Does not complain if the collection is empty!
                 * <pre class="code">Assert.noNullElements(collection, "Collection must contain non-null elements");</pre>
                 * @param collection the collection to check
                 * @param message the exception message to use if the assertion fails
                 * @throws IllegalArgumentException if the collection contains a {#code null} element
                 * @since 5.2
                 */
                // @ts-ignore
                public static noNullElements(collection: java.util.Collection<any> | Array<any>, message: java.lang.String | string): void
                /**
                 * Assert that a collection contains no {@code null} elements.
                 * <p>Note: Does not complain if the collection is empty!
                 * <pre class="code">
                 * Assert.noNullElements(collection, () -&gt; "Collection " + collectionName + " must contain non-null elements");
                 * </pre>
                 * @param collection the collection to check
                 * @param messageSupplier a supplier for the exception message to use if the
                 *  assertion fails
                 * @throws IllegalArgumentException if the collection contains a {#code null} element
                 * @since 5.2
                 */
                // @ts-ignore
                public static noNullElements(collection: java.util.Collection<any> | Array<any>, messageSupplier: java.util.function$.Supplier<java.lang.String | string>): void
                /**
                 * Assert that a Map contains entries; that is, it must not be {@code null}
                 * and must contain at least one entry.
                 * <pre class="code">Assert.notEmpty(map, "Map must contain entries");</pre>
                 * @param map the map to check
                 * @param message the exception message to use if the assertion fails
                 * @throws IllegalArgumentException if the map is {#code null} or contains no entries
                 */
                // @ts-ignore
                public static notEmpty(map: java.util.Map<any, any>, message: java.lang.String | string): void
                /**
                 * Assert that a Map contains entries; that is, it must not be {@code null}
                 * and must contain at least one entry.
                 * <pre class="code">
                 * Assert.notEmpty(map, () -&gt; "The " + mapType + " map must contain entries");
                 * </pre>
                 * @param map the map to check
                 * @param messageSupplier a supplier for the exception message to use if the
                 *  assertion fails
                 * @throws IllegalArgumentException if the map is {#code null} or contains no entries
                 * @since 5.0
                 */
                // @ts-ignore
                public static notEmpty(map: java.util.Map<any, any>, messageSupplier: java.util.function$.Supplier<java.lang.String | string>): void
                /**
                 * Assert that a Map contains entries; that is, it must not be {@code null}
                 * and must contain at least one entry.
                 * @deprecated as of 4.3.7, in favor of {#link #notEmpty(Map, String)}
                 */
                // @ts-ignore
                public static notEmpty(map: java.util.Map<any, any>): void
                /**
                 * Assert that the provided object is an instance of the provided class.
                 * <pre class="code">Assert.instanceOf(Foo.class, foo, "Foo expected");</pre>
                 * @param type the type to check against
                 * @param obj the object to check
                 * @param message a message which will be prepended to provide further context.
                 *  If it is empty or ends in ":" or ";" or "," or ".", a full exception message
                 *  will be appended. If it ends in a space, the name of the offending object's
                 *  type will be appended. In any other case, a ":" with a space and the name
                 *  of the offending object's type will be appended.
                 * @throws IllegalArgumentException if the object is not an instance of type
                 */
                // @ts-ignore
                public static isInstanceOf(type: java.lang.Class<any>, obj: java.lang.Object | any, message: java.lang.String | string): void
                /**
                 * Assert that the provided object is an instance of the provided class.
                 * <pre class="code">
                 * Assert.instanceOf(Foo.class, foo, () -&gt; "Processing " + Foo.class.getSimpleName() + ":");
                 * </pre>
                 * @param type the type to check against
                 * @param obj the object to check
                 * @param messageSupplier a supplier for the exception message to use if the
                 *  assertion fails. See {#link #isInstanceOf(Class, Object, String)} for details.
                 * @throws IllegalArgumentException if the object is not an instance of type
                 * @since 5.0
                 */
                // @ts-ignore
                public static isInstanceOf(type: java.lang.Class<any>, obj: java.lang.Object | any, messageSupplier: java.util.function$.Supplier<java.lang.String | string>): void
                /**
                 * Assert that the provided object is an instance of the provided class.
                 * <pre class="code">Assert.instanceOf(Foo.class, foo);</pre>
                 * @param type the type to check against
                 * @param obj the object to check
                 * @throws IllegalArgumentException if the object is not an instance of type
                 */
                // @ts-ignore
                public static isInstanceOf(type: java.lang.Class<any>, obj: java.lang.Object | any): void
                /**
                 * Assert that {@code superType.isAssignableFrom(subType)} is {@code true}.
                 * <pre class="code">Assert.isAssignable(Number.class, myClass, "Number expected");</pre>
                 * @param superType the super type to check against
                 * @param subType the sub type to check
                 * @param message a message which will be prepended to provide further context.
                 *  If it is empty or ends in ":" or ";" or "," or ".", a full exception message
                 *  will be appended. If it ends in a space, the name of the offending sub type
                 *  will be appended. In any other case, a ":" with a space and the name of the
                 *  offending sub type will be appended.
                 * @throws IllegalArgumentException if the classes are not assignable
                 */
                // @ts-ignore
                public static isAssignable(superType: java.lang.Class<any>, subType: java.lang.Class<any>, message: java.lang.String | string): void
                /**
                 * Assert that {@code superType.isAssignableFrom(subType)} is {@code true}.
                 * <pre class="code">
                 * Assert.isAssignable(Number.class, myClass, () -&gt; "Processing " + myAttributeName + ":");
                 * </pre>
                 * @param superType the super type to check against
                 * @param subType the sub type to check
                 * @param messageSupplier a supplier for the exception message to use if the
                 *  assertion fails. See {#link #isAssignable(Class, Class, String)} for details.
                 * @throws IllegalArgumentException if the classes are not assignable
                 * @since 5.0
                 */
                // @ts-ignore
                public static isAssignable(superType: java.lang.Class<any>, subType: java.lang.Class<any>, messageSupplier: java.util.function$.Supplier<java.lang.String | string>): void
                /**
                 * Assert that {@code superType.isAssignableFrom(subType)} is {@code true}.
                 * <pre class="code">Assert.isAssignable(Number.class, myClass);</pre>
                 * @param superType the super type to check
                 * @param subType the sub type to check
                 * @throws IllegalArgumentException if the classes are not assignable
                 */
                // @ts-ignore
                public static isAssignable(superType: java.lang.Class<any>, subType: java.lang.Class<any>): void
            }
        }
    }
}
