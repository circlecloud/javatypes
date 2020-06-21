declare namespace org {
    namespace springframework {
        namespace asm {
            /**
             * A non standard class, field, method or Code attribute, as defined in the Java Virtual Machine
             * Specification (JVMS).
             * @see <a href= "https://docs.oracle.com/javase/specs/jvms/se9/html/jvms-4.html#jvms-4.7">JVMS
             *      4.7</a>
             * @see <a href= "https://docs.oracle.com/javase/specs/jvms/se9/html/jvms-4.html#jvms-4.7.3">JVMS
             *      4.7.3</a>
             * @author Eric Bruneton
             * @author Eugene Kuleshov
             */
            // @ts-ignore
            class Attribute extends java.lang.Object {
                /**
                 * Constructs a new empty attribute.
                 * @param type the type of the attribute.
                 */
                // @ts-ignore
                constructor(type: java.lang.String | string)
                /**
                 * The type of this attribute, also called its name in the JVMS.
                 */
                // @ts-ignore
                public readonly type: java.lang.String | string
                /**
                 * Returns {@literal true} if this type of attribute is unknown. This means that the attribute
                 * content can't be parsed to extract constant pool references, labels, etc. Instead, the
                 * attribute content is read as an opaque byte array, and written back as is. This can lead to
                 * invalid attributes, if the content actually contains constant pool references, labels, or other
                 * symbolic references that need to be updated when there are changes to the constant pool, the
                 * method bytecode, etc. The default implementation of this method always returns {@literal true}.
                 * @return {#literal true} if this type of attribute is unknown.
                 */
                // @ts-ignore
                public isUnknown(): boolean
                /**
                 * Returns {@literal true} if this type of attribute is a Code attribute.
                 * @return {#literal true} if this type of attribute is a Code attribute.
                 */
                // @ts-ignore
                public isCodeAttribute(): boolean
                /**
                 * Returns the labels corresponding to this attribute.
                 * @return the labels corresponding to this attribute, or {#literal null} if this attribute is not
                 *      a Code attribute that contains labels.
                 */
                // @ts-ignore
                getLabels(): org.springframework.asm.Label[]
                /**
                 * Reads a {@link #type} attribute. This method must return a <i>new</i> {@link Attribute} object,
                 * of type {@link #type}, corresponding to the 'length' bytes starting at 'offset', in the given
                 * ClassReader.
                 * @param classReader the class that contains the attribute to be read.
                 * @param offset index of the first byte of the attribute's content in {#link ClassReader}. The 6
                 *      attribute header bytes (attribute_name_index and attribute_length) are not taken into
                 *      account here.
                 * @param length the length of the attribute's content (excluding the 6 attribute header bytes).
                 * @param charBuffer the buffer to be used to call the ClassReader methods requiring a
                 *      'charBuffer' parameter.
                 * @param codeAttributeOffset index of the first byte of content of the enclosing Code attribute
                 *      in {#link ClassReader}, or -1 if the attribute to be read is not a Code attribute. The 6
                 *      attribute header bytes (attribute_name_index and attribute_length) are not taken into
                 *      account here.
                 * @param labels the labels of the method's code, or {#literal null} if the attribute to be read
                 *      is not a Code attribute.
                 * @return a <i>new</i> {#link Attribute} object corresponding to the specified bytes.
                 */
                // @ts-ignore
                read(classReader: org.springframework.asm.ClassReader, offset: number /*int*/, length: number /*int*/, charBuffer: string[], codeAttributeOffset: number /*int*/, labels: org.springframework.asm.Label[]): org.springframework.asm.Attribute
                /**
                 * Returns the byte array form of the content of this attribute. The 6 header bytes
                 * (attribute_name_index and attribute_length) must <i>not</i> be added in the returned
                 * ByteVector.
                 * @param classWriter the class to which this attribute must be added. This parameter can be used
                 *      to add the items that corresponds to this attribute to the constant pool of this class.
                 * @param code the bytecode of the method corresponding to this Code attribute, or {#literal null}
                 *      if this attribute is not a Code attribute. Corresponds to the 'code' field of the Code
                 *      attribute.
                 * @param codeLength the length of the bytecode of the method corresponding to this code
                 *      attribute, or 0 if this attribute is not a Code attribute. Corresponds to the 'code_length'
                 *      field of the Code attribute.
                 * @param maxStack the maximum stack size of the method corresponding to this Code attribute, or
                 *      -1 if this attribute is not a Code attribute.
                 * @param maxLocals the maximum number of local variables of the method corresponding to this code
                 *      attribute, or -1 if this attribute is not a Code attribute.
                 * @return the byte array form of this attribute.
                 */
                // @ts-ignore
                write(classWriter: org.springframework.asm.ClassWriter, code: number /*byte*/[], codeLength: number /*int*/, maxStack: number /*int*/, maxLocals: number /*int*/): org.springframework.asm.ByteVector
            }
        }
    }
}
