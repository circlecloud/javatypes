declare namespace javax {
    namespace management {
        namespace openmbean {
            /**
             * The <code>OpenType</code> class is the parent abstract class of all classes which describe the actual <i>open type</i>
             * of open data values.
             * <p>
             * An <i>open type</i> is defined by:
             * <ul>
             * <li>the fully qualified Java class name of the open data values this type describes;
             * note that only a limited set of Java classes is allowed for open data values
             * (see {@link #ALLOWED_CLASSNAMES_LIST ALLOWED_CLASSNAMES_LIST}),</li>
             * <li>its name,</li>
             * <li>its description.</li>
             * </ul>
             * @param <T> the Java type that instances described by this type must
             *  have.  For example, {#link SimpleType#INTEGER} is a {@code
             *  SimpleType<Integer>} which is a subclass of {@code OpenType<Integer>},
             *  meaning that an attribute, parameter, or return value that is described
             *  as a {@code SimpleType.INTEGER} must have Java type
             *  {@link Integer}.
             * @since 1.5
             */
            // @ts-ignore
            class OpenType<T> extends java.lang.Object implements java.io.Serializable {
                /**
                 * Constructs an <code>OpenType</code> instance (actually a subclass instance as <code>OpenType</code> is abstract),
                 * checking for the validity of the given parameters.
                 * The validity constraints are described below for each parameter.
                 * <br>&nbsp;
                 * @param className  The fully qualified Java class name of the open data values this open type describes.
                 *                     The valid Java class names allowed for open data values are listed in
                 *                     {#link #ALLOWED_CLASSNAMES_LIST ALLOWED_CLASSNAMES_LIST}.
                 *                     A multidimensional array of any one of these classes
                 *                     or their corresponding primitive types is also an allowed class,
                 *                     in which case the class name follows the rules defined by the method
                 *                     {@link Class#getName() getName()} of <code>java.lang.Class</code>.
                 *                     For example, a 3-dimensional array of Strings has for class name
                 *                     &quot;<code>[[[Ljava.lang.String;</code>&quot; (without the quotes).
                 *  <br>&nbsp;
                 * @param typeName  The name given to the open type this instance represents; cannot be a null or empty string.
                 *  <br>&nbsp;
                 * @param description  The human readable description of the open type this instance represents;
                 *                       cannot be a null or empty string.
                 *  <br>&nbsp;
                 * @throws IllegalArgumentException  if <var>className</var>, <var>typeName</var> or <var>description</var>
                 *                                    is a null or empty string
                 *  <br>&nbsp;
                 * @throws OpenDataException  if <var>className</var> is not one of the allowed Java class names for open data
                 */
                // @ts-ignore
                constructor(className: string, typeName: string, description: string)
                /**
                 * List of the fully qualified names of the Java classes allowed for open
                 * data values. A multidimensional array of any one of these classes or
                 * their corresponding primitive types is also an allowed class for open
                 * data values.
                 * <pre>ALLOWED_CLASSNAMES_LIST = {
                 * "java.lang.Void",
                 * "java.lang.Boolean",
                 * "java.lang.Character",
                 * "java.lang.Byte",
                 * "java.lang.Short",
                 * "java.lang.Integer",
                 * "java.lang.Long",
                 * "java.lang.Float",
                 * "java.lang.Double",
                 * "java.lang.String",
                 * "java.math.BigDecimal",
                 * "java.math.BigInteger",
                 * "java.util.Date",
                 * "javax.management.ObjectName",
                 * CompositeData.class.getName(),
                 * TabularData.class.getName() } ;
                 * </pre>
                 */
                // @ts-ignore
                readonly ALLOWED_CLASSNAMES_LIST: Array<java.lang.String>
                /**
                 * @deprecated Use {#link #ALLOWED_CLASSNAMES_LIST ALLOWED_CLASSNAMES_LIST} instead.
                 */
                // @ts-ignore
                readonly ALLOWED_CLASSNAMES: string[]
                /**
                 * Returns the fully qualified Java class name of the open data values
                 * this open type describes.
                 * The only possible Java class names for open data values are listed in
                 * {@link #ALLOWED_CLASSNAMES_LIST ALLOWED_CLASSNAMES_LIST}.
                 * A multidimensional array of any one of these classes or their
                 * corresponding primitive types is also an allowed class,
                 * in which case the class name follows the rules defined by the method
                 * {@link Class#getName() getName()} of <code>java.lang.Class</code>.
                 * For example, a 3-dimensional array of Strings has for class name
                 * &quot;<code>[[[Ljava.lang.String;</code>&quot; (without the quotes),
                 * a 3-dimensional array of Integers has for class name
                 * &quot;<code>[[[Ljava.lang.Integer;</code>&quot; (without the quotes),
                 * and a 3-dimensional array of int has for class name
                 * &quot;<code>[[[I</code>&quot; (without the quotes)
                 * @return the class name.
                 */
                // @ts-ignore
                getClassName(): java.lang.String
                /**
                 * Returns the name of this <code>OpenType</code> instance.
                 * @return the type name.
                 */
                // @ts-ignore
                getTypeName(): java.lang.String
                /**
                 * Returns the text description of this <code>OpenType</code> instance.
                 * @return the description.
                 */
                // @ts-ignore
                getDescription(): java.lang.String
                /**
                 * Returns <code>true</code> if the open data values this open
                 * type describes are arrays, <code>false</code> otherwise.
                 * @return true if this is an array type.
                 */
                // @ts-ignore
                isArray(): boolean
                /**
                 * Tests whether <var>obj</var> is a value for this open type.
                 * @param obj the object to be tested for validity.
                 * @return <code>true</code> if <var>obj</var> is a value for this
                 *  open type, <code>false</code> otherwise.
                 */
                // @ts-ignore
                abstract isValue(obj: any): boolean
                /**
                 * Compares the specified <code>obj</code> parameter with this
                 * open type instance for equality.
                 * @param obj the object to compare to.
                 * @return true if this object and <code>obj</code> are equal.
                 */
                // @ts-ignore
                abstract equals(obj: any): boolean
                // @ts-ignore
                abstract hashCode(): int
                /**
                 * Returns a string representation of this open type instance.
                 * @return the string representation.
                 */
                // @ts-ignore
                abstract toString(): java.lang.String
            }
        }
    }
}
