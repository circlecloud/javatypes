declare namespace org {
    namespace apache {
        namespace juli {
            namespace ClassLoaderLogManager {
                /**
                 * This class is needed to instantiate the root of each per classloader
                 * hierarchy.
                 */
                // @ts-ignore
                class RootLogger extends java.util.logging.Logger {
                    // @ts-ignore
                    constructor()
                }
            }
        }
    }
}
