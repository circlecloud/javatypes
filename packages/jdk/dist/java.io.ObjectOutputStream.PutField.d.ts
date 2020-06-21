declare namespace java {
    namespace io {
        namespace ObjectOutputStream {
            /**
             * Provide programmatic access to the persistent fields to be written
             * to ObjectOutput.
             * @since 1.2
             */
            // @ts-ignore
            abstract class PutField extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Put the value of the named boolean field into the persistent field.
                 * @param name the name of the serializable field
                 * @param val the value to assign to the field
                 * @throws IllegalArgumentException if <code>name</code> does not
                 *  match the name of a serializable field for the class whose fields
                 *  are being written, or if the type of the named field is not
                 *  <code>boolean</code>
                 */
                // @ts-ignore
                public abstract put(name: java.lang.String | string, val: boolean): void
                /**
                 * Put the value of the named byte field into the persistent field.
                 * @param name the name of the serializable field
                 * @param val the value to assign to the field
                 * @throws IllegalArgumentException if <code>name</code> does not
                 *  match the name of a serializable field for the class whose fields
                 *  are being written, or if the type of the named field is not
                 *  <code>byte</code>
                 */
                // @ts-ignore
                public abstract put(name: java.lang.String | string, val: number /*byte*/): void
                /**
                 * Put the value of the named char field into the persistent field.
                 * @param name the name of the serializable field
                 * @param val the value to assign to the field
                 * @throws IllegalArgumentException if <code>name</code> does not
                 *  match the name of a serializable field for the class whose fields
                 *  are being written, or if the type of the named field is not
                 *  <code>char</code>
                 */
                // @ts-ignore
                public abstract put(name: java.lang.String | string, val: string): void
                /**
                 * Put the value of the named short field into the persistent field.
                 * @param name the name of the serializable field
                 * @param val the value to assign to the field
                 * @throws IllegalArgumentException if <code>name</code> does not
                 *  match the name of a serializable field for the class whose fields
                 *  are being written, or if the type of the named field is not
                 *  <code>short</code>
                 */
                // @ts-ignore
                public abstract put(name: java.lang.String | string, val: number /*short*/): void
                /**
                 * Put the value of the named int field into the persistent field.
                 * @param name the name of the serializable field
                 * @param val the value to assign to the field
                 * @throws IllegalArgumentException if <code>name</code> does not
                 *  match the name of a serializable field for the class whose fields
                 *  are being written, or if the type of the named field is not
                 *  <code>int</code>
                 */
                // @ts-ignore
                public abstract put(name: java.lang.String | string, val: number /*int*/): void
                /**
                 * Put the value of the named long field into the persistent field.
                 * @param name the name of the serializable field
                 * @param val the value to assign to the field
                 * @throws IllegalArgumentException if <code>name</code> does not
                 *  match the name of a serializable field for the class whose fields
                 *  are being written, or if the type of the named field is not
                 *  <code>long</code>
                 */
                // @ts-ignore
                public abstract put(name: java.lang.String | string, val: number /*long*/): void
                /**
                 * Put the value of the named float field into the persistent field.
                 * @param name the name of the serializable field
                 * @param val the value to assign to the field
                 * @throws IllegalArgumentException if <code>name</code> does not
                 *  match the name of a serializable field for the class whose fields
                 *  are being written, or if the type of the named field is not
                 *  <code>float</code>
                 */
                // @ts-ignore
                public abstract put(name: java.lang.String | string, val: number /*float*/): void
                /**
                 * Put the value of the named double field into the persistent field.
                 * @param name the name of the serializable field
                 * @param val the value to assign to the field
                 * @throws IllegalArgumentException if <code>name</code> does not
                 *  match the name of a serializable field for the class whose fields
                 *  are being written, or if the type of the named field is not
                 *  <code>double</code>
                 */
                // @ts-ignore
                public abstract put(name: java.lang.String | string, val: number /*double*/): void
                /**
                 * Put the value of the named Object field into the persistent field.
                 * @param name the name of the serializable field
                 * @param val the value to assign to the field
                 *          (which may be <code>null</code>)
                 * @throws IllegalArgumentException if <code>name</code> does not
                 *  match the name of a serializable field for the class whose fields
                 *  are being written, or if the type of the named field is not a
                 *  reference type
                 */
                // @ts-ignore
                public abstract put(name: java.lang.String | string, val: java.lang.Object | any): void
                /**
                 * Write the data and fields to the specified ObjectOutput stream,
                 * which must be the same stream that produced this
                 * <code>PutField</code> object.
                 * @param out the stream to write the data and fields to
                 * @throws IOException if I/O errors occur while writing to the
                 *          underlying stream
                 * @throws IllegalArgumentException if the specified stream is not
                 *          the same stream that produced this <code>PutField</code>
                 *          object
                 * @deprecated This method does not write the values contained by this
                 *          <code>PutField</code> object in a proper format, and may
                 *          result in corruption of the serialization stream.  The
                 *          correct way to write <code>PutField</code> data is by
                 *          calling the {#link java.io.ObjectOutputStream#writeFields()}
                 *          method.
                 */
                // @ts-ignore
                public abstract write(out: java.io.ObjectOutput): void
            }
        }
    }
}
