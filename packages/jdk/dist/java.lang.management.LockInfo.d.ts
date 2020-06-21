declare namespace java {
    namespace lang {
        namespace management {
            /**
             * This class represents information about locked objects.
             * @since 1.6
             */
            // @ts-ignore
            class LockInfo extends java.lang.Object {
                /**
                 * Creates a new <code>LockInfo</code> instance.
                 * @param className
                 *             the name (including the package prefix) of the associated lock
                 *             object's class
                 * @param identityHashCode
                 *             the value of the associated lock object's identity hash code.
                 *             This amounts to the result of calling
                 *             {#link System#identityHashCode(Object)} with the lock object
                 *             as the sole argument.
                 * @throws NullPointerException
                 *              if <code>className</code> is <code>null</code>
                 */
                // @ts-ignore
                constructor(className: java.lang.String | string, identityHashCode: number /*int*/)
                /**
                 * Returns the name of the lock object's class in fully qualified form (i.e.
                 * including the package prefix).
                 * @return the associated lock object's class name
                 */
                // @ts-ignore
                public getClassName(): string
                /**
                 * Returns the value of the associated lock object's identity hash code
                 * @return the identity hash code of the lock object
                 */
                // @ts-ignore
                public getIdentityHashCode(): number /*int*/
                /**
                 * Returns a {@code LockInfo} object represented by the given
                 * {@code CompositeData}. The given {@code CompositeData} must contain the
                 * following attributes: <blockquote>
                 * <table>
                 * <caption>The attributes and the types the given CompositeData contains</caption>
                 * <tr>
                 * <th style="float:left">Attribute Name</th>
                 * <th style="float:left">Type</th>
                 * </tr>
                 * <tr>
                 * <td>className</td>
                 * <td><code>java.lang.String</code></td>
                 * </tr>
                 * <tr>
                 * <td>identityHashCode</td>
                 * <td><code>java.lang.Integer</code></td>
                 * </tr>
                 * </table>
                 * </blockquote>
                 * @param compositeData
                 *             {#code CompositeData} representing a {@code LockInfo}
                 * @throws IllegalArgumentException
                 *              if {#code compositeData} does not represent a {@code LockInfo} with the
                 *              attributes described above.
                 * @return a {#code LockInfo} object represented by {@code compositeData} if {@code compositeData}
                 *          is not {@code null}; {@code null} otherwise.
                 * @since 1.8
                 */
                // @ts-ignore
                public static from(compositeData: javax.management.openmbean.CompositeData): java.lang.management.LockInfo
                /**
                 * Provides callers with a string value that represents the associated lock.
                 * The string will hold both the name of the lock object's class and it's
                 * identity hash code expressed as an unsigned hexadecimal. i.e.<br>
                 * <p>
                 * {@link #getClassName()} &nbsp;+&nbsp;&#64;&nbsp;+&nbsp;Integer.toHexString({@link #getIdentityHashCode()})
                 * </p>
                 * @return a string containing the key details of the lock
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
