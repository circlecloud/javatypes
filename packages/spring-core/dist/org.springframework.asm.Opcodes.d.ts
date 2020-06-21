declare namespace org {
    namespace springframework {
        namespace asm {
            /**
             * The JVM opcodes, access flags and array type codes. This interface does not define all the JVM
             * opcodes because some opcodes are automatically handled. For example, the xLOAD and xSTORE opcodes
             * are automatically replaced by xLOAD_n and xSTORE_n opcodes when possible. The xLOAD_n and
             * xSTORE_n opcodes are therefore not defined in this interface. Likewise for LDC, automatically
             * replaced by LDC_W or LDC2_W when necessary, WIDE, GOTO_W and JSR_W.
             * @see <a href="https://docs.oracle.com/javase/specs/jvms/se11/html/jvms-6.html">JVMS 6</a>
             * @author Eric Bruneton
             * @author Eugene Kuleshov
             */
            // @ts-ignore
            interface Opcodes {
                // @ts-ignore
                readonly ASM4: number /*int*/
                // @ts-ignore
                readonly ASM5: number /*int*/
                // @ts-ignore
                readonly ASM6: number /*int*/
                // @ts-ignore
                readonly ASM7: number /*int*/
                /**
                 * <i>Experimental, use at your own risk. This field will be renamed when it becomes stable, this
                 * will break existing code using it. Only code compiled with --enable-preview can use this.</i>
                 * @deprecated This API is experimental.
                 */
                // @ts-ignore
                readonly ASM8_EXPERIMENTAL: number /*int*/
                // @ts-ignore
                readonly SOURCE_DEPRECATED: number /*int*/
                // @ts-ignore
                readonly SOURCE_MASK: number /*int*/
                // @ts-ignore
                readonly V1_1: number /*int*/
                // @ts-ignore
                readonly V1_2: number /*int*/
                // @ts-ignore
                readonly V1_3: number /*int*/
                // @ts-ignore
                readonly V1_4: number /*int*/
                // @ts-ignore
                readonly V1_5: number /*int*/
                // @ts-ignore
                readonly V1_6: number /*int*/
                // @ts-ignore
                readonly V1_7: number /*int*/
                // @ts-ignore
                readonly V1_8: number /*int*/
                // @ts-ignore
                readonly V9: number /*int*/
                // @ts-ignore
                readonly V10: number /*int*/
                // @ts-ignore
                readonly V11: number /*int*/
                // @ts-ignore
                readonly V12: number /*int*/
                // @ts-ignore
                readonly V13: number /*int*/
                // @ts-ignore
                readonly V14: number /*int*/
                // @ts-ignore
                readonly V15: number /*int*/
                /**
                 * Version flag indicating that the class is using 'preview' features.
                 * <p>{@code version & V_PREVIEW == V_PREVIEW} tests if a version is flagged with {@code
                 * V_PREVIEW}.
                 */
                // @ts-ignore
                readonly V_PREVIEW: number /*int*/
                // @ts-ignore
                readonly ACC_PUBLIC: number /*int*/
                // @ts-ignore
                readonly ACC_PRIVATE: number /*int*/
                // @ts-ignore
                readonly ACC_PROTECTED: number /*int*/
                // @ts-ignore
                readonly ACC_STATIC: number /*int*/
                // @ts-ignore
                readonly ACC_FINAL: number /*int*/
                // @ts-ignore
                readonly ACC_SUPER: number /*int*/
                // @ts-ignore
                readonly ACC_SYNCHRONIZED: number /*int*/
                // @ts-ignore
                readonly ACC_OPEN: number /*int*/
                // @ts-ignore
                readonly ACC_TRANSITIVE: number /*int*/
                // @ts-ignore
                readonly ACC_VOLATILE: number /*int*/
                // @ts-ignore
                readonly ACC_BRIDGE: number /*int*/
                // @ts-ignore
                readonly ACC_STATIC_PHASE: number /*int*/
                // @ts-ignore
                readonly ACC_VARARGS: number /*int*/
                // @ts-ignore
                readonly ACC_TRANSIENT: number /*int*/
                // @ts-ignore
                readonly ACC_NATIVE: number /*int*/
                // @ts-ignore
                readonly ACC_INTERFACE: number /*int*/
                // @ts-ignore
                readonly ACC_ABSTRACT: number /*int*/
                // @ts-ignore
                readonly ACC_STRICT: number /*int*/
                // @ts-ignore
                readonly ACC_SYNTHETIC: number /*int*/
                // @ts-ignore
                readonly ACC_ANNOTATION: number /*int*/
                // @ts-ignore
                readonly ACC_ENUM: number /*int*/
                // @ts-ignore
                readonly ACC_MANDATED: number /*int*/
                // @ts-ignore
                readonly ACC_MODULE: number /*int*/
                // @ts-ignore
                readonly ACC_DEPRECATED: number /*int*/
                // @ts-ignore
                readonly T_BOOLEAN: number /*int*/
                // @ts-ignore
                readonly T_CHAR: number /*int*/
                // @ts-ignore
                readonly T_FLOAT: number /*int*/
                // @ts-ignore
                readonly T_DOUBLE: number /*int*/
                // @ts-ignore
                readonly T_BYTE: number /*int*/
                // @ts-ignore
                readonly T_SHORT: number /*int*/
                // @ts-ignore
                readonly T_INT: number /*int*/
                // @ts-ignore
                readonly T_LONG: number /*int*/
                // @ts-ignore
                readonly H_GETFIELD: number /*int*/
                // @ts-ignore
                readonly H_GETSTATIC: number /*int*/
                // @ts-ignore
                readonly H_PUTFIELD: number /*int*/
                // @ts-ignore
                readonly H_PUTSTATIC: number /*int*/
                // @ts-ignore
                readonly H_INVOKEVIRTUAL: number /*int*/
                // @ts-ignore
                readonly H_INVOKESTATIC: number /*int*/
                // @ts-ignore
                readonly H_INVOKESPECIAL: number /*int*/
                // @ts-ignore
                readonly H_NEWINVOKESPECIAL: number /*int*/
                // @ts-ignore
                readonly H_INVOKEINTERFACE: number /*int*/
                /**
                 * An expanded frame. See {@link ClassReader#EXPAND_FRAMES}.
                 */
                // @ts-ignore
                readonly F_NEW: number /*int*/
                /**
                 * A compressed frame with complete frame data.
                 */
                // @ts-ignore
                readonly F_FULL: number /*int*/
                /**
                 * A compressed frame where locals are the same as the locals in the previous frame, except that
                 * additional 1-3 locals are defined, and with an empty stack.
                 */
                // @ts-ignore
                readonly F_APPEND: number /*int*/
                /**
                 * A compressed frame where locals are the same as the locals in the previous frame, except that
                 * the last 1-3 locals are absent and with an empty stack.
                 */
                // @ts-ignore
                readonly F_CHOP: number /*int*/
                /**
                 * A compressed frame with exactly the same locals as the previous frame and with an empty stack.
                 */
                // @ts-ignore
                readonly F_SAME: number /*int*/
                /**
                 * A compressed frame with exactly the same locals as the previous frame and with a single value
                 * on the stack.
                 */
                // @ts-ignore
                readonly F_SAME1: number /*int*/
                // @ts-ignore
                readonly TOP: java.lang.Integer | number
                // @ts-ignore
                readonly INTEGER: java.lang.Integer | number
                // @ts-ignore
                readonly FLOAT: java.lang.Integer | number
                // @ts-ignore
                readonly DOUBLE: java.lang.Integer | number
                // @ts-ignore
                readonly LONG: java.lang.Integer | number
                // @ts-ignore
                readonly NULL: java.lang.Integer | number
                // @ts-ignore
                readonly UNINITIALIZED_THIS: java.lang.Integer | number
                // @ts-ignore
                readonly NOP: number /*int*/
                // @ts-ignore
                readonly ACONST_NULL: number /*int*/
                // @ts-ignore
                readonly ICONST_M1: number /*int*/
                // @ts-ignore
                readonly ICONST_0: number /*int*/
                // @ts-ignore
                readonly ICONST_1: number /*int*/
                // @ts-ignore
                readonly ICONST_2: number /*int*/
                // @ts-ignore
                readonly ICONST_3: number /*int*/
                // @ts-ignore
                readonly ICONST_4: number /*int*/
                // @ts-ignore
                readonly ICONST_5: number /*int*/
                // @ts-ignore
                readonly LCONST_0: number /*int*/
                // @ts-ignore
                readonly LCONST_1: number /*int*/
                // @ts-ignore
                readonly FCONST_0: number /*int*/
                // @ts-ignore
                readonly FCONST_1: number /*int*/
                // @ts-ignore
                readonly FCONST_2: number /*int*/
                // @ts-ignore
                readonly DCONST_0: number /*int*/
                // @ts-ignore
                readonly DCONST_1: number /*int*/
                // @ts-ignore
                readonly BIPUSH: number /*int*/
                // @ts-ignore
                readonly SIPUSH: number /*int*/
                // @ts-ignore
                readonly LDC: number /*int*/
                // @ts-ignore
                readonly ILOAD: number /*int*/
                // @ts-ignore
                readonly LLOAD: number /*int*/
                // @ts-ignore
                readonly FLOAD: number /*int*/
                // @ts-ignore
                readonly DLOAD: number /*int*/
                // @ts-ignore
                readonly ALOAD: number /*int*/
                // @ts-ignore
                readonly IALOAD: number /*int*/
                // @ts-ignore
                readonly LALOAD: number /*int*/
                // @ts-ignore
                readonly FALOAD: number /*int*/
                // @ts-ignore
                readonly DALOAD: number /*int*/
                // @ts-ignore
                readonly AALOAD: number /*int*/
                // @ts-ignore
                readonly BALOAD: number /*int*/
                // @ts-ignore
                readonly CALOAD: number /*int*/
                // @ts-ignore
                readonly SALOAD: number /*int*/
                // @ts-ignore
                readonly ISTORE: number /*int*/
                // @ts-ignore
                readonly LSTORE: number /*int*/
                // @ts-ignore
                readonly FSTORE: number /*int*/
                // @ts-ignore
                readonly DSTORE: number /*int*/
                // @ts-ignore
                readonly ASTORE: number /*int*/
                // @ts-ignore
                readonly IASTORE: number /*int*/
                // @ts-ignore
                readonly LASTORE: number /*int*/
                // @ts-ignore
                readonly FASTORE: number /*int*/
                // @ts-ignore
                readonly DASTORE: number /*int*/
                // @ts-ignore
                readonly AASTORE: number /*int*/
                // @ts-ignore
                readonly BASTORE: number /*int*/
                // @ts-ignore
                readonly CASTORE: number /*int*/
                // @ts-ignore
                readonly SASTORE: number /*int*/
                // @ts-ignore
                readonly POP: number /*int*/
                // @ts-ignore
                readonly POP2: number /*int*/
                // @ts-ignore
                readonly DUP: number /*int*/
                // @ts-ignore
                readonly DUP_X1: number /*int*/
                // @ts-ignore
                readonly DUP_X2: number /*int*/
                // @ts-ignore
                readonly DUP2: number /*int*/
                // @ts-ignore
                readonly DUP2_X1: number /*int*/
                // @ts-ignore
                readonly DUP2_X2: number /*int*/
                // @ts-ignore
                readonly SWAP: number /*int*/
                // @ts-ignore
                readonly IADD: number /*int*/
                // @ts-ignore
                readonly LADD: number /*int*/
                // @ts-ignore
                readonly FADD: number /*int*/
                // @ts-ignore
                readonly DADD: number /*int*/
                // @ts-ignore
                readonly ISUB: number /*int*/
                // @ts-ignore
                readonly LSUB: number /*int*/
                // @ts-ignore
                readonly FSUB: number /*int*/
                // @ts-ignore
                readonly DSUB: number /*int*/
                // @ts-ignore
                readonly IMUL: number /*int*/
                // @ts-ignore
                readonly LMUL: number /*int*/
                // @ts-ignore
                readonly FMUL: number /*int*/
                // @ts-ignore
                readonly DMUL: number /*int*/
                // @ts-ignore
                readonly IDIV: number /*int*/
                // @ts-ignore
                readonly LDIV: number /*int*/
                // @ts-ignore
                readonly FDIV: number /*int*/
                // @ts-ignore
                readonly DDIV: number /*int*/
                // @ts-ignore
                readonly IREM: number /*int*/
                // @ts-ignore
                readonly LREM: number /*int*/
                // @ts-ignore
                readonly FREM: number /*int*/
                // @ts-ignore
                readonly DREM: number /*int*/
                // @ts-ignore
                readonly INEG: number /*int*/
                // @ts-ignore
                readonly LNEG: number /*int*/
                // @ts-ignore
                readonly FNEG: number /*int*/
                // @ts-ignore
                readonly DNEG: number /*int*/
                // @ts-ignore
                readonly ISHL: number /*int*/
                // @ts-ignore
                readonly LSHL: number /*int*/
                // @ts-ignore
                readonly ISHR: number /*int*/
                // @ts-ignore
                readonly LSHR: number /*int*/
                // @ts-ignore
                readonly IUSHR: number /*int*/
                // @ts-ignore
                readonly LUSHR: number /*int*/
                // @ts-ignore
                readonly IAND: number /*int*/
                // @ts-ignore
                readonly LAND: number /*int*/
                // @ts-ignore
                readonly IOR: number /*int*/
                // @ts-ignore
                readonly LOR: number /*int*/
                // @ts-ignore
                readonly IXOR: number /*int*/
                // @ts-ignore
                readonly LXOR: number /*int*/
                // @ts-ignore
                readonly IINC: number /*int*/
                // @ts-ignore
                readonly I2L: number /*int*/
                // @ts-ignore
                readonly I2F: number /*int*/
                // @ts-ignore
                readonly I2D: number /*int*/
                // @ts-ignore
                readonly L2I: number /*int*/
                // @ts-ignore
                readonly L2F: number /*int*/
                // @ts-ignore
                readonly L2D: number /*int*/
                // @ts-ignore
                readonly F2I: number /*int*/
                // @ts-ignore
                readonly F2L: number /*int*/
                // @ts-ignore
                readonly F2D: number /*int*/
                // @ts-ignore
                readonly D2I: number /*int*/
                // @ts-ignore
                readonly D2L: number /*int*/
                // @ts-ignore
                readonly D2F: number /*int*/
                // @ts-ignore
                readonly I2B: number /*int*/
                // @ts-ignore
                readonly I2C: number /*int*/
                // @ts-ignore
                readonly I2S: number /*int*/
                // @ts-ignore
                readonly LCMP: number /*int*/
                // @ts-ignore
                readonly FCMPL: number /*int*/
                // @ts-ignore
                readonly FCMPG: number /*int*/
                // @ts-ignore
                readonly DCMPL: number /*int*/
                // @ts-ignore
                readonly DCMPG: number /*int*/
                // @ts-ignore
                readonly IFEQ: number /*int*/
                // @ts-ignore
                readonly IFNE: number /*int*/
                // @ts-ignore
                readonly IFLT: number /*int*/
                // @ts-ignore
                readonly IFGE: number /*int*/
                // @ts-ignore
                readonly IFGT: number /*int*/
                // @ts-ignore
                readonly IFLE: number /*int*/
                // @ts-ignore
                readonly IF_ICMPEQ: number /*int*/
                // @ts-ignore
                readonly IF_ICMPNE: number /*int*/
                // @ts-ignore
                readonly IF_ICMPLT: number /*int*/
                // @ts-ignore
                readonly IF_ICMPGE: number /*int*/
                // @ts-ignore
                readonly IF_ICMPGT: number /*int*/
                // @ts-ignore
                readonly IF_ICMPLE: number /*int*/
                // @ts-ignore
                readonly IF_ACMPEQ: number /*int*/
                // @ts-ignore
                readonly IF_ACMPNE: number /*int*/
                // @ts-ignore
                readonly GOTO: number /*int*/
                // @ts-ignore
                readonly JSR: number /*int*/
                // @ts-ignore
                readonly RET: number /*int*/
                // @ts-ignore
                readonly TABLESWITCH: number /*int*/
                // @ts-ignore
                readonly LOOKUPSWITCH: number /*int*/
                // @ts-ignore
                readonly IRETURN: number /*int*/
                // @ts-ignore
                readonly LRETURN: number /*int*/
                // @ts-ignore
                readonly FRETURN: number /*int*/
                // @ts-ignore
                readonly DRETURN: number /*int*/
                // @ts-ignore
                readonly ARETURN: number /*int*/
                // @ts-ignore
                readonly RETURN: number /*int*/
                // @ts-ignore
                readonly GETSTATIC: number /*int*/
                // @ts-ignore
                readonly PUTSTATIC: number /*int*/
                // @ts-ignore
                readonly GETFIELD: number /*int*/
                // @ts-ignore
                readonly PUTFIELD: number /*int*/
                // @ts-ignore
                readonly INVOKEVIRTUAL: number /*int*/
                // @ts-ignore
                readonly INVOKESPECIAL: number /*int*/
                // @ts-ignore
                readonly INVOKESTATIC: number /*int*/
                // @ts-ignore
                readonly INVOKEINTERFACE: number /*int*/
                // @ts-ignore
                readonly INVOKEDYNAMIC: number /*int*/
                // @ts-ignore
                readonly NEW: number /*int*/
                // @ts-ignore
                readonly NEWARRAY: number /*int*/
                // @ts-ignore
                readonly ANEWARRAY: number /*int*/
                // @ts-ignore
                readonly ARRAYLENGTH: number /*int*/
                // @ts-ignore
                readonly ATHROW: number /*int*/
                // @ts-ignore
                readonly CHECKCAST: number /*int*/
                // @ts-ignore
                readonly INSTANCEOF: number /*int*/
                // @ts-ignore
                readonly MONITORENTER: number /*int*/
                // @ts-ignore
                readonly MONITOREXIT: number /*int*/
                // @ts-ignore
                readonly MULTIANEWARRAY: number /*int*/
                // @ts-ignore
                readonly IFNULL: number /*int*/
                // @ts-ignore
                readonly IFNONNULL: number /*int*/
            }
        }
    }
}
