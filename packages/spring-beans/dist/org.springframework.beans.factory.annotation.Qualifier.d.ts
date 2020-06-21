declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace annotation {
                    /**
                     * This annotation may be used on a field or parameter as a qualifier for
                     * candidate beans when autowiring. It may also be used to annotate other
                     * custom annotations that can then in turn be used as qualifiers.
                     * @author Mark Fisher
                     * @author Juergen Hoeller
                     * @since 2.5
                     * @see Autowired
                     */
                    // @ts-ignore
                    abstract class Qualifier implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
