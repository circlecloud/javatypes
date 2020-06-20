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
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                /**
                 * <i>Experimental, use at your own risk. This field will be renamed when it becomes stable, this
                 * will break existing code using it. Only code compiled with --enable-preview can use this.</i>
                 * @deprecated This API is experimental.
                 */
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                /**
                 * Version flag indicating that the class is using 'preview' features.
                 * <p>{@code version & V_PREVIEW == V_PREVIEW} tests if a version is flagged with {@code
                 * V_PREVIEW}.
                 */
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                /**
                 * An expanded frame. See {@link ClassReader#EXPAND_FRAMES}.
                 */
                // @ts-ignore
                
                /**
                 * A compressed frame with complete frame data.
                 */
                // @ts-ignore
                
                /**
                 * A compressed frame where locals are the same as the locals in the previous frame, except that
                 * additional 1-3 locals are defined, and with an empty stack.
                 */
                // @ts-ignore
                
                /**
                 * A compressed frame where locals are the same as the locals in the previous frame, except that
                 * the last 1-3 locals are absent and with an empty stack.
                 */
                // @ts-ignore
                
                /**
                 * A compressed frame with exactly the same locals as the previous frame and with an empty stack.
                 */
                // @ts-ignore
                
                /**
                 * A compressed frame with exactly the same locals as the previous frame and with a single value
                 * on the stack.
                 */
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
                // @ts-ignore
                
            }
        }
    }
}
