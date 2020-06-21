declare namespace com {
    namespace rabbitmq {
        namespace utility {
            // @ts-ignore
            class BlockingValueOrException<V, E extends java.lang.Throwable & com.rabbitmq.utility.SensibleClone<E>> extends com.rabbitmq.utility.BlockingCell<com.rabbitmq.utility.ValueOrException<V, E>> {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public setValue(v: V): void
                // @ts-ignore
                public setException(e: E): void
                // @ts-ignore
                public uninterruptibleGetValue(): V
                // @ts-ignore
                public uninterruptibleGetValue(timeout: number /*int*/): V
            }
        }
    }
}
