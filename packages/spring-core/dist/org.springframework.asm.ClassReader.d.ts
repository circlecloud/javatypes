declare namespace org {
    namespace springframework {
        namespace asm {
            /**
             * A parser to make a {@link ClassVisitor} visit a ClassFile structure, as defined in the Java
             * Virtual Machine Specification (JVMS). This class parses the ClassFile content and calls the
             * appropriate visit methods of a given {@link ClassVisitor} for each field, method and bytecode
             * instruction encountered.
             * @see <a href="https://docs.oracle.com/javase/specs/jvms/se9/html/jvms-4.html">JVMS 4</a>
             * @author Eric Bruneton
             * @author Eugene Kuleshov
             */
            // @ts-ignore
            class ClassReader extends java.lang.Object {
                /**
                 * Constructs a new {@link ClassReader} object.
                 * @param classFile the JVMS ClassFile structure to be read.
                 */
                // @ts-ignore
                constructor(classFile: number /*byte*/[])
                /**
                 * Constructs a new {@link ClassReader} object.
                 * @param classFileBuffer a byte array containing the JVMS ClassFile structure to be read.
                 * @param classFileOffset the offset in byteBuffer of the first byte of the ClassFile to be read.
                 * @param classFileLength the length in bytes of the ClassFile to be read.
                 */
                // @ts-ignore
                constructor(classFileBuffer: number /*byte*/[], classFileOffset: number /*int*/, classFileLength: number /*int*/)
                /**
                 * Constructs a new {@link ClassReader} object.
                 * @param inputStream an input stream of the JVMS ClassFile structure to be read. This input
                 *      stream must contain nothing more than the ClassFile structure itself. It is read from its
                 *      current position to its end.
                 * @throws IOException if a problem occurs during reading.
                 */
                // @ts-ignore
                constructor(inputStream: java.io.InputStream)
                /**
                 * Constructs a new {@link ClassReader} object.
                 * @param className the fully qualified name of the class to be read. The ClassFile structure is
                 *      retrieved with the current class loader's {#link ClassLoader#getSystemResourceAsStream}.
                 * @throws IOException if an exception occurs during reading.
                 */
                // @ts-ignore
                constructor(className: string)
                /**
                 * A flag to skip the Code attributes. If this flag is set the Code attributes are neither parsed
                 * nor visited.
                 */
                // @ts-ignore
                readonly SKIP_CODE: number /*int*/
                /**
                 * A flag to skip the SourceFile, SourceDebugExtension, LocalVariableTable,
                 * LocalVariableTypeTable, LineNumberTable and MethodParameters attributes. If this flag is set
                 * these attributes are neither parsed nor visited (i.e. {@link ClassVisitor#visitSource}, {@link
                 * MethodVisitor#visitLocalVariable}, {@link MethodVisitor#visitLineNumber} and {@link
                 * MethodVisitor#visitParameter} are not called).
                 */
                // @ts-ignore
                readonly SKIP_DEBUG: number /*int*/
                /**
                 * A flag to skip the StackMap and StackMapTable attributes. If this flag is set these attributes
                 * are neither parsed nor visited (i.e. {@link MethodVisitor#visitFrame} is not called). This flag
                 * is useful when the {@link ClassWriter#COMPUTE_FRAMES} option is used: it avoids visiting frames
                 * that will be ignored and recomputed from scratch.
                 */
                // @ts-ignore
                readonly SKIP_FRAMES: number /*int*/
                /**
                 * A flag to expand the stack map frames. By default stack map frames are visited in their
                 * original format (i.e. "expanded" for classes whose version is less than V1_6, and "compressed"
                 * for the other classes). If this flag is set, stack map frames are always visited in expanded
                 * format (this option adds a decompression/compression step in ClassReader and ClassWriter which
                 * degrades performance quite a lot).
                 */
                // @ts-ignore
                readonly EXPAND_FRAMES: number /*int*/
                /**
                 * A byte array containing the JVMS ClassFile structure to be parsed.
                 * @deprecated Use {#link #readByte(int)} and the other read methods instead. This field will
                 *      eventually be deleted.
                 */
                // @ts-ignore
                readonly b: number /*byte*/[]
                /**
                 * The offset in bytes of the ClassFile's access_flags field.
                 */
                // @ts-ignore
                readonly header: number /*int*/
                /**
                 * Returns the class's access flags (see {@link Opcodes}). This value may not reflect Deprecated
                 * and Synthetic flags when bytecode is before 1.5 and those flags are represented by attributes.
                 * @return the class access flags.
                 * @see ClassVisitor#visit(int, int, String, String, String, String[])
                 */
                // @ts-ignore
                getAccess(): int
                /**
                 * Returns the internal name of the class (see {@link Type#getInternalName()}).
                 * @return the internal class name.
                 * @see ClassVisitor#visit(int, int, String, String, String, String[])
                 */
                // @ts-ignore
                getClassName(): java.lang.String
                /**
                 * Returns the internal of name of the super class (see {@link Type#getInternalName()}). For
                 * interfaces, the super class is {@link Object}.
                 * @return the internal name of the super class, or {#literal null} for {@link Object} class.
                 * @see ClassVisitor#visit(int, int, String, String, String, String[])
                 */
                // @ts-ignore
                getSuperName(): java.lang.String
                /**
                 * Returns the internal names of the implemented interfaces (see {@link Type#getInternalName()}).
                 * @return the internal names of the directly implemented interfaces. Inherited implemented
                 *      interfaces are not returned.
                 * @see ClassVisitor#visit(int, int, String, String, String, String[])
                 */
                // @ts-ignore
                getInterfaces(): java.lang.String[]
                /**
                 * Makes the given visitor visit the JVMS ClassFile structure passed to the constructor of this
                 * {@link ClassReader}.
                 * @param classVisitor the visitor that must visit this class.
                 * @param parsingOptions the options to use to parse this class. One or more of {#link
                 *      #SKIP_CODE}, {@link #SKIP_DEBUG}, {@link #SKIP_FRAMES} or {@link #EXPAND_FRAMES}.
                 */
                // @ts-ignore
                accept(classVisitor: org.springframework.asm.ClassVisitor, parsingOptions: number /*int*/): void
                /**
                 * Makes the given visitor visit the JVMS ClassFile structure passed to the constructor of this
                 * {@link ClassReader}.
                 * @param classVisitor the visitor that must visit this class.
                 * @param attributePrototypes prototypes of the attributes that must be parsed during the visit of
                 *      the class. Any attribute whose type is not equal to the type of one the prototypes will not
                 *      be parsed: its byte array value will be passed unchanged to the ClassWriter. <i>This may
                 *      corrupt it if this value contains references to the constant pool, or has syntactic or
                 *      semantic links with a class element that has been transformed by a class adapter between
                 *      the reader and the writer</i>.
                 * @param parsingOptions the options to use to parse this class. One or more of {#link
                 *      #SKIP_CODE}, {@link #SKIP_DEBUG}, {@link #SKIP_FRAMES} or {@link #EXPAND_FRAMES}.
                 */
                // @ts-ignore
                accept(classVisitor: org.springframework.asm.ClassVisitor, attributePrototypes: org.springframework.asm.Attribute[], parsingOptions: number /*int*/): void
                /**
                 * Returns the label corresponding to the given bytecode offset. The default implementation of
                 * this method creates a label for the given offset if it has not been already created.
                 * @param bytecodeOffset a bytecode offset in a method.
                 * @param labels the already created labels, indexed by their offset. If a label already exists
                 *      for bytecodeOffset this method must not create a new one. Otherwise it must store the new
                 *      label in this array.
                 * @return a non null Label, which must be equal to labels[bytecodeOffset].
                 */
                // @ts-ignore
                readLabel(bytecodeOffset: number /*int*/, labels: org.springframework.asm.Label[]): org.springframework.asm.Label
                /**
                 * Returns the number of entries in the class's constant pool table.
                 * @return the number of entries in the class's constant pool table.
                 */
                // @ts-ignore
                getItemCount(): int
                /**
                 * Returns the start offset in this {@link ClassReader} of a JVMS 'cp_info' structure (i.e. a
                 * constant pool entry), plus one. <i>This method is intended for {@link Attribute} sub classes,
                 * and is normally not needed by class generators or adapters.</i>
                 * @param constantPoolEntryIndex the index a constant pool entry in the class's constant pool
                 *      table.
                 * @return the start offset in this {#link ClassReader} of the corresponding JVMS 'cp_info'
                 *      structure, plus one.
                 */
                // @ts-ignore
                getItem(constantPoolEntryIndex: number /*int*/): int
                /**
                 * Returns a conservative estimate of the maximum length of the strings contained in the class's
                 * constant pool table.
                 * @return a conservative estimate of the maximum length of the strings contained in the class's
                 *      constant pool table.
                 */
                // @ts-ignore
                getMaxStringLength(): int
                /**
                 * Reads a byte value in this {@link ClassReader}. <i>This method is intended for {@link
                 * Attribute} sub classes, and is normally not needed by class generators or adapters.</i>
                 * @param offset the start offset of the value to be read in this {#link ClassReader}.
                 * @return the read value.
                 */
                // @ts-ignore
                readByte(offset: number /*int*/): int
                /**
                 * Reads an unsigned short value in this {@link ClassReader}. <i>This method is intended for
                 * {@link Attribute} sub classes, and is normally not needed by class generators or adapters.</i>
                 * @param offset the start index of the value to be read in this {#link ClassReader}.
                 * @return the read value.
                 */
                // @ts-ignore
                readUnsignedShort(offset: number /*int*/): int
                /**
                 * Reads a signed short value in this {@link ClassReader}. <i>This method is intended for {@link
                 * Attribute} sub classes, and is normally not needed by class generators or adapters.</i>
                 * @param offset the start offset of the value to be read in this {#link ClassReader}.
                 * @return the read value.
                 */
                // @ts-ignore
                readShort(offset: number /*int*/): short
                /**
                 * Reads a signed int value in this {@link ClassReader}. <i>This method is intended for {@link
                 * Attribute} sub classes, and is normally not needed by class generators or adapters.</i>
                 * @param offset the start offset of the value to be read in this {#link ClassReader}.
                 * @return the read value.
                 */
                // @ts-ignore
                readInt(offset: number /*int*/): int
                /**
                 * Reads a signed long value in this {@link ClassReader}. <i>This method is intended for {@link
                 * Attribute} sub classes, and is normally not needed by class generators or adapters.</i>
                 * @param offset the start offset of the value to be read in this {#link ClassReader}.
                 * @return the read value.
                 */
                // @ts-ignore
                readLong(offset: number /*int*/): long
                /**
                 * Reads a CONSTANT_Utf8 constant pool entry in this {@link ClassReader}. <i>This method is
                 * intended for {@link Attribute} sub classes, and is normally not needed by class generators or
                 * adapters.</i>
                 * @param offset the start offset of an unsigned short value in this {#link ClassReader}, whose
                 *      value is the index of a CONSTANT_Utf8 entry in the class's constant pool table.
                 * @param charBuffer the buffer to be used to read the string. This buffer must be sufficiently
                 *      large. It is not automatically resized.
                 * @return the String corresponding to the specified CONSTANT_Utf8 entry.
                 */
                // @ts-ignore
                readUTF8(offset: number /*int*/, charBuffer: string[]): java.lang.String
                /**
                 * Reads a CONSTANT_Class constant pool entry in this {@link ClassReader}. <i>This method is
                 * intended for {@link Attribute} sub classes, and is normally not needed by class generators or
                 * adapters.</i>
                 * @param offset the start offset of an unsigned short value in this {#link ClassReader}, whose
                 *      value is the index of a CONSTANT_Class entry in class's constant pool table.
                 * @param charBuffer the buffer to be used to read the item. This buffer must be sufficiently
                 *      large. It is not automatically resized.
                 * @return the String corresponding to the specified CONSTANT_Class entry.
                 */
                // @ts-ignore
                readClass(offset: number /*int*/, charBuffer: string[]): java.lang.String
                /**
                 * Reads a CONSTANT_Module constant pool entry in this {@link ClassReader}. <i>This method is
                 * intended for {@link Attribute} sub classes, and is normally not needed by class generators or
                 * adapters.</i>
                 * @param offset the start offset of an unsigned short value in this {#link ClassReader}, whose
                 *      value is the index of a CONSTANT_Module entry in class's constant pool table.
                 * @param charBuffer the buffer to be used to read the item. This buffer must be sufficiently
                 *      large. It is not automatically resized.
                 * @return the String corresponding to the specified CONSTANT_Module entry.
                 */
                // @ts-ignore
                readModule(offset: number /*int*/, charBuffer: string[]): java.lang.String
                /**
                 * Reads a CONSTANT_Package constant pool entry in this {@link ClassReader}. <i>This method is
                 * intended for {@link Attribute} sub classes, and is normally not needed by class generators or
                 * adapters.</i>
                 * @param offset the start offset of an unsigned short value in this {#link ClassReader}, whose
                 *      value is the index of a CONSTANT_Package entry in class's constant pool table.
                 * @param charBuffer the buffer to be used to read the item. This buffer must be sufficiently
                 *      large. It is not automatically resized.
                 * @return the String corresponding to the specified CONSTANT_Package entry.
                 */
                // @ts-ignore
                readPackage(offset: number /*int*/, charBuffer: string[]): java.lang.String
                /**
                 * Reads a numeric or string constant pool entry in this {@link ClassReader}. <i>This method is
                 * intended for {@link Attribute} sub classes, and is normally not needed by class generators or
                 * adapters.</i>
                 * @param constantPoolEntryIndex the index of a CONSTANT_Integer, CONSTANT_Float, CONSTANT_Long,
                 *      CONSTANT_Double, CONSTANT_Class, CONSTANT_String, CONSTANT_MethodType,
                 *      CONSTANT_MethodHandle or CONSTANT_Dynamic entry in the class's constant pool.
                 * @param charBuffer the buffer to be used to read strings. This buffer must be sufficiently
                 *      large. It is not automatically resized.
                 * @return the {#link Integer}, {@link Float}, {@link Long}, {@link Double}, {@link String},
                 *      {@link Type}, {@link Handle} or {@link ConstantDynamic} corresponding to the specified
                 *      constant pool entry.
                 */
                // @ts-ignore
                readConst(constantPoolEntryIndex: number /*int*/, charBuffer: string[]): java.lang.Object
            }
        }
    }
}
