declare namespace cn {
    namespace nukkit {
        namespace inventory {
            namespace transaction {
                namespace data {
                    /**
                     * @author CreeperFace
                     */
                    // @ts-ignore
                    class UseItemOnEntityData extends java.lang.Object implements cn.nukkit.inventory.transaction.data.TransactionData {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public entityRuntimeId: number /*long*/
                        // @ts-ignore
                        public actionType: number /*int*/
                        // @ts-ignore
                        public hotbarSlot: number /*int*/
                        // @ts-ignore
                        public itemInHand: cn.nukkit.item.Item
                        // @ts-ignore
                        public playerPos: cn.nukkit.math.Vector3
                        // @ts-ignore
                        public clickPos: cn.nukkit.math.Vector3
                    }
                }
            }
        }
    }
}
