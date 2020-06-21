declare namespace javax {
    namespace management {
        namespace openmbean {
            /**
             * The <code>ArrayType</code> class is the <i>open type</i> class whose instances describe
             * all <i>open data</i> values which are n-dimensional arrays of <i>open data</i> values.
             * <p>
             * Examples of valid {@code ArrayType} instances are:
             * <pre>{@code
             * // 2-dimension array of java.lang.String
             * ArrayType<String[][]> a1 = new ArrayType<String[][]>(2, SimpleType.STRING);
             * // 1-dimension array of int
             * ArrayType<int[]> a2 = new ArrayType<int[]>(SimpleType.INTEGER, true);
             * // 1-dimension array of java.lang.Integer
             * ArrayType<Integer[]> a3 = new ArrayType<Integer[]>(SimpleType.INTEGER, false);
             * // 4-dimension array of int
             * ArrayType<int[][][][]> a4 = new ArrayType<int[][][][]>(3, a2);
             * // 4-dimension array of java.lang.Integer
             * ArrayType<Integer[][][][]> a5 = new ArrayType<Integer[][][][]>(3, a3);
             * // 1-dimension array of java.lang.String
             * ArrayType<String[]> a6 = new ArrayType<String[]>(SimpleType.STRING, false);
             * // 1-dimension array of long
             * ArrayType<long[]> a7 = new ArrayType<long[]>(SimpleType.LONG, true);
             * // 1-dimension array of java.lang.Integer
             * ArrayType<Integer[]> a8 = ArrayType.getArrayType(SimpleType.INTEGER);
             * // 2-dimension array of java.lang.Integer
             * ArrayType<Integer[][]> a9 = ArrayType.getArrayType(a8);
             * // 2-dimension array of int
             * ArrayType<int[][]> a10 = ArrayType.getPrimitiveArrayType(int[][].class);
             * // 3-dimension array of int
             * ArrayType<int[][][]> a11 = ArrayType.getArrayType(a10);
             * // 1-dimension array of float
             * ArrayType<float[]> a12 = ArrayType.getPrimitiveArrayType(float[].class);
             * // 2-dimension array of float
             * ArrayType<float[][]> a13 = ArrayType.getArrayType(a12);
             * // 1-dimension array of javax.management.ObjectName
             * ArrayType<ObjectName[]> a14 = ArrayType.getArrayType(SimpleType.OBJECTNAME);
             * // 2-dimension array of javax.management.ObjectName
             * ArrayType<ObjectName[][]> a15 = ArrayType.getArrayType(a14);
             * // 3-dimension array of java.lang.String
             * ArrayType<String[][][]> a16 = new ArrayType<String[][][]>(3, SimpleType.STRING);
             * // 1-dimension array of java.lang.String
             * ArrayType<String[]> a17 = new ArrayType<String[]>(1, SimpleType.STRING);
             * // 2-dimension array of java.lang.String
             * ArrayType<String[][]> a18 = new ArrayType<String[][]>(1, a17);
             * // 3-dimension array of java.lang.String
             * ArrayType<String[][][]> a19 = new ArrayType<String[][][]>(1, a18);
             * }</pre>
             * @since 1.5
             */
            // @ts-ignore
            class ArrayType<T> extends javax.management.openmbean.OpenType<T> {
                /**
                 * Constructs an <tt>ArrayType</tt> instance describing <i>open data</i> values which are
                 * arrays with dimension <var>dimension</var> of elements whose <i>open type</i> is <var>elementType</var>.
                 * <p>
                 * When invoked on an <tt>ArrayType</tt> instance, the {@link OpenType#getClassName() getClassName} method
                 * returns the class name of the array instances it describes (following the rules defined by the
                 * {@link Class#getName() getName} method of <code>java.lang.Class</code>), not the class name of the array elements
                 * (which is returned by a call to <tt>getElementOpenType().getClassName()</tt>).
                 * <p>
                 * The internal field corresponding to the type name of this <code>ArrayType</code> instance is also set to
                 * the class name of the array instances it describes.
                 * In other words, the methods <code>getClassName</code> and <code>getTypeName</code> return the same string value.
                 * The internal field corresponding to the description of this <code>ArrayType</code> instance is set to a string value
                 * which follows the following template:
                 * <ul>
                 * <li>if non-primitive array: <tt><i>&lt;dimension&gt;</i>-dimension array of <i>&lt;element_class_name&gt;</i></tt></li>
                 * <li>if primitive array: <tt><i>&lt;dimension&gt;</i>-dimension array of <i>&lt;primitive_type_of_the_element_class_name&gt;</i></tt></li>
                 * </ul>
                 * <p>
                 * As an example, the following piece of code:
                 * <pre>{@code
                 * ArrayType<String[][][]> t = new ArrayType<String[][][]>(3, SimpleType.STRING);
                 * System.out.println("array class name       = " + t.getClassName());
                 * System.out.println("element class name     = " + t.getElementOpenType().getClassName());
                 * System.out.println("array type name        = " + t.getTypeName());
                 * System.out.println("array type description = " + t.getDescription());
                 * }</pre>
                 * would produce the following output:
                 * <pre>{@code
                 * array class name       = [[[Ljava.lang.String;
                 * element class name     = java.lang.String
                 * array type name        = [[[Ljava.lang.String;
                 * array type description = 3-dimension array of java.lang.String
                 * }</pre>
                 * And the following piece of code which is equivalent to the one listed
                 * above would also produce the same output:
                 * <pre>{@code
                 * ArrayType<String[]> t1 = new ArrayType<String[]>(1, SimpleType.STRING);
                 * ArrayType<String[][]> t2 = new ArrayType<String[][]>(1, t1);
                 * ArrayType<String[][][]> t3 = new ArrayType<String[][][]>(1, t2);
                 * System.out.println("array class name       = " + t3.getClassName());
                 * System.out.println("element class name     = " + t3.getElementOpenType().getClassName());
                 * System.out.println("array type name        = " + t3.getTypeName());
                 * System.out.println("array type description = " + t3.getDescription());
                 * }</pre>
                 * @param dimension  the dimension of arrays described by this <tt>ArrayType</tt> instance;
                 *                     must be greater than or equal to 1.
                 * @param elementType  the <i>open type</i> of element values contained
                 *                       in the arrays described by this <tt>ArrayType</tt>
                 *                       instance; must be an instance of either
                 *                       <tt>SimpleType</tt>, <tt>CompositeType</tt>,
                 *                       <tt>TabularType</tt> or another <tt>ArrayType</tt>
                 *                       with a <tt>SimpleType</tt>, <tt>CompositeType</tt>
                 *                       or <tt>TabularType</tt> as its <tt>elementType</tt>.
                 * @throws IllegalArgumentException if {#code dimension} is not a positive
                 *                                   integer.
                 * @throws OpenDataException  if <var>elementType's className</var> is not
                 *                             one of the allowed Java class names for open
                 *                             data.
                 */
                // @ts-ignore
                constructor(dimension: number /*int*/, elementType: javax.management.openmbean.OpenType<any>)
                /**
                 * Constructs a unidimensional {@code ArrayType} instance for the
                 * supplied {@code SimpleType}.
                 * <p>
                 * This constructor supports the creation of arrays of primitive
                 * types when {@code primitiveArray} is {@code true}.
                 * <p>
                 * For primitive arrays the {@link #getElementOpenType()} method
                 * returns the {@link SimpleType} corresponding to the wrapper
                 * type of the primitive type of the array.
                 * <p>
                 * When invoked on an <tt>ArrayType</tt> instance, the {@link OpenType#getClassName() getClassName} method
                 * returns the class name of the array instances it describes (following the rules defined by the
                 * {@link Class#getName() getName} method of <code>java.lang.Class</code>), not the class name of the array elements
                 * (which is returned by a call to <tt>getElementOpenType().getClassName()</tt>).
                 * <p>
                 * The internal field corresponding to the type name of this <code>ArrayType</code> instance is also set to
                 * the class name of the array instances it describes.
                 * In other words, the methods <code>getClassName</code> and <code>getTypeName</code> return the same string value.
                 * The internal field corresponding to the description of this <code>ArrayType</code> instance is set to a string value
                 * which follows the following template:
                 * <ul>
                 * <li>if non-primitive array: <tt>1-dimension array of <i>&lt;element_class_name&gt;</i></tt></li>
                 * <li>if primitive array: <tt>1-dimension array of <i>&lt;primitive_type_of_the_element_class_name&gt;</i></tt></li>
                 * </ul>
                 * <p>
                 * As an example, the following piece of code:
                 * <pre>{@code
                 * ArrayType<int[]> t = new ArrayType<int[]>(SimpleType.INTEGER, true);
                 * System.out.println("array class name       = " + t.getClassName());
                 * System.out.println("element class name     = " + t.getElementOpenType().getClassName());
                 * System.out.println("array type name        = " + t.getTypeName());
                 * System.out.println("array type description = " + t.getDescription());
                 * }</pre>
                 * would produce the following output:
                 * <pre>{@code
                 * array class name       = [I
                 * element class name     = java.lang.Integer
                 * array type name        = [I
                 * array type description = 1-dimension array of int
                 * }</pre>
                 * @param elementType the {#code SimpleType} of the element values
                 *                     contained in the arrays described by this
                 *                     {@code ArrayType} instance.
                 * @param primitiveArray {#code true} when this array describes
                 *                        primitive arrays.
                 * @throws IllegalArgumentException if {#code dimension} is not a positive
                 *  integer.
                 * @throws OpenDataException if {#code primitiveArray} is {@code true} and
                 *  {@code elementType} is not a valid {@code SimpleType} for a primitive
                 *  type.
                 * @since 1.6
                 */
                // @ts-ignore
                constructor(elementType: javax.management.openmbean.SimpleType<any>, primitiveArray: boolean)
                /**
                 * Returns the dimension of arrays described by this <tt>ArrayType</tt> instance.
                 * @return the dimension.
                 */
                // @ts-ignore
                public getDimension(): number /*int*/
                /**
                 * Returns the <i>open type</i> of element values contained in the arrays described by this <tt>ArrayType</tt> instance.
                 * @return the element type.
                 */
                // @ts-ignore
                public getElementOpenType(): javax.management.openmbean.OpenType<any>
                /**
                 * Returns <code>true</code> if the open data values this open
                 * type describes are primitive arrays, <code>false</code> otherwise.
                 * @return true if this is a primitive array type.
                 * @since 1.6
                 */
                // @ts-ignore
                public isPrimitiveArray(): boolean
                /**
                 * Tests whether <var>obj</var> is a value for this <code>ArrayType</code>
                 * instance.
                 * <p>
                 * This method returns <code>true</code> if and only if <var>obj</var>
                 * is not null, <var>obj</var> is an array and any one of the following
                 * is <tt>true</tt>:
                 * <ul>
                 * <li>if this <code>ArrayType</code> instance describes an array of
                 * <tt>SimpleType</tt> elements or their corresponding primitive types,
                 * <var>obj</var>'s class name is the same as the className field defined
                 * for this <code>ArrayType</code> instance (i.e. the class name returned
                 * by the {@link OpenType#getClassName() getClassName} method, which
                 * includes the dimension information),<br>&nbsp;</li>
                 * <li>if this <code>ArrayType</code> instance describes an array of
                 * classes implementing the {@code TabularData} interface or the
                 * {@code CompositeData} interface, <var>obj</var> is assignable to
                 * such a declared array, and each element contained in {<var>obj</var>
                 * is either null or a valid value for the element's open type specified
                 * by this <code>ArrayType</code> instance.</li>
                 * </ul>
                 * @param obj the object to be tested.
                 * @return <code>true</code> if <var>obj</var> is a value for this
                 *  <code>ArrayType</code> instance.
                 */
                // @ts-ignore
                public isValue(obj: java.lang.Object | any): boolean
                /**
                 * Compares the specified <code>obj</code> parameter with this
                 * <code>ArrayType</code> instance for equality.
                 * <p>
                 * Two <code>ArrayType</code> instances are equal if and only if they
                 * describe array instances which have the same dimension, elements'
                 * open type and primitive array flag.
                 * @param obj the object to be compared for equality with this
                 *             <code>ArrayType</code> instance; if <var>obj</var>
                 *             is <code>null</code> or is not an instance of the
                 *             class <code>ArrayType</code> this method returns
                 *             <code>false</code>.
                 * @return <code>true</code> if the specified object is equal to
                 *          this <code>ArrayType</code> instance.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                /**
                 * Returns the hash code value for this <code>ArrayType</code> instance.
                 * <p>
                 * The hash code of an <code>ArrayType</code> instance is the sum of the
                 * hash codes of all the elements of information used in <code>equals</code>
                 * comparisons (i.e. dimension, elements' open type and primitive array flag).
                 * The hashcode for a primitive value is the hashcode of the corresponding boxed
                 * object (e.g. the hashcode for <tt>true</tt> is <tt>Boolean.TRUE.hashCode()</tt>).
                 * This ensures that <code> t1.equals(t2) </code> implies that
                 * <code> t1.hashCode()==t2.hashCode() </code> for any two
                 * <code>ArrayType</code> instances <code>t1</code> and <code>t2</code>,
                 * as required by the general contract of the method
                 * {@link Object#hashCode() Object.hashCode()}.
                 * <p>
                 * As <code>ArrayType</code> instances are immutable, the hash
                 * code for this instance is calculated once, on the first call
                 * to <code>hashCode</code>, and then the same value is returned
                 * for subsequent calls.
                 * @return the hash code value for this <code>ArrayType</code> instance
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Returns a string representation of this <code>ArrayType</code> instance.
                 * <p>
                 * The string representation consists of the name of this class (i.e.
                 * <code>javax.management.openmbean.ArrayType</code>), the type name,
                 * the dimension, the elements' open type and the primitive array flag
                 * defined for this instance.
                 * <p>
                 * As <code>ArrayType</code> instances are immutable, the
                 * string representation for this instance is calculated
                 * once, on the first call to <code>toString</code>, and
                 * then the same value is returned for subsequent calls.
                 * @return a string representation of this <code>ArrayType</code> instance
                 */
                // @ts-ignore
                public toString(): string
                /**
                 * Create an {@code ArrayType} instance in a type-safe manner.
                 * <p>
                 * Multidimensional arrays can be built up by calling this method as many
                 * times as necessary.
                 * <p>
                 * Calling this method twice with the same parameters may return the same
                 * object or two equal but not identical objects.
                 * <p>
                 * As an example, the following piece of code:
                 * <pre>{@code
                 * ArrayType<String[]> t1 = ArrayType.getArrayType(SimpleType.STRING);
                 * ArrayType<String[][]> t2 = ArrayType.getArrayType(t1);
                 * ArrayType<String[][][]> t3 = ArrayType.getArrayType(t2);
                 * System.out.println("array class name       = " + t3.getClassName());
                 * System.out.println("element class name     = " + t3.getElementOpenType().getClassName());
                 * System.out.println("array type name        = " + t3.getTypeName());
                 * System.out.println("array type description = " + t3.getDescription());
                 * }</pre>
                 * would produce the following output:
                 * <pre>{@code
                 * array class name       = [[[Ljava.lang.String;
                 * element class name     = java.lang.String
                 * array type name        = [[[Ljava.lang.String;
                 * array type description = 3-dimension array of java.lang.String
                 * }</pre>
                 * @param elementType  the <i>open type</i> of element values contained
                 *                       in the arrays described by this <tt>ArrayType</tt>
                 *                       instance; must be an instance of either
                 *                       <tt>SimpleType</tt>, <tt>CompositeType</tt>,
                 *                       <tt>TabularType</tt> or another <tt>ArrayType</tt>
                 *                       with a <tt>SimpleType</tt>, <tt>CompositeType</tt>
                 *                       or <tt>TabularType</tt> as its <tt>elementType</tt>.
                 * @throws OpenDataException if <var>elementType's className</var> is not
                 *                            one of the allowed Java class names for open
                 *                            data.
                 * @since 1.6
                 */
                // @ts-ignore
                public static getArrayType<E>(elementType: javax.management.openmbean.OpenType<E>): javax.management.openmbean.ArrayType<E[]>
                /**
                 * Create an {@code ArrayType} instance in a type-safe manner.
                 * <p>
                 * Calling this method twice with the same parameters may return the
                 * same object or two equal but not identical objects.
                 * <p>
                 * As an example, the following piece of code:
                 * <pre>{@code
                 * ArrayType<int[][][]> t = ArrayType.getPrimitiveArrayType(int[][][].class);
                 * System.out.println("array class name       = " + t.getClassName());
                 * System.out.println("element class name     = " + t.getElementOpenType().getClassName());
                 * System.out.println("array type name        = " + t.getTypeName());
                 * System.out.println("array type description = " + t.getDescription());
                 * }</pre>
                 * would produce the following output:
                 * <pre>{@code
                 * array class name       = [[[I
                 * element class name     = java.lang.Integer
                 * array type name        = [[[I
                 * array type description = 3-dimension array of int
                 * }</pre>
                 * @param arrayClass a primitive array class such as {#code int[].class},
                 *                    {@code boolean[][].class}, etc. The {@link
                 *                    #getElementOpenType()} method of the returned
                 *                    {@code ArrayType} returns the {@link SimpleType}
                 *                    corresponding to the wrapper type of the primitive
                 *                    type of the array.
                 * @throws IllegalArgumentException if <var>arrayClass</var> is not
                 *                                   a primitive array.
                 * @since 1.6
                 */
                // @ts-ignore
                public static getPrimitiveArrayType<T>(arrayClass: java.lang.Class<T>): javax.management.openmbean.ArrayType<T>
            }
        }
    }
}
