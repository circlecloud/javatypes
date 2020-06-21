declare namespace org {
    namespace springframework {
        namespace cglib {
            namespace core {
                /**
                 * CGLIB GeneratorStrategy variant which exposes the application ClassLoader
                 * as current thread context ClassLoader for the time of class generation.
                 * The ASM ClassWriter in Spring's ASM variant will pick it up when doing
                 * common superclass resolution.
                 * @author Juergen Hoeller
                 * @since 5.2
                 */
                // @ts-ignore
                class ClassLoaderAwareGeneratorStrategy extends DefaultGeneratorStrategy {
                    // @ts-ignore
                    constructor(classLoader: java.lang.ClassLoader)
                    // @ts-ignore
                    public generate(cg: ClassGenerator): number /*byte*/[]
                }
            }
        }
    }
}
