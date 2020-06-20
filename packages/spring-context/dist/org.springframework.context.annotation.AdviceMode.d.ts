declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Enumeration used to determine whether JDK proxy-based or
                 * AspectJ weaving-based advice should be applied.
                 * @author Chris Beams
                 * @since 3.1
                 * @see org.springframework.scheduling.annotation.EnableAsync#mode()
                 * @see org.springframework.scheduling.annotation.AsyncConfigurationSelector#selectImports
                 * @see org.springframework.transaction.annotation.EnableTransactionManagement#mode()
                 */
                // @ts-ignore
                class AdviceMode extends java.lang.Enum<org.springframework.context.annotation.AdviceMode> {
                    // @ts-ignore
                    values(): org.springframework.context.annotation.AdviceMode[]
                    // @ts-ignore
                    valueOf(name: string): org.springframework.context.annotation.AdviceMode
                }
            }
        }
    }
}