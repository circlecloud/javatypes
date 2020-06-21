declare namespace org {
    namespace springframework {
        namespace asm {
            /**
             * A visitor to visit a Java method. The methods of this class must be called in the following
             * order: ( {@code visitParameter} )* [ {@code visitAnnotationDefault} ] ( {@code visitAnnotation} |
             * {@code visitAnnotableParameterCount} | {@code visitParameterAnnotation} {@code
             * visitTypeAnnotation} | {@code visitAttribute} )* [ {@code visitCode} ( {@code visitFrame} |
             * {@code visit<i>X</i>Insn} | {@code visitLabel} | {@code visitInsnAnnotation} | {@code
             * visitTryCatchBlock} | {@code visitTryCatchAnnotation} | {@code visitLocalVariable} | {@code
             * visitLocalVariableAnnotation} | {@code visitLineNumber} )* {@code visitMaxs} ] {@code visitEnd}.
             * In addition, the {@code visit<i>X</i>Insn} and {@code visitLabel} methods must be called in the
             * sequential order of the bytecode instructions of the visited code, {@code visitInsnAnnotation}
             * must be called <i>after</i> the annotated instruction, {@code visitTryCatchBlock} must be called
             * <i>before</i> the labels passed as arguments have been visited, {@code
             * visitTryCatchBlockAnnotation} must be called <i>after</i> the corresponding try catch block has
             * been visited, and the {@code visitLocalVariable}, {@code visitLocalVariableAnnotation} and {@code
             * visitLineNumber} methods must be called <i>after</i> the labels passed as arguments have been
             * visited.
             * @author Eric Bruneton
             */
            // @ts-ignore
            abstract class MethodVisitor extends java.lang.Object {
                /**
                 * Constructs a new {@link MethodVisitor}.
                 * @param api the ASM API version implemented by this visitor. Must be one of {#link
                 *      Opcodes#ASM4}, {@link Opcodes#ASM5}, {@link Opcodes#ASM6} or {@link Opcodes#ASM7}.
                 */
                // @ts-ignore
                constructor(api: number /*int*/)
                /**
                 * Constructs a new {@link MethodVisitor}.
                 * @param api the ASM API version implemented by this visitor. Must be one of {#link
                 *      Opcodes#ASM4}, {@link Opcodes#ASM5}, {@link Opcodes#ASM6} or {@link Opcodes#ASM7}.
                 * @param methodVisitor the method visitor to which this visitor must delegate method calls. May
                 *      be null.
                 */
                // @ts-ignore
                constructor(api: number /*int*/, methodVisitor: org.springframework.asm.MethodVisitor)
                /**
                 * The ASM API version implemented by this visitor. The value of this field must be one of {@link
                 * Opcodes#ASM4}, {@link Opcodes#ASM5}, {@link Opcodes#ASM6} or {@link Opcodes#ASM7}.
                 */
                // @ts-ignore
                readonly api: number /*int*/
                /**
                 * The method visitor to which this visitor must delegate method calls. May be {@literal null}.
                 */
                // @ts-ignore
                mv: org.springframework.asm.MethodVisitor
                /**
                 * Visits a parameter of this method.
                 * @param name parameter name or {#literal null} if none is provided.
                 * @param access the parameter's access flags, only {#code ACC_FINAL}, {@code ACC_SYNTHETIC}
                 *      or/and {@code ACC_MANDATED} are allowed (see {@link Opcodes}).
                 */
                // @ts-ignore
                public visitParameter(name: java.lang.String | string, access: number /*int*/): void
                /**
                 * Visits the default value of this annotation interface method.
                 * @return a visitor to the visit the actual default value of this annotation interface method, or
                 *      {#literal null} if this visitor is not interested in visiting this default value. The
                 *      'name' parameters passed to the methods of this annotation visitor are ignored. Moreover,
                 *      exacly one visit method must be called on this annotation visitor, followed by visitEnd.
                 */
                // @ts-ignore
                public visitAnnotationDefault(): org.springframework.asm.AnnotationVisitor
                /**
                 * Visits an annotation of this method.
                 * @param descriptor the class descriptor of the annotation class.
                 * @param visible {#literal true} if the annotation is visible at runtime.
                 * @return a visitor to visit the annotation values, or {#literal null} if this visitor is not
                 *      interested in visiting this annotation.
                 */
                // @ts-ignore
                public visitAnnotation(descriptor: java.lang.String | string, visible: boolean): org.springframework.asm.AnnotationVisitor
                /**
                 * Visits an annotation on a type in the method signature.
                 * @param typeRef a reference to the annotated type. The sort of this type reference must be
                 *      {#link TypeReference#METHOD_TYPE_PARAMETER}, {@link
                 *      TypeReference#METHOD_TYPE_PARAMETER_BOUND}, {@link TypeReference#METHOD_RETURN}, {@link
                 *      TypeReference#METHOD_RECEIVER}, {@link TypeReference#METHOD_FORMAL_PARAMETER} or {@link
                 *      TypeReference#THROWS}. See {@link TypeReference}.
                 * @param typePath the path to the annotated type argument, wildcard bound, array element type, or
                 *      static inner type within 'typeRef'. May be {#literal null} if the annotation targets
                 *      'typeRef' as a whole.
                 * @param descriptor the class descriptor of the annotation class.
                 * @param visible {#literal true} if the annotation is visible at runtime.
                 * @return a visitor to visit the annotation values, or {#literal null} if this visitor is not
                 *      interested in visiting this annotation.
                 */
                // @ts-ignore
                public visitTypeAnnotation(typeRef: number /*int*/, typePath: org.springframework.asm.TypePath, descriptor: java.lang.String | string, visible: boolean): org.springframework.asm.AnnotationVisitor
                /**
                 * Visits the number of method parameters that can have annotations. By default (i.e. when this
                 * method is not called), all the method parameters defined by the method descriptor can have
                 * annotations.
                 * @param parameterCount the number of method parameters than can have annotations. This number
                 *      must be less or equal than the number of parameter types in the method descriptor. It can
                 *      be strictly less when a method has synthetic parameters and when these parameters are
                 *      ignored when computing parameter indices for the purpose of parameter annotations (see
                 *      https://docs.oracle.com/javase/specs/jvms/se9/html/jvms-4.html#jvms-4.7.18).
                 * @param visible {#literal true} to define the number of method parameters that can have
                 *      annotations visible at runtime, {@literal false} to define the number of method parameters
                 *      that can have annotations invisible at runtime.
                 */
                // @ts-ignore
                public visitAnnotableParameterCount(parameterCount: number /*int*/, visible: boolean): void
                /**
                 * Visits an annotation of a parameter this method.
                 * @param parameter the parameter index. This index must be strictly smaller than the number of
                 *      parameters in the method descriptor, and strictly smaller than the parameter count
                 *      specified in {#link #visitAnnotableParameterCount}. Important note: <i>a parameter index i
                 *      is not required to correspond to the i'th parameter descriptor in the method
                 *      descriptor</i>, in particular in case of synthetic parameters (see
                 *      https://docs.oracle.com/javase/specs/jvms/se9/html/jvms-4.html#jvms-4.7.18).
                 * @param descriptor the class descriptor of the annotation class.
                 * @param visible {#literal true} if the annotation is visible at runtime.
                 * @return a visitor to visit the annotation values, or {#literal null} if this visitor is not
                 *      interested in visiting this annotation.
                 */
                // @ts-ignore
                public visitParameterAnnotation(parameter: number /*int*/, descriptor: java.lang.String | string, visible: boolean): org.springframework.asm.AnnotationVisitor
                /**
                 * Visits a non standard attribute of this method.
                 * @param attribute an attribute.
                 */
                // @ts-ignore
                public visitAttribute(attribute: org.springframework.asm.Attribute): void
                /**
                 * Starts the visit of the method's code, if any (i.e. non abstract method).
                 */
                // @ts-ignore
                public visitCode(): void
                /**
                 * Visits the current state of the local variables and operand stack elements. This method must(*)
                 * be called <i>just before</i> any instruction <b>i</b> that follows an unconditional branch
                 * instruction such as GOTO or THROW, that is the target of a jump instruction, or that starts an
                 * exception handler block. The visited types must describe the values of the local variables and
                 * of the operand stack elements <i>just before</i> <b>i</b> is executed.<br>
                 * <br>
                 * (*) this is mandatory only for classes whose version is greater than or equal to {@link
                 * Opcodes#V1_6}. <br>
                 * <br>
                 * The frames of a method must be given either in expanded form, or in compressed form (all frames
                 * must use the same format, i.e. you must not mix expanded and compressed frames within a single
                 * method):
                 * <ul>
                 * <li>In expanded form, all frames must have the F_NEW type.
                 * <li>In compressed form, frames are basically "deltas" from the state of the previous frame:
                 * <ul>
                 * <li>{@link Opcodes#F_SAME} representing frame with exactly the same locals as the
                 * previous frame and with the empty stack.
                 * <li>{@link Opcodes#F_SAME1} representing frame with exactly the same locals as the
                 * previous frame and with single value on the stack ( <code>numStack</code> is 1 and
                 * <code>stack[0]</code> contains value for the type of the stack item).
                 * <li>{@link Opcodes#F_APPEND} representing frame with current locals are the same as the
                 * locals in the previous frame, except that additional locals are defined (<code>
                 * numLocal</code> is 1, 2 or 3 and <code>local</code> elements contains values
                 * representing added types).
                 * <li>{@link Opcodes#F_CHOP} representing frame with current locals are the same as the
                 * locals in the previous frame, except that the last 1-3 locals are absent and with
                 * the empty stack (<code>numLocal</code> is 1, 2 or 3).
                 * <li>{@link Opcodes#F_FULL} representing complete frame data.
                 * </ul>
                 * </ul>
                 * <br>
                 * In both cases the first frame, corresponding to the method's parameters and access flags, is
                 * implicit and must not be visited. Also, it is illegal to visit two or more frames for the same
                 * code location (i.e., at least one instruction must be visited between two calls to visitFrame).
                 * @param type the type of this stack map frame. Must be {#link Opcodes#F_NEW} for expanded
                 *      frames, or {@link Opcodes#F_FULL}, {@link Opcodes#F_APPEND}, {@link Opcodes#F_CHOP}, {@link
                 *      Opcodes#F_SAME} or {@link Opcodes#F_APPEND}, {@link Opcodes#F_SAME1} for compressed frames.
                 * @param numLocal the number of local variables in the visited frame.
                 * @param local the local variable types in this frame. This array must not be modified. Primitive
                 *      types are represented by {#link Opcodes#TOP}, {@link Opcodes#INTEGER}, {@link
                 *      Opcodes#FLOAT}, {@link Opcodes#LONG}, {@link Opcodes#DOUBLE}, {@link Opcodes#NULL} or
                 *      {@link Opcodes#UNINITIALIZED_THIS} (long and double are represented by a single element).
                 *      Reference types are represented by String objects (representing internal names), and
                 *      uninitialized types by Label objects (this label designates the NEW instruction that
                 *      created this uninitialized value).
                 * @param numStack the number of operand stack elements in the visited frame.
                 * @param stack the operand stack types in this frame. This array must not be modified. Its
                 *      content has the same format as the "local" array.
                 * @throws IllegalStateException if a frame is visited just after another one, without any
                 *      instruction between the two (unless this frame is a Opcodes#F_SAME frame, in which case it
                 *      is silently ignored).
                 */
                // @ts-ignore
                public visitFrame(type: number /*int*/, numLocal: number /*int*/, local: java.lang.Object[] | any[], numStack: number /*int*/, stack: java.lang.Object[] | any[]): void
                /**
                 * Visits a zero operand instruction.
                 * @param opcode the opcode of the instruction to be visited. This opcode is either NOP,
                 *      ACONST_NULL, ICONST_M1, ICONST_0, ICONST_1, ICONST_2, ICONST_3, ICONST_4, ICONST_5,
                 *      LCONST_0, LCONST_1, FCONST_0, FCONST_1, FCONST_2, DCONST_0, DCONST_1, IALOAD, LALOAD,
                 *      FALOAD, DALOAD, AALOAD, BALOAD, CALOAD, SALOAD, IASTORE, LASTORE, FASTORE, DASTORE,
                 *      AASTORE, BASTORE, CASTORE, SASTORE, POP, POP2, DUP, DUP_X1, DUP_X2, DUP2, DUP2_X1, DUP2_X2,
                 *      SWAP, IADD, LADD, FADD, DADD, ISUB, LSUB, FSUB, DSUB, IMUL, LMUL, FMUL, DMUL, IDIV, LDIV,
                 *      FDIV, DDIV, IREM, LREM, FREM, DREM, INEG, LNEG, FNEG, DNEG, ISHL, LSHL, ISHR, LSHR, IUSHR,
                 *      LUSHR, IAND, LAND, IOR, LOR, IXOR, LXOR, I2L, I2F, I2D, L2I, L2F, L2D, F2I, F2L, F2D, D2I,
                 *      D2L, D2F, I2B, I2C, I2S, LCMP, FCMPL, FCMPG, DCMPL, DCMPG, IRETURN, LRETURN, FRETURN,
                 *      DRETURN, ARETURN, RETURN, ARRAYLENGTH, ATHROW, MONITORENTER, or MONITOREXIT.
                 */
                // @ts-ignore
                public visitInsn(opcode: number /*int*/): void
                /**
                 * Visits an instruction with a single int operand.
                 * @param opcode the opcode of the instruction to be visited. This opcode is either BIPUSH, SIPUSH
                 *      or NEWARRAY.
                 * @param operand the operand of the instruction to be visited.<br>
                 *      When opcode is BIPUSH, operand value should be between Byte.MIN_VALUE and Byte.MAX_VALUE.
                 *      <br>
                 *      When opcode is SIPUSH, operand value should be between Short.MIN_VALUE and Short.MAX_VALUE.
                 *      <br>
                 *      When opcode is NEWARRAY, operand value should be one of {#link Opcodes#T_BOOLEAN}, {@link
                 *      Opcodes#T_CHAR}, {@link Opcodes#T_FLOAT}, {@link Opcodes#T_DOUBLE}, {@link Opcodes#T_BYTE},
                 *      {@link Opcodes#T_SHORT}, {@link Opcodes#T_INT} or {@link Opcodes#T_LONG}.
                 */
                // @ts-ignore
                public visitIntInsn(opcode: number /*int*/, operand: number /*int*/): void
                /**
                 * Visits a local variable instruction. A local variable instruction is an instruction that loads
                 * or stores the value of a local variable.
                 * @param opcode the opcode of the local variable instruction to be visited. This opcode is either
                 *      ILOAD, LLOAD, FLOAD, DLOAD, ALOAD, ISTORE, LSTORE, FSTORE, DSTORE, ASTORE or RET.
                 * @param var the operand of the instruction to be visited. This operand is the index of a local
                 *      variable.
                 */
                // @ts-ignore
                public visitVarInsn(opcode: number /*int*/, variable: number /*int*/): void
                /**
                 * Visits a type instruction. A type instruction is an instruction that takes the internal name of
                 * a class as parameter.
                 * @param opcode the opcode of the type instruction to be visited. This opcode is either NEW,
                 *      ANEWARRAY, CHECKCAST or INSTANCEOF.
                 * @param type the operand of the instruction to be visited. This operand must be the internal
                 *      name of an object or array class (see {#link Type#getInternalName()}).
                 */
                // @ts-ignore
                public visitTypeInsn(opcode: number /*int*/, type: java.lang.String | string): void
                /**
                 * Visits a field instruction. A field instruction is an instruction that loads or stores the
                 * value of a field of an object.
                 * @param opcode the opcode of the type instruction to be visited. This opcode is either
                 *      GETSTATIC, PUTSTATIC, GETFIELD or PUTFIELD.
                 * @param owner the internal name of the field's owner class (see {#link Type#getInternalName()}).
                 * @param name the field's name.
                 * @param descriptor the field's descriptor (see {#link Type}).
                 */
                // @ts-ignore
                public visitFieldInsn(opcode: number /*int*/, owner: java.lang.String | string, name: java.lang.String | string, descriptor: java.lang.String | string): void
                /**
                 * Visits a method instruction. A method instruction is an instruction that invokes a method.
                 * @param opcode the opcode of the type instruction to be visited. This opcode is either
                 *      INVOKEVIRTUAL, INVOKESPECIAL, INVOKESTATIC or INVOKEINTERFACE.
                 * @param owner the internal name of the method's owner class (see {#link
                 *      Type#getInternalName()}).
                 * @param name the method's name.
                 * @param descriptor the method's descriptor (see {#link Type}).
                 * @deprecated use {#link #visitMethodInsn(int, String, String, String, boolean)} instead.
                 */
                // @ts-ignore
                public visitMethodInsn(opcode: number /*int*/, owner: java.lang.String | string, name: java.lang.String | string, descriptor: java.lang.String | string): void
                /**
                 * Visits a method instruction. A method instruction is an instruction that invokes a method.
                 * @param opcode the opcode of the type instruction to be visited. This opcode is either
                 *      INVOKEVIRTUAL, INVOKESPECIAL, INVOKESTATIC or INVOKEINTERFACE.
                 * @param owner the internal name of the method's owner class (see {#link
                 *      Type#getInternalName()}).
                 * @param name the method's name.
                 * @param descriptor the method's descriptor (see {#link Type}).
                 * @param isInterface if the method's owner class is an interface.
                 */
                // @ts-ignore
                public visitMethodInsn(opcode: number /*int*/, owner: java.lang.String | string, name: java.lang.String | string, descriptor: java.lang.String | string, isInterface: boolean): void
                /**
                 * Visits an invokedynamic instruction.
                 * @param name the method's name.
                 * @param descriptor the method's descriptor (see {#link Type}).
                 * @param bootstrapMethodHandle the bootstrap method.
                 * @param bootstrapMethodArguments the bootstrap method constant arguments. Each argument must be
                 *      an {#link Integer}, {@link Float}, {@link Long}, {@link Double}, {@link String}, {@link
                 *      Type}, {@link Handle} or {@link ConstantDynamic} value. This method is allowed to modify
                 *      the content of the array so a caller should expect that this array may change.
                 */
                // @ts-ignore
                public visitInvokeDynamicInsn(name: java.lang.String | string, descriptor: java.lang.String | string, bootstrapMethodHandle: org.springframework.asm.Handle, ...bootstrapMethodArguments: java.lang.Object[] | any[]): void
                /**
                 * Visits a jump instruction. A jump instruction is an instruction that may jump to another
                 * instruction.
                 * @param opcode the opcode of the type instruction to be visited. This opcode is either IFEQ,
                 *      IFNE, IFLT, IFGE, IFGT, IFLE, IF_ICMPEQ, IF_ICMPNE, IF_ICMPLT, IF_ICMPGE, IF_ICMPGT,
                 *      IF_ICMPLE, IF_ACMPEQ, IF_ACMPNE, GOTO, JSR, IFNULL or IFNONNULL.
                 * @param label the operand of the instruction to be visited. This operand is a label that
                 *      designates the instruction to which the jump instruction may jump.
                 */
                // @ts-ignore
                public visitJumpInsn(opcode: number /*int*/, label: org.springframework.asm.Label): void
                /**
                 * Visits a label. A label designates the instruction that will be visited just after it.
                 * @param label a {#link Label} object.
                 */
                // @ts-ignore
                public visitLabel(label: org.springframework.asm.Label): void
                /**
                 * Visits a LDC instruction. Note that new constant types may be added in future versions of the
                 * Java Virtual Machine. To easily detect new constant types, implementations of this method
                 * should check for unexpected constant types, like this:
                 * <pre>
                 * if (cst instanceof Integer) {
                 * // ...
                 * } else if (cst instanceof Float) {
                 * // ...
                 * } else if (cst instanceof Long) {
                 * // ...
                 * } else if (cst instanceof Double) {
                 * // ...
                 * } else if (cst instanceof String) {
                 * // ...
                 * } else if (cst instanceof Type) {
                 * int sort = ((Type) cst).getSort();
                 * if (sort == Type.OBJECT) {
                 * // ...
                 * } else if (sort == Type.ARRAY) {
                 * // ...
                 * } else if (sort == Type.METHOD) {
                 * // ...
                 * } else {
                 * // throw an exception
                 * }
                 * } else if (cst instanceof Handle) {
                 * // ...
                 * } else if (cst instanceof ConstantDynamic) {
                 * // ...
                 * } else {
                 * // throw an exception
                 * }
                 * </pre>
                 * @param value the constant to be loaded on the stack. This parameter must be a non null {#link
                 *      Integer}, a {@link Float}, a {@link Long}, a {@link Double}, a {@link String}, a {@link
                 *      Type} of OBJECT or ARRAY sort for {@code .class} constants, for classes whose version is
                 *      49, a {@link Type} of METHOD sort for MethodType, a {@link Handle} for MethodHandle
                 *      constants, for classes whose version is 51 or a {@link ConstantDynamic} for a constant
                 *      dynamic for classes whose version is 55.
                 */
                // @ts-ignore
                public visitLdcInsn(value: java.lang.Object | any): void
                /**
                 * Visits an IINC instruction.
                 * @param var index of the local variable to be incremented.
                 * @param increment amount to increment the local variable by.
                 */
                // @ts-ignore
                public visitIincInsn(variable: number /*int*/, increment: number /*int*/): void
                /**
                 * Visits a TABLESWITCH instruction.
                 * @param min the minimum key value.
                 * @param max the maximum key value.
                 * @param dflt beginning of the default handler block.
                 * @param labels beginnings of the handler blocks. {#code labels[i]} is the beginning of the
                 *      handler block for the {@code min + i} key.
                 */
                // @ts-ignore
                public visitTableSwitchInsn(min: number /*int*/, max: number /*int*/, dflt: org.springframework.asm.Label, ...labels: org.springframework.asm.Label[]): void
                /**
                 * Visits a LOOKUPSWITCH instruction.
                 * @param dflt beginning of the default handler block.
                 * @param keys the values of the keys.
                 * @param labels beginnings of the handler blocks. {#code labels[i]} is the beginning of the
                 *      handler block for the {@code keys[i]} key.
                 */
                // @ts-ignore
                public visitLookupSwitchInsn(dflt: org.springframework.asm.Label, keys: number /*int*/[], labels: org.springframework.asm.Label[]): void
                /**
                 * Visits a MULTIANEWARRAY instruction.
                 * @param descriptor an array type descriptor (see {#link Type}).
                 * @param numDimensions the number of dimensions of the array to allocate.
                 */
                // @ts-ignore
                public visitMultiANewArrayInsn(descriptor: java.lang.String | string, numDimensions: number /*int*/): void
                /**
                 * Visits an annotation on an instruction. This method must be called just <i>after</i> the
                 * annotated instruction. It can be called several times for the same instruction.
                 * @param typeRef a reference to the annotated type. The sort of this type reference must be
                 *      {#link TypeReference#INSTANCEOF}, {@link TypeReference#NEW}, {@link
                 *      TypeReference#CONSTRUCTOR_REFERENCE}, {@link TypeReference#METHOD_REFERENCE}, {@link
                 *      TypeReference#CAST}, {@link TypeReference#CONSTRUCTOR_INVOCATION_TYPE_ARGUMENT}, {@link
                 *      TypeReference#METHOD_INVOCATION_TYPE_ARGUMENT}, {@link
                 *      TypeReference#CONSTRUCTOR_REFERENCE_TYPE_ARGUMENT}, or {@link
                 *      TypeReference#METHOD_REFERENCE_TYPE_ARGUMENT}. See {@link TypeReference}.
                 * @param typePath the path to the annotated type argument, wildcard bound, array element type, or
                 *      static inner type within 'typeRef'. May be {#literal null} if the annotation targets
                 *      'typeRef' as a whole.
                 * @param descriptor the class descriptor of the annotation class.
                 * @param visible {#literal true} if the annotation is visible at runtime.
                 * @return a visitor to visit the annotation values, or {#literal null} if this visitor is not
                 *      interested in visiting this annotation.
                 */
                // @ts-ignore
                public visitInsnAnnotation(typeRef: number /*int*/, typePath: org.springframework.asm.TypePath, descriptor: java.lang.String | string, visible: boolean): org.springframework.asm.AnnotationVisitor
                /**
                 * Visits a try catch block.
                 * @param start the beginning of the exception handler's scope (inclusive).
                 * @param end the end of the exception handler's scope (exclusive).
                 * @param handler the beginning of the exception handler's code.
                 * @param type the internal name of the type of exceptions handled by the handler, or {#literal
                 *      null} to catch any exceptions (for "finally" blocks).
                 * @throws IllegalArgumentException if one of the labels has already been visited by this visitor
                 *      (by the {#link #visitLabel} method).
                 */
                // @ts-ignore
                public visitTryCatchBlock(start: org.springframework.asm.Label, end: org.springframework.asm.Label, handler: org.springframework.asm.Label, type: java.lang.String | string): void
                /**
                 * Visits an annotation on an exception handler type. This method must be called <i>after</i> the
                 * {@link #visitTryCatchBlock} for the annotated exception handler. It can be called several times
                 * for the same exception handler.
                 * @param typeRef a reference to the annotated type. The sort of this type reference must be
                 *      {#link TypeReference#EXCEPTION_PARAMETER}. See {@link TypeReference}.
                 * @param typePath the path to the annotated type argument, wildcard bound, array element type, or
                 *      static inner type within 'typeRef'. May be {#literal null} if the annotation targets
                 *      'typeRef' as a whole.
                 * @param descriptor the class descriptor of the annotation class.
                 * @param visible {#literal true} if the annotation is visible at runtime.
                 * @return a visitor to visit the annotation values, or {#literal null} if this visitor is not
                 *      interested in visiting this annotation.
                 */
                // @ts-ignore
                public visitTryCatchAnnotation(typeRef: number /*int*/, typePath: org.springframework.asm.TypePath, descriptor: java.lang.String | string, visible: boolean): org.springframework.asm.AnnotationVisitor
                /**
                 * Visits a local variable declaration.
                 * @param name the name of a local variable.
                 * @param descriptor the type descriptor of this local variable.
                 * @param signature the type signature of this local variable. May be {#literal null} if the local
                 *      variable type does not use generic types.
                 * @param start the first instruction corresponding to the scope of this local variable
                 *      (inclusive).
                 * @param end the last instruction corresponding to the scope of this local variable (exclusive).
                 * @param index the local variable's index.
                 * @throws IllegalArgumentException if one of the labels has not already been visited by this
                 *      visitor (by the {#link #visitLabel} method).
                 */
                // @ts-ignore
                public visitLocalVariable(name: java.lang.String | string, descriptor: java.lang.String | string, signature: java.lang.String | string, start: org.springframework.asm.Label, end: org.springframework.asm.Label, index: number /*int*/): void
                /**
                 * Visits an annotation on a local variable type.
                 * @param typeRef a reference to the annotated type. The sort of this type reference must be
                 *      {#link TypeReference#LOCAL_VARIABLE} or {@link TypeReference#RESOURCE_VARIABLE}. See {@link
                 *      TypeReference}.
                 * @param typePath the path to the annotated type argument, wildcard bound, array element type, or
                 *      static inner type within 'typeRef'. May be {#literal null} if the annotation targets
                 *      'typeRef' as a whole.
                 * @param start the fist instructions corresponding to the continuous ranges that make the scope
                 *      of this local variable (inclusive).
                 * @param end the last instructions corresponding to the continuous ranges that make the scope of
                 *      this local variable (exclusive). This array must have the same size as the 'start' array.
                 * @param index the local variable's index in each range. This array must have the same size as
                 *      the 'start' array.
                 * @param descriptor the class descriptor of the annotation class.
                 * @param visible {#literal true} if the annotation is visible at runtime.
                 * @return a visitor to visit the annotation values, or {#literal null} if this visitor is not
                 *      interested in visiting this annotation.
                 */
                // @ts-ignore
                public visitLocalVariableAnnotation(typeRef: number /*int*/, typePath: org.springframework.asm.TypePath, start: org.springframework.asm.Label[], end: org.springframework.asm.Label[], index: number /*int*/[], descriptor: java.lang.String | string, visible: boolean): org.springframework.asm.AnnotationVisitor
                /**
                 * Visits a line number declaration.
                 * @param line a line number. This number refers to the source file from which the class was
                 *      compiled.
                 * @param start the first instruction corresponding to this line number.
                 * @throws IllegalArgumentException if {#code start} has not already been visited by this visitor
                 *      (by the {@link #visitLabel} method).
                 */
                // @ts-ignore
                public visitLineNumber(line: number /*int*/, start: org.springframework.asm.Label): void
                /**
                 * Visits the maximum stack size and the maximum number of local variables of the method.
                 * @param maxStack maximum stack size of the method.
                 * @param maxLocals maximum number of local variables for the method.
                 */
                // @ts-ignore
                public visitMaxs(maxStack: number /*int*/, maxLocals: number /*int*/): void
                /**
                 * Visits the end of the method. This method, which is the last one to be called, is used to
                 * inform the visitor that all the annotations and attributes of the method have been visited.
                 */
                // @ts-ignore
                public visitEnd(): void
            }
        }
    }
}
