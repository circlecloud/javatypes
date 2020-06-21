declare namespace javax {
    namespace management {
        namespace openmbean {
            /**
             * The <code>SimpleType</code> class is the <i>open type</i> class whose instances describe
             * all <i>open data</i> values which are neither arrays,
             * nor {@link CompositeData CompositeData} values,
             * nor {@link TabularData TabularData} values.
             * It predefines all its possible instances as static fields, and has no public constructor.
             * <p>
             * Given a <code>SimpleType</code> instance describing values whose Java class name is <i>className</i>,
             * the internal fields corresponding to the name and description of this <code>SimpleType</code> instance
             * are also set to <i>className</i>.
             * In other words, its methods <code>getClassName</code>, <code>getTypeName</code> and <code>getDescription</code>
             * all return the same string value <i>className</i>.
             * @since 1.5
             */
            // @ts-ignore
            class SimpleType<T> extends javax.management.openmbean.OpenType<T> {
                /**
                 * The <code>SimpleType</code> instance describing values whose
                 * Java class name is <code>java.lang.Void</code>.
                 */
                // @ts-ignore
                public static readonly VOID: javax.management.openmbean.SimpleType<java.lang.Void>
                /**
                 * The <code>SimpleType</code> instance describing values whose
                 * Java class name is <code>java.lang.Boolean</code>.
                 */
                // @ts-ignore
                public static readonly BOOLEAN: javax.management.openmbean.SimpleType<java.lang.Boolean>
                /**
                 * The <code>SimpleType</code> instance describing values whose
                 * Java class name is <code>java.lang.Character</code>.
                 */
                // @ts-ignore
                public static readonly CHARACTER: javax.management.openmbean.SimpleType<java.lang.Character>
                /**
                 * The <code>SimpleType</code> instance describing values whose
                 * Java class name is <code>java.lang.Byte</code>.
                 */
                // @ts-ignore
                public static readonly BYTE: javax.management.openmbean.SimpleType<java.lang.Byte | number>
                /**
                 * The <code>SimpleType</code> instance describing values whose
                 * Java class name is <code>java.lang.Short</code>.
                 */
                // @ts-ignore
                public static readonly SHORT: javax.management.openmbean.SimpleType<java.lang.Short | number>
                /**
                 * The <code>SimpleType</code> instance describing values whose
                 * Java class name is <code>java.lang.Integer</code>.
                 */
                // @ts-ignore
                public static readonly INTEGER: javax.management.openmbean.SimpleType<java.lang.Integer | number>
                /**
                 * The <code>SimpleType</code> instance describing values whose
                 * Java class name is <code>java.lang.Long</code>.
                 */
                // @ts-ignore
                public static readonly LONG: javax.management.openmbean.SimpleType<java.lang.Long | number>
                /**
                 * The <code>SimpleType</code> instance describing values whose
                 * Java class name is <code>java.lang.Float</code>.
                 */
                // @ts-ignore
                public static readonly FLOAT: javax.management.openmbean.SimpleType<java.lang.Float | number>
                /**
                 * The <code>SimpleType</code> instance describing values whose
                 * Java class name is <code>java.lang.Double</code>.
                 */
                // @ts-ignore
                public static readonly DOUBLE: javax.management.openmbean.SimpleType<java.lang.Double | number>
                /**
                 * The <code>SimpleType</code> instance describing values whose
                 * Java class name is <code>java.lang.String</code>.
                 */
                // @ts-ignore
                public static readonly STRING: javax.management.openmbean.SimpleType<java.lang.String | string>
                /**
                 * The <code>SimpleType</code> instance describing values whose
                 * Java class name is <code>java.math.BigDecimal</code>.
                 */
                // @ts-ignore
                public static readonly BIGDECIMAL: javax.management.openmbean.SimpleType<java.math.BigDecimal>
                /**
                 * The <code>SimpleType</code> instance describing values whose
                 * Java class name is <code>java.math.BigInteger</code>.
                 */
                // @ts-ignore
                public static readonly BIGINTEGER: javax.management.openmbean.SimpleType<java.math.BigInteger>
                /**
                 * The <code>SimpleType</code> instance describing values whose
                 * Java class name is <code>java.util.Date</code>.
                 */
                // @ts-ignore
                public static readonly DATE: javax.management.openmbean.SimpleType<java.util.Date>
                /**
                 * The <code>SimpleType</code> instance describing values whose
                 * Java class name is <code>javax.management.ObjectName</code>.
                 */
                // @ts-ignore
                public static readonly OBJECTNAME: javax.management.openmbean.SimpleType<javax.management.ObjectName>
                /**
                 * Tests whether <var>obj</var> is a value for this
                 * <code>SimpleType</code> instance.  <p> This method returns
                 * <code>true</code> if and only if <var>obj</var> is not null and
                 * <var>obj</var>'s class name is the same as the className field
                 * defined for this <code>SimpleType</code> instance (ie the class
                 * name returned by the {@link OpenType#getClassName()
                 * getClassName} method).
                 * @param obj the object to be tested.
                 * @return <code>true</code> if <var>obj</var> is a value for this
                 *  <code>SimpleType</code> instance.
                 */
                // @ts-ignore
                public isValue(obj: java.lang.Object | any): boolean
                /**
                 * Compares the specified <code>obj</code> parameter with this <code>SimpleType</code> instance for equality.
                 * <p>
                 * Two <code>SimpleType</code> instances are equal if and only if their
                 * {@link OpenType#getClassName() getClassName} methods return the same value.
                 * @param obj  the object to be compared for equality with this <code>SimpleType</code> instance;
                 *               if <var>obj</var> is <code>null</code> or is not an instance of the class <code>SimpleType</code>,
                 *               <code>equals</code> returns <code>false</code>.
                 * @return <code>true</code> if the specified object is equal to this <code>SimpleType</code> instance.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                /**
                 * Returns the hash code value for this <code>SimpleType</code> instance.
                 * The hash code of a <code>SimpleType</code> instance is the the hash code of
                 * the string value returned by the {@link OpenType#getClassName() getClassName} method.
                 * <p>
                 * As <code>SimpleType</code> instances are immutable, the hash code for this instance is calculated once,
                 * on the first call to <code>hashCode</code>, and then the same value is returned for subsequent calls.
                 * @return the hash code value for this <code>SimpleType</code> instance
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Returns a string representation of this <code>SimpleType</code> instance.
                 * <p>
                 * The string representation consists of
                 * the name of this class (ie <code>javax.management.openmbean.SimpleType</code>) and the type name
                 * for this instance (which is the java class name of the values this <code>SimpleType</code> instance represents).
                 * <p>
                 * As <code>SimpleType</code> instances are immutable, the string representation for this instance is calculated once,
                 * on the first call to <code>toString</code>, and then the same value is returned for subsequent calls.
                 * @return a string representation of this <code>SimpleType</code> instance
                 */
                // @ts-ignore
                public toString(): string
                /**
                 * Replace an object read from an {@link
                 * java.io.ObjectInputStream} with the unique instance for that
                 * value.
                 * @return the replacement object.
                 * @exception ObjectStreamException if the read object cannot be
                 *  resolved.
                 */
                // @ts-ignore
                public readResolve(): any
            }
        }
    }
}
