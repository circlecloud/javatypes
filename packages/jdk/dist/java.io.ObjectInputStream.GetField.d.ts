declare namespace java {
    namespace io {
        namespace ObjectInputStream {
            /**
             * Provide access to the persistent fields read from the input stream.
             */
            // @ts-ignore
            abstract class GetField extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Get the ObjectStreamClass that describes the fields in the stream.
                 * @return the descriptor class that describes the serializable fields
                 */
                // @ts-ignore
                public abstract getObjectStreamClass(): java.io.ObjectStreamClass
                /**
                 * Return true if the named field is defaulted and has no value in this
                 * stream.
                 * @param name the name of the field
                 * @return true, if and only if the named field is defaulted
                 * @throws IOException if there are I/O errors while reading from
                 *          the underlying <code>InputStream</code>
                 * @throws IllegalArgumentException if <code>name</code> does not
                 *          correspond to a serializable field
                 */
                // @ts-ignore
                public abstract defaulted(name: java.lang.String | string): boolean
                /**
                 * Get the value of the named boolean field from the persistent field.
                 * @param name the name of the field
                 * @param val the default value to use if <code>name</code> does not
                 *          have a value
                 * @return the value of the named <code>boolean</code> field
                 * @throws IOException if there are I/O errors while reading from the
                 *          underlying <code>InputStream</code>
                 * @throws IllegalArgumentException if type of <code>name</code> is
                 *          not serializable or if the field type is incorrect
                 */
                // @ts-ignore
                public abstract get(name: java.lang.String | string, val: boolean): boolean
                /**
                 * Get the value of the named byte field from the persistent field.
                 * @param name the name of the field
                 * @param val the default value to use if <code>name</code> does not
                 *          have a value
                 * @return the value of the named <code>byte</code> field
                 * @throws IOException if there are I/O errors while reading from the
                 *          underlying <code>InputStream</code>
                 * @throws IllegalArgumentException if type of <code>name</code> is
                 *          not serializable or if the field type is incorrect
                 */
                // @ts-ignore
                public abstract get(name: java.lang.String | string, val: number /*byte*/): number /*byte*/
                /**
                 * Get the value of the named char field from the persistent field.
                 * @param name the name of the field
                 * @param val the default value to use if <code>name</code> does not
                 *          have a value
                 * @return the value of the named <code>char</code> field
                 * @throws IOException if there are I/O errors while reading from the
                 *          underlying <code>InputStream</code>
                 * @throws IllegalArgumentException if type of <code>name</code> is
                 *          not serializable or if the field type is incorrect
                 */
                // @ts-ignore
                public abstract get(name: java.lang.String | string, val: string): string
                /**
                 * Get the value of the named short field from the persistent field.
                 * @param name the name of the field
                 * @param val the default value to use if <code>name</code> does not
                 *          have a value
                 * @return the value of the named <code>short</code> field
                 * @throws IOException if there are I/O errors while reading from the
                 *          underlying <code>InputStream</code>
                 * @throws IllegalArgumentException if type of <code>name</code> is
                 *          not serializable or if the field type is incorrect
                 */
                // @ts-ignore
                public abstract get(name: java.lang.String | string, val: number /*short*/): number /*short*/
                /**
                 * Get the value of the named int field from the persistent field.
                 * @param name the name of the field
                 * @param val the default value to use if <code>name</code> does not
                 *          have a value
                 * @return the value of the named <code>int</code> field
                 * @throws IOException if there are I/O errors while reading from the
                 *          underlying <code>InputStream</code>
                 * @throws IllegalArgumentException if type of <code>name</code> is
                 *          not serializable or if the field type is incorrect
                 */
                // @ts-ignore
                public abstract get(name: java.lang.String | string, val: number /*int*/): number /*int*/
                /**
                 * Get the value of the named long field from the persistent field.
                 * @param name the name of the field
                 * @param val the default value to use if <code>name</code> does not
                 *          have a value
                 * @return the value of the named <code>long</code> field
                 * @throws IOException if there are I/O errors while reading from the
                 *          underlying <code>InputStream</code>
                 * @throws IllegalArgumentException if type of <code>name</code> is
                 *          not serializable or if the field type is incorrect
                 */
                // @ts-ignore
                public abstract get(name: java.lang.String | string, val: number /*long*/): number /*long*/
                /**
                 * Get the value of the named float field from the persistent field.
                 * @param name the name of the field
                 * @param val the default value to use if <code>name</code> does not
                 *          have a value
                 * @return the value of the named <code>float</code> field
                 * @throws IOException if there are I/O errors while reading from the
                 *          underlying <code>InputStream</code>
                 * @throws IllegalArgumentException if type of <code>name</code> is
                 *          not serializable or if the field type is incorrect
                 */
                // @ts-ignore
                public abstract get(name: java.lang.String | string, val: number /*float*/): number /*float*/
                /**
                 * Get the value of the named double field from the persistent field.
                 * @param name the name of the field
                 * @param val the default value to use if <code>name</code> does not
                 *          have a value
                 * @return the value of the named <code>double</code> field
                 * @throws IOException if there are I/O errors while reading from the
                 *          underlying <code>InputStream</code>
                 * @throws IllegalArgumentException if type of <code>name</code> is
                 *          not serializable or if the field type is incorrect
                 */
                // @ts-ignore
                public abstract get(name: java.lang.String | string, val: number /*double*/): number /*double*/
                /**
                 * Get the value of the named Object field from the persistent field.
                 * @param name the name of the field
                 * @param val the default value to use if <code>name</code> does not
                 *          have a value
                 * @return the value of the named <code>Object</code> field
                 * @throws IOException if there are I/O errors while reading from the
                 *          underlying <code>InputStream</code>
                 * @throws IllegalArgumentException if type of <code>name</code> is
                 *          not serializable or if the field type is incorrect
                 */
                // @ts-ignore
                public abstract get(name: java.lang.String | string, val: java.lang.Object | any): any
            }
        }
    }
}
