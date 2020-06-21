declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * Callback for establishing naming association when entering the application
             * scope. This corresponds to setting the context classloader.
             */
            // @ts-ignore
            interface ThreadBindingListener {
                // @ts-ignore
                bind(): void
                // @ts-ignore
                unbind(): void
            }
        }
    }
}
