declare namespace org {
    namespace springframework {
        namespace asm {
            /**
             * Utility class exposing constants related to Spring's internal repackaging
             * of the ASM bytecode library: currently based on ASM 7.x plus minor patches.
             * <p>See <a href="package-summary.html">package-level javadocs</a> for more
             * information on {@code org.springframework.asm}.
             * @author Chris Beams
             * @author Juergen Hoeller
             * @since 3.2
             */
            // @ts-ignore
            class SpringAsmInfo extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * The ASM compatibility version for Spring's ASM visitor implementations:
                 * currently {@link Opcodes#ASM8_EXPERIMENTAL}, as of Spring Framework 5.2.5.
                 */
                // @ts-ignore
                readonly ASM_VERSION: number /*int*/
            }
        }
    }
}
