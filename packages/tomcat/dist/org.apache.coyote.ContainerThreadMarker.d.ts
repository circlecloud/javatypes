declare namespace org {
    namespace apache {
        namespace coyote {
            /**
             * Used to mark threads that have been allocated by the container to process
             * data from an incoming connection. Application created threads are not
             * container threads and neither are threads taken from the container thread
             * pool to execute AsyncContext.start(Runnable).
             */
            // @ts-ignore
            class ContainerThreadMarker extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static isContainerThread(): boolean
                // @ts-ignore
                public static set(): void
                // @ts-ignore
                public static clear(): void
            }
        }
    }
}
