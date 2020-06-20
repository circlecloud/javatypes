declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace assembler {
                    /**
                     * Extends the {@code MBeanInfoAssembler} to add autodetection logic.
                     * Implementations of this interface are given the opportunity by the
                     * {@code MBeanExporter} to include additional beans in the registration process.
                     * <p>The exact mechanism for deciding which beans to include is left to
                     * implementing classes.
                     * @author Rob Harrop
                     * @since 1.2
                     * @see org.springframework.jmx.export.MBeanExporter
                     */
                    // @ts-ignore
                    interface AutodetectCapableMBeanInfoAssembler extends org.springframework.jmx.export.assembler.MBeanInfoAssembler {
                        /**
                         * Indicate whether a particular bean should be included in the registration
                         * process, if it is not specified in the {@code beans} map of the
                         * {@code MBeanExporter}.
                         * @param beanClass the class of the bean (might be a proxy class)
                         * @param beanName the name of the bean in the bean factory
                         */
                        // @ts-ignore
                        includeBean(beanClass: java.lang.Class<any>, beanName: string): boolean
                    }
                }
            }
        }
    }
}
