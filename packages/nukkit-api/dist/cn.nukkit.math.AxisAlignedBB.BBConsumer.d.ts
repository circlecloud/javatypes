declare namespace cn {
    namespace nukkit {
        namespace math {
            namespace AxisAlignedBB {
                // @ts-ignore
                interface BBConsumer<T> {
                    // @ts-ignore
                    accept(x: number /*int*/, y: number /*int*/, z: number /*int*/): void
                    // @ts-ignore
                    get(): T
                }
            }
        }
    }
}
