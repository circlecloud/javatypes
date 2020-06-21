declare namespace org {
    namespace springframework {
        namespace asm {
            /**
             * A visitor to visit a Java module. The methods of this class must be called in the following
             * order: ( {@code visitMainClass} | ( {@code visitPackage} | {@code visitRequire} | {@code
             * visitExport} | {@code visitOpen} | {@code visitUse} | {@code visitProvide} )* ) {@code visitEnd}.
             * @author Remi Forax
             * @author Eric Bruneton
             */
            // @ts-ignore
            abstract class ModuleVisitor extends java.lang.Object {
                /**
                 * Constructs a new {@link ModuleVisitor}.
                 * @param api the ASM API version implemented by this visitor. Must be one of {#link Opcodes#ASM6}
                 *      or {@link Opcodes#ASM7}.
                 */
                // @ts-ignore
                constructor(api: number /*int*/)
                /**
                 * Constructs a new {@link ModuleVisitor}.
                 * @param api the ASM API version implemented by this visitor. Must be one of {#link Opcodes#ASM6}
                 *      or {@link Opcodes#ASM7}.
                 * @param moduleVisitor the module visitor to which this visitor must delegate method calls. May
                 *      be null.
                 */
                // @ts-ignore
                constructor(api: number /*int*/, moduleVisitor: org.springframework.asm.ModuleVisitor)
                /**
                 * The ASM API version implemented by this visitor. The value of this field must be one of {@link
                 * Opcodes#ASM6} or {@link Opcodes#ASM7}.
                 */
                // @ts-ignore
                readonly api: number /*int*/
                /**
                 * The module visitor to which this visitor must delegate method calls. May be {@literal null}.
                 */
                // @ts-ignore
                mv: org.springframework.asm.ModuleVisitor
                /**
                 * Visit the main class of the current module.
                 * @param mainClass the internal name of the main class of the current module.
                 */
                // @ts-ignore
                public visitMainClass(mainClass: java.lang.String | string): void
                /**
                 * Visit a package of the current module.
                 * @param packaze the internal name of a package.
                 */
                // @ts-ignore
                public visitPackage(packaze: java.lang.String | string): void
                /**
                 * Visits a dependence of the current module.
                 * @param module the fully qualified name (using dots) of the dependence.
                 * @param access the access flag of the dependence among {#code ACC_TRANSITIVE}, {@code
                 *      ACC_STATIC_PHASE}, {@code ACC_SYNTHETIC} and {@code ACC_MANDATED}.
                 * @param version the module version at compile time, or {#literal null}.
                 */
                // @ts-ignore
                public visitRequire(module: java.lang.String | string, access: number /*int*/, version: java.lang.String | string): void
                /**
                 * Visit an exported package of the current module.
                 * @param packaze the internal name of the exported package.
                 * @param access the access flag of the exported package, valid values are among {#code
                 *      ACC_SYNTHETIC} and {@code ACC_MANDATED}.
                 * @param modules the fully qualified names (using dots) of the modules that can access the public
                 *      classes of the exported package, or {#literal null}.
                 */
                // @ts-ignore
                public visitExport(packaze: java.lang.String | string, access: number /*int*/, ...modules: java.lang.String[] | string[]): void
                /**
                 * Visit an open package of the current module.
                 * @param packaze the internal name of the opened package.
                 * @param access the access flag of the opened package, valid values are among {#code
                 *      ACC_SYNTHETIC} and {@code ACC_MANDATED}.
                 * @param modules the fully qualified names (using dots) of the modules that can use deep
                 *      reflection to the classes of the open package, or {#literal null}.
                 */
                // @ts-ignore
                public visitOpen(packaze: java.lang.String | string, access: number /*int*/, ...modules: java.lang.String[] | string[]): void
                /**
                 * Visit a service used by the current module. The name must be the internal name of an interface
                 * or a class.
                 * @param service the internal name of the service.
                 */
                // @ts-ignore
                public visitUse(service: java.lang.String | string): void
                /**
                 * Visit an implementation of a service.
                 * @param service the internal name of the service.
                 * @param providers the internal names of the implementations of the service (there is at least
                 *      one provider).
                 */
                // @ts-ignore
                public visitProvide(service: java.lang.String | string, ...providers: java.lang.String[] | string[]): void
                /**
                 * Visits the end of the module. This method, which is the last one to be called, is used to
                 * inform the visitor that everything have been visited.
                 */
                // @ts-ignore
                public visitEnd(): void
            }
        }
    }
}
