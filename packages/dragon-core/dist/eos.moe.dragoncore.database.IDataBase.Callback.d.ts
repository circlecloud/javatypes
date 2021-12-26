declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace database {
                namespace IDataBase {
                    // @ts-ignore
                    interface Callback<T> {
                        // @ts-ignore
                        onResult(p0: T): void
                        // @ts-ignore
                        onFail(): void
                    }
                }
            }
        }
    }
}
